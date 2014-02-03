// utility routines for dates
// author: Kirk Austin
if (!this.gensler) {
    this.gensler = {};
}
if (!this.gensler.date) {
    this.gensler.date = {};
}
// depends: globalize.js
/*global Globalize:true */
(function(gensler, $) {

    // returns a JavaScript Date
    gensler.date.parseUTCDate = function(dateString) {
        var result;
        // sanity check
        if (!dateString) {
            return result;
        }
        if (dateString.indexOf('-') < 0) { // UTC dates have hyphens
            try {
                // dire straits attempt
                result = new Date(dateString);
                if (result.constructor === Date) {
                    return result;
                } else {
                    return undefined;
                }
            } catch (error) {
                return undefined;
            }
        }
        if (dateString.length > 10 && dateString.indexOf(" ") === 10) {
            dateString = dateString.replace(" ", "T");
        }
        if (dateString.length === 19) {
            dateString += 'Z';
        }

        var formats = ["yyyy'-'MM'-'dd", "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'f", "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'ff", "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff", "yyyy'-'MM'-'dd'T'HH':'mm':'sszzz", "yyyy'-'MM'-'dd'T'HH':'mm':'sszz", "yyyy'-'MM'-'dd'T'HH':'mm':'ssz", "yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z", "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffzzz"];
        try {
            result = Globalize.parseDate(dateString, formats);
            if (result.constructor === Date) {
                return result;
            } else {
                result = undefined;
            }
        } catch (error) {
            result = undefined;
        }
        return result;
    };

    gensler.date.formatDateUTC = function(date) {
        var currentDateString = Globalize.format(date, 'S');
        var gmtHours = -date.getTimezoneOffset() / 60;
        // ensure the plus or minus
        var timeZoneString = '';
        if (gmtHours > 0) {
            timeZoneString = '+' + gmtHours;
        } else {
            timeZoneString = '' + gmtHours;
        }
        if (timeZoneString.length === 2) {
            timeZoneString = timeZoneString.charAt(0) + '0' + timeZoneString.charAt(1);
        }
        timeZoneString += ':00';
        return currentDateString + timeZoneString;
    };

    gensler.date.formatDateShort = function(date) {
        return Globalize.format(date, 'd');
    };

    gensler.date.formatDateLong = function(date) {
        return Globalize.format(date, "dd' 'MMMM' 'yyyy");
    };

})(this.gensler, jQuery);
