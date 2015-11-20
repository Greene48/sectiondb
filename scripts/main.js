console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

var store = {
  state: {
  		HE: [
      		{"Designation":"HE 100 AA","Mass":12.2,"Section Depth":91,"Section Width":100,"Web Thickness":4.2,"Flange Thickness":5.5,"Root Radius":12,"Depth between Fillets":56,"Flange Buckling Ratio":9.09,"Web Buckling Ratio":13.3,"x-x Second Moment of Area":237,"y-y Second Moment of Area":92.1,"x-x Radius of Gyration":3.89,"y-y Radius of Gyration":2.43,"x-x Elastic Modulus":52,"y-y Elastic Modulus":18.4,"x-x Plastic Modulus":58.4,"y-y Plastic Modulus":28.4,"Buckling Parameter":0.827,"Torsional Index":12.5,"Warping Constant":0.002,"Torsional Constant":2.33,"Section Area":15.6},
{"Designation":"HE 100 A","Mass":16.7,"Section Depth":96,"Section Width":100,"Web Thickness":5,"Flange Thickness":8,"Root Radius":12,"Depth between Fillets":56,"Flange Buckling Ratio":6.25,"Web Buckling Ratio":11.2,"x-x Second Moment of Area":349,"y-y Second Moment of Area":134,"x-x Radius of Gyration":4.06,"y-y Radius of Gyration":2.51,"x-x Elastic Modulus":72.8,"y-y Elastic Modulus":26.8,"x-x Plastic Modulus":83,"y-y Plastic Modulus":41.1,"Buckling Parameter":0.835,"Torsional Index":9.99,"Warping Constant":0.003,"Torsional Constant":5.28,"Section Area":21.2}
      		],
  		IP: [
      		{"Designation":"IP 100 AA","Mass":12.2,"Section Depth":91,"Section Width":100,"Web Thickness":4.2,"Flange Thickness":5.5,"Root Radius":12,"Depth between Fillets":56,"Flange Buckling Ratio":9.09,"Web Buckling Ratio":13.3,"x-x Second Moment of Area":237,"y-y Second Moment of Area":92.1,"x-x Radius of Gyration":3.89,"y-y Radius of Gyration":2.43,"x-x Elastic Modulus":52,"y-y Elastic Modulus":18.4,"x-x Plastic Modulus":58.4,"y-y Plastic Modulus":28.4,"Buckling Parameter":0.827,"Torsional Index":12.5,"Warping Constant":0.002,"Torsional Constant":2.33,"Section Area":15.6},
{"Designation":"IP 100 A","Mass":16.7,"Section Depth":96,"Section Width":100,"Web Thickness":5,"Flange Thickness":8,"Root Radius":12,"Depth between Fillets":56,"Flange Buckling Ratio":6.25,"Web Buckling Ratio":11.2,"x-x Second Moment of Area":349,"y-y Second Moment of Area":134,"x-x Radius of Gyration":4.06,"y-y Radius of Gyration":2.51,"x-x Elastic Modulus":72.8,"y-y Elastic Modulus":26.8,"x-x Plastic Modulus":83,"y-y Plastic Modulus":41.1,"Buckling Parameter":0.835,"Torsional Index":9.99,"Warping Constant":0.003,"Torsional Constant":5.28,"Section Area":21.2}
      		],
  },
}


new Vue({
    el: '#demo',
    data: {
        query: '',
        columns: ['Designation', 'Mass', 'Section Depth', 'Section Width'],
        selected: 'HE',
        section_types: [
			{ text: 'HE Sections', value: 'HE' },
			{ text: 'IP Sections', value: 'IP' },
        ],
        section_list: store.state.HE
    },
    methods: {
   		data_load: function () {
            var key = this.selected
    		this.section_list = store.state[key];
		}
    }
})
