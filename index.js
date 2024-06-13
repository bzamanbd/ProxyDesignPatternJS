class GeoLocation{ 
    getLocation(address){  
        console.log('Api is calling......>');
        switch (address) { 
            
            case 'dhaka':
                this.pinPoint = '33.33 N, 99.99 E'
                break;
        
            case 'khulna':
                this.pinPoint = '44.44 N, 88.88 E'
                break;

            case 'jessor':
                this.pinPoint = '55.55 N, 77.77 E'
                break;
        }
        return this.pinPoint
    }
}



class ProxyGeoLocation{ 
    constructor(){ 
        this.location = new GeoLocation() 
        this.locationCache = {}
    }

    getLocation(address){ 
        if (this.locationCache[address]) {
            return this.locationCache[address]
        }
        const response = this.location.getLocation(address)  
        this.locationCache[address] = response
        return response
    }
}



const ll = new ProxyGeoLocation() 

console.log(ll.getLocation('dhaka'));
console.log(ll.getLocation('khulna'));
console.log(ll.getLocation('jessor'));
console.log(ll.getLocation('dhaka'));
console.log(ll.getLocation('khulna'));
console.log(ll.getLocation('jessor'));
console.log(ll.getLocation('dhaka'));
console.log(ll.getLocation('khulna'));
console.log(ll.getLocation('jessor'));