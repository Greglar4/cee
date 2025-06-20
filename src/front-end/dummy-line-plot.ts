import Plotly from 'plotly.js-dist-min'
import type { PlotData } from 'plotly.js-dist-min'

export function createPlot(element: Plotly.Root) {
  const trace1: Partial<PlotData> = {

    x: [1, 2, 3, 4],

    y: [10, 15, 13, 17],

    type: 'scatter'

  };


  const trace2: Partial<PlotData> = {

    x: [1, 2, 3, 4],

    y: [16, 5, 11, 9],

    type: 'scatter'

  };


  const data: Partial<PlotData>[] = [trace1, trace2];


  Plotly.newPlot(element, data).catch(() => {
    console.log("Plotly plot failed to attach to div")
  });
}

