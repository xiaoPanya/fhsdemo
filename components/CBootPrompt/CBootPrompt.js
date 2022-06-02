Component({
    
    options: {
        multipleSlots: true
    },

    properties: {
        /** 
         * 是否显示过的key
         */
        key: String,


        /**
         * 目前为了方便搞了这个参数
         */
        next: {
            type: Boolean,
            value: false,
            observer() {
                this.setNext();
            }
        }
    },
    
    data: {
        show: false
    },
    onLoad(){
        this.setNext()
    },
    methods: {
        setNext() {
            const key = this.properties.key;
            if (!key) {
                return void this.setData({
                    show: true
                })
            }

            const stroageKey = 'c-boot-prompt-' + key;
            if ( wx.getStorageSync(stroageKey) ) {
                return;
            }

            this.setData({
                show: true
            });

            wx.setStorage({
                key: stroageKey,
                data: true
            })
        },

        handleMask() {
            this.triggerEvent('handleScroll');
            this.properties.next && this.setData({
                show: false
            })
        }
    }
});
