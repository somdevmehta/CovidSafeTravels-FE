
const getAlpha2CountryCode =(airportCode)=>{
return airportCountryMap()[airportCode];
}

const airportCountryMap = () => ({
	JFK: "US",
	NYC: "US",
	BOM: "IN",
});


export {getAlpha2CountryCode, airportCountryMap};