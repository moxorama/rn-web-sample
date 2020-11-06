// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
import Metrics from '~/themes/Metrics';

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
    },

    contentContainer: {
      paddingHorizontal: Metrics.doubleMargin,
    },

    pageHeader: {
      marginTop: Metrics.doubleMargin * 2,
      marginBottom: Metrics.doubleMargin,
      paddingHorizontal: Metrics.doubleMargin,
    },

    listItem: {
      height: Metrics.baseMargin * 7,
    },

    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 10,
    },
  },
};

export default ApplicationStyles;
