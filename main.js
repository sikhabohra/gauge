var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {
  const gauge = document.createElement('template')
  gauge.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `
  class SampleGauge extends HTMLElement {
    constructor () {
      super()

      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(gauge.content.cloneNode(true))

      this._root = this._shadowRoot.getElementById('root')

      this._props = {}

      this.render()
    }

    onCustomWidgetResize (width, height) {
      this.render()
    }

    async render () {
      await getScriptPromisify('https://cdn.bootcdn.net/ajax/libs/echarts/5.0.0/echarts.min.js')

      const chart = echarts.init(this._root)
      import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

const option = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 240,
      splitNumber: 12,
      itemStyle: {
        color: '#58D9F9',
        shadowColor: 'rgba(0,138,255,0.45)',
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2
      },
      progress: {
        show: true,
        roundCap: true,
        width: 18
      },
      pointer: {
        icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
        length: '75%',
        width: 16,
        offsetCenter: [0, '5%']
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        splitNumber: 2,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      splitLine: {
        length: 12,
        lineStyle: {
          width: 3,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 30,
        color: '#999',
        fontSize: 20
      },
      title: {
        show: false
      },
      detail: {
        backgroundColor: '#fff',
        borderColor: '#999',
        borderWidth: 2,
        width: '60%',
        lineHeight: 40,
        height: 40,
        borderRadius: 8,
        offsetCenter: [0, '35%'],
        valueAnimation: true,
        formatter: function (value) {
          return '{value|' + value.toFixed(0) + '}{unit|km/h}';
        },
        rich: {
          value: {
            fontSize: 50,
            fontWeight: 'bolder',
            color: '#777'
          },
          unit: {
            fontSize: 20,
            color: '#999',
            padding: [0, 0, -20, 10]
          }
        }
      },
      data: [
        {
          value: 100
        }
      ]
    }
  ]
};

option && myChart.setOption(option);

      chart.setOption(option)
    }
  }

  customElements.define('com-sap-sample-echarts-gauge', SampleGauge)
})()