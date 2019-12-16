var evergreenPrice = document.getElementsByClassName("evergreen-price"),
    bestSellerPrice = document.getElementsByClassName("best-seller-price"),
    oldCategoryPrice = document.getElementsByClassName("old-category-price"),
    totalRevenue = document.getElementById("total-revenue"),
    averageRevenue = document.getElementById("average-revenue"),
    totalCategories = document.getElementById("total-categories"),
    bestSellerRevenue = document.getElementById("best-seller-revenue"),
    oldCategory = document.getElementsByClassName("old-category"),
    evergreen = document.getElementsByClassName("evergreen"),
    bestSeller = document.getElementsByClassName("best-seller"),
    trs = document.getElementsByTagName("tr"),
    t = document.getElementById("t"),
    sortOpt = document.getElementById("sortOpt"),
    filterOpt = document.getElementById("filterOpt"),
    btns = document.getElementsByClassName("btn-light");






var sumEvergreen = 0;
for(var i=0; i<evergreenPrice.length; i++) {
    sumEvergreen += parseFloat(evergreenPrice[i].innerHTML);
}

var sumBestSeller = 0;
for(var i=0; i<bestSellerPrice.length; i++) {
    sumBestSeller += parseFloat(bestSellerPrice[i].innerHTML);
}

bestSellerRevenue.innerHTML = sumBestSeller;

var sumOldCategory = 0;
for(var i=0; i<oldCategoryPrice.length; i++) {
    sumOldCategory += parseFloat(oldCategoryPrice[i].innerHTML);
}

var sum = parseFloat(sumEvergreen)+parseFloat(sumOldCategory)+parseFloat(sumBestSeller);
totalRevenue.innerHTML = sum;





var numberEvergreen = 0;
for(var i=0; i<evergreen.length; i++) {
    numberEvergreen += 1;
}

var numberBestSeller = 0;
for(var i=0; i<bestSeller.length; i++) {
    numberBestSeller += 1;
}

var numberOldCategory = 0;
for(var i=0; i<oldCategory.length; i++) {
    numberOldCategory += 1;
}

var n = 0;
for(var i=0; i<trs.length-1; i++) {
    n+=1;
}
totalCategories.innerHTML = n;

var x = sum/n;
averageRevenue.innerHTML = x.toFixed(1);





var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Best Seller', 'Evergreen', 'Old-Category'],
        datasets: [{
            label: 'Revenue',
            data: [sumBestSeller, sumEvergreen, sumOldCategory],
            backgroundColor: [
                'rgba(39, 255, 14, 1)',
                'rgba(0, 107, 32, 1)',
                'rgba(0, 54, 16, 1)',
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var cty = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(cty, {
    type: 'horizontalBar',
    data: {
        labels: ['Best Seller', 'Evergreen', 'Old-Category'],
        datasets: [{
            label: 'Number of Items',
            data: [numberBestSeller,numberEvergreen,numberOldCategory,],
            backgroundColor: [
                'rgba(39, 255, 14, 1)',
                'rgba(0, 107, 32, 1)',
                'rgba(0, 54, 16, 1)',
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});





function showFilterOptions() {
    filterOpt.style.display = "block";
    t.style.display = "none";
    btns[0].style.display = "none";
    btns[1].style.display = "none";
}
function filterTable(segment) {
  var input, filter, table, tr, td, i, txtValue;
  input = segment;
  filter = input.toUpperCase();
  table = document.getElementById("t");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
      filterOpt.style.display = "none";
      t.style.display = "block";
      btns[0].style.display = "block";
      btns[1].style.display = "block";
}




function showSortOptions() {
    t.style.display = "none";
    sortOpt.style.display = "block";
    btns[0].style.display = "none";
    btns[1].style.display = "none";
}
function sortTable(n) {
  var rows, switching, i, x, y, shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    rows = t.rows;
    for (i = 1; i < (rows.length-1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if(n===3) {
        var a = x.innerHTML;
        var b = y.innerHTML;
        if(parseFloat(a) > parseFloat(b)) {
          shouldSwitch = true;
          break;
        }
      } else {
        if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
      }
    }
  }
    if(shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      sortOpt.style.display = "none";
      t.style.display = "block";
      btns[0].style.display = "block";
      btns[1].style.display = "block";
    }
  }
}
