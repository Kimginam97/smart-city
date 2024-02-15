export const barChartDataDailyTraffic = [
  {
    name: 'Daily Traffic',
    data: [20, 30, 40, 20, 45, 50, 30]
  }
]

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false
    }
  },
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000'
    },
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined
      }
    },
    theme: 'dark'
  },
  xaxis: {
    categories: ['00', '04', '08', '12', '14', '16', '18'],
    show: false,
    labels: {
      show: true,
      style: {
        colors: '#A3AED0',
        fontSize: '14px',
        fontWeight: '500'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
    color: 'black',
    labels: {
      show: true,
      style: {
        colors: '#CBD5E0',
        fontSize: '14px'
      }
    }
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true
      }
    },
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: '#4318FF',
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(67, 24, 255, 1)',
            opacity: 0.28
          }
        ]
      ]
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '40px'
    }
  }
}

export const pieChartOptions = {
  labels: ['Your files', 'System', 'Empty'],
  colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
  chart: {
    width: '50px'
  },
  states: {
    hover: {
      filter: {
        type: 'none'
      }
    }
  },
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false
        }
      }
    }
  },
  fill: {
    colors: ['#4318FF', '#6AD2FF', '#EFF4FB']
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000'
    }
  }
}

export const pieChartData = [63, 25, 12]

export const barChartDataBasePay = [
  {
    name: '대기업',
    data: [350, 370, 390, 410, 420, 450, 460, 510, 520],
    color: '#6AD2Fa'
  },
  {
    name: '중기업',
    data: [250, 265, 270, 270, 285, 290, 300, 300, 305],
    color: '#4318FF'
  },
  {
    name: '소기업',
    data: [200, 205, 210, 220, 230, 235, 250, 255, 270],
    color: '#EFF4FB'
  }
]

export const barChartOptionsBasePay = {
  chart: {
    stacked: true,
    toolbar: {
      show: false
    }
  },
  // colors:['#ff3322','#faf']
  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000'
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined
      }
    }
  },
  xaxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월'],
    show: false,
    labels: {
      show: true,
      style: {
        colors: '#A3AED0',
        fontSize: '14px',
        fontWeight: '500'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
    color: 'black',
    labels: {
      show: false,
      style: {
        colors: '#A3AED0',
        fontSize: '14px',
        fontWeight: '500'
      }
    }
  },

  grid: {
    borderColor: 'rgba(163, 174, 208, 0.3)',
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5
      }
    },
    row: {
      opacity: 0.5
    },
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  fill: {
    type: 'solid',
    colors: ['#5E37FF', '#6AD2FF', '#E1E9F8']
  },
  legend: {
    show: false
  },
  colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '20px'
    }
  }
}

export const lineChartDataWeeklyPeople = [
  {
    name: '인구 증가',
    data: [500, 640, 480, 660, 490, 420],
    color: '#4318FF'
  },
  {
    name: '인구 감소',
    data: [300, 400, 240, 460, 200, 574],
    color: '#6AD2FF'
  }
]

export const lineChartOptionsWeeklyPeople = {
  legend: {
    show: false
  },

  theme: {
    mode: 'light'
  },
  chart: {
    type: 'line',

    toolbar: {
      show: false
    }
  },

  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },

  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000'
    },
    theme: 'dark',
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  },
  grid: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500'
      }
    },
    type: 'text',
    range: undefined,
    categories: ['1월', '2월', '3월', '4월', '5월', '6월']
  },

  yaxis: {
    show: false
  }
}
