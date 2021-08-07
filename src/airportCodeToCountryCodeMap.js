
const getAlpha2CountryCode =(airportCode)=>{
return airportCountryMap()[airportCode];
}

const airportCountryMap = () => ({
	JFK: "US",
	NYC: "US",
	LAS: "US",
	LAX: "US",
	BOM: "IN",
	COK: "IN",
	DEL: "IN",
	IXC: "IN",
	MAA: "IN",
	PAR: "FR",
	CDG: "FR",
	ORY: "FR",
	BOD: "FR",
	LYS: "FR",
	NTE: "FR"
});


export {getAlpha2CountryCode, airportCountryMap};