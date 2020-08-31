const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

var ctx = document.getElementById('first_chart').getContext('2d');

var labels = [];
var data = [];

for (let i = 1; i <= 31; i++) {
    labels.push(i);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
for (let i = 1; i <= 31; i++) {
    random = randomInteger(0, 15000);
    data.push(random);
}

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = 'rgba(86, 44, 176, 0.25)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 3;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});

var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#7E51DD',
            borderWidth: 5,
            data: data,
            pointBackgroundColor: "rgba(255, 255, 255, 0)",
            pointHoverBackgroundColor: "#7E51DD",
            pointBorderColor: "rgba(255, 255, 255, 0)",
            pointHoverBorderColor: "#FFFFFF",
            pointRadius: 3,
            pointBorderWidth: 0,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 4,
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            callbacks: {
              title: function(tooltipItem, data) {
                return 'Apr ' + data['labels'][tooltipItem[0]['index']] + nth(data['labels'][tooltipItem[0]['index']]);
              },
              label: function(tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            backgroundColor: '#FFF',
            titleFontSize: 12,
            titleFontFamily: 'Montserrat',
            titleFontColor: '#000',
            titleFontStyle: 'normal',
            titleMarginBottom: 10,
            bodyFontColor: '#562CB0',
            bodyFontSize: 14,
            bodyFontFamily: 'Montserrat',
            bodyFontStyle: 'bold',
            displayColors: false,
            bodyAlign: 'center',
            xPadding: 20,
            yPadding: 15,
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
          },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontFamily: "Montserrat",
                    fontSize: '12',
                    maxTicksLimit: 7,
                    maxRotation: 0,
                    minRotation: 0,
                    padding: 10,
                    fontColor: 'rgba(0,0,0,0.5)',
                },
            }],
            yAxes: [{
                gridLines: {
                    borderDash: [4, 4],
                    color: "#EFEFEF",
                    lineWidth: 1,
                },
                ticks: {
                    fontFamily: "Montserrat",
                    fontSize: '12',
                    padding: 10,
                    callback: function(value, index, values) {
                        custom_value = String(value).substr(0, String(value).length - 3);
                        if (custom_value != '') {
                            return custom_value + 'k';
                        } else {
                            return '0k';
                        }
                    }
                },
            }]
          },
    }
});

var ctx = document.getElementById('second_chart').getContext('2d');

for (let i = 1; i <= 4; i++) {
    random = randomInteger(0, 15000);
    data.push(random);
}

var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#7E51DD',
            borderWidth: 5,
            data: data,
            pointBackgroundColor: "rgba(255, 255, 255, 0)",
            pointHoverBackgroundColor: "#7E51DD",
            pointBorderColor: "rgba(255, 255, 255, 0)",
            pointHoverBorderColor: "#FFFFFF",
            pointRadius: 3,
            pointBorderWidth: 0,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 4,
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            callbacks: {
              title: function(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function(tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            backgroundColor: '#FFF',
            titleFontSize: 12,
            titleFontFamily: 'Montserrat',
            titleFontColor: '#000',
            titleFontStyle: 'normal',
            titleMarginBottom: 10,
            bodyFontColor: '#562CB0',
            bodyFontSize: 14,
            bodyFontFamily: 'Montserrat',
            bodyFontStyle: 'bold',
            displayColors: false,
            bodyAlign: 'center',
            xPadding: 20,
            yPadding: 15,
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
          },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontFamily: "Montserrat",
                    fontSize: '12',
                    maxRotation: 0,
                    minRotation: 0,
                    padding: 10,
                    fontColor: 'rgba(0,0,0,0.5)',
                },
            }],
            yAxes: [{
                gridLines: {
                    borderDash: [4, 4],
                    color: "#EFEFEF",
                    lineWidth: 1,
                },
                ticks: {
                    fontFamily: "Montserrat",
                    fontSize: '12',
                    padding: 10,
                    callback: function(value, index, values) {
                        custom_value = String(value).substr(0, String(value).length - 3);
                        if (custom_value != '') {
                            return custom_value + 'k';
                        } else {
                            return '0k';
                        }
                    }
                },
            }]
          },
    }
});

$('aside > ul a').on('click', function(){
    $('aside > ul .active').removeClass('active');
    $(this).find('li').addClass('active');
    $('main .active').removeClass('active');
    $($(this).attr('href')).addClass('active');
    if (!$('.burger_menu').is(':hidden')) {
        $('aside').css('left', '-100%');
    }
});

$('#payments > a, #history > a').on('click', function(){
    $('main .active').removeClass('active');
    $($(this).attr('href')).addClass('active');
});

$('.select').on('click', function(){
    if (!$(this).hasClass('opened')) {
        $(this).addClass('opened');
    } else {
        $(this).removeClass('opened');
    }
});

$('.select ul li').on('click', function(){
    $(this).parent().parent().find('.selected').text($(this).text());
});

$('header .login').on('click', function(){
    $(this).css('display', 'none');
    $('.user').css('display', 'flex');
});

$('.burger_menu').on('click', function(){
    $('aside').css('left', '0px');
});

$('aside .close').on('click', function(){
    $('aside').css('left', '-100%');
});

$('.add_rate').on('click', function(){
    $('.success').css('display', 'flex');
    $('.success').hide();
    $('.success').fadeIn(500);
    $('.success .progress div').css('width', '100%');
    $('.success .progress div').animate({width: '0%'}, 5000, function(){
        $('.success').fadeOut(500);
    });
});

$('a.violet, a.yellow, a.pink, a.green, a.blue').on('click', function(){
    $(this).addClass('loading');
});

$('.popup_form .close').on('click', function(){
    $(this).parent().css('display', 'none');
});