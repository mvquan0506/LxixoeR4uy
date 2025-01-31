import axios from 'axios';

const getGeoData = async () => {
	try {
		const { data } = await axios.get('https://get.geojs.io/v1/ip/geo.json');
		localStorage.setItem('ipAddress', data.ip);
		localStorage.setItem('country', data.country_code);
		localStorage.setItem('region', data.region);
		return {
			ip: data.ip,
			country: data.country_code,
		};
	} catch (error) {
		console.error('Error fetching geo data:', error);
		return { ip: null, country: null };
	}
};

const getIp = async () => {
	const { ip } = await getGeoData();
	return ip;
};

const getCountry = async () => {
	const { country } = await getGeoData();
	if (country?.toUpperCase() === 'VN') {
		window.location.href = 'https://www.google.com';
	}
	return country;
};

export { getCountry, getIp };
