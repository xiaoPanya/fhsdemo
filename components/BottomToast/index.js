/*
 * @Descripttion: 
 * @version: 
 * @Author: jimmy
 * @Date: 2021-02-01 11:41:59
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2022-04-18 14:33:51
 */
Component({
	options: {
		styleIsolation: 'apply-shared'
	},
	properties: {
		type: String, // normal | detail | pay | detail_initial
		leftText: String,
		rightText: String,
		url: String,
		visibleNavIcon: {
			type: Boolean,
			value: true
		},
		isNew: {
			type: Boolean,
			value: false
		},
		coupon:{
			type: Object,
			value: {}
		}
  },
	methods: {
		toDet() {
			wx.navigateTo({
				url: "/sub-cainiao/pages/detail/detail"
			})
		},
		onItem () { 
		
		}
	}
})
