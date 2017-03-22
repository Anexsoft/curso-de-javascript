if(HTMLCollection.prototype.find === undefined) {
    HTMLCollection.prototype.find = function(type){
        var item = [];

        for(var i = 0; i < this.length; i++) {
            var element = this[i];
            if(element.nodeName.toLowerCase() === type.toLowerCase()) {
                item.push(element);
            }
        }

        if(item.length === 0) return null;
        if(item.length === 1) return item[0];

        return item;
    }
}

if(Date.prototype.customFormat === undefined) {
    Date.prototype.customFormat = function(){
        var d = this.getDate(),
            m = this.getMonth() + 1,
            y = this.getFullYear(),
            h = this.getHours(),
            i = this.getMinutes(),
            s = this.getSeconds();

        if(d < 10) d = '0' + d;
        if(m < 10) m = '0' + m;
        if(y < 10) y = '0' + y;
        if(h < 10) h = '0' + h;
        if(i < 10) i = '0' + i;
        if(s < 10) s = '0' + s;

        return y + '/' + m + '/' + d + ' ' + h + ':' + i + ':' + m;
    }
}

function Dashboard(dashboard, flights){
    this.flights = flights;
    this.dashboard = document.querySelector(dashboard);

    function timeElapsed(start, end) {
        var now = new Date();

        if(now >= start && now <= end) {
            var t = Math.floor(end - now) / 1000; // diff in seconds
            var seconds = Math.floor( (t) % 60 );
            var minutes = Math.floor( (t/60) % 60 );
            var hours = Math.floor( (t/(60*60)) % 24 );
            var days = Math.floor( (t/(60*60)) / 24 );

            if(seconds < 10) seconds = '0' + seconds;
            if(minutes < 10) minutes = '0' + minutes;
            if(hours < 10) hours = '0' + hours;
            if(days < 10) days = '0' + days;

            return days + ':' + hours + ':' + minutes + ':' + seconds;
        } else if (now < start) {
            return 'Pendiente';
        } else {
            return 'Finalizado';
        }
    }

    this.create = function() {
        var tbody = self.dashboard.children.find('tbody'),
            timerHelper = [];

        self.flights.forEach(function(x){
            var tr = document.createElement("tr"),
                // Number
                td1 = document.createElement("td"),
                // Airline
                td2 = document.createElement("td"),
                // Come
                td3 = document.createElement("td"),
                // To
                td4 = document.createElement("td"),
                // Start
                td5 = document.createElement("td"),
                // End
                td6 = document.createElement("td");

            td1.innerHTML = x.number;
            td2.innerHTML = x.airline;
            td3.innerHTML = x.come;
            td4.innerHTML = x.to;
            td5.innerHTML = x.start.customFormat();
            td6.innerHTML = x.end;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            timerHelper.push({
                td: td6,
                start: x.start,
                end: x.end
            });

            tbody.appendChild(tr);
        });

        setTimeElapsed();
        setInterval(setTimeElapsed, 1000);

        function setTimeElapsed() {
            timerHelper.forEach(function(x){
                x.td.innerHTML = timeElapsed(x.start, x.end);
            })
        }
    }

    var self = this;
}

function Flight(number, airline, come, to, start, end) {
    this.number = number;
    this.airline = airline;
    this.come = come;
    this.to = to;
    this.start = start;
    this.end = end;
}