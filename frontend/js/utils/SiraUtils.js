const url = require('url');
const {endsWith} = require('lodash');
const axios = require('@mapstore/libs/ajax');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');

module.exports = {
    goToMapPage(center, zoom) {
        const currentUrl = url.parse(window.location.href, true);
        if (endsWith(currentUrl.pathname, "map.html")) {
            // Strip first part of route needs to be improved
            window.location.href = currentUrl.href.replace(/#\/\w+\//, '#/');
        } else {
            localStorage.setItem("sira.config.map", JSON.stringify({zoom, center}));
            window.open(`map.html?${currentUrl.hash}`, '_blank');
            // window.location.href = `map.html?${query}${currentUrl.hash}`;
        }
    },

    sleep(milliseconds) {
        var start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    },

    sendLogOut: function() {
        let murl = ConfigUtils.getConfigProp('logOutService');
        return axios.get(murl).then(response => {
            let myData;
            if (typeof response.data === 'object') {
                myData = response.data;
            }
            return myData;
        });
    },

    setStore: function(store) {
        this.store = store;
    },

    getConfigByfeatureTypeName: function(ftype) {
        let config = this.getConfigOggetti();
        for (let key in config) {
            if (config.hasOwnProperty(key) && config[key].featureTypeName === ftype) return config[key];
        }
        return null;
    },

    getConfigOggetti: function() {
        return this.store.getState().siradec.configOggetti;
    },

    getLayersFlat() {
        return this.store.getState().layers.flat;
    },

    arrayEquals(a1, a2) {
        return a1.length === a2.length && a1.every(function(element, index) {
            return element === a2[index];
        });
    },

    handleKeyFocus(e) {
        if (e.key === 'Tab') {
            let focused = Array.from(document.getElementsByClassName('keyFocus'));
            new Promise((resolve) => {
                focused.forEach(function(element) {
                    element.classList.remove('keyFocus');
                });
                resolve();
            }).then(() => {
                document.activeElement.classList.add('keyFocus');
            });
        }
    }

};
