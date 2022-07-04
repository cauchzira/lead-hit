import * as RootGetters from "@/store/getter-types";
export default {
  [RootGetters.GET_TOKEN]: ({ userToken }) => userToken,
  [RootGetters.GET_CHART_DATA]: ({ chartData }) => chartData,
};
