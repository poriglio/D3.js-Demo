// var colorPicker = function(number){
//       // scale of 4 - 2010
//       if(number>400){
//             return "hsl(24,39%,12%)"
//       }
//       else{
//             var lightness = (-0.2)*number+62
//             return "hsl(24,39%," + lightness + "%)"
//       }
//       // var lightness = (27/1003)*number+8
// }

var colorPicker = function(number){
      if(number<20){
            return "hsl(24,39%,85%)"
      }
      else if(number<50){
            return "hsl(24,39%,70%)"
      }
      else if(number<150){
            return "hsl(24,39%,55%)"
      }
      else if(number<250){
            return "hsl(24,39%,32%)"
      }
      else if(number<400){
            return "hsl(24,39%,18%)"
      }
      else{
            return "hsl(24,39%,10%)"
      }
}

var states = {
			AL: {
            	stores: 39,
            	fillColor: colorPicker(39)
            },
			AK: {
            	stores: 25,
            	fillColor: colorPicker(25)
            },
			AZ: {
            	stores: 248,
            	fillColor: colorPicker(248)
            },
			AR: {
            	stores: 15,
            	fillColor: colorPicker(15)
            },
			CA: {
            	stores: 2010,
            	fillColor: colorPicker(2010)
            },
			CO: {
            	stores: 322,
            	fillColor: colorPicker(322)
            },
			CT: {
            	stores: 76,
            	fillColor: colorPicker(76)
            },
			DE: {
            	stores: 16,
            	fillColor: colorPicker(16)
            },
			FL: {
            	stores: 375,
            	fillColor: colorPicker(375)
            },
			GA: {
            	stores: 168,
            	fillColor: colorPicker(168)
            },
			HI: {
            	stores: 59,
            	fillColor: colorPicker(59)
            },
			ID: {
            	stores: 39,
            	fillColor: colorPicker(39)
            },
			IL: {
            	stores: 412,
            	fillColor: colorPicker(412)
            },
			IN: {
            	stores: 140,
            	fillColor: colorPicker(140)
            },
			IA: {
            	stores: 40,
            	fillColor: colorPicker(40)
            },
			KS: {
            	stores: 45,
            	fillColor: colorPicker(45)
            },
			KY: {
            	stores: 47,
            	fillColor: colorPicker(47)
            },
			LA: {
            	stores: 42,
            	fillColor: colorPicker(42)
            },
			ME: {
            	stores: 16,
            	fillColor: colorPicker(16)
            },
			MD: {
            	stores: 156,
            	fillColor: colorPicker(156)
            },
			MA: {
            	stores: 155,
            	fillColor: colorPicker(155)
            },
			MI: {
            	stores: 158,
            	fillColor: colorPicker(158)
            },
			MN: {
            	stores: 115,
            	fillColor: colorPicker(115)
            },
			MS: {
            	stores: 19,
            	fillColor: colorPicker(19)
            },
			MO: {
            	stores: 90,
            	fillColor: colorPicker(90)
            },
			MT: {
            	stores: 13,
            	fillColor: colorPicker(13)
            },
			NE: {
            	stores: 25,
            	fillColor: colorPicker(25)
            },
			NV: {
            	stores: 193,
            	fillColor: colorPicker(193)
            },
			NH: {
            	stores: 11,
            	fillColor: colorPicker(11)
            },
			NJ: {
            	stores: 146,
            	fillColor: colorPicker(146)
            },
			NM: {
            	stores: 38,
            	fillColor: colorPicker(38)
            },
			NY: {
            	stores: 384,
            	fillColor: colorPicker(384)
            },
			NC: {
            	stores: 132,
            	fillColor: colorPicker(132)
            },
			ND: {
            	stores: 12,
            	fillColor: colorPicker(12)
            },
			OH: {
            	stores: 203,
            	fillColor: colorPicker(203)
            },
			OK: {
            	stores: 34,
            	fillColor: colorPicker(34)
            },
			OR: {
            	stores: 243,
            	fillColor: colorPicker(243)
            },
			PA: {
            	stores: 183,
            	fillColor: colorPicker(183)
            },
			RI: {
            	stores: 14,
            	fillColor: colorPicker(14)
            },
			SC: {
            	stores: 49,
            	fillColor: colorPicker(49)
            },
			SD: {
            	stores: 13,
            	fillColor: colorPicker(13)
            },
			TN: {
            	stores: 87,
            	fillColor: colorPicker(87)
            },
			TX: {
            	stores: 604,
            	fillColor: colorPicker(604)
            },
			UT: {
            	stores: 44,
            	fillColor: colorPicker(44)
            },
			VA: {
            	stores: 241,
            	fillColor: colorPicker(241)
            },
			VT: {
            	stores: 4,
            	fillColor: colorPicker(4)
            },
			WA: {
            	stores: 559,
            	fillColor: colorPicker(559)
            },
			WI: {
            	stores: 83,
            	fillColor: colorPicker(83)
            },
			WV: {
            	stores: 13,
            	fillColor: colorPicker(13)
            },
			WY: {
            	stores: 9,
            	fillColor: colorPicker(9)
            }
        }