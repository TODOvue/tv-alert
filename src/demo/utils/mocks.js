import Info from './demos/info.vue?raw';
import Success from './demos/success.vue?raw';
import Warning from './demos/warning.vue?raw';
import Error from './demos/error.vue?raw';
import Multiple from './demos/multiple.vue?raw';
import TopLeft from './demos/top-left.vue?raw';
import BottomCenter from './demos/bottom-center.vue?raw';
import NoProgress from './demos/no-progress.vue?raw';
import NoClose from './demos/no-close.vue?raw';
import NoPause from './demos/no-pause.vue?raw';

export const demos = [
  {
    id: 1,
    title: "Info Alert",
    description: "Basic information alert",
    propsData: {
      buttonConfig: {
        variant: 'info',
        label: 'Show Info'
      },
      alertConfig: {
        message: 'Important information about the system',
        type: 'info',
        position: 'top-right',
        duration: 4000
      }
    },
    html: Info,
  },
  {
    id: 2,
    title: "Success Alert",
    description: "Success alert",
    propsData: {
      buttonConfig: {
        variant: 'success',
        label: 'Show Success'
      },
      alertConfig: {
        message: 'Operation completed successfully!',
        type: 'success',
        position: 'bottom-left',
        duration: 5000
      }
    },
    html: Success,
  },
  {
    id: 3,
    title: "Warning Alert",
    description: "Warning alert",
    propsData: {
      buttonConfig: {
        variant: 'warning',
        label: 'Show Warning'
      },
      alertConfig: {
        message: 'Warning: please verify the entered data',
        type: 'warning',
        position: 'top-center',
        duration: 6000
      }
    },
    html: Warning,
  },
  {
    id: 4,
    title: "Error Alert",
    description: "Error alert",
    propsData: {
      buttonConfig: {
        variant: 'error',
        label: 'Show Error'
      },
      alertConfig: {
        message: 'Error: the operation could not be completed',
        type: 'error',
        position: 'bottom-right',
        duration: 7000
      }
    },
    html: Error,
  },
  {
    id: 5,
    title: "Multiple Alerts",
    description: "Show multiple alerts in sequence",
    propsData: {
      buttonConfig: {
        variant: 'multiple',
        label: 'Show Multiple'
      },
      multipleAlerts: [
        {
          message: 'Processing request...',
          type: 'info',
          position: 'top-right',
          duration: 3000,
          delay: 0
        },
        {
          message: 'Data saved successfully',
          type: 'success',
          position: 'top-right',
          duration: 4000,
          delay: 500
        },
        {
          message: 'Consider reviewing the settings',
          type: 'warning',
          position: 'top-right',
          duration: 5000,
          delay: 1000
        }
      ]
    },
    html: Multiple,
  },
  {
    id: 6,
    title: "Top-Left Alert",
    description: "Alert positioned at the top left",
    propsData: {
      buttonConfig: {
        variant: 'info',
        label: 'Top Left'
      },
      alertConfig: {
        message: 'Alert in the top-left corner',
        type: 'info',
        position: 'top-left',
        duration: 4000
      }
    },
    html: TopLeft,
  },
  {
    id: 7,
    title: "Bottom-Center Alert",
    description: "Alert positioned at the bottom center",
    propsData: {
      buttonConfig: {
        variant: 'success',
        label: 'Bottom Center'
      },
      alertConfig: {
        message: 'Alert centered at the bottom',
        type: 'success',
        position: 'bottom-center',
        duration: 5000
      }
    },
    html: BottomCenter,
  },
  {
    id: 8,
    title: "No Progress Bar",
    description: "Alert without progress bar",
    propsData: {
      buttonConfig: {
        variant: 'warning',
        label: 'No Progress'
      },
      alertConfig: {
        message: 'This alert does not display a progress bar',
        type: 'warning',
        position: 'top-right',
        duration: 4000,
        showProgress: false
      }
    },
    html: NoProgress,
  },
  {
    id: 9,
    title: "No Close Button",
    description: "Alert without close button",
    propsData: {
      buttonConfig: {
        variant: 'error',
        label: 'No Close'
      },
      alertConfig: {
        message: 'This alert has no close button',
        type: 'error',
        position: 'top-right',
        duration: 4000,
        showClose: false
      }
    },
    html: NoClose,
  },
  {
    id: 10,
    title: "No Pause on Hover",
    description: "Alert that does not pause on hover",
    propsData: {
      buttonConfig: {
        variant: 'info',
        label: 'No Pause'
      },
      alertConfig: {
        message: 'This alert does not pause when hovered',
        type: 'info',
        position: 'top-right',
        duration: 4000,
        pauseOnHover: false
      }
    },
    html: NoPause,
  }
]
