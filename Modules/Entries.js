var entries = [
	{
		id: 0,
    date: +(new Date()) - (24 * 3600),
		name: 'Shutter accident',
		location: 'Test location, Test place',
		shutterSpeed: 0.5,
		aperture: 2.8,
		iso: 100,
    position: [59.9429394, 10.648365],
		notes: 'Accidentally screwed this up by leaving the shutter open'
	},
	{
		id: 1,
    date: +(new Date()) - (48 * 3600),
		name: 'Hardangervidda National Park Vista',
		location: 'Hardanger, Telemark',
		shutterSpeed: 4,
		aperture: 64,
		iso: 100,
    position: [60.3718534, 7.4362607],
		notes: 'Sunny day, no clouds'
	},
	{
		id: 2,
    date: +(new Date()) - (90 * 3600),
		name: 'Odda',
		location: 'Odda, Someplace',
		shutterSpeed: 8,
		aperture: 44,
		iso: 160,
    position: [59.9463855, 6.5742311],
		notes: 'Used Portra 160 here, don\'t know what will come of this'
	}
];

module.exports = entries;