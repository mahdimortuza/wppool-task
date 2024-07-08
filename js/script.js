 
// collapsable menu

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const mainMenu = document.getElementById("main-menu");

openMenu.addEventListener('click', () => {
    mainMenu.classList.add('visible');
    mainMenu.classList.remove('invisible');
});

closeMenu.addEventListener('click', () => {
    mainMenu.classList.add('invisible');
    mainMenu.classList.remove('visible');
});



// dynamic header starts here 

const mainHeader = document.getElementById("main-header")
const mainNavbar = document.getElementById("main-navbar")
const shareButton = document.getElementById("share-btn")
const downloadButton = document.getElementById("download-btn")
const logoWhite = document.createElement("img")
const logoBlack = document.createElement("img")

logoWhite.src = "./images/logos/logo-white.png"
logoBlack.src = "./images/logos/logo-black.png"

const mainLogo = document.getElementById("main-logo")


window.onscroll = () => {
    if (window.scrollY > 620) {
        mainHeader.classList.add('sticky-header');
        mainHeader.classList.remove("fixed-header")

        mainNavbar.classList.add("py-[0px]");
        mainNavbar.classList.remove("py-[34px]")

        shareButton.classList.add("share-btn-green");
        shareButton.classList.remove("share-btn-white")
        downloadButton.classList.add('download-btn-blue');
        downloadButton.classList.remove("download-btn-white")
        
        if (mainLogo.contains(logoWhite)) {
            mainLogo.removeChild(logoWhite)
        }
        if (!mainLogo.contains(logoBlack)) {
            mainLogo.appendChild(logoBlack)
        }
    } else {
        mainHeader.classList.add("fixed-header");
        mainHeader.classList.remove("sticky-header")
        
        mainNavbar.classList.add("py-[34px]");
        mainNavbar.classList.remove("py-[0px]")

        shareButton.classList.add('share-btn-white');
        shareButton.classList.remove("share-btn-green")
        downloadButton.classList.add('download-btn-white');
        downloadButton.classList.remove("download-btn-blue")
        
        if (mainLogo.contains(logoBlack)) {
            mainLogo.removeChild(logoBlack)
        }
        if (!mainLogo.contains(logoWhite)) {
            mainLogo.appendChild(logoWhite)
        }

    }
};

// Chart logic starts here

const options = {
    chart: {
        id: 'chart',
        type: 'line',
        height: 400,
        toolbar: {
            autoSelected: 'pan',
            show: false
        }
    },
    colors: ['#FC714D', '#615DE3', '#AFCD80', '#6F34A1'],
    stroke: {
        width: [2, 2, 2, 2]
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1,
    },
    markers: {
        size: 0
    },
    series: [
        {
            name: 'WPPOOL',
            data: generateMonthWiseTimeSeries(new Date('Feb 2024').getTime(), 6, {
                min: 0,
                max: 100
            })
        },
        {
            name: 'Google',
            data: generateMonthWiseTimeSeries(new Date('Feb 2024').getTime(), 6, {
                min: 0,
                max: 100
            })
        },
        {
            name: 'Microsoft',
            data: generateMonthWiseTimeSeries(new Date('Feb 2024').getTime(), 6, {
                min: 0,
                max: 100
            })
        },
        {
            name: 'Twitter',
            data: generateMonthWiseTimeSeries(new Date('Feb 2024').getTime(), 6, {
                min: 0,
                max: 100
            })
        }
    ],
    xaxis: {
        type: 'datetime'
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();

function generateMonthWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        // Increment baseval by one month
        baseval = new Date(baseval).setMonth(new Date(baseval).getMonth() + 1);
        i++;
    }
    return series;
}


  // slider logics here  
  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    breakpoints: {
      // when window width is <= 760px
      760: {
        slidesPerView: 1,
        direction: 'horizontal',
      },
      // when window width is > 760px
      761: {
        slidesPerView: 3,
        direction: 'horizontal',
      }
    },
  });