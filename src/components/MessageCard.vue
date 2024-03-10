<template>
  <v-container class="content">
    <v-row>
      <v-col xs="4" class="icon-area" align-self="center">
        <v-icon :color="cardParameters.mainColor" class="icon" size="x-large">
          {{ cardParameters.mainIcon }}</v-icon
        >
      </v-col>
      <v-col xs="4" class="cursor-pointer">
        <v-row class="mt-0" align="center">
          <v-icon
            :color="cardParameters.textBold ? '' : 'grey-darken-1'"
            size="sm"
            >mdi-clock-time-nine-outline</v-icon
          >
          <p
            :class="
              cardParameters.textBold
                ? 'ml-1 mr-2 text-subtitle-2 font-weight-bold'
                : 'ml-1 mr-2 text-subtitle-2 text-grey-darken-1'
            "
          >
            {{ message.Timestamp }}
          </p>

          <p
            :class="
              cardParameters.textBold
                ? 'text-subtitle-2 font-weight-bold'
                : 'text-subtitle-2 text-grey-darken-1'
            "
          >
            {{ message.Description }}
          </p>
        </v-row>
        <v-row class="mt-3 mb-0">
          <p
            :class="
              cardParameters.textBold
                ? 'text-body-2 font-weight-bold'
                : 'text-body-2 font-weight-regular text-grey-darken-2'
            "
          >
            {{ unitText }}
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-divider class="divider" :color="cardParameters.dividerColor"></v-divider>
</template>

<script lang="ts">
import { Message, State } from '../data/model';

interface parameters {
  mainIcon: string;
  mainColor: string;
  dividerColor: string;
  textBold: boolean;
}

export default {
  props: {
    message: {
      required: false,
      type: Object as () => Message,
      default: '',
    },
  },

  computed: {
    unitText() {
      return this.message.Tag + '-' + this.message.Name;
    },

    cardParameters(): parameters {
      let para = {
        mainIcon: 'mdi-help-circle-outline',
        mainColor: 'grey-darken-2',
        dividerColor: 'grey',
        textBold: false,
      };

      switch (this.message.Type) {
        case State.PreAlarm: {
          para.mainIcon = 'mdi-alert';
          para.mainColor = '#f69400';
          para.textBold = true;
          break;
        }
        case State.Alarm: {
          para.mainIcon = 'mdi-alert';
          para.mainColor = '#df1b1b';
          para.textBold = true;
          break;
        }
        case State.Fault: {
          para.mainIcon = 'mdi-alert-outline';
          para.mainColor = '#fad900';
          break;
        }
        default:
          break;
      }
      return para;
    },
  },
};
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
.border-left {
  border-left: 0px solid v-bind('cardParameters.dividerColor');
}
.icon-area {
  /* background-color: #eef7fc; */
  max-width: min-content;
  margin-right: 0.2rem;
}
.content {
  /* background-color: #eef7fc; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
}
.divider {
  /* background-color: pink; */
  margin-left: 3.5rem;
}
.btn-area {
  max-width: min-content;
  /* background-color: #9525b1; */
}
// for the flash animation of the card icon when it is in active alarm state
.icon {
  transition: opacity 0.5s;
}
.icon.is-flashing {
  opacity: 0.2;
}
</style>
