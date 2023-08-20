'use strict';

var airpods = [
	{
		type: "AirPods",
		generation: "AirPods (1st generation)",
		models: [
			"MMEF2"
		],
		aNumbers: [
			"A1523 (right AirPod)",
			"A1722 (left AirPod)",
			"A1602 (charging case)"
		],
		fccIds: [
			"BCG-A1523",
			"BCG-A1722"
		],
		internalName: "B188AP",
		identifier: "AirPods1,1",
		color: "N/A",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MMEF2"
	},
	{
		type: "AirPods",
		generation: "AirPods (2nd generation)",
		models: [
			"MRXJ2",
			"MV7N2",
			"MR8U2"
		],
		aNumbers: [
			"A2031 (left AirPod)",
			"A2032 (right AirPod)",
			"A1938 (wireless charging case)"
		],
		fccIds: [
			"BCG-A2031",
			"BCG-A2032"
		],
		internalName: "B288AP",
		identifier: "AirPods1,2AirPods2,1",
		color: "N/A",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MRXJ2,MV7N2,MR8U2"
	},
	{
		type: "AirPods",
		generation: "AirPods (3rd generation)",
		models: [
			"MME73",
			"MPNY3"
		],
		aNumbers: [
			"A2564 (left AirPod)",
			"A2565 (right AirPod)",
			"A2566 (MagSafe charging case)"
		],
		fccIds: [
			"BCG-A2564",
			"BCG-A2565"
		],
		internalName: "B688AP",
		identifier: "AirPods1,3Audio2,1",
		color: "N/A",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MME73,MPNY3"
	},
	{
		type: "AirPods",
		generation: "AirPods Pro",
		models: [
			"MWP22",
			"MLWK3"
		],
		aNumbers: [
			"A2083 (left AirPod)",
			"A2084 (right AirPod)",
			"A2190 (AirPods Pro/MagSafe charging case)"
		],
		fccIds: [
			"BCG-A2083",
			"BCG-A2084"
		],
		internalName: "B298AP",
		identifier: "AirPods2,2AirPodsPro1,1iProd8,1",
		color: "N/A",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MWP22,MLWK3"
	},
	{
		type: "AirPods",
		generation: "AirPods Pro (2nd generation)",
		models: [
			"MQD83"
		],
		aNumbers: [
			"A2699 (left AirPod)",
			"A2698 (right AirPod)",
			"A2700 (charging case)"
		],
		fccIds: [
			"BCG-A2698",
			"BCG-A2699"
		],
		internalName: "B698AP",
		identifier: "AirPodsPro1,2",
		color: "N/A",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MQD83"
	},
	{
		type: "AirPods",
		generation: "AirPods Max",
		models: [
			"MGYH3"
		],
		aNumbers: [
			"A2096"
		],
		fccIds: [
			"BCG-A2096"
		],
		internalName: "B515AP",
		identifier: "AirPodsMax1,1iProd8,6",
		color: "Space Grey",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MGYH3"
	},
	{
		type: "AirPods",
		generation: "AirPods Max",
		models: [
			"MGYM3"
		],
		aNumbers: [
			"A2096"
		],
		fccIds: [
			"BCG-A2096"
		],
		internalName: "B515AP",
		identifier: "AirPodsMax1,1iProd8,6",
		color: "Pink",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MGYM3"
	},
	{
		type: "AirPods",
		generation: "AirPods Max",
		models: [
			"MGYJ3"
		],
		aNumbers: [
			"A2096"
		],
		fccIds: [
			"BCG-A2096"
		],
		internalName: "B515AP",
		identifier: "AirPodsMax1,1iProd8,6",
		color: "Silver",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MGYJ3"
	},
	{
		type: "AirPods",
		generation: "AirPods Max",
		models: [
			"MGYN3"
		],
		aNumbers: [
			"A2096"
		],
		fccIds: [
			"BCG-A2096"
		],
		internalName: "B515AP",
		identifier: "AirPodsMax1,1iProd8,6",
		color: "Green",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MGYN3"
	},
	{
		type: "AirPods",
		generation: "AirPods Max",
		models: [
			"MGYL3"
		],
		aNumbers: [
			"A2096"
		],
		fccIds: [
			"BCG-A2096"
		],
		internalName: "B515AP",
		identifier: "AirPodsMax1,1iProd8,6",
		color: "Sky Blue",
		storage: "",
		bootrom: "Unknown",
		modelsSearchable: "MGYL3"
	}
];

var appleWatches = [
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MLCJ2",
			"MMEC2",
			"MMF52"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "38mm",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MLCJ2,MMEC2,MMF52"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MLCH2",
			"MMF42"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MLCH2,MMF42"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ2T2",
			"MJ2U2",
			"MJ2V2",
			"MJ2W2",
			"MLCF2",
			"MLCG2",
			"MME92",
			"MMF02",
			"MMF12",
			"MMF22",
			"MMF32"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MJ2T2,MJ2U2,MJ2V2,MJ2W2,MLCF2,MLCG2,MME92,MMF02,MMF12,MMF22,MMF32"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ2X2",
			"MMF62"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MJ2X2,MMF62"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ2Y2",
			"MJ3A2",
			"MJ3E2",
			"MJ302",
			"MJ312",
			"MJ322",
			"MJ332",
			"MJ362",
			"MJYK2",
			"MLCL2",
			"MLCN2",
			"MLCP2",
			"MLC02",
			"MLC22",
			"MLC32",
			"MLE62",
			"MLLD2",
			"MMF82",
			"MMFD2",
			"MMF92",
			"MMFH2",
			"MMFK2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MJ2Y2,MJ3A2,MJ3E2,MJ302,MJ312,MJ322,MJ332,MJ362,MJYK2,MLCL2,MLCN2,MLCP2,MLC02,MLC22,MLC32,MLE62,MLLD2,MMF82,MMFD2,MMF92,MMFH2,MMFK2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ3F2",
			"MLCK2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MJ3F2,MLCK2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ3K2",
			"MJ3L2",
			"MJ8P2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MJ3K2,MJ3L2,MJ8P2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ3G2",
			"MKL52"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2870"
		],
		internalName: "N27aAP",
		identifier: "Watch1,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Yellow Gold",
		bootrom: "Bootrom 2098.0.0.2.4",
		modelsSearchable: "MJ3G2,MKL52"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MLC72",
			"MMEE2",
			"MMFQ2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "42mm",
		bootrom: "A1554A1638",
		modelsSearchable: "MLC72,MMEE2,MMFQ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MLC62",
			"MMFP2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "A1554A1638",
		modelsSearchable: "MLC62,MMFP2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ3N2",
			"MJ3P2",
			"MJ3Q2",
			"MJ3R2",
			"MLC42",
			"MLC52",
			"MMED2",
			"MMFE2",
			"MMFL2",
			"MMFM2",
			"MMFN2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1554A1638",
		modelsSearchable: "MJ3N2,MJ3P2,MJ3Q2,MJ3R2,MLC42,MLC52,MMED2,MMFE2,MMFL2,MMFM2,MMFN2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ3T2",
			"MMFR2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1554A1638",
		modelsSearchable: "MJ3T2,MMFR2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ3U2",
			"MJ3V2",
			"MJ3X2",
			"MJ3Y2",
			"MJ402",
			"MJ432",
			"MJ452",
			"MJ472",
			"MJYN2",
			"MLCC2",
			"MLCD2",
			"MLCE2",
			"MLC92",
			"MLFA2",
			"MLFC2",
			"MLLE2",
			"MMFU2",
			"MMFV2",
			"MMFX2",
			"MMG02"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1554A1638",
		modelsSearchable: "MJ3U2,MJ3V2,MJ3X2,MJ3Y2,MJ402,MJ432,MJ452,MJ472,MJYN2,MLCC2,MLCD2,MLCE2,MLC92,MLFA2,MLFC2,MLLE2,MMFU2,MMFV2,MMFX2,MMG02"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ482",
			"MLC82",
			"MMG22"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A1554A1638",
		modelsSearchable: "MJ482,MLC82,MMG22"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ4A2",
			"MLE52"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "A1554A1638",
		modelsSearchable: "MJ4A2,MLE52"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch (1st generation)",
		models: [
			"MJ8Q2",
			"MJVT2",
			"MKL62",
			"MLFH2"
		],
		aNumbers: [
			"A1553"
		],
		fccIds: [
			"BCG-E2871"
		],
		internalName: "N28aAP",
		identifier: "Watch1,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Yellow Gold",
		bootrom: "A1554A1638",
		modelsSearchable: "MJ8Q2,MJVT2,MKL62,MLFH2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MNNJ2",
			"MQ102"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"BCG-E3102"
		],
		internalName: "N27dAP",
		identifier: "Watch2,6",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "38mm",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNJ2,MQ102"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MNNH2"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"BCG-E3102"
		],
		internalName: "N27dAP",
		identifier: "Watch2,6",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNH2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MNNG2"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"BCG-E3102"
		],
		internalName: "N27dAP",
		identifier: "Watch2,6",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNG2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MP022"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"BCG-E3102"
		],
		internalName: "N27dAP",
		identifier: "Watch2,6",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MP022"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MNNN2",
			"MQ122"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"A1803"
		],
		internalName: "BCG-E3103",
		identifier: "N28dAP",
		color: "Gold",
		caseMaterial: "Watch2,7",
		caseSize: "42mm",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNN2,MQ122"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MNNM2",
			"MQ112"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"A1803"
		],
		internalName: "BCG-E3103",
		identifier: "N28dAP",
		color: "Gold",
		caseMaterial: "Watch2,7",
		caseSize: "Rose Gold",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNM2,MQ112"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MNNL2"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"A1803"
		],
		internalName: "BCG-E3103",
		identifier: "N28dAP",
		color: "Gold",
		caseMaterial: "Watch2,7",
		caseSize: "Silver",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNL2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 1",
		models: [
			"MP032"
		],
		aNumbers: [
			"A1802"
		],
		fccIds: [
			"A1803"
		],
		internalName: "BCG-E3103",
		identifier: "N28dAP",
		color: "Gold",
		caseMaterial: "Watch2,7",
		caseSize: "Space Gray",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MP032"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNP22",
			"MNP32",
			"MQ132"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "38mm",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNP22,MNP32,MQ132"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNNY2",
			"MNP02"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNY2,MNP02"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNNQ2",
			"MNNW2",
			"MNNX2",
			"MNYP2",
			"MQ172"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNNQ2,MNNW2,MNNX2,MNYP2,MQ172"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNYX2",
			"MP0D2",
			"MP052",
			"MP082",
			"MQ162"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNYX2,MP0D2,MP052,MP082,MQ162"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNP42",
			"MNP52",
			"MNP62",
			"MNP72",
			"MNP82",
			"MNP92",
			"MNPA2",
			"MNQ52",
			"MNQ62",
			"MNQ72",
			"MNQ82",
			"MNQ92",
			"MQ1F2"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNP42,MNP52,MNP62,MNP72,MNP82,MNP92,MNPA2,MNQ52,MNQ62,MNQ72,MNQ82,MNQ92,MQ1F2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNPD2",
			"MNPE2",
			"MP492"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNPD2,MNPE2,MP492"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNPF2"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3104"
		],
		internalName: "N74AP",
		identifier: "Watch2,3",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "White",
		bootrom: "Bootrom 2651.0.0.1.31",
		modelsSearchable: "MNPF2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNPN2",
			"MNPP2",
			"MQ152"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "42mm",
		bootrom: "A1758A1817",
		modelsSearchable: "MNPN2,MNPP2,MQ152"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNPL2",
			"MNPM2",
			"MQ142"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Rose Gold",
		bootrom: "A1758A1817",
		modelsSearchable: "MNPL2,MNPM2,MQ142"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNNT2",
			"MNPJ2",
			"MNPK2",
			"MNYQ2",
			"MQ192"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1758A1817",
		modelsSearchable: "MNNT2,MNPJ2,MNPK2,MNYQ2,MQ192"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNYY2",
			"MP0A2",
			"MP062",
			"MP072",
			"MQ182"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1758A1817",
		modelsSearchable: "MNYY2,MP0A2,MP062,MP072,MQ182"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNPR2",
			"MNPT2",
			"MNPU2",
			"MNPV2",
			"MNPW2",
			"MNQ02",
			"MNQ22",
			"MNQ32",
			"MNQC2"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1758A1817",
		modelsSearchable: "MNPR2,MNPT2,MNPU2,MNPV2,MNPW2,MNQ02,MNQ22,MNQ32,MNQC2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNQ12",
			"MP4A2"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A1758A1817",
		modelsSearchable: "MNQ12,MP4A2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 2",
		models: [
			"MNPQ2"
		],
		aNumbers: [
			"A1757",
			"A1816"
		],
		fccIds: [
			"BCG-E3105"
		],
		internalName: "N75AP",
		identifier: "Watch2,4",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "White",
		bootrom: "A1758A1817",
		modelsSearchable: "MNPQ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQJQ2",
			"MQJU2",
			"MQKH2",
			"MQKL2",
			"MQQG2",
			"MQQK2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "38mm",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQJQ2,MQJU2,MQKH2,MQKL2,MQQG2,MQQK2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQJN2",
			"MQJR2",
			"MQKF2",
			"MQKJ2",
			"MQL52",
			"MQL72",
			"MQM72",
			"MQM92",
			"MQQE2",
			"MQQH2",
			"MQR42",
			"MQR62"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQJN2,MQJR2,MQKF2,MQKJ2,MQL52,MQL72,MQM72,MQM92,MQQE2,MQQH2,MQR42,MQR62"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQJP2",
			"MQJT2",
			"MQKK2",
			"MQKN2",
			"MQL62",
			"MQL82",
			"MQM82",
			"MQMA2",
			"MR2W2",
			"MR2Y2",
			"MR332",
			"MQQF2",
			"MQQJ2",
			"MQR52",
			"MQR72"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQJP2,MQJT2,MQKK2,MQKN2,MQL62,MQL82,MQM82,MQMA2,MR2W2,MR2Y2,MR332,MQQF2,MQQJ2,MQR52,MQR72"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQJV2",
			"MQLJ2",
			"MQLK2",
			"MQLM2",
			"MQLN2",
			"MQLV2",
			"MQML2",
			"MQMM2",
			"MQMP2",
			"MQMQ2",
			"MQQL2",
			"MQRA2",
			"MQRE2",
			"MQRF2",
			"MQX92",
			"MR1F2. MR1N2",
			"MR212"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQJV2,MQLJ2,MQLK2,MQLM2,MQLN2,MQLV2,MQML2,MQMM2,MQMP2,MQMQ2,MQQL2,MQRA2,MQRE2,MQRF2,MQX92,MR1F2. MR1N2,MR212"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQJW2",
			"MQLW2",
			"MQQM2",
			"MR1H2",
			"MR1Q2",
			"MR222"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQJW2,MQLW2,MQQM2,MR1H2,MR1Q2,MR222"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQJY2",
			"MQM32",
			"MQQP2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "White",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQJY2,MQM32,MQQP2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQK02",
			"MQM42",
			"MQQQ2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1860",
			"BCG-A1889",
			"BCG-A1890"
		],
		internalName: "N111sAP",
		identifier: "Watch3,1",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "Gray",
		bootrom: "Bootrom 2651.0.0.3.3",
		modelsSearchable: "MQK02,MQM42,MQQQ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQK32",
			"MQK72",
			"MQKP2",
			"MQKT2",
			"MQQU2",
			"MQQX2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "42mm",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQK32,MQK72,MQKP2,MQKT2,MQQU2,MQQX2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQK12",
			"MQK52",
			"MQKM2",
			"MQKQ2",
			"MQLC2",
			"MQLE2",
			"MQME2",
			"MQMG2",
			"MQQR2",
			"MQQV2",
			"MQRG2",
			"MQRJ2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQK12,MQK52,MQKM2,MQKQ2,MQLC2,MQLE2,MQME2,MQMG2,MQQR2,MQQV2,MQRG2,MQRJ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQK22",
			"MQK62",
			"MQKN2",
			"MQKR2",
			"MQLD2",
			"MQLF2",
			"MQMF2",
			"MQMH2",
			"MQQT2",
			"MQQW2",
			"MR2X2",
			"MR302",
			"MR342",
			"MQRH2",
			"MQRK2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQK22,MQK62,MQKN2,MQKR2,MQLD2,MQLF2,MQMF2,MQMH2,MQQT2,MQQW2,MR2X2,MR302,MR342,MQRH2,MQRK2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQK82",
			"MQLP2",
			"MQLQ2",
			"MQLR2",
			"MQLT2",
			"MQLU2",
			"MQLY2",
			"MQMR2",
			"MQMT2",
			"MQMU2",
			"MQMV2",
			"MQMW2",
			"MQQY2",
			"MQRN2",
			"MQRP2",
			"MQRQ2",
			"MQRR2",
			"MQRT2",
			"MQX62",
			"MQX72",
			"MQX92",
			"MR1J2",
			"MR1U2",
			"MR232"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQK82,MQLP2,MQLQ2,MQLR2,MQLT2,MQLU2,MQLY2,MQMR2,MQMT2,MQMU2,MQMV2,MQMW2,MQQY2,MQRN2,MQRP2,MQRQ2,MQRR2,MQRT2,MQX62,MQX72,MQX92,MR1J2,MR1U2,MR232"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQK92",
			"MQM02",
			"MQR02",
			"MR1L2",
			"MR1V2",
			"MR242"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQK92,MQM02,MQR02,MR1L2,MR1V2,MR242"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQKD2",
			"MQM52",
			"MQR22"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "White",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQKD2,MQM52,MQR22"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQKE2",
			"MQM62",
			"MQR32"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1861",
			"BCG-A1891",
			"BCG-A1892"
		],
		internalName: "N111bAP",
		identifier: "Watch3,2",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "Gray",
		bootrom: "A1861A1891A1892",
		modelsSearchable: "MQKE2,MQM62,MQR32"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQKW2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1858"
		],
		internalName: "N121sAP",
		identifier: "Watch3,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "38mm",
		bootrom: "A1858",
		modelsSearchable: "MQKW2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQKU2",
			"MQKX2"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1858"
		],
		internalName: "N121sAP",
		identifier: "Watch3,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1858",
		modelsSearchable: "MQKU2,MQKX2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQKV2",
			"MQKY2",
			"MR352"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1858"
		],
		internalName: "N121sAP",
		identifier: "Watch3,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1858",
		modelsSearchable: "MQKV2,MQKY2,MR352"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQL22"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1859"
		],
		internalName: "N121bAP",
		identifier: "Watch3,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "42mm",
		bootrom: "A1859",
		modelsSearchable: "MQL22"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQL02",
			"MQL32"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1859"
		],
		internalName: "N121bAP",
		identifier: "Watch3,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1859",
		modelsSearchable: "MQL02,MQL32"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 3",
		models: [
			"MQL12",
			"MQL42",
			"MR362"
		],
		aNumbers: [
			"A1860",
			"A1889",
			"A1890"
		],
		fccIds: [
			"BCG-A1859"
		],
		internalName: "N121bAP",
		identifier: "Watch3,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1859",
		modelsSearchable: "MQL12,MQL42,MR362"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MU682",
			"MU692"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1977"
		],
		internalName: "N131sAP",
		identifier: "Watch4,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "Bootrom 3988.0.0.2.12",
		modelsSearchable: "MU682,MU692"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MU642",
			"MU652",
			"MU6H2",
			"MU7F2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1977"
		],
		internalName: "N131sAP",
		identifier: "Watch4,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 3988.0.0.2.12",
		modelsSearchable: "MU642,MU652,MU6H2,MU7F2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MU662",
			"MU672",
			"MU6J2",
			"MU7G2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1977"
		],
		internalName: "N131sAP",
		identifier: "Watch4,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "Bootrom 3988.0.0.2.12",
		modelsSearchable: "MU662,MU672,MU6J2,MU7G2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MU6F2",
			"MU6G2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1978"
		],
		internalName: "N131bAP",
		identifier: "Watch4,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "44mm",
		bootrom: "A1978",
		modelsSearchable: "MU6F2,MU6G2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MU6A2",
			"MU6C2",
			"MU6K2",
			"MU7H2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1978"
		],
		internalName: "N131bAP",
		identifier: "Watch4,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1978",
		modelsSearchable: "MU6A2,MU6C2,MU6K2,MU7H2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MU6D2",
			"MU6E2",
			"MU6L2",
			"MU7J2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1978"
		],
		internalName: "N131bAP",
		identifier: "Watch4,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1978",
		modelsSearchable: "MU6D2,MU6E2,MU6L2,MU7J2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUJ2",
			"MTUK2",
			"MTVG2",
			"MTVH2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1975",
			"BCG-A2007"
		],
		internalName: "N141sAP",
		identifier: "Watch4,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "A1975A2007",
		modelsSearchable: "MTUJ2,MTUK2,MTVG2,MTVH2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUD2",
			"MTUF2",
			"MTV92",
			"MTX72",
			"MTVA2",
			"MTVC2",
			"MTX62",
			"MTXF2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1975",
			"BCG-A2007"
		],
		internalName: "N141sAP",
		identifier: "Watch4,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1975A2007",
		modelsSearchable: "MTUD2,MTUF2,MTV92,MTX72,MTVA2,MTVC2,MTX62,MTXF2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUG2",
			"MTUN2",
			"MTX82",
			"MTX92",
			"MTVD2",
			"MTVF2",
			"MTXG2",
			"MTXH2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1975",
			"BCG-A2007"
		],
		internalName: "N141sAP",
		identifier: "Watch4,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1975A2007",
		modelsSearchable: "MTUG2,MTUN2,MTX82,MTX92,MTVD2,MTVF2,MTXG2,MTXH2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUR2",
			"MTUT2",
			"MTVN2",
			"MTVQ2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1975",
			"BCG-A2007"
		],
		internalName: "N141sAP",
		identifier: "Watch4,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A1975A2007",
		modelsSearchable: "MTUR2,MTUT2,MTVN2,MTVQ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUL2",
			"MTUM2",
			"MU7K2",
			"MU6R2",
			"MU6N2",
			"MU6Q2",
			"MU6P2",
			"MU6M2",
			"MTVJ2",
			"MTVK2",
			"MU7L2",
			"MU732",
			"MU702",
			"MU722",
			"MU712",
			"MU6Y2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1975",
			"BCG-A2007"
		],
		internalName: "N141sAP",
		identifier: "Watch4,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1975A2007",
		modelsSearchable: "MTUL2,MTUM2,MU7K2,MU6R2,MU6N2,MU6Q2,MU6P2,MU6M2,MTVJ2,MTVK2,MU7L2,MU732,MU702,MU722,MU712,MU6Y2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUN2",
			"MTUQ2",
			"MTVL2",
			"MTVM2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG-A1975",
			"BCG-A2007"
		],
		internalName: "N141sAP",
		identifier: "Watch4,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A1975A2007",
		modelsSearchable: "MTUN2,MTUQ2,MTVL2,MTVM2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTV02",
			"MTV12",
			"MTVW2",
			"MTVX2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG‑A1976",
			"BCG-A2008"
		],
		internalName: "N141bAP",
		identifier: "Watch4,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "44mm",
		bootrom: "A1976A2008",
		modelsSearchable: "MTV02,MTV12,MTVW2,MTVX2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUU2",
			"MTUV2",
			"MU6X2",
			"MTXC2",
			"MTXA2",
			"MTVR2",
			"MTVT2",
			"MTXK2",
			"MTXJ2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG‑A1976",
			"BCG-A2008"
		],
		internalName: "N141bAP",
		identifier: "Watch4,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1976A2008",
		modelsSearchable: "MTUU2,MTUV2,MU6X2,MTXC2,MTXA2,MTVR2,MTVT2,MTXK2,MTXJ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTUW2",
			"MTUX2",
			"MTXE2",
			"MTXD2",
			"MTVU2",
			"MTVV2",
			"MTXM2",
			"MTXL2"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG‑A1976",
			"BCG-A2008"
		],
		internalName: "N141bAP",
		identifier: "Watch4,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A1976A2008",
		modelsSearchable: "MTUW2,MTUX2,MTXE2,MTXD2,MTVU2,MTVV2,MTXM2,MTXL2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTV72",
			"MTV82",
			"MTX42",
			"MTX52"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG‑A1976",
			"BCG-A2008"
		],
		internalName: "N141bAP",
		identifier: "Watch4,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A1976A2008",
		modelsSearchable: "MTV72,MTV82,MTX42,MTX52"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTV22",
			"MTV42",
			"MU6W2",
			"MU6V2",
			"MU9D2",
			"MU9D2",
			"MU6U2",
			"MU6T2",
			"MU782",
			"MU772",
			"MU762",
			"MU9E2",
			"MU752",
			"MU742"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG‑A1976",
			"BCG-A2008"
		],
		internalName: "N141bAP",
		identifier: "Watch4,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A1976A2008",
		modelsSearchable: "MTV22,MTV42,MU6W2,MU6V2,MU9D2,MU9D2,MU6U2,MU6T2,MU782,MU772,MU762,MU9E2,MU752,MU742"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 4",
		models: [
			"MTV52",
			"MTV62",
			"MTX22",
			"MTX32"
		],
		aNumbers: [
			"A1977"
		],
		fccIds: [
			"BCG‑A1976",
			"BCG-A2008"
		],
		internalName: "N141bAP",
		identifier: "Watch4,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A1976A2008",
		modelsSearchable: "MTV52,MTV62,MTX22,MTX32"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWRY2",
			"MWV72"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2092"
		],
		internalName: "N144sAP",
		identifier: "Watch5,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "Bootrom 3988.0.0.2.12",
		modelsSearchable: "MWRY2,MWV72"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWRX2",
			"MX3R2",
			"MWV62"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2092"
		],
		internalName: "N144sAP",
		identifier: "Watch5,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "Bootrom 3988.0.0.2.12",
		modelsSearchable: "MWRX2,MX3R2,MWV62"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWT02",
			"MWV82"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2092"
		],
		internalName: "N144sAP",
		identifier: "Watch5,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "Bootrom 3988.0.0.2.12",
		modelsSearchable: "MWT02,MWV82"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWT42"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2093"
		],
		internalName: "N144bAP",
		identifier: "Watch5,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "44mm",
		bootrom: "A2093",
		modelsSearchable: "MWT42"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWVD2",
			"MX3V2",
			"MWT62",
			"MWT32"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2093"
		],
		internalName: "N144bAP",
		identifier: "Watch5,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2093",
		modelsSearchable: "MWVD2,MX3V2,MWT62,MWT32"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWT52",
			"MWVF2",
			"MWT72"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2093"
		],
		internalName: "N144bAP",
		identifier: "Watch5,2",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A2093",
		modelsSearchable: "MWT52,MWVF2,MWT72"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWPU2",
			"MWQ72"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "A2094A2156",
		modelsSearchable: "MWPU2,MWQ72"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWWN2",
			"MWX12",
			"MX372",
			"MX3C2",
			"MWPT2",
			"MWQ62",
			"MWQG2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2094A2156",
		modelsSearchable: "MWWN2,MWX12,MX372,MX3C2,MWPT2,MWQ62,MWQG2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWPV2",
			"MWQ82",
			"MWWQ2",
			"MWX32",
			"MWQ42",
			"MWQH2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A2094A2156",
		modelsSearchable: "MWPV2,MWQ82,MWWQ2,MWX32,MWQ42,MWQH2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWPW2",
			"MWX62",
			"MWWV2",
			"MWWU2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A2094A2156",
		modelsSearchable: "MWPW2,MWX62,MWWV2,MWWU2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWPX2",
			"MWQA2",
			"MX5L2",
			"MX5K2",
			"MWWT2",
			"MWX52",
			"MWQJ2",
			"MX5M2",
			"MX5N2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Stainless Steel",
		bootrom: "A2094A2156",
		modelsSearchable: "MWPX2,MWQA2,MX5L2,MX5K2,MWWT2,MWX52,MWQJ2,MX5M2,MX5N2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWPY2",
			"MWQC2",
			"MWX02",
			"MWXC2",
			"MWXA2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2094A2156",
		modelsSearchable: "MWPY2,MWQC2,MWX02,MWXC2,MWXA2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQ12",
			"MWQE2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Titanium",
		bootrom: "A2094A2156",
		modelsSearchable: "MWQ12,MWQE2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQ02",
			"MWQD2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2094A2156",
		modelsSearchable: "MWQ02,MWQD2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQ22",
			"MWQF2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2094",
			"BCG-A2156"
		],
		internalName: "N146sAP",
		identifier: "Watch5,3",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "White",
		bootrom: "A2094A2156",
		modelsSearchable: "MWQ22,MWQF2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQL2",
			"MWR02"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "44mm",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQL2,MWR02"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWVY2",
			"MWWC2",
			"MX392",
			"MX3E2",
			"MWQV2",
			"MXR12",
			"MWQK2",
			"MWQY2",
			"MWR82"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2095A2157",
		modelsSearchable: "MWVY2,MWWC2,MX392,MX3E2,MWQV2,MXR12,MWQK2,MWQY2,MWR82"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQM2",
			"MWR12",
			"MWW12",
			"MWWE2",
			"MWQW2",
			"MX3A2",
			"MWR92"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQM2,MWR12,MWW12,MWWE2,MWQW2,MX3A2,MWR92"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQN2",
			"MWWH2",
			"MWW62",
			"MWW52",
			"MWR22",
			"MWWJ2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQN2,MWWH2,MWW62,MWW52,MWR22,MWWJ2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQP2",
			"MWR32",
			"MWQX2",
			"MWW32",
			"MWWG2",
			"MWRA2",
			"MX5C2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Stainless Steel",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQP2,MWR32,MWQX2,MWW32,MWWG2,MWRA2,MX5C2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQQ2",
			"MWR42",
			"MWW92",
			"MWWM2"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQQ2,MWR42,MWW92,MWWM2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQT2",
			"MWR62"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Titanium",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQT2,MWR62"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQR2",
			"MWR52"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQR2,MWR52"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 5",
		models: [
			"MWQU2",
			"MWR72"
		],
		aNumbers: [
			"A2092"
		],
		fccIds: [
			"BCG-A2095",
			"BCG-A2157"
		],
		internalName: "N146bAP",
		identifier: "Watch5,4",
		color: "Ceramic",
		caseMaterial: "Aluminium",
		caseSize: "White",
		bootrom: "A2095A2157",
		modelsSearchable: "MWQU2,MWR72"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYDY2"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"BCG-A2351"
		],
		internalName: "N140sAP",
		identifier: "Watch5,9",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "?",
		modelsSearchable: "MYDY2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYDX2"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"BCG-A2351"
		],
		internalName: "N140sAP",
		identifier: "Watch5,9",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "MYDX2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYE02"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"BCG-A2351"
		],
		internalName: "N140sAP",
		identifier: "Watch5,9",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "?",
		modelsSearchable: "MYE02"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYE22"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2352"
		],
		internalName: "BCG-A2352",
		identifier: "N140bAP",
		color: "Gold",
		caseMaterial: "Watch5,10",
		caseSize: "44mm",
		bootrom: "?",
		modelsSearchable: "MYE22"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYE12"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2352"
		],
		internalName: "BCG-A2352",
		identifier: "N140bAP",
		color: "Gold",
		caseMaterial: "Watch5,10",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "MYE12"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYE32"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2352"
		],
		internalName: "BCG-A2352",
		identifier: "N140bAP",
		color: "Gold",
		caseMaterial: "Watch5,10",
		caseSize: "Space Gray",
		bootrom: "?",
		modelsSearchable: "MYE32"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYF32",
			"MYF62"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2353",
			"A2355"
		],
		internalName: "BCG-A2353BCG-A2355",
		identifier: "N142sAP",
		color: "Gold",
		caseMaterial: "Watch5,11",
		caseSize: "40mm",
		bootrom: "?",
		modelsSearchable: "MYF32,MYF62"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYF22",
			"MYF52"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2353",
			"A2355"
		],
		internalName: "BCG-A2353BCG-A2355",
		identifier: "N142sAP",
		color: "Gold",
		caseMaterial: "Watch5,11",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "MYF22,MYF52"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYF42",
			"MYF72"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2353",
			"A2355"
		],
		internalName: "BCG-A2353BCG-A2355",
		identifier: "N142sAP",
		color: "Gold",
		caseMaterial: "Watch5,11",
		caseSize: "Space Gray",
		bootrom: "?",
		modelsSearchable: "MYF42,MYF72"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYF92",
			"MYFD2"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2354",
			"A2356"
		],
		internalName: "BCG-A2353BCG-A2355",
		identifier: "N142bAP",
		color: "Gold",
		caseMaterial: "Watch5,12",
		caseSize: "44mm",
		bootrom: "?",
		modelsSearchable: "MYF92,MYFD2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYF82",
			"MYFC2"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2354",
			"A2356"
		],
		internalName: "BCG-A2353BCG-A2355",
		identifier: "N142bAP",
		color: "Gold",
		caseMaterial: "Watch5,12",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "MYF82,MYFC2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch SE",
		models: [
			"MYFA2",
			"MYFE2"
		],
		aNumbers: [
			"A2351"
		],
		fccIds: [
			"A2354",
			"A2356"
		],
		internalName: "BCG-A2353BCG-A2355",
		identifier: "N142bAP",
		color: "Gold",
		caseMaterial: "Watch5,12",
		caseSize: "Space Gray",
		bootrom: "?",
		modelsSearchable: "MYFA2,MYFE2"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"MG193"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2292"
		],
		internalName: "N157sAP",
		identifier: "Watch6,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "?",
		modelsSearchable: "MG193"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"MG183"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2292"
		],
		internalName: "N157sAP",
		identifier: "Watch6,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "MG183"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"MG1A3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2292"
		],
		internalName: "N157sAP",
		identifier: "Watch6,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "?",
		modelsSearchable: "MG1A3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"MG2A3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2292"
		],
		internalName: "N157sAP",
		identifier: "Watch6,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Blue",
		bootrom: "?",
		modelsSearchable: "MG2A3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M02C3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2292"
		],
		internalName: "N157sAP",
		identifier: "Watch6,1",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "PRODUCT(RED)",
		bootrom: "?",
		modelsSearchable: "M02C3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M02E3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"A2292"
		],
		internalName: "BCG-A2292",
		identifier: "N157bAP",
		color: "Gold",
		caseMaterial: "Watch6,2",
		caseSize: "44mm",
		bootrom: "?",
		modelsSearchable: "M02E3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M02D3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"A2292"
		],
		internalName: "BCG-A2292",
		identifier: "N157bAP",
		color: "Gold",
		caseMaterial: "Watch6,2",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "M02D3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M02F3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"A2292"
		],
		internalName: "BCG-A2292",
		identifier: "N157bAP",
		color: "Gold",
		caseMaterial: "Watch6,2",
		caseSize: "Space Gray",
		bootrom: "?",
		modelsSearchable: "M02F3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M02G3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"A2292"
		],
		internalName: "BCG-A2292",
		identifier: "N157bAP",
		color: "Gold",
		caseMaterial: "Watch6,2",
		caseSize: "Blue",
		bootrom: "?",
		modelsSearchable: "M02G3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M02H3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"A2292"
		],
		internalName: "BCG-A2292",
		identifier: "N157bAP",
		color: "Gold",
		caseMaterial: "Watch6,2",
		caseSize: "PRODUCT(RED)",
		bootrom: "?",
		modelsSearchable: "M02H3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DP3",
			"M0D53"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "40mm",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DP3,M0D53"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DM3",
			"M0D23"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DM3,M0D23"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DQ3",
			"M0D63"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DQ3,M0D63"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DR3",
			"M0D73"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Blue",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DR3,M0D73"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DT3",
			"M0D83"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "PRODUCT(RED)",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DT3,M0D83"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DU3",
			"M0D93"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DU3,M0D93"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DV3",
			"M0DC3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DV3,M0DC3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DW3",
			"M0DF3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Graphite",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DW3,M0DF3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"MG363",
			"MG303"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2293A2375",
		modelsSearchable: "MG363,MG303"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DY3",
			"M0DH3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Titanium",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DY3,M0DH3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0DX3",
			"M0DG3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2293",
			"BCG-A2375"
		],
		internalName: "N158sAP",
		identifier: "Watch6,3",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2293A2375",
		modelsSearchable: "M0DX3,M0DG3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GQ3",
			"M0G73"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "44mm",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GQ3,M0G73"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GP3",
			"M0G63"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GP3,M0G63"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GR3",
			"M0G83"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Space Gray",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GR3,M0G83"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GT3",
			"M0G93"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "Blue",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GT3,M0G93"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GU3",
			"M0GC3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Gold",
		caseMaterial: "Aluminium",
		caseSize: "PRODUCT(RED)",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GU3,M0GC3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GV3",
			"M0GD3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GV3,M0GD3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GW3",
			"M0GF3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GW3,M0GF3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0GX3",
			"M0GG3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Graphite",
		bootrom: "A2294A2376",
		modelsSearchable: "M0GX3,M0GG3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0H23",
			"M0GJ3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Titanium",
		bootrom: "A2294A2376",
		modelsSearchable: "M0H23,M0GJ3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 6",
		models: [
			"M0H13",
			"M0GH3"
		],
		aNumbers: [
			"A2291"
		],
		fccIds: [
			"BCG-A2294",
			"BCG-A2376"
		],
		internalName: "N158bAP",
		identifier: "Watch6,4",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2294A2376",
		modelsSearchable: "M0H13,M0GH3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNF3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2473"
		],
		internalName: "N187sAP",
		identifier: "Watch6,6",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "41mm",
		bootrom: "?",
		modelsSearchable: "MKNF3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNP3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2473"
		],
		internalName: "N187sAP",
		identifier: "Watch6,6",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "MKNP3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKMX3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2473"
		],
		internalName: "N187sAP",
		identifier: "Watch6,6",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Midnight",
		bootrom: "?",
		modelsSearchable: "MKMX3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNH3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2473"
		],
		internalName: "N187sAP",
		identifier: "Watch6,6",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Blue",
		bootrom: "?",
		modelsSearchable: "MKNH3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNJ3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2473"
		],
		internalName: "N187sAP",
		identifier: "Watch6,6",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "PRODUCT(RED)",
		bootrom: "?",
		modelsSearchable: "MKNJ3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNQ3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"A2474"
		],
		internalName: "BCG-A2474",
		identifier: "N187bAP",
		color: "Green",
		caseMaterial: "Watch6,7",
		caseSize: "45mm",
		bootrom: "?",
		modelsSearchable: "MKNQ3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNP3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"A2474"
		],
		internalName: "BCG-A2474",
		identifier: "N187bAP",
		color: "Green",
		caseMaterial: "Watch6,7",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "MKNP3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKN53"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"A2474"
		],
		internalName: "BCG-A2474",
		identifier: "N187bAP",
		color: "Green",
		caseMaterial: "Watch6,7",
		caseSize: "Midnight",
		bootrom: "?",
		modelsSearchable: "MKN53"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNR3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"A2474"
		],
		internalName: "BCG-A2474",
		identifier: "N187bAP",
		color: "Green",
		caseMaterial: "Watch6,7",
		caseSize: "Blue",
		bootrom: "?",
		modelsSearchable: "MKNR3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKNT3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"A2474"
		],
		internalName: "BCG-A2474",
		identifier: "N187bAP",
		color: "Green",
		caseMaterial: "Watch6,7",
		caseSize: "PRODUCT(RED)",
		bootrom: "?",
		modelsSearchable: "MKNT3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKLA3",
			"MKLP3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "41mm",
		bootrom: "A2475A2476",
		modelsSearchable: "MKLA3,MKLP3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKL93",
			"MKLN3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Starlight",
		bootrom: "A2475A2476",
		modelsSearchable: "MKL93,MKLN3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKH73",
			"MKHQ3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Midnight",
		bootrom: "A2475A2476",
		modelsSearchable: "MKH73,MKHQ3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKLC3",
			"MKLQ3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Blue",
		bootrom: "A2475A2476",
		modelsSearchable: "MKLC3,MKLQ3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKLD3",
			"MKLR3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "PRODUCT(RED)",
		bootrom: "A2475A2476",
		modelsSearchable: "MKLD3,MKLR3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKLE3",
			"MKLT3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A2475A2476",
		modelsSearchable: "MKLE3,MKLT3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKLF3",
			"MKHX3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2475A2476",
		modelsSearchable: "MKLF3,MKHX3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKHK3",
			"MKJ23"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Graphite",
		bootrom: "A2475A2476",
		modelsSearchable: "MKHK3,MKJ23"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKLL3",
			"MKM23"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2475A2476",
		modelsSearchable: "MKLL3,MKM23"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"ML8U3",
			"ML913"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Titanium",
		bootrom: "A2475A2476",
		modelsSearchable: "ML8U3,ML913"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"ML8V3",
			"ML903"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2475",
			"BCG-A2476"
		],
		internalName: "N188sAP",
		identifier: "Watch6,8",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2475A2476",
		modelsSearchable: "ML8V3,ML903"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKM63",
			"MKML3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "45mm",
		bootrom: "A2477A2478",
		modelsSearchable: "MKM63,MKML3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKM53",
			"MKMK3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Starlight",
		bootrom: "A2477A2478",
		modelsSearchable: "MKM53,MKMK3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKJ73",
			"MKJP3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Midnight",
		bootrom: "A2477A2478",
		modelsSearchable: "MKJ73,MKJP3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKM73",
			"MKMM3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "Blue",
		bootrom: "A2477A2478",
		modelsSearchable: "MKM73,MKMM3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKM83",
			"MKMN3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Green",
		caseMaterial: "Aluminium",
		caseSize: "PRODUCT(RED)",
		bootrom: "A2477A2478",
		modelsSearchable: "MKM83,MKMN3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKM93",
			"ML7W3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Gold",
		bootrom: "A2477A2478",
		modelsSearchable: "MKM93,ML7W3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKJE3",
			"MKJW3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Silver",
		bootrom: "A2477A2478",
		modelsSearchable: "MKJE3,MKJW3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKJJ3",
			"MKL33"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Graphite",
		bootrom: "A2477A2478",
		modelsSearchable: "MKJJ3,MKL33"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"MKMH3",
			"MKMW3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Stainless Steel",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2477A2478",
		modelsSearchable: "MKMH3,MKMW3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"ML8W3",
			"ML8Y3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Titanium",
		bootrom: "A2477A2478",
		modelsSearchable: "ML8W3,ML8Y3"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 7",
		models: [
			"ML8V3",
			"ML8X3"
		],
		aNumbers: [
			"A2473"
		],
		fccIds: [
			"BCG-A2477",
			"BCG-A2478"
		],
		internalName: "N188bAP",
		identifier: "Watch6,9",
		color: "Titanium",
		caseMaterial: "Aluminium",
		caseSize: "Space Black",
		bootrom: "A2477A2478",
		modelsSearchable: "ML8V3,ML8X3"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N143sAP",
		identifier: "Watch6,10",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "41mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N143sAP",
		identifier: "Watch6,10",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N143sAP",
		identifier: "Watch6,10",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N143bAP",
		identifier: "Watch6,11",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "45mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N143bAP",
		identifier: "Watch6,11",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N143bAP",
		identifier: "Watch6,11",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N149sAP",
		identifier: "Watch6,12",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "41mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N149sAP",
		identifier: "Watch6,12",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N149sAP",
		identifier: "Watch6,12",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N149bAP",
		identifier: "Watch6,13",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "45mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N149bAP",
		identifier: "Watch6,13",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "SE (2nd generation)",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "N149bAP",
		identifier: "Watch6,13",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "41mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "(PRODUCT)RED",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Gold",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Graphite",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,14",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Space Black",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "45mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "(PRODUCT)RED",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Gold",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Graphite",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,15",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Space Black",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "41mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "(PRODUCT)RED",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Gold",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Graphite",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,16",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Space Black",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "45mm",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Starlight",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Midnight",
		caseMaterial: "Aluminum",
		caseSize: "(PRODUCT)RED",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Gold",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Silver",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Graphite",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Series 8",
		models: [
			"?"
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "Watch6,17",
		color: "Stainless Steel",
		caseMaterial: "Aluminum",
		caseSize: "Space Black",
		bootrom: "?",
		modelsSearchable: "?"
	},
	{
		type: "Apple Watch",
		generation: "Apple Watch Ultra",
		models: [
			"MQFY3",
			"MQG03",
			"MQG13"
		],
		aNumbers: [
			"Apple Watch Ultra"
		],
		fccIds: [
			"?"
		],
		internalName: "?",
		identifier: "N199AP",
		color: "Titanium",
		caseMaterial: "Watch6,18",
		caseSize: "49mm",
		bootrom: "?",
		modelsSearchable: "MQFY3,MQG03,MQG13"
	}
];

var ipads = [
	{
		type: "iPad",
		generation: "iPad",
		models: [
			"MB292"
		],
		aNumbers: [
			"A1219"
		],
		fccIds: [
			"BCG-E2381A"
		],
		internalName: "K48AP",
		identifier: "iPad1,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MB292"
	},
	{
		type: "iPad",
		generation: "iPad",
		models: [
			"MB293"
		],
		aNumbers: [
			"A1219"
		],
		fccIds: [
			"BCG-E2381A"
		],
		internalName: "K48AP",
		identifier: "iPad1,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MB293"
	},
	{
		type: "iPad",
		generation: "iPad",
		models: [
			"MB294"
		],
		aNumbers: [
			"A1219"
		],
		fccIds: [
			"BCG-E2381A"
		],
		internalName: "K48AP",
		identifier: "iPad1,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MB294"
	},
	{
		type: "iPad",
		generation: "iPad",
		models: [
			"MC349"
		],
		aNumbers: [
			"A1219"
		],
		fccIds: [
			"BCG-E2381A"
		],
		internalName: "K48AP",
		identifier: "A1337",
		color: "BCG-E2328A",
		storage: "16 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC349"
	},
	{
		type: "iPad",
		generation: "iPad",
		models: [
			"MC496"
		],
		aNumbers: [
			"A1219"
		],
		fccIds: [
			"BCG-E2381A"
		],
		internalName: "K48AP",
		identifier: "A1337",
		color: "BCG-E2328A",
		storage: "32 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC496"
	},
	{
		type: "iPad",
		generation: "iPad",
		models: [
			"MC497"
		],
		aNumbers: [
			"A1219"
		],
		fccIds: [
			"BCG-E2381A"
		],
		internalName: "K48AP",
		identifier: "A1337",
		color: "BCG-E2328A",
		storage: "64 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC497"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC769"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AP",
		identifier: "iPad2,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC769"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC770"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AP",
		identifier: "iPad2,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC770"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC916"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AP",
		identifier: "iPad2,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC916"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC979",
			"MD002"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AP",
		identifier: "iPad2,1",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC979,MD002"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC980"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AP",
		identifier: "iPad2,1",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC980"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC981"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AP",
		identifier: "iPad2,1",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC981"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC773",
			"MC957"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1396"
		],
		internalName: "K94AP",
		identifier: "iPad2,2",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1396",
		modelsSearchable: "MC773,MC957"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC774"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1396"
		],
		internalName: "K94AP",
		identifier: "iPad2,2",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1396",
		modelsSearchable: "MC774"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC775"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1396"
		],
		internalName: "K94AP",
		identifier: "iPad2,2",
		color: "Black",
		storage: "64 GB",
		bootrom: "A1396",
		modelsSearchable: "MC775"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC982",
			"MC992"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1396"
		],
		internalName: "K94AP",
		identifier: "iPad2,2",
		color: "White",
		storage: "16 GB",
		bootrom: "A1396",
		modelsSearchable: "MC982,MC992"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC983"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1396"
		],
		internalName: "K94AP",
		identifier: "iPad2,2",
		color: "White",
		storage: "32 GB",
		bootrom: "A1396",
		modelsSearchable: "MC983"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC984"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1396"
		],
		internalName: "K94AP",
		identifier: "iPad2,2",
		color: "White",
		storage: "64 GB",
		bootrom: "A1396",
		modelsSearchable: "MC984"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC755"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1397"
		],
		internalName: "K95AP",
		identifier: "iPad2,3",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1397",
		modelsSearchable: "MC755"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC763"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1397"
		],
		internalName: "K95AP",
		identifier: "iPad2,3",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1397",
		modelsSearchable: "MC763"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC764"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1397"
		],
		internalName: "K95AP",
		identifier: "iPad2,3",
		color: "Black",
		storage: "64 GB",
		bootrom: "A1397",
		modelsSearchable: "MC764"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC985"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1397"
		],
		internalName: "K95AP",
		identifier: "iPad2,3",
		color: "White",
		storage: "16 GB",
		bootrom: "A1397",
		modelsSearchable: "MC985"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC986"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1397"
		],
		internalName: "K95AP",
		identifier: "iPad2,3",
		color: "White",
		storage: "32 GB",
		bootrom: "A1397",
		modelsSearchable: "MC986"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC987"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1397"
		],
		internalName: "K95AP",
		identifier: "iPad2,3",
		color: "White",
		storage: "64 GB",
		bootrom: "A1397",
		modelsSearchable: "MC987"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC954",
			"MC960",
			"MC988"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AAP",
		identifier: "iPad2,4",
		color: "Black",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MC954,MC960,MC988"
	},
	{
		type: "iPad",
		generation: "iPad 2",
		models: [
			"MC989"
		],
		aNumbers: [
			"A1395"
		],
		fccIds: [
			"BCGA1395"
		],
		internalName: "K93AAP",
		identifier: "iPad2,4",
		color: "White",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MC989"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MC705",
			"MD333"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1416"
		],
		internalName: "J1AP",
		identifier: "iPad3,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 1062.2",
		modelsSearchable: "MC705,MD333"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MC706",
			"MD334"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1416"
		],
		internalName: "J1AP",
		identifier: "iPad3,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 1062.2",
		modelsSearchable: "MC706,MD334"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MC707",
			"MD335"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1416"
		],
		internalName: "J1AP",
		identifier: "iPad3,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 1062.2",
		modelsSearchable: "MC707,MD335"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD328",
			"MD336"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1416"
		],
		internalName: "J1AP",
		identifier: "iPad3,1",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 1062.2",
		modelsSearchable: "MD328,MD336"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD329",
			"MD337"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1416"
		],
		internalName: "J1AP",
		identifier: "iPad3,1",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 1062.2",
		modelsSearchable: "MD329,MD337"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD330",
			"MD338"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1416"
		],
		internalName: "J1AP",
		identifier: "iPad3,1",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 1062.2",
		modelsSearchable: "MD330,MD338"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MC733"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1403"
		],
		internalName: "J2AP",
		identifier: "iPad3,2",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1403",
		modelsSearchable: "MC733"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MC744"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1403"
		],
		internalName: "J2AP",
		identifier: "iPad3,2",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1403",
		modelsSearchable: "MC744"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MC756"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1403"
		],
		internalName: "J2AP",
		identifier: "iPad3,2",
		color: "Black",
		storage: "64 GB",
		bootrom: "A1403",
		modelsSearchable: "MC756"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD363"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1403"
		],
		internalName: "J2AP",
		identifier: "iPad3,2",
		color: "White",
		storage: "16 GB",
		bootrom: "A1403",
		modelsSearchable: "MD363"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD364"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1403"
		],
		internalName: "J2AP",
		identifier: "iPad3,2",
		color: "White",
		storage: "32 GB",
		bootrom: "A1403",
		modelsSearchable: "MD364"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD365"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1403"
		],
		internalName: "J2AP",
		identifier: "iPad3,2",
		color: "White",
		storage: "64 GB",
		bootrom: "A1403",
		modelsSearchable: "MD365"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD366",
			"MD404"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1430"
		],
		internalName: "J2AAP",
		identifier: "iPad3,3",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1430",
		modelsSearchable: "MD366,MD404"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD367",
			"MD405"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1430"
		],
		internalName: "J2AAP",
		identifier: "iPad3,3",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1430",
		modelsSearchable: "MD367,MD405"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD368",
			"MD406"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1430"
		],
		internalName: "J2AAP",
		identifier: "iPad3,3",
		color: "Black",
		storage: "64 GB",
		bootrom: "A1430",
		modelsSearchable: "MD368,MD406"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD369",
			"MD407"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1430"
		],
		internalName: "J2AAP",
		identifier: "iPad3,3",
		color: "White",
		storage: "16 GB",
		bootrom: "A1430",
		modelsSearchable: "MD369,MD407"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD370",
			"MD408"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1430"
		],
		internalName: "J2AAP",
		identifier: "iPad3,3",
		color: "White",
		storage: "32 GB",
		bootrom: "A1430",
		modelsSearchable: "MD370,MD408"
	},
	{
		type: "iPad",
		generation: "iPad (3rd generation)",
		models: [
			"MD371",
			"MD409"
		],
		aNumbers: [
			"A1416"
		],
		fccIds: [
			"BCGA1430"
		],
		internalName: "J2AAP",
		identifier: "iPad3,3",
		color: "White",
		storage: "64 GB",
		bootrom: "A1430",
		modelsSearchable: "MD371,MD409"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD510"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "MD510"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD511"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "MD511"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD512"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "MD512"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"ME392"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "ME392"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD513"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "MD513"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD514"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "MD514"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD515"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "MD515"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"ME393"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1458"
		],
		internalName: "P101AP",
		identifier: "iPad3,4",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 1145.3.3",
		modelsSearchable: "ME393"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD516",
			"MG932"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1459",
		modelsSearchable: "MD516,MG932"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD517"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1459",
		modelsSearchable: "MD517"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD518",
			"MD944"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "Black",
		storage: "64 GB",
		bootrom: "A1459",
		modelsSearchable: "MD518,MD944"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"ME400"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "Black",
		storage: "128 GB",
		bootrom: "A1459",
		modelsSearchable: "ME400"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD519",
			"MG942"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "White",
		storage: "16 GB",
		bootrom: "A1459",
		modelsSearchable: "MD519,MG942"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD520"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "White",
		storage: "32 GB",
		bootrom: "A1459",
		modelsSearchable: "MD520"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD521"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "White",
		storage: "64 GB",
		bootrom: "A1459",
		modelsSearchable: "MD521"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"ME401"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1459"
		],
		internalName: "P102AP",
		identifier: "iPad3,5",
		color: "White",
		storage: "128 GB",
		bootrom: "A1459",
		modelsSearchable: "ME401"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD522",
			"ME195"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1460",
		modelsSearchable: "MD522,ME195"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD523",
			"ME196"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1460",
		modelsSearchable: "MD523,ME196"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD524",
			"ME197"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "Black",
		storage: "64 GB",
		bootrom: "A1460",
		modelsSearchable: "MD524,ME197"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"ME406",
			"ME410"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "Black",
		storage: "128 GB",
		bootrom: "A1460",
		modelsSearchable: "ME406,ME410"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD525",
			"ME198"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "White",
		storage: "16 GB",
		bootrom: "A1460",
		modelsSearchable: "MD525,ME198"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD526",
			"ME199"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "White",
		storage: "32 GB",
		bootrom: "A1460",
		modelsSearchable: "MD526,ME199"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"MD527",
			"ME200"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "White",
		storage: "64 GB",
		bootrom: "A1460",
		modelsSearchable: "MD527,ME200"
	},
	{
		type: "iPad",
		generation: "iPad (4th generation)",
		models: [
			"ME407",
			"ME411"
		],
		aNumbers: [
			"A1458"
		],
		fccIds: [
			"BCGA1460"
		],
		internalName: "P103AP",
		identifier: "iPad3,6",
		color: "White",
		storage: "128 GB",
		bootrom: "A1460",
		modelsSearchable: "ME407,ME411"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MPGT2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1822"
		],
		internalName: "J71sAPJ71tAP",
		identifier: "iPad6,11",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3",
		modelsSearchable: "MPGT2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MPGW2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1822"
		],
		internalName: "J71sAPJ71tAP",
		identifier: "iPad6,11",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3",
		modelsSearchable: "MPGW2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP2G2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1822"
		],
		internalName: "J71sAPJ71tAP",
		identifier: "iPad6,11",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3",
		modelsSearchable: "MP2G2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP2J2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1822"
		],
		internalName: "J71sAPJ71tAP",
		identifier: "iPad6,11",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3",
		modelsSearchable: "MP2J2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP2F2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1822"
		],
		internalName: "J71sAPJ71tAP",
		identifier: "iPad6,11",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3",
		modelsSearchable: "MP2F2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP2H2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1822"
		],
		internalName: "J71sAPJ71tAP",
		identifier: "iPad6,11",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3",
		modelsSearchable: "MP2H2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MPG42",
			"MPGA2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1823"
		],
		internalName: "J72sAPJ72tAP",
		identifier: "iPad6,12",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1823",
		modelsSearchable: "MPG42,MPGA2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MPG52",
			"MPGC2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1823"
		],
		internalName: "J72sAPJ72tAP",
		identifier: "iPad6,12",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1823",
		modelsSearchable: "MPG52,MPGC2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP1L2",
			"MP252"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1823"
		],
		internalName: "J72sAPJ72tAP",
		identifier: "iPad6,12",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1823",
		modelsSearchable: "MP1L2,MP252"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP272",
			"MP2E2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1823"
		],
		internalName: "J72sAPJ72tAP",
		identifier: "iPad6,12",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1823",
		modelsSearchable: "MP272,MP2E2"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP1J2",
			"MP242"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1823"
		],
		internalName: "J72sAPJ72tAP",
		identifier: "iPad6,12",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1823",
		modelsSearchable: "MP1J2,MP242"
	},
	{
		type: "iPad",
		generation: "iPad (5th generation)",
		models: [
			"MP262",
			"MP2D2"
		],
		aNumbers: [
			"A1822"
		],
		fccIds: [
			"BCGA1823"
		],
		internalName: "J72sAPJ72tAP",
		identifier: "iPad6,12",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1823",
		modelsSearchable: "MP262,MP2D2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MRJN2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1893"
		],
		internalName: "J71bAP",
		identifier: "iPad7,5",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MRJN2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MRJP2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1893"
		],
		internalName: "J71bAP",
		identifier: "iPad7,5",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MRJP2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR7G2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1893"
		],
		internalName: "J71bAP",
		identifier: "iPad7,5",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MR7G2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR7K2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1893"
		],
		internalName: "J71bAP",
		identifier: "iPad7,5",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MR7K2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR7F2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1893"
		],
		internalName: "J71bAP",
		identifier: "iPad7,5",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MR7F2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR7J2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1893"
		],
		internalName: "J71bAP",
		identifier: "iPad7,5",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MR7J2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MRM52"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1954"
		],
		internalName: "J72bAP",
		identifier: "iPad7,6",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1954",
		modelsSearchable: "MRM52"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MRM82"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1954"
		],
		internalName: "J72bAP",
		identifier: "iPad7,6",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1954",
		modelsSearchable: "MRM82"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR702"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1954"
		],
		internalName: "J72bAP",
		identifier: "iPad7,6",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1954",
		modelsSearchable: "MR702"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR7D2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1954"
		],
		internalName: "J72bAP",
		identifier: "iPad7,6",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1954",
		modelsSearchable: "MR7D2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR6Y2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1954"
		],
		internalName: "J72bAP",
		identifier: "iPad7,6",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1954",
		modelsSearchable: "MR6Y2"
	},
	{
		type: "iPad",
		generation: "iPad (6th generation)",
		models: [
			"MR7C2"
		],
		aNumbers: [
			"A1893"
		],
		fccIds: [
			"BCGA1954"
		],
		internalName: "J72bAP",
		identifier: "iPad7,6",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1954",
		modelsSearchable: "MR7C2"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW762"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2197"
		],
		internalName: "J171AP",
		identifier: "iPad7,11",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MW762"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW792"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2197"
		],
		internalName: "J171AP",
		identifier: "iPad7,11",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MW792"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW752"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2197"
		],
		internalName: "J171AP",
		identifier: "iPad7,11",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MW752"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW782"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2197"
		],
		internalName: "J171AP",
		identifier: "iPad7,11",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MW782"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW742"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2197"
		],
		internalName: "J171AP",
		identifier: "iPad7,11",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MW742"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW772"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2197"
		],
		internalName: "J171AP",
		identifier: "iPad7,11",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MW772"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW6D2",
			"MW6R2",
			"MW6Y2"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2198",
			"BCGA2200"
		],
		internalName: "J172AP",
		identifier: "iPad7,12",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A2198A2200",
		modelsSearchable: "MW6D2,MW6R2,MW6Y2"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW6G2",
			"MW6V2",
			"MW722"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2198",
			"BCGA2200"
		],
		internalName: "J172AP",
		identifier: "iPad7,12",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A2198A2200",
		modelsSearchable: "MW6G2,MW6V2,MW722"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW6C2",
			"MW6Q2",
			"MW6X2"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2198",
			"BCGA2200"
		],
		internalName: "J172AP",
		identifier: "iPad7,12",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A2198A2200",
		modelsSearchable: "MW6C2,MW6Q2,MW6X2"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW6F2",
			"MW6U2",
			"MW712"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2198",
			"BCGA2200"
		],
		internalName: "J172AP",
		identifier: "iPad7,12",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A2198A2200",
		modelsSearchable: "MW6F2,MW6U2,MW712"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW6A2",
			"MW6P2",
			"MW6W2"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2198",
			"BCGA2200"
		],
		internalName: "J172AP",
		identifier: "iPad7,12",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A2198A2200",
		modelsSearchable: "MW6A2,MW6P2,MW6W2"
	},
	{
		type: "iPad",
		generation: "iPad (7th generation)",
		models: [
			"MW6E2",
			"MW6T2",
			"MW702"
		],
		aNumbers: [
			"A2197"
		],
		fccIds: [
			"BCGA2198",
			"BCGA2200"
		],
		internalName: "J172AP",
		identifier: "iPad7,12",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A2198A2200",
		modelsSearchable: "MW6E2,MW6T2,MW702"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYLC2"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2270"
		],
		internalName: "J171aAP",
		identifier: "iPad11,6",
		color: "Gold",
		storage: "32 GB",
		bootrom: "?",
		modelsSearchable: "MYLC2"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYLF2"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2270"
		],
		internalName: "J171aAP",
		identifier: "iPad11,6",
		color: "Gold",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MYLF2"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYLA2"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2270"
		],
		internalName: "J171aAP",
		identifier: "iPad11,6",
		color: "Silver",
		storage: "32 GB",
		bootrom: "?",
		modelsSearchable: "MYLA2"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYLE2"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2270"
		],
		internalName: "J171aAP",
		identifier: "iPad11,6",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MYLE2"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYL92"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2270"
		],
		internalName: "J171aAP",
		identifier: "iPad11,6",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "?",
		modelsSearchable: "MYL92"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYLD2"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2270"
		],
		internalName: "J171aAP",
		identifier: "iPad11,6",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MYLD2"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYMK2",
			"MYN62"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2428",
			"BCGA2429"
		],
		internalName: "J172aAP",
		identifier: "iPad11,7",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A2428A2429A2430",
		modelsSearchable: "MYMK2,MYN62"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYMN2",
			"MYN92"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2428",
			"BCGA2429"
		],
		internalName: "J172aAP",
		identifier: "iPad11,7",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A2428A2429A2430",
		modelsSearchable: "MYMN2,MYN92"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYMJ2",
			"MYN52"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2428",
			"BCGA2429"
		],
		internalName: "J172aAP",
		identifier: "iPad11,7",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A2428A2429A2430",
		modelsSearchable: "MYMJ2,MYN52"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYMM2",
			"MYN82"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2428",
			"BCGA2429"
		],
		internalName: "J172aAP",
		identifier: "iPad11,7",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A2428A2429A2430",
		modelsSearchable: "MYMM2,MYN82"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYMH2",
			"MYN32"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2428",
			"BCGA2429"
		],
		internalName: "J172aAP",
		identifier: "iPad11,7",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A2428A2429A2430",
		modelsSearchable: "MYMH2,MYN32"
	},
	{
		type: "iPad",
		generation: "iPad (8th generation)",
		models: [
			"MYML2",
			"MYN72"
		],
		aNumbers: [
			"A2270"
		],
		fccIds: [
			"BCGA2428",
			"BCGA2429"
		],
		internalName: "J172aAP",
		identifier: "iPad11,7",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A2428A2429A2430",
		modelsSearchable: "MYML2,MYN72"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK2L3"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"?"
		],
		internalName: "J181AP",
		identifier: "iPad12,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MK2L3"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK2P3"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"?"
		],
		internalName: "J181AP",
		identifier: "iPad12,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MK2P3"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK2K3"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"?"
		],
		internalName: "J181AP",
		identifier: "iPad12,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MK2K3"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK2N3"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"?"
		],
		internalName: "J181AP",
		identifier: "iPad12,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MK2N3"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK493",
			"MK673"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"BCGA2603",
			"BCGA2604",
			"BCGA2605"
		],
		internalName: "J182AP",
		identifier: "iPad12,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2603A2604A2605",
		modelsSearchable: "MK493,MK673"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK4H3",
			"MK6A3"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"BCGA2603",
			"BCGA2604",
			"BCGA2605"
		],
		internalName: "J182AP",
		identifier: "iPad12,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2603A2604A2605",
		modelsSearchable: "MK4H3,MK6A3"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK473",
			"MK663"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"BCGA2603",
			"BCGA2604",
			"BCGA2605"
		],
		internalName: "J182AP",
		identifier: "iPad12,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2603A2604A2605",
		modelsSearchable: "MK473,MK663"
	},
	{
		type: "iPad",
		generation: "iPad (9th generation)",
		models: [
			"MK4E3",
			"MK693"
		],
		aNumbers: [
			"A2602"
		],
		fccIds: [
			"BCGA2603",
			"BCGA2604",
			"BCGA2605"
		],
		internalName: "J182AP",
		identifier: "iPad12,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2603A2604A2605",
		modelsSearchable: "MK4E3,MK693"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQ23"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MPQ23"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQA3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPQA3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQ03"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Silver",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MPQ03"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQ83"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPQ83"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQ13"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Blue",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MPQ13"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQ93"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Blue",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPQ93"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQ33"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Pink",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MPQ33"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MPQC3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2696"
		],
		internalName: "J271AP",
		identifier: "iPad13,18",
		color: "Pink",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPQC3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6V3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6V3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6L3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6L3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6J3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6J3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6T3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6T3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6K3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Blue",
		storage: "64 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6K3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6U3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Blue",
		storage: "256 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6U3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6M3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Pink",
		storage: "64 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6M3"
	},
	{
		type: "iPad",
		generation: "iPad (10th generation)",
		models: [
			"MQ6W3"
		],
		aNumbers: [
			"A2696"
		],
		fccIds: [
			"BCGA2757"
		],
		internalName: "J272AP",
		identifier: "iPad13,19",
		color: "Pink",
		storage: "256 GB",
		bootrom: "A2757",
		modelsSearchable: "MQ6W3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD788"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MD788"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD789"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MD789"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD790"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MD790"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"ME906"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME906"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD785"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MD785"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD786"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MD786"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD787"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MD787"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"ME898"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1474"
		],
		internalName: "J71AP",
		identifier: "iPad4,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME898"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD794",
			"ME997",
			"ME999",
			"MF021",
			"MF502"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1475",
		modelsSearchable: "MD794,ME997,ME999,MF021,MF502"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD795",
			"MF025",
			"MF527",
			"MF529",
			"MF532"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1475",
		modelsSearchable: "MD795,MF025,MF527,MF529,MF532"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD796",
			"MF012",
			"MF013",
			"MF027",
			"MF539"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1475",
		modelsSearchable: "MD796,MF012,MF013,MF027,MF539"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"ME988",
			"MF018",
			"MF019",
			"MF029",
			"MF563"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1475",
		modelsSearchable: "ME988,MF018,MF019,MF029,MF563"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD791",
			"ME991",
			"ME993",
			"MF020",
			"MF496"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1475",
		modelsSearchable: "MD791,ME991,ME993,MF020,MF496"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD792",
			"MF003",
			"MF004",
			"MF024",
			"MF520"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1475",
		modelsSearchable: "MD792,MF003,MF004,MF024,MF520"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD793",
			"MF009",
			"MF010",
			"MF026",
			"MF534"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1475",
		modelsSearchable: "MD793,MF009,MF010,MF026,MF534"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"ME987",
			"MF015",
			"MF016",
			"MF028",
			"MF558"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1475"
		],
		internalName: "J72AP",
		identifier: "iPad4,2",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1475",
		modelsSearchable: "ME987,MF015,MF016,MF028,MF558"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MF230"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1476",
		modelsSearchable: "MF230"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MF233"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1476",
		modelsSearchable: "MF233"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MF234"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1476",
		modelsSearchable: "MF234"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MF236"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1476",
		modelsSearchable: "MF236"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD797"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1476",
		modelsSearchable: "MD797"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD798"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1476",
		modelsSearchable: "MD798"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MD799"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1476",
		modelsSearchable: "MD799"
	},
	{
		type: "iPad Air",
		generation: "iPad Air",
		models: [
			"MF235"
		],
		aNumbers: [
			"A1474"
		],
		fccIds: [
			"BCGA1476"
		],
		internalName: "J73AP",
		identifier: "iPad4,3",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1476",
		modelsSearchable: "MF235"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH0W2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MH0W2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MNV72"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MNV72"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH182"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MH182"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH1J2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MH1J2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGLW2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MGLW2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MNV62"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MNV62"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGKM2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MGKM2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGTY2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MGTY2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGL12"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MGL12"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MNV22"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MNV22"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGKL2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MGKL2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGTX2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1566"
		],
		internalName: "J81AP",
		identifier: "iPad5,3",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1991.0.0.2.16",
		modelsSearchable: "MGTX2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH2W2",
			"MH1C2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Gold",
		storage: "16 GB",
		bootrom: "A1567",
		modelsSearchable: "MH2W2,MH1C2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MNW32"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1567",
		modelsSearchable: "MNW32"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH2P2",
			"MH172",
			"MHWP2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1567",
		modelsSearchable: "MH2P2,MH172,MHWP2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH332",
			"MH2D2",
			"MH1G2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1567",
		modelsSearchable: "MH332,MH2D2,MH1G2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH2V2",
			"MGHC2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1567",
		modelsSearchable: "MH2V2,MGHC2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MNW22"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1567",
		modelsSearchable: "MNW22"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH2N2",
			"MGHY2",
			"MGK02"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1567",
		modelsSearchable: "MH2N2,MGHY2,MGK02"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH322",
			"MGWM2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1567",
		modelsSearchable: "MH322,MGWM2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MGGX2",
			"MH2U2",
			"MGH62"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1567",
		modelsSearchable: "MGGX2,MH2U2,MGH62"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MNW12"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1567",
		modelsSearchable: "MNW12"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH2M2",
			"MGHX2",
			"MGJY2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1567",
		modelsSearchable: "MH2M2,MGHX2,MGJY2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air 2",
		models: [
			"MH312",
			"MGWL2"
		],
		aNumbers: [
			"A1566"
		],
		fccIds: [
			"BCGA1567"
		],
		internalName: "J82AP",
		identifier: "iPad5,4",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1567",
		modelsSearchable: "MH312,MGWL2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MUUL2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2152"
		],
		internalName: "J217AP",
		identifier: "iPad11,3",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUUL2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MUUT2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2152"
		],
		internalName: "J217AP",
		identifier: "iPad11,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUUT2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MUUK2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2152"
		],
		internalName: "J217AP",
		identifier: "iPad11,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUUK2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MUUR2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2152"
		],
		internalName: "J217AP",
		identifier: "iPad11,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUUR2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MUUJ2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2152"
		],
		internalName: "J217AP",
		identifier: "iPad11,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUUJ2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MUUQ2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2152"
		],
		internalName: "J217AP",
		identifier: "iPad11,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUUQ2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MV172",
			"MV0F2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2123",
			"BCGA2153"
		],
		internalName: "J218AP",
		identifier: "iPad11,4",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A2123A2153A2154",
		modelsSearchable: "MV172,MV0F2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MV1G2",
			"MV0Q2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2123",
			"BCGA2153"
		],
		internalName: "J218AP",
		identifier: "iPad11,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A2123A2153A2154",
		modelsSearchable: "MV1G2,MV0Q2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MV162",
			"MV0E2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2123",
			"BCGA2153"
		],
		internalName: "J218AP",
		identifier: "iPad11,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2123A2153A2154",
		modelsSearchable: "MV162,MV0E2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MV1F2",
			"MV0P2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2123",
			"BCGA2153"
		],
		internalName: "J218AP",
		identifier: "iPad11,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2123A2153A2154",
		modelsSearchable: "MV1F2,MV0P2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MV152",
			"MV0D2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2123",
			"BCGA2153"
		],
		internalName: "J218AP",
		identifier: "iPad11,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2123A2153A2154",
		modelsSearchable: "MV152,MV0D2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (3rd generation)",
		models: [
			"MV1D2",
			"MV0N2"
		],
		aNumbers: [
			"A2152"
		],
		fccIds: [
			"BCGA2123",
			"BCGA2153"
		],
		internalName: "J218AP",
		identifier: "iPad11,4",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2123A2153A2154",
		modelsSearchable: "MV1D2,MV0N2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFP2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFP2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFX2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFX2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFN2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFN2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFW2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFW2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFM2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFM2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFT2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFT2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFR2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Green",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFR2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYG02"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYG02"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFQ2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Sky Blue",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFQ2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYFY2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2316"
		],
		internalName: "J307AP",
		identifier: "iPad13,1",
		color: "Sky Blue",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MYFY2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYGY2",
			"MYJ02"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYGY2,MYJ02"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH52",
			"MYJ52"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH52,MYJ52"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYGX2",
			"MYHY2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYGX2,MYHY2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH42",
			"MYJ42"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH42,MYJ42"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYGW2",
			"MYHX2"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYGW2,MYHX2"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH22",
			"MYJ32"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH22,MYJ32"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH12",
			"MYJ22"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Green",
		storage: "64 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH12,MYJ22"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH72",
			"MYJ72"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Green",
		storage: "256 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH72,MYJ72"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH02",
			"MYJ12"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Sky Blue",
		storage: "64 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH02,MYJ12"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (4th generation)",
		models: [
			"MYH62",
			"MYJ62"
		],
		aNumbers: [
			"A2316"
		],
		fccIds: [
			"BCGA2324",
			"BCGA2072"
		],
		internalName: "J308AP",
		identifier: "iPad13,2",
		color: "Sky Blue",
		storage: "256 GB",
		bootrom: "A2324A2325A2072",
		modelsSearchable: "MYH62,MYJ62"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9C3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MM9C3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9L3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MM9L3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9D3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Pink",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MM9D3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9M3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Pink",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MM9M3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MME23"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Purple",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MME23"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MME63"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Purple",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MME63"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9E3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Blue",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MM9E3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9N3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Blue",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MM9N3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9F3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Starlight",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MM9F3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM9P3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J407AP",
		identifier: "iPad13,16",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MM9P3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM6R3",
			"MM753"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM6R3,MM753"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM713",
			"MM7E3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM713,MM7E3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM6T3",
			"MM9M3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Pink",
		storage: "64 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM6T3,MM9M3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM723",
			"MM7F3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Pink",
		storage: "256 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM723,MM7F3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MME93",
			"MME23"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Purple",
		storage: "64 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MME93,MME23"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MMED3",
			"MME63"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Purple",
		storage: "256 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MMED3,MME63"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM6U3",
			"MM773"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Blue",
		storage: "64 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM6U3,MM773"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM733",
			"MM7G3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Blue",
		storage: "256 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM733,MM7G3"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM6V3",
			"MM783"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Starlight",
		storage: "64 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM6V3,MM783"
	},
	{
		type: "iPad Air",
		generation: "iPad Air (5th generation)",
		models: [
			"MM743",
			"MM7H3"
		],
		aNumbers: [
			"A2588"
		],
		fccIds: [
			"?"
		],
		internalName: "J408AP",
		identifier: "iPad13,17",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "A2589A2591",
		modelsSearchable: "MM743,MM7H3"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0H2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0H2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0R2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0R2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0V2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0V2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0G2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0G2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0Q2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0Q2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0U2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0U2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0F2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0F2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0N2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0N2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML0T2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1584"
		],
		internalName: "J98aAP",
		identifier: "iPad6,7",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "ML0T2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML3Q2",
			"ML2K2",
			"ML3P2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1652"
		],
		internalName: "J99aAP",
		identifier: "iPad6,8",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1652",
		modelsSearchable: "ML3Q2,ML2K2,ML3P2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML3Z2",
			"ML2N2",
			"ML412"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1652"
		],
		internalName: "J99aAP",
		identifier: "iPad6,8",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1652",
		modelsSearchable: "ML3Z2,ML2N2,ML412"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML3N2",
			"ML2J2",
			"ML3O2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1652"
		],
		internalName: "J99aAP",
		identifier: "iPad6,8",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1652",
		modelsSearchable: "ML3N2,ML2J2,ML3O2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML3W2",
			"ML2M2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1652"
		],
		internalName: "J99aAP",
		identifier: "iPad6,8",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1652",
		modelsSearchable: "ML3W2,ML2M2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML3K2",
			"ML2I2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1652"
		],
		internalName: "J99aAP",
		identifier: "iPad6,8",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1652",
		modelsSearchable: "ML3K2,ML2I2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch)",
		models: [
			"ML3T2",
			"ML2L2"
		],
		aNumbers: [
			"A1584"
		],
		fccIds: [
			"BCGA1652"
		],
		internalName: "J99aAP",
		identifier: "iPad6,8",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1652",
		modelsSearchable: "ML3T2,ML2L2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMQ2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMQ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMX2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMX2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLN12"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLN12"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMP2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMP2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMW2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMW2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLN02"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLN02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMN2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMN2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMV2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMV2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLMY2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MLMY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MM172"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MM172"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MM192"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MM192"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MM1A2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1673"
		],
		internalName: "J127AP",
		identifier: "iPad6,3",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2481.0.0.2.1",
		modelsSearchable: "MM1A2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLPY2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLPY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLQ52"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLQ52"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLQ82"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLQ82"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLPX2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLPX2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLQ42"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLQ42"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLQ72"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLQ72"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLPW2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLPW2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLQ32"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLQ32"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLQ62"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLQ62"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLYJ2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLYJ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLYL2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLYL2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (9.7-inch)",
		models: [
			"MLYM2"
		],
		aNumbers: [
			"A1673"
		],
		fccIds: [
			"BCGA1674"
		],
		internalName: "J128AP",
		identifier: "iPad6,4",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "A1674A1675",
		modelsSearchable: "MLYM2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MQDD2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDD2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MP6J2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MP6J2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPL12"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPL12"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MQDC2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDC2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MP6H2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MP6H2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPL02"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPL02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MQDA2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDA2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MP6G2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MP6G2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPKY2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1670"
		],
		internalName: "J120AP",
		identifier: "iPad7,1",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPKY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MQEF2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MQEF2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPA62"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MPA62"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPLL2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Gold",
		storage: "512 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MPLL2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MQEE2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MQEE2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPA52"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MPA52"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPLK2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MPLK2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MQED2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MQED2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPA42"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MPA42"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (2nd generation)",
		models: [
			"MPLJ2"
		],
		aNumbers: [
			"A1670"
		],
		fccIds: [
			"BCGA1671"
		],
		internalName: "J121AP",
		identifier: "iPad7,2",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A1671A1821",
		modelsSearchable: "MPLJ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQDX2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDX2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPF12"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPF12"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPGK2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPGK2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQDY2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPF22"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPF22"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPGL2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Rose Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPGL2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQDW2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDW2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPF02"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPF02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPGJ2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPGJ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQDT2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MQDT2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPDY2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPDY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPGH2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1701"
		],
		internalName: "J207AP",
		identifier: "iPad7,3",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3135.0.0.2.3",
		modelsSearchable: "MPGH2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQF12"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1709",
		modelsSearchable: "MQF12"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPHJ2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1709",
		modelsSearchable: "MPHJ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPMG2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Gold",
		storage: "512 GB",
		bootrom: "A1709",
		modelsSearchable: "MPMG2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQF22"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "A1709",
		modelsSearchable: "MQF22"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPHK2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "A1709",
		modelsSearchable: "MPHK2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPMH2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Rose Gold",
		storage: "512 GB",
		bootrom: "A1709",
		modelsSearchable: "MPMH2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQF02"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1709",
		modelsSearchable: "MQF02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPHH2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1709",
		modelsSearchable: "MPHH2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPMF2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A1709",
		modelsSearchable: "MPMF2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MQEY2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1709",
		modelsSearchable: "MQEY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPHG2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1709",
		modelsSearchable: "MPHG2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (10.5-inch)",
		models: [
			"MPME2"
		],
		aNumbers: [
			"A1701"
		],
		fccIds: [
			"BCGA1709"
		],
		internalName: "J208AP",
		identifier: "iPad7,4",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A1709",
		modelsSearchable: "MPME2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXP2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317AP",
		identifier: "iPad8,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXP2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXR2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317AP",
		identifier: "iPad8,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXR2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXU2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317AP",
		identifier: "iPad8,1",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXU2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXN2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317AP",
		identifier: "iPad8,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXN2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXQ2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317AP",
		identifier: "iPad8,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXQ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXT2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317AP",
		identifier: "iPad8,1",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXT2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXW2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317xAP",
		identifier: "iPad8,2",
		color: "Silver",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXW2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MTXV2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1980"
		],
		internalName: "J317xAP",
		identifier: "iPad8,2",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTXV2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU0U2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1934",
		modelsSearchable: "MU0U2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU172"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1934",
		modelsSearchable: "MU172"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1M2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A1934",
		modelsSearchable: "MU1M2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU0M2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1934",
		modelsSearchable: "MU0M2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU102"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1934",
		modelsSearchable: "MU102"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1F2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A1934",
		modelsSearchable: "MU1F2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU222"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318xAP",
		identifier: "iPad8,4",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A1934",
		modelsSearchable: "MU222"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1V2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA1934"
		],
		internalName: "J318xAP",
		identifier: "iPad8,4",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A1934",
		modelsSearchable: "MU1V2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU0X2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1934",
		modelsSearchable: "MU0X2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1C2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1934",
		modelsSearchable: "MU1C2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1T2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A1934",
		modelsSearchable: "MU1T2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU0Q2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1934",
		modelsSearchable: "MU0Q2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU152"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1934",
		modelsSearchable: "MU152"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1J2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A1934",
		modelsSearchable: "MU1J2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU272"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318xAP",
		identifier: "iPad8,4",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A1934",
		modelsSearchable: "MU272"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1Y2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"A1979"
		],
		internalName: "J318xAP",
		identifier: "iPad8,4",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A1934",
		modelsSearchable: "MU1Y2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU0Y2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2013",
		modelsSearchable: "MU0Y2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1D2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2013",
		modelsSearchable: "MU1D2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1U2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A2013",
		modelsSearchable: "MU1U2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU0T2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2013",
		modelsSearchable: "MU0T2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU162"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2013",
		modelsSearchable: "MU162"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU1K2"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318AP",
		identifier: "iPad8,3",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A2013",
		modelsSearchable: "MU1K2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU282"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318xAP",
		identifier: "iPad8,4",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A2013",
		modelsSearchable: "MU282"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch)",
		models: [
			"MU202"
		],
		aNumbers: [
			"A1980"
		],
		fccIds: [
			"BCGA2013"
		],
		internalName: "J318xAP",
		identifier: "iPad8,4",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A2013",
		modelsSearchable: "MU202"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTEM2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320AP",
		identifier: "iPad8,5",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTEM2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTFN2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320AP",
		identifier: "iPad8,5",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTFN2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTFQ2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320AP",
		identifier: "iPad8,5",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTFQ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTEL2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320AP",
		identifier: "iPad8,5",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTEL2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTFL2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320AP",
		identifier: "iPad8,5",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTFL2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTFP2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320AP",
		identifier: "iPad8,5",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTFP2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTFT2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320xAP",
		identifier: "iPad8,6",
		color: "Silver",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTFT2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTFR2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1876"
		],
		internalName: "J320xAP",
		identifier: "iPad8,6",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MTFR2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHP2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1895",
		modelsSearchable: "MTHP2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJ62"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1895",
		modelsSearchable: "MTJ62"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJJ2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A1895",
		modelsSearchable: "MTJJ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHJ2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1895",
		modelsSearchable: "MTHJ2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHV2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1895",
		modelsSearchable: "MTHV2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJD2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A1895",
		modelsSearchable: "MTJD2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJV2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321xAP",
		identifier: "iPad8,8",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A1895",
		modelsSearchable: "MTJV2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJP2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA1985"
		],
		internalName: "J321xAP",
		identifier: "iPad8,8",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A1895",
		modelsSearchable: "MTJP2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHT2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1895",
		modelsSearchable: "MTHT2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJ92"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1895",
		modelsSearchable: "MTJ92"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJM2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A1895",
		modelsSearchable: "MTJM2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHM2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1895",
		modelsSearchable: "MTHM2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHY2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1895",
		modelsSearchable: "MTHY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJG2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A1895",
		modelsSearchable: "MTJG2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJY2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321xAP",
		identifier: "iPad8,8",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A1895",
		modelsSearchable: "MTJY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJT2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"A1983"
		],
		internalName: "J321xAP",
		identifier: "iPad8,8",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A1895",
		modelsSearchable: "MTJT2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHU2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2014",
		modelsSearchable: "MTHU2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJA2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2014",
		modelsSearchable: "MTJA2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJN2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A2014",
		modelsSearchable: "MTJN2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTHN2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2014",
		modelsSearchable: "MTHN2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJ02"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2014",
		modelsSearchable: "MTJ02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJH2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321AP",
		identifier: "iPad8,7",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A2014",
		modelsSearchable: "MTJH2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTL02"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321xAP",
		identifier: "iPad8,8",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A2014",
		modelsSearchable: "MTL02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (3rd generation)",
		models: [
			"MTJU2"
		],
		aNumbers: [
			"A1876"
		],
		fccIds: [
			"BCGA2014"
		],
		internalName: "J321xAP",
		identifier: "iPad8,8",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A2014",
		modelsSearchable: "MTJU2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MY252"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MY252"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXDD2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXDD2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXDF2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXDF2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXDH2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Silver",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXDH2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MY232"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MY232"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXDC2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXDC2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXDE2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXDE2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXDG2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2228"
		],
		internalName: "J417AP",
		identifier: "iPad8,9",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXDG2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MY2W2",
			"MY342"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MY2W2,MY342"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXE52",
			"MXEX2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MXE52,MXEX2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXE72",
			"MXF02"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MXE72,MXF02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXE92",
			"MXF22"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MXE92,MXF22"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MY2V2",
			"MY332"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MY2V2,MY332"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXE42",
			"MXEW2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MXE42,MXEW2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXE62",
			"MXEY2"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MXE62,MXEY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (2nd generation)",
		models: [
			"MXE82",
			"MXF12"
		],
		aNumbers: [
			"A2228"
		],
		fccIds: [
			"BCGA2068",
			"BCGA2230"
		],
		internalName: "J418AP",
		identifier: "iPad8,10",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A2068A2230A2231",
		modelsSearchable: "MXE82,MXF12"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MY2J2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MY2J2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXAU2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXAU2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXAW2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXAW2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXAY2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Silver",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXAY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MY2H2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MY2H2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXAT2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXAT2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXAV2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXAV2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXAX2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2229"
		],
		internalName: "J420AP",
		identifier: "iPad8,11",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "Bootrom 4172.0.0.100.14",
		modelsSearchable: "MXAX2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MY3D2",
			"MY3K2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MY3D2,MY3K2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXF62",
			"MXFY2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MXF62,MXFY2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXF82",
			"MXG12"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MXF82,MXG12"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXFA2",
			"MXG32"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Silver",
		storage: "1 TB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MXFA2,MXG32"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MY3C2",
			"MY3J2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MY3C2,MY3J2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXF52",
			"MXFX2"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MXF52,MXFX2"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXF72",
			"MXG02"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MXF72,MXG02"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (4th generation)",
		models: [
			"MXF92",
			"MXG22"
		],
		aNumbers: [
			"A2229"
		],
		fccIds: [
			"BCGA2069",
			"BCGA2232"
		],
		internalName: "J421AP",
		identifier: "iPad8,12",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "A2069A2232A2233",
		modelsSearchable: "MXF92,MXG22"
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517AP",
		identifier: "iPad13,4",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J517xAP",
		identifier: "iPad13,5",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518AP",
		identifier: "iPad13,6",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (11-inch) (3rd generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J518xAP",
		identifier: "iPad13,7",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522AP",
		identifier: "iPad13,8",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J522xAP",
		identifier: "iPad13,9",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523AP",
		identifier: "iPad13,10",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Silver",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Silver",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Silver",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Silver",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Silver",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Space Gray",
		storage: "1 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Pro",
		generation: "iPad Pro (12.9-inch) (5th generation)",
		models: [
		],
		aNumbers: [
			"?"
		],
		fccIds: [
			"?"
		],
		internalName: "J523xAP",
		identifier: "iPad13,11",
		color: "Space Gray",
		storage: "2 TB",
		bootrom: "?",
		modelsSearchable: ""
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD528",
			"MF432"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1432"
		],
		internalName: "P105AP",
		identifier: "iPad2,5",
		color: "Black & Slate",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MD528,MF432"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD529"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1432"
		],
		internalName: "P105AP",
		identifier: "iPad2,5",
		color: "Black & Slate",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD529"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD530"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1432"
		],
		internalName: "P105AP",
		identifier: "iPad2,5",
		color: "Black & Slate",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD530"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD531"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1432"
		],
		internalName: "P105AP",
		identifier: "iPad2,5",
		color: "White & Silver",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MD531"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD532"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1432"
		],
		internalName: "P105AP",
		identifier: "iPad2,5",
		color: "White & Silver",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD532"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD533"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1432"
		],
		internalName: "P105AP",
		identifier: "iPad2,5",
		color: "White & Silver",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD533"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD534",
			"ME030",
			"MF442",
			"MF743"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1454"
		],
		internalName: "P106AP",
		identifier: "iPad2,6",
		color: "Black & Slate",
		storage: "16 GB",
		bootrom: "A1454",
		modelsSearchable: "MD534,ME030,MF442,MF743"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD535",
			"ME031"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1454"
		],
		internalName: "P106AP",
		identifier: "iPad2,6",
		color: "Black & Slate",
		storage: "32 GB",
		bootrom: "A1454",
		modelsSearchable: "MD535,ME031"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD536",
			"ME032"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1454"
		],
		internalName: "P106AP",
		identifier: "iPad2,6",
		color: "Black & Slate",
		storage: "64 GB",
		bootrom: "A1454",
		modelsSearchable: "MD536,ME032"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD537",
			"ME033",
			"MF746"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1454"
		],
		internalName: "P106AP",
		identifier: "iPad2,6",
		color: "White & Silver",
		storage: "16 GB",
		bootrom: "A1454",
		modelsSearchable: "MD537,ME033,MF746"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD538",
			"ME034"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1454"
		],
		internalName: "P106AP",
		identifier: "iPad2,6",
		color: "White & Silver",
		storage: "32 GB",
		bootrom: "A1454",
		modelsSearchable: "MD538,ME034"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD539",
			"ME035"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1454"
		],
		internalName: "P106AP",
		identifier: "iPad2,6",
		color: "White & Silver",
		storage: "64 GB",
		bootrom: "A1454",
		modelsSearchable: "MD539,ME035"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD540",
			"ME215",
			"MF450",
			"MF453"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1455"
		],
		internalName: "P107AP",
		identifier: "iPad2,7",
		color: "Black & Slate",
		storage: "16 GB",
		bootrom: "A1455",
		modelsSearchable: "MD540,ME215,MF450,MF453"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD541",
			"ME216"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1455"
		],
		internalName: "P107AP",
		identifier: "iPad2,7",
		color: "Black & Slate",
		storage: "32 GB",
		bootrom: "A1455",
		modelsSearchable: "MD541,ME216"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD542",
			"ME217"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1455"
		],
		internalName: "P107AP",
		identifier: "iPad2,7",
		color: "Black & Slate",
		storage: "64 GB",
		bootrom: "A1455",
		modelsSearchable: "MD542,ME217"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD543",
			"ME218"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1455"
		],
		internalName: "P107AP",
		identifier: "iPad2,7",
		color: "White & Silver",
		storage: "16 GB",
		bootrom: "A1455",
		modelsSearchable: "MD543,ME218"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD544",
			"ME219"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1455"
		],
		internalName: "P107AP",
		identifier: "iPad2,7",
		color: "White & Silver",
		storage: "32 GB",
		bootrom: "A1455",
		modelsSearchable: "MD544,ME219"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini",
		models: [
			"MD545",
			"ME220"
		],
		aNumbers: [
			"A1432"
		],
		fccIds: [
			"BCGA1455"
		],
		internalName: "P107AP",
		identifier: "iPad2,7",
		color: "White & Silver",
		storage: "64 GB",
		bootrom: "A1455",
		modelsSearchable: "MD545,ME220"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME279"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME279"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME280"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME280"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME281"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME281"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME860"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME860"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME276"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME276"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME277"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME277"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME278"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME278"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME856"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1489"
		],
		internalName: "J85AP",
		identifier: "iPad4,4",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME856"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME814",
			"ME818",
			"MF074",
			"MF075",
			"MF076",
			"MF544"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1490",
		modelsSearchable: "ME814,ME818,MF074,MF075,MF076,MF544"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME824",
			"MF083",
			"MF084",
			"MF085",
			"MF569"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1490",
		modelsSearchable: "ME824,MF083,MF084,MF085,MF569"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME832",
			"MF089",
			"MF090",
			"MF091",
			"MF580"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1490",
		modelsSearchable: "ME832,MF089,MF090,MF091,MF580"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME840",
			"MF120",
			"MF121",
			"MF123",
			"MF594"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1490",
		modelsSearchable: "ME840,MF120,MF121,MF123,MF594"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME800",
			"MF066",
			"MF069",
			"MF070",
			"MF078",
			"MF519"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1490",
		modelsSearchable: "ME800,MF066,MF069,MF070,MF078,MF519"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME820",
			"MF080",
			"MF081",
			"MF082",
			"MF552"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1490",
		modelsSearchable: "ME820,MF080,MF081,MF082,MF552"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME828",
			"MF086",
			"MF087",
			"MF088",
			"MF575"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1490",
		modelsSearchable: "ME828,MF086,MF087,MF088,MF575"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"ME836",
			"MF116",
			"MF117",
			"MF118",
			"MF585"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1490"
		],
		internalName: "J86AP",
		identifier: "iPad4,5",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1490",
		modelsSearchable: "ME836,MF116,MF117,MF118,MF585"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF248"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1491",
		modelsSearchable: "MF248"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF252"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1491",
		modelsSearchable: "MF252"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF246"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1491",
		modelsSearchable: "MF246"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF244"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1491",
		modelsSearchable: "MF244"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF247"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1491",
		modelsSearchable: "MF247"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF251"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1491",
		modelsSearchable: "MF251"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF245"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1491",
		modelsSearchable: "MF245"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 2",
		models: [
			"MF243"
		],
		aNumbers: [
			"A1489"
		],
		fccIds: [
			"BCGA1491"
		],
		internalName: "J87AP",
		identifier: "iPad4,6",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1491",
		modelsSearchable: "MF243"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGYE2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGYE2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGY92"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGY92"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGYK2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGYK2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGNV2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGNV2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGGT2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGGT2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGP42"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGP42"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGNR2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGNR2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGGQ2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGGQ2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGP32"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1599"
		],
		internalName: "J85mAP",
		identifier: "iPad4,7",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "MGP32"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH3G2",
			"MH0F2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Gold",
		storage: "16 GB",
		bootrom: "A1600",
		modelsSearchable: "MH3G2,MH0F2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH392"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1600",
		modelsSearchable: "MH392"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH3N2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1600",
		modelsSearchable: "MH3N2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH3F2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1600",
		modelsSearchable: "MH3F2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH382"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1600",
		modelsSearchable: "MH382"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH3M2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1600",
		modelsSearchable: "MH3M2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH3E2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1600",
		modelsSearchable: "MH3E2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH372"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1600",
		modelsSearchable: "MH372"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MH3L2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1600"
		],
		internalName: "J86mAP",
		identifier: "iPad4,8",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1600",
		modelsSearchable: "MH3L2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGYR2",
			"MGYY2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Gold",
		storage: "16 GB",
		bootrom: "A1601",
		modelsSearchable: "MGYR2,MGYY2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGYN2",
			"MGYW2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1601",
		modelsSearchable: "MGYN2,MGYW2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGYU2",
			"MH012"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1601",
		modelsSearchable: "MGYU2,MH012"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGHW2",
			"MGPW2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1601",
		modelsSearchable: "MGHW2,MGPW2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGJ12",
			"MGQ12"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1601",
		modelsSearchable: "MGJ12,MGQ12"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGJ32",
			"MGQ32"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1601",
		modelsSearchable: "MGJ32,MGQ32"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGHV2",
			"MGPV2"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1601",
		modelsSearchable: "MGHV2,MGPV2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGJ02",
			"MGQ02"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1601",
		modelsSearchable: "MGJ02,MGQ02"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 3",
		models: [
			"MGJ22",
			"MGQ22"
		],
		aNumbers: [
			"A1599"
		],
		fccIds: [
			"BCGA1601"
		],
		internalName: "J87mAP",
		identifier: "iPad4,9",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1601",
		modelsSearchable: "MGJ22,MGQ22"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK6L2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK6L2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MNY32"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MNY32"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK9J2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK9J2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK9Q2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK9Q2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK6K2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK6K2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MNY22"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MNY22"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK9H2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK9H2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK9P2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK9P2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK6J2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK6J2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MNY12"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MNY12"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK9G2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK9G2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK9N2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1538"
		],
		internalName: "J96AP",
		identifier: "iPad5,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MK9N2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK882",
			"MK712"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Gold",
		storage: "16 GB",
		bootrom: "A1550",
		modelsSearchable: "MK882,MK712"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MNWR2",
			"MNWG2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1550",
		modelsSearchable: "MNWR2,MNWG2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK8C2",
			"MK752"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1550",
		modelsSearchable: "MK8C2,MK752"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK8F2",
			"MK782"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1550",
		modelsSearchable: "MK8F2,MK782"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK872",
			"MK702",
			"MK7X2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1550",
		modelsSearchable: "MK872,MK702,MK7X2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MNWQ2",
			"MNWF2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1550",
		modelsSearchable: "MNWQ2,MNWF2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK8A2",
			"MK732"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1550",
		modelsSearchable: "MK8A2,MK732"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK8E2",
			"MK772"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1550",
		modelsSearchable: "MK8E2,MK772"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK862",
			"MK7L2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1550",
		modelsSearchable: "MK862,MK7L2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MNWP2"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1550",
		modelsSearchable: "MNWP2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK892",
			"MK722"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1550",
		modelsSearchable: "MK892,MK722"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini 4",
		models: [
			"MK8D2",
			"MK762"
		],
		aNumbers: [
			"A1538"
		],
		fccIds: [
			"BCGA1550"
		],
		internalName: "J97AP",
		identifier: "iPad5,2",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "A1550",
		modelsSearchable: "MK8D2,MK762"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUQY2"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2133"
		],
		internalName: "J210AP",
		identifier: "iPad11,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUQY2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUU62"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2133"
		],
		internalName: "J210AP",
		identifier: "iPad11,1",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUU62"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUQX2"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2133"
		],
		internalName: "J210AP",
		identifier: "iPad11,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUQX2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUU52"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2133"
		],
		internalName: "J210AP",
		identifier: "iPad11,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUU52"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUQW2"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2133"
		],
		internalName: "J210AP",
		identifier: "iPad11,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUQW2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUU32"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2133"
		],
		internalName: "J210AP",
		identifier: "iPad11,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MUU32"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUXH2",
			"MUX72"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2124",
			"BCGA2126"
		],
		internalName: "J211AP",
		identifier: "iPad11,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A2124A2125A2126",
		modelsSearchable: "MUXH2,MUX72"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUXP2",
			"MUXE2"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2124",
			"BCGA2126"
		],
		internalName: "J211AP",
		identifier: "iPad11,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A2124A2125A2126",
		modelsSearchable: "MUXP2,MUXE2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUXG2",
			"MUX62"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2124",
			"BCGA2126"
		],
		internalName: "J211AP",
		identifier: "iPad11,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2124A2125A2126",
		modelsSearchable: "MUXG2,MUX62"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUXN2",
			"MUXD2"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2124",
			"BCGA2126"
		],
		internalName: "J211AP",
		identifier: "iPad11,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2124A2125A2126",
		modelsSearchable: "MUXN2,MUXD2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUXF2",
			"MUX52"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2124",
			"BCGA2126"
		],
		internalName: "J211AP",
		identifier: "iPad11,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2124A2125A2126",
		modelsSearchable: "MUXF2,MUX52"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (5th generation)",
		models: [
			"MUXM2",
			"MUXC2"
		],
		aNumbers: [
			"A2133"
		],
		fccIds: [
			"BCGA2124",
			"BCGA2126"
		],
		internalName: "J211AP",
		identifier: "iPad11,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2124A2125A2126",
		modelsSearchable: "MUXM2,MUXC2"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK7M3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MK7M3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK7T3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MK7T3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MLWL3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Pink",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MLWL3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MLWR3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Pink",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MLWR3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK7R3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Purple",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MK7R3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK7X3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Purple",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MK7X3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK7P3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Starlight",
		storage: "64 GB",
		bootrom: "?",
		modelsSearchable: "MK7P3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK7V3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2567"
		],
		internalName: "J310AP",
		identifier: "iPad14,1",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MK7V3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK893"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MK893"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK8F3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MK8F3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MLX43"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Pink",
		storage: "64 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MLX43"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MLX93"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Pink",
		storage: "256 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MLX93"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK8E3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Purple",
		storage: "64 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MK8E3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK8K3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Purple",
		storage: "256 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MK8K3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK8C3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Starlight",
		storage: "64 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MK8C3"
	},
	{
		type: "iPad Mini",
		generation: "iPad mini (6th generation)",
		models: [
			"MK8H3"
		],
		aNumbers: [
			"A2567"
		],
		fccIds: [
			"BCGA2568",
			"BCGA2569"
		],
		internalName: "J311AP",
		identifier: "iPad14,2",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "A2568A2569",
		modelsSearchable: "MK8H3"
	}
];

var iphones = [
	{
		type: "iPhone",
		generation: "iPhone",
		models: [
			"MA501"
		],
		aNumbers: [
			"A1203"
		],
		fccIds: [
			"BCGA1203"
		],
		internalName: "M68AP",
		identifier: "iPhone1,1",
		color: "Black",
		storage: "4 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MA501"
	},
	{
		type: "iPhone",
		generation: "iPhone",
		models: [
			"MA712"
		],
		aNumbers: [
			"A1203"
		],
		fccIds: [
			"BCGA1203"
		],
		internalName: "M68AP",
		identifier: "iPhone1,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MA712"
	},
	{
		type: "iPhone",
		generation: "iPhone",
		models: [
			"MB384"
		],
		aNumbers: [
			"A1203"
		],
		fccIds: [
			"BCGA1203"
		],
		internalName: "M68AP",
		identifier: "iPhone1,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MB384"
	},
	{
		type: "iPhone",
		generation: "iPhone 3G",
		models: [
			"MB046",
			"MB489",
			"MB639",
			"MB702",
			"MC176",
			"MB490",
			"MB757"
		],
		aNumbers: [
			"A1241",
			"A1324"
		],
		fccIds: [
			"BCGA1241"
		],
		internalName: "N82AP",
		identifier: "iPhone1,2",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MB046,MB489,MB639,MB702,MC176,MB490,MB757"
	},
	{
		type: "iPhone",
		generation: "iPhone 3G",
		models: [
			"MB048",
			"MB496",
			"MB497",
			"MB704",
			"MB631"
		],
		aNumbers: [
			"A1241",
			"A1324"
		],
		fccIds: [
			"BCGA1241"
		],
		internalName: "N82AP",
		identifier: "iPhone1,2",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MB048,MB496,MB497,MB704,MB631"
	},
	{
		type: "iPhone",
		generation: "iPhone 3G",
		models: [
			"MB499",
			"MB500",
			"MB501",
			"MB632",
			"MB705"
		],
		aNumbers: [
			"A1241",
			"A1324"
		],
		fccIds: [
			"BCGA1241"
		],
		internalName: "N82AP",
		identifier: "iPhone1,2",
		color: "Black",
		storage: "White",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MB499,MB500,MB501,MB632,MB705"
	},
	{
		type: "iPhone",
		generation: "iPhone 3GS",
		models: [
			"MC555",
			"MC640",
			"MC637"
		],
		aNumbers: [
			"A1303",
			"A1325"
		],
		fccIds: [
			"BCGA1303A",
			"BCGA1303B"
		],
		internalName: "N88AP",
		identifier: "iPhone2,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom 359.3Bootrom 359.3.2",
		modelsSearchable: "MC555,MC640,MC637"
	},
	{
		type: "iPhone",
		generation: "iPhone 3GS",
		models: [
			"MB715",
			"MB719",
			"MB735",
			"MC131",
			"MC135",
			"MC139",
			"MC143"
		],
		aNumbers: [
			"A1303",
			"A1325"
		],
		fccIds: [
			"BCGA1303A",
			"BCGA1303B"
		],
		internalName: "N88AP",
		identifier: "iPhone2,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 359.3Bootrom 359.3.2",
		modelsSearchable: "MB715,MB719,MB735,MC131,MC135,MC139,MC143"
	},
	{
		type: "iPhone",
		generation: "iPhone 3GS",
		models: [
			"MB717",
			"MB737",
			"MC133",
			"MC137",
			"MC141",
			"MC158"
		],
		aNumbers: [
			"A1303",
			"A1325"
		],
		fccIds: [
			"BCGA1303A",
			"BCGA1303B"
		],
		internalName: "N88AP",
		identifier: "iPhone2,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 359.3Bootrom 359.3.2",
		modelsSearchable: "MB717,MB737,MC133,MC137,MC141,MC158"
	},
	{
		type: "iPhone",
		generation: "iPhone 3GS",
		models: [
			"MB716",
			"MB736",
			"MC132",
			"MC136",
			"MC140",
			"MC144"
		],
		aNumbers: [
			"A1303",
			"A1325"
		],
		fccIds: [
			"BCGA1303A",
			"BCGA1303B"
		],
		internalName: "N88AP",
		identifier: "iPhone2,1",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 359.3Bootrom 359.3.2",
		modelsSearchable: "MB716,MB736,MC132,MC136,MC140,MC144"
	},
	{
		type: "iPhone",
		generation: "iPhone 3GS",
		models: [
			"MB718",
			"MB738",
			"MC134",
			"MC138",
			"MC160"
		],
		aNumbers: [
			"A1303",
			"A1325"
		],
		fccIds: [
			"BCGA1303A",
			"BCGA1303B"
		],
		internalName: "N88AP",
		identifier: "iPhone2,1",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 359.3Bootrom 359.3.2",
		modelsSearchable: "MB718,MB738,MC134,MC138,MC160"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MD126",
			"MD127",
			"MD128"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90AP",
		identifier: "iPhone3,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MD126,MD127,MD128"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC318",
			"MC603",
			"MC608"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90AP",
		identifier: "iPhone3,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC318,MC603,MC608"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC319",
			"MC605",
			"MC610"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90AP",
		identifier: "iPhone3,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC319,MC605,MC610"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MD196",
			"MD197",
			"MD198"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90AP",
		identifier: "iPhone3,1",
		color: "White",
		storage: "8 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MD196,MD197,MD198"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC604",
			"MC536",
			"MC607",
			"MC609"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90AP",
		identifier: "iPhone3,1",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC604,MC536,MC607,MC609"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC606",
			"MC537",
			"MC611"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90AP",
		identifier: "iPhone3,1",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC606,MC537,MC611"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MD128",
			"ME798"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90bAP",
		identifier: "iPhone3,2",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MD128,ME798"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"ME799"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2380A",
			"BCG-E2380B"
		],
		internalName: "N90bAP",
		identifier: "iPhone3,2",
		color: "Black",
		storage: "White",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "ME799"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MD146",
			"MD439",
			"MD873",
			"ME639"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2422A",
			"BCG-E2422B"
		],
		internalName: "N92AP",
		identifier: "iPhone3,3",
		color: "Black",
		storage: "8 GB",
		bootrom: "A1349",
		modelsSearchable: "MD146,MD439,MD873,ME639"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC676"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2422A",
			"BCG-E2422B"
		],
		internalName: "N92AP",
		identifier: "iPhone3,3",
		color: "Black",
		storage: "16 GB",
		bootrom: "A1349",
		modelsSearchable: "MC676"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC678"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2422A",
			"BCG-E2422B"
		],
		internalName: "N92AP",
		identifier: "iPhone3,3",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1349",
		modelsSearchable: "MC678"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MD200",
			"MD440",
			"MD874"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2422A",
			"BCG-E2422B"
		],
		internalName: "N92AP",
		identifier: "iPhone3,3",
		color: "White",
		storage: "8 GB",
		bootrom: "A1349",
		modelsSearchable: "MD200,MD440,MD874"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC677"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2422A",
			"BCG-E2422B"
		],
		internalName: "N92AP",
		identifier: "iPhone3,3",
		color: "White",
		storage: "16 GB",
		bootrom: "A1349",
		modelsSearchable: "MC677"
	},
	{
		type: "iPhone",
		generation: "iPhone 4",
		models: [
			"MC679"
		],
		aNumbers: [
			"A1332"
		],
		fccIds: [
			"BCG-E2422A",
			"BCG-E2422B"
		],
		internalName: "N92AP",
		identifier: "iPhone3,3",
		color: "White",
		storage: "32 GB",
		bootrom: "A1349",
		modelsSearchable: "MC679"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"ME259",
			"MF257",
			"MF261",
			"MF263",
			"MF265",
			"MF269",
			"MF259",
			"MF267"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "ME259,MF257,MF261,MF263,MF265,MF269,MF259,MF267"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MC918",
			"MC922",
			"MD234",
			"MD235",
			"MD276",
			"MD377",
			"MD865",
			"ME804",
			"MD236",
			"MD251",
			"MD254"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC918,MC922,MD234,MD235,MD276,MD377,MD865,ME804,MD236,MD251,MD254"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MC919",
			"MC923",
			"MD241",
			"MD242",
			"MD278",
			"MD379",
			"MD261",
			"MD243"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC919,MC923,MD241,MD242,MD278,MD379,MD261,MD243"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MD257",
			"MD258",
			"MD269",
			"MD280",
			"MD381",
			"MD259",
			"MD270"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MD257,MD258,MD269,MD280,MD381,MD259,MD270"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MF258",
			"MF260",
			"MF262",
			"MF264",
			"MF266",
			"MF270",
			"MF268"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "White",
		storage: "8 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MF258,MF260,MF262,MF264,MF266,MF270,MF268"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MC920",
			"MC924",
			"MD237",
			"MD239",
			"MD277",
			"MD378",
			"MD866",
			"ME805",
			"MD240",
			"MD920"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC920,MC924,MD237,MD239,MD277,MD378,MD866,ME805,MD240,MD920"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MC921",
			"MD244",
			"MD279",
			"MD380",
			"MD246",
			"MD245",
			"MC925"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MC921,MD244,MD279,MD380,MD246,MD245,MC925"
	},
	{
		type: "iPhone",
		generation: "iPhone 4S",
		models: [
			"MD260",
			"MD271",
			"MD272",
			"MD281",
			"MD382",
			"MD262"
		],
		aNumbers: [
			"A1387",
			"A1431"
		],
		fccIds: [
			"BCG-E2430A"
		],
		internalName: "N94AP",
		identifier: "iPhone4,1",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 838.3",
		modelsSearchable: "MD260,MD271,MD272,MD281,MD382,MD262"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD293",
			"MD634",
			"MD638",
			"ME486"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"BCG-E2599A"
		],
		internalName: "N41AP",
		identifier: "iPhone5,1",
		color: "Black & Slate",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD293,MD634,MD638,ME486"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD295",
			"MD636",
			"ME488",
			"MD640"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"BCG-E2599A"
		],
		internalName: "N41AP",
		identifier: "iPhone5,1",
		color: "Black & Slate",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD295,MD636,ME488,MD640"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD642",
			"MD644",
			"ME490",
			"MD646"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"BCG-E2599A"
		],
		internalName: "N41AP",
		identifier: "iPhone5,1",
		color: "Black & Slate",
		storage: "64 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD642,MD644,ME490,MD646"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD294",
			"MD635",
			"ME487",
			"MD639"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"BCG-E2599A"
		],
		internalName: "N41AP",
		identifier: "iPhone5,1",
		color: "White & Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD294,MD635,ME487,MD639"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD296",
			"MD637",
			"ME489",
			"MD641"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"BCG-E2599A"
		],
		internalName: "N41AP",
		identifier: "iPhone5,1",
		color: "White & Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD296,MD637,ME489,MD641"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD643",
			"MD645",
			"ME491",
			"MD647"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"BCG-E2599A"
		],
		internalName: "N41AP",
		identifier: "iPhone5,1",
		color: "White & Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD643,MD645,ME491,MD647"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD297",
			"MD654",
			"MD656",
			"ME039",
			"MD097",
			"MD669",
			"MD671"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"A1429",
			"A1442"
		],
		internalName: "N42AP",
		identifier: "iPhone5,2",
		color: "Black & Slate",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD297,MD654,MD656,ME039,MD097,MD669,MD671"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD299",
			"MD658",
			"MD660",
			"ME041"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"A1429",
			"A1442"
		],
		internalName: "N42AP",
		identifier: "iPhone5,2",
		color: "Black & Slate",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD299,MD658,MD660,ME041"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD662",
			"MD664",
			"MD667",
			"ME043"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"A1429",
			"A1442"
		],
		internalName: "N42AP",
		identifier: "iPhone5,2",
		color: "Black & Slate",
		storage: "64 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD662,MD664,MD667,ME043"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD298",
			"MD655",
			"MD657",
			"ME040",
			"MD105",
			"MD672"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"A1429",
			"A1442"
		],
		internalName: "N42AP",
		identifier: "iPhone5,2",
		color: "White & Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD298,MD655,MD657,ME040,MD105,MD672"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD300",
			"MD659",
			"MD661",
			"ME042",
			"MD144"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"A1429",
			"A1442"
		],
		internalName: "N42AP",
		identifier: "iPhone5,2",
		color: "White & Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD300,MD659,MD661,ME042,MD144"
	},
	{
		type: "iPhone",
		generation: "iPhone 5",
		models: [
			"MD663",
			"MD665",
			"MD668",
			"ME044"
		],
		aNumbers: [
			"A1428"
		],
		fccIds: [
			"A1429",
			"A1442"
		],
		internalName: "N42AP",
		identifier: "iPhone5,2",
		color: "White & Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MD663,MD665,MD668,ME044"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME507",
			"ME531",
			"ME543"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Blue",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "ME507,ME531,ME543"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF136",
			"MF151"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Blue",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MF136,MF151"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME508",
			"ME496",
			"ME544",
			"ME568"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Green",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "ME508,ME496,ME544,ME568"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF137",
			"MF152"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Green",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MF137,MF152"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME509",
			"ME533",
			"ME545"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Pink",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "ME509,ME533,ME545"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF138",
			"MF133",
			"MF153"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Pink",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MF138,MF133,MF153"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME505",
			"ME493",
			"ME541",
			"ME565"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "ME505,ME493,ME541,ME565"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF134",
			"MF149"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MF134,MF149"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MGF12"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Yellow",
		storage: "8 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MGF12"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME506"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Yellow",
		storage: "16 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "ME506"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF135"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2644A"
		],
		internalName: "N48AP",
		identifier: "iPhone5,3",
		color: "Yellow",
		storage: "32 GB",
		bootrom: "Bootrom 1145.3",
		modelsSearchable: "MF135"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MG0T2",
			"MG1U2",
			"MG902"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Blue",
		storage: "8 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MG0T2,MG1U2,MG902"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME555",
			"ME501",
			"ME561",
			"MF323",
			"MF333"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Blue",
		storage: "16 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "ME555,ME501,ME561,MF323,MF333"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF156"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Blue",
		storage: "32 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MF156"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MG0V2(?)",
			"MG1W2(?)",
			"MG912"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Green",
		storage: "8 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MG0V2(?),MG1W2(?),MG912"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME556",
			"ME502",
			"MF324"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Green",
		storage: "16 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "ME556,ME502,MF324"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF157",
			"MF095",
			"MF329"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Green",
		storage: "32 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MF157,MF095,MF329"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MG0V2(?)",
			"MG1W2(?)",
			"MG922"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Pink",
		storage: "8 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MG0V2(?),MG1W2(?),MG922"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME557",
			"ME503"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Pink",
		storage: "16 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "ME557,ME503"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF158",
			"MF330"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Pink",
		storage: "32 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MF158,MF330"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MG0Q2",
			"MG1Q2",
			"MG8X2"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "White",
		storage: "8 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MG0Q2,MG1Q2,MG8X2"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME553",
			"ME499",
			"MF321"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "White",
		storage: "16 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "ME553,ME499,MF321"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF154",
			"MF326"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "White",
		storage: "32 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MF154,MF326"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MG0R2",
			"MG1R2",
			"MG8Y2"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Yellow",
		storage: "8 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MG0R2,MG1R2,MG8Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"ME554",
			"MF322"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Yellow",
		storage: "16 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "ME554,MF322"
	},
	{
		type: "iPhone",
		generation: "iPhone 5c",
		models: [
			"MF155",
			"MF327"
		],
		aNumbers: [
			"A1456",
			"A1532"
		],
		fccIds: [
			"BCG-E2694A",
			"BCG-E2694B"
		],
		internalName: "N49AP",
		identifier: "iPhone5,4",
		color: "Yellow",
		storage: "32 GB",
		bootrom: "A1507A1516[1]A1526A1529",
		modelsSearchable: "MF155,MF327"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME298",
			"ME307",
			"ME325",
			"ME343",
			"ME334"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME298,ME307,ME325,ME343,ME334"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME301",
			"ME310",
			"ME328",
			"ME346",
			"ME337"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME301,ME310,ME328,ME346,ME337"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME304",
			"ME313",
			"ME331",
			"ME349",
			"ME340"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME304,ME313,ME331,ME349,ME340"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME297",
			"ME306",
			"ME324",
			"ME333",
			"ME342"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME297,ME306,ME324,ME333,ME342"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME300",
			"ME309",
			"ME327",
			"ME345",
			"ME336"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME300,ME309,ME327,ME345,ME336"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME303",
			"ME312",
			"ME348",
			"ME339",
			"ME330",
			"MF359"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME303,ME312,ME348,ME339,ME330,MF359"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME296",
			"ME305",
			"ME323",
			"ME341",
			"ME332",
			"MF797"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME296,ME305,ME323,ME341,ME332,MF797"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME299",
			"ME308",
			"ME326",
			"ME344",
			"ME335",
			"MF384"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME299,ME308,ME326,ME344,ME335,MF384"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME302",
			"ME311",
			"ME329",
			"ME347",
			"ME338"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2642A"
		],
		internalName: "N51AP",
		identifier: "iPhone6,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1704.10",
		modelsSearchable: "ME302,ME311,ME329,ME347,ME338"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME434",
			"MF354",
			"MF398",
			"MF363"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Gold",
		storage: "16 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME434,MF354,MF398,MF363"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME437",
			"MF357"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME437,MF357"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME440",
			"MF360"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME440,MF360"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME433",
			"MF353",
			"MF362"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Silver",
		storage: "16 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME433,MF353,MF362"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME436",
			"MF356"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME436,MF356"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME439"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME439"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME432",
			"MF352"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME432,MF352"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME435",
			"MF355"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME435,MF355"
	},
	{
		type: "iPhone",
		generation: "iPhone 5s",
		models: [
			"ME438",
			"MF358"
		],
		aNumbers: [
			"A1453",
			"A1533"
		],
		fccIds: [
			"BCG-E2643A",
			"BCG-E2643B"
		],
		internalName: "N53AP",
		identifier: "iPhone6,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1457A1518[1]A1528[1]A1530",
		modelsSearchable: "ME438,MF358"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3D2",
			"MG492",
			"MG4Q2",
			"MG562",
			"MG5Y2",
			"MG6C2"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3D2,MG492,MG4Q2,MG562,MG5Y2,MG6C2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MQ3E2"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Gold",
		storage: "32 GB[2]",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MQ3E2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3L2",
			"MG4J2",
			"MG502",
			"MG652",
			"MG6J2",
			"MG842"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3L2,MG4J2,MG502,MG652,MG6J2,MG842"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3G2",
			"MG4E2",
			"MG4V2",
			"MG622"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3G2,MG4E2,MG4V2,MG622"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3C2",
			"MG4P2",
			"MG482",
			"MG5X2",
			"MG552",
			"MG6A2",
			"MG7W2"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3C2,MG4P2,MG482,MG5X2,MG552,MG6A2,MG7W2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3K2",
			"MG4H2",
			"MG4X2",
			"MG5C2",
			"MG6H2",
			"MG642",
			"MG822"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3K2,MG4H2,MG4X2,MG5C2,MG6H2,MG642,MG822"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3F2",
			"MG4C2",
			"MG612"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3F2,MG4C2,MG612"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3A2",
			"MG4N2",
			"MG472",
			"MG5H2",
			"MG5W2",
			"MG542",
			"MG692"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3A2,MG4N2,MG472,MG5H2,MG5W2,MG542,MG692"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MQ3D2",
			"MQ462"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Space Gray",
		storage: "32 GB[2]",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MQ3D2,MQ462"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3H2",
			"MG4F2",
			"MG4W2",
			"MG5A2",
			"MG6G2",
			"MG632"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3H2,MG4F2,MG4W2,MG5A2,MG6G2,MG632"
	},
	{
		type: "iPhone",
		generation: "iPhone 6",
		models: [
			"MG3E2",
			"MG4A2",
			"MG4R2",
			"MG602"
		],
		aNumbers: [
			"A1549",
			"A1586",
			"A1589"
		],
		fccIds: [
			"BCG-E2816A"
		],
		internalName: "N61AP",
		identifier: "iPhone7,2",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MG3E2,MG4A2,MG4R2,MG602"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAA2",
			"MGAN2",
			"MGC12",
			"MGCM2",
			"MGCX2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAA2,MGAN2,MGC12,MGCM2,MGCX2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAK2",
			"MGAW2",
			"MGC72",
			"MGCU2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAK2,MGAW2,MGC72,MGCU2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAF2",
			"MGAR2",
			"MGC42",
			"MGCQ2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAF2,MGAR2,MGC42,MGCQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGA92",
			"MGC92",
			"MGAM2",
			"MGC02",
			"MGCL2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGA92,MGC92,MGAM2,MGC02,MGCL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAJ2",
			"MGAV2",
			"MGC62",
			"MGCT2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAJ2,MGAV2,MGC62,MGCT2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAE2",
			"MGAQ2",
			"MGC32",
			"MGCP2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAE2,MGAQ2,MGC32,MGCP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGA82",
			"MGAL2",
			"MGAX2",
			"MGCK2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGA82,MGAL2,MGAX2,MGCK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAH2",
			"MGAU2",
			"MGC52",
			"MGCR2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAH2,MGAU2,MGC52,MGCR2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6 Plus",
		models: [
			"MGAC2",
			"MGAP2",
			"MGC22",
			"MGCN2"
		],
		aNumbers: [
			"A1522",
			"A1524",
			"A1593"
		],
		fccIds: [
			"BCG-E2817A"
		],
		internalName: "N56AP",
		identifier: "iPhone7,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MGAC2,MGAP2,MGC22,MGCN2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQL2",
			"MKQ72",
			"MKR12",
			"MKRE2",
			"MKRW2",
			"MKT92",
			"ML7E2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQL2,MKQ72,MKR12,MKRE2,MKRW2,MKT92,ML7E2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MN0P2",
			"MN172",
			"MN1K2",
			"MN1U2",
			"MN1Y2",
			"MN112"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN0P2,MN172,MN1K2,MN1U2,MN1Y2,MN112"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQC2",
			"MKQQ2",
			"MKR52",
			"MKRJ2",
			"MKT12",
			"MKTE2",
			"ML7J2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQC2,MKQQ2,MKR52,MKRJ2,MKT12,MKTE2,ML7J2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQG2",
			"MKQV2",
			"MKR92",
			"MKRP2",
			"MKT52",
			"MKTJ2",
			"ML7N2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQG2,MKQV2,MKR92,MKRP2,MKT52,MKTJ2,ML7N2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQM2",
			"MKQ82",
			"MKRF2",
			"MKRX2",
			"MKR22",
			"MKTA2",
			"ML7F2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Rose Gold",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQM2,MKQ82,MKRF2,MKRX2,MKR22,MKTA2,ML7F2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MN0V2",
			"MN192",
			"MN1L2",
			"MN1V2",
			"MN202",
			"MN122"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN0V2,MN192,MN1L2,MN1V2,MN202,MN122"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQD2",
			"MKQR2",
			"MKR62",
			"MKRK2",
			"MKT22",
			"MKTF2",
			"ML7K2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQD2,MKQR2,MKR62,MKRK2,MKT22,MKTF2,ML7K2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQH2",
			"MKQW2",
			"MKRA2",
			"MKRQ2",
			"MKT62",
			"MKTK2",
			"ML7P2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQH2,MKQW2,MKRA2,MKRQ2,MKT62,MKTK2,ML7P2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQ62",
			"MKQK2",
			"MKQY2",
			"MKRD2",
			"MKRT2",
			"MKT82",
			"ML7D2",
			"NKQJ2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQ62,MKQK2,MKQY2,MKRD2,MKRT2,MKT82,ML7D2,NKQJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MN0N2",
			"MN162",
			"MN1G2",
			"MN1Q2",
			"MN1X2",
			"MN0X2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN0N2,MN162,MN1G2,MN1Q2,MN1X2,MN0X2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQA2",
			"MKQP2",
			"MKR42",
			"MKRH2",
			"MKT02",
			"MKTD2",
			"ML7H2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQA2,MKQP2,MKR42,MKRH2,MKT02,MKTD2,ML7H2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQF2",
			"MKQU2",
			"MKR82",
			"MKRM2",
			"MKT42",
			"MKTH2",
			"ML7M2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQF2,MKQU2,MKR82,MKRM2,MKT42,MKTH2,ML7M2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQ52",
			"MKQJ2",
			"MKQX2",
			"MKRC2",
			"MKRR2",
			"MKT72",
			"ML7C2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQ52,MKQJ2,MKQX2,MKRC2,MKRR2,MKT72,ML7C2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MN0M2",
			"MN132",
			"MN1E2",
			"MN1M2",
			"MN1W2",
			"MN0W2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN0M2,MN132,MN1E2,MN1M2,MN1W2,MN0W2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQN2",
			"MKQ92",
			"MKR32",
			"MKRG2",
			"MKRY2",
			"MKTC2",
			"ML7G2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQN2,MKQ92,MKR32,MKRG2,MKRY2,MKTC2,ML7G2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s",
		models: [
			"MKQE2",
			"MKQT2",
			"MKR72",
			"MKRL2",
			"MKT32",
			"MKTG2",
			"ML7L2"
		],
		aNumbers: [
			"A1633",
			"A1688",
			"A1691",
			"A1700"
		],
		fccIds: [
			"BCG-E2946A"
		],
		internalName: "N71APN71mAP",
		identifier: "iPhone8,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKQE2,MKQT2,MKR72,MKRL2,MKT32,MKTG2,ML7L2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKTN2",
			"MKU32",
			"MKUN2",
			"MKV62",
			"MKVQ2",
			"MKW72",
			"ML6D2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKTN2,MKU32,MKUN2,MKV62,MKVQ2,MKW72,ML6D2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MN2X2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN2X2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKTT2",
			"MKU82",
			"MKUV2",
			"MKVD2",
			"MKVX2",
			"MKWD2",
			"ML6H2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKTT2,MKU82,MKUV2,MKVD2,MKVX2,MKWD2,ML6H2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKTX2",
			"MKUF2",
			"MKV12",
			"MKVH2",
			"MKW22",
			"MKWH2",
			"ML6M2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKTX2,MKUF2,MKV12,MKVH2,MKW22,MKWH2,ML6M2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKU52",
			"ML6E2",
			"MKTP2",
			"MKUP2",
			"MKV72",
			"MKVU2",
			"MKW82"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Rose Gold",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKU52,ML6E2,MKTP2,MKUP2,MKV72,MKVU2,MKW82"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MN2Y2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN2Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKU92",
			"ML6J2",
			"MKTU2",
			"MKUW2",
			"MKVE2",
			"MKVY2",
			"MKWE2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKU92,ML6J2,MKTU2,MKUW2,MKVE2,MKVY2,MKWE2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKUG2",
			"MKV22",
			"ML6N2",
			"MKVJ2",
			"MKTY2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKUG2,MKV22,ML6N2,MKVJ2,MKTY2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKTM2",
			"MKU22",
			"MKUJ2",
			"MKV52",
			"MKVP2",
			"MKW62",
			"ML6C2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKTM2,MKU22,MKUJ2,MKV52,MKVP2,MKW62,ML6C2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKTR2",
			"MKU72",
			"MKUU2",
			"MKV92",
			"MKVW2",
			"MKWC2",
			"ML6G2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKTR2,MKU72,MKUU2,MKV92,MKVW2,MKWC2,ML6G2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKTW2",
			"MKUE2",
			"MKUY2",
			"MKVG2",
			"MKW12",
			"MKWG2",
			"ML6L2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKTW2,MKUE2,MKUY2,MKVG2,MKW12,MKWG2,ML6L2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKU12",
			"ML6A2",
			"MKV32",
			"MKTL2",
			"MKUH2",
			"MKVN2",
			"MKW52"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKU12,ML6A2,MKV32,MKTL2,MKUH2,MKVN2,MKW52"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MN2V2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MN2V2"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKU62",
			"ML6F2",
			"MKTQ2",
			"MKUQ2",
			"MKV82",
			"MKVV2",
			"MKW92",
			"ML642"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKU62,ML6F2,MKTQ2,MKUQ2,MKV82,MKVV2,MKW92,ML642"
	},
	{
		type: "iPhone",
		generation: "iPhone 6s Plus",
		models: [
			"MKUD2",
			"ML6K2",
			"MKTV2",
			"MKUX2",
			"MKVF2",
			"MKW02",
			"MKWF2"
		],
		aNumbers: [
			"A1634",
			"A1687",
			"A1690",
			"A1699"
		],
		fccIds: [
			"BCG-E2944A"
		],
		internalName: "N66APN66mAP",
		identifier: "iPhone8,2",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MKUD2,ML6K2,MKTV2,MKUX2,MKVF2,MKW02,MKWF2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLXH2",
			"MLXW2",
			"MLY12",
			"MLY52",
			"MLY92",
			"MLXM2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLXH2,MLXW2,MLY12,MLY52,MLY92,MLXM2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP8D2",
			"MP8R2",
			"MP8H2",
			"MP8M2",
			"MP7V2",
			"MP842"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP8D2,MP8R2,MP8H2,MP8M2,MP7V2,MP842"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLXK2",
			"MLXY2",
			"MLY32",
			"MLY72",
			"MLYC2",
			"MLXP2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLXK2,MLXY2,MLY32,MLY72,MLYC2,MLXP2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP952",
			"MP9J2",
			"MP992",
			"MP9E2",
			"MP802",
			"MP882"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP952,MP9J2,MP992,MP9E2,MP802,MP882"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLXJ2",
			"MLXX2",
			"MLY22",
			"MLY62",
			"MLYA2",
			"MLXN2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Rose Gold",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLXJ2,MLXX2,MLY22,MLY62,MLYA2,MLXN2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP8E2",
			"MP8T2",
			"MP8J2",
			"MP8N2",
			"MP7W2",
			"MP852"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP8E2,MP8T2,MP8J2,MP8N2,MP7W2,MP852"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLXL2",
			"MLY02",
			"MLY42",
			"MLY82",
			"MLYD2",
			"MLXQ2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Rose Gold",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLXL2,MLY02,MLY42,MLY82,MLYD2,MLXQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP962",
			"MP9K2",
			"MP9A2",
			"MP9F2",
			"MP812",
			"MP892"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP962,MP9K2,MP9A2,MP9F2,MP812,MP892"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLLM2",
			"MLLV2",
			"MLLX2",
			"MLM02",
			"MLM32",
			"MLLP2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLLM2,MLLV2,MLLX2,MLM02,MLM32,MLLP2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP8C2",
			"MP8Q2",
			"MP8G2",
			"MP8L2",
			"MP7U2",
			"MP832"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP8C2,MP8Q2,MP8G2,MP8L2,MP7U2,MP832"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLM52",
			"MLMC2",
			"MLME2",
			"MLMG2",
			"MLMJ2",
			"MLM72"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLM52,MLMC2,MLME2,MLMG2,MLMJ2,MLM72"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP942",
			"MP9H2",
			"MP982",
			"MP9D2",
			"MP7Y2",
			"MP872"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP942,MP9H2,MP982,MP9D2,MP7Y2,MP872"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLLL2",
			"MLLU2",
			"MLLW2",
			"MLLY2",
			"MLM22",
			"MLLN2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLLL2,MLLU2,MLLW2,MLLY2,MLM22,MLLN2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP8A2",
			"MP8P2",
			"MP8F2",
			"MP8K2",
			"MP7T2",
			"MP822"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP8A2,MP8P2,MP8F2,MP8K2,MP7T2,MP822"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MLM42",
			"MLM62",
			"MLMA2",
			"MLMD2",
			"MLMF2",
			"MLMH2"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MLM42,MLM62,MLMA2,MLMD2,MLMF2,MLMH2"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (1st generation)",
		models: [
			"MP932",
			"MP9G2",
			"MP972",
			"MP9C2",
			"MP7X2",
			"MP862"
		],
		aNumbers: [
			"A1662",
			"A1723",
			"A1724"
		],
		fccIds: [
			"BCG-E2945A",
			"BCG-E3042A"
		],
		internalName: "N69APN69uAP",
		identifier: "iPhone8,4",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2234.0.0.3.3 (S8000)Bootrom 2234.0.0.2.22 (S8003)",
		modelsSearchable: "MP932,MP9G2,MP972,MP9C2,MP7X2,MP862"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8G2",
			"MNAC2",
			"MNAY2",
			"MNCE2",
			"MNGQ2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8G2,MNAC2,MNAY2,MNCE2,MNGQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8L2",
			"MNAJ2",
			"MNC32",
			"MNCK2",
			"MNGX2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8L2,MNAJ2,MNC32,MNCK2,MNGX2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8R2",
			"MNAQ2",
			"MNC82",
			"MNCQ2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8R2,MNAQ2,MNC82,MNCQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8J2",
			"MNAE2",
			"MNC12",
			"MNCG2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8J2,MNAE2,MNC12,MNCG2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8N2",
			"MNAL2",
			"MNC52",
			"MNCM2",
			"MNH02"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8N2,MNAL2,MNC52,MNCM2,MNH02"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8U2",
			"MNAV2",
			"MNCA2",
			"MNCT2",
			"MN992"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8U2,MNAV2,MNCA2,MNCT2,MN992"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8Q2",
			"MNAP2",
			"MNC72",
			"MNCP2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Jet Black",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8Q2,MNAP2,MNC72,MNCP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8W2",
			"MNAX2",
			"MNCD2",
			"MNCV2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Jet Black",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8W2,MNAX2,MNCD2,MNCV2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MPRV2",
			"MPRT2",
			"MPRH2",
			"MPRL2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MPRV2,MPRT2,MPRH2,MPRL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MPRW2",
			"MPRU2",
			"MPRJ2",
			"MPRM2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MPRW2,MPRU2,MPRJ2,MPRM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8K2",
			"MNAF2",
			"MNC22",
			"MNCJ2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8K2,MNAF2,MNC22,MNCJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8P2",
			"MNAM2",
			"MNC62",
			"MNH12",
			"MNCN2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8P2,MNAM2,MNC62,MNH12,MNCN2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8V2",
			"MNAW2",
			"MNCC2",
			"MNCU2",
			"MN9A2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8V2,MNAW2,MNCC2,MNCU2,MN9A2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8H2",
			"MNAD2",
			"MNC02",
			"MNCF2",
			"MN8Y2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8H2,MNAD2,MNC02,MNCF2,MN8Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8M2",
			"MNAK2",
			"MNC42",
			"MNCL2",
			"a MN932"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8M2,MNAK2,MNC42,MNCL2,a MN932"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN8T2",
			"MNAU2",
			"MNC92",
			"MNCR2",
			"MN982"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3085A",
			"BCG-E3086A"
		],
		internalName: "D10AP",
		identifier: "iPhone9,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN8T2,MNAU2,MNC92,MNCR2,MN982"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9D2",
			"MN9U2",
			"MN8X2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9D2,MN9U2,MN8X2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9H2",
			"MN9Y2",
			"MN922"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Black",
		storage: "128 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9H2,MN9Y2,MN922"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9N2",
			"MNA62",
			"MN972"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Black",
		storage: "256 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9N2,MNA62,MN972"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9F2",
			"MN9W2",
			"MN902"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9F2,MN9W2,MN902"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9K2",
			"MNA32",
			"MN942"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9K2,MNA32,MN942"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9Q2",
			"MNA82"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9Q2,MNA82"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MQTR2",
			"MQTX2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Jet Black",
		storage: "32 GB",
		bootrom: "A1778",
		modelsSearchable: "MQTR2,MQTX2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9M2",
			"MNA52",
			"MN962"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Jet Black",
		storage: "128 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9M2,MNA52,MN962"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9T2",
			"MNAA2",
			"MN9C2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Jet Black",
		storage: "256 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9T2,MNAA2,MN9C2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MPRN2",
			"MPRQ2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "A1778",
		modelsSearchable: "MPRN2,MPRQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MPRP2",
			"MPRR2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "A1778",
		modelsSearchable: "MPRP2,MPRR2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9G2",
			"MN9X2",
			"MN912"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9G2,MN9X2,MN912"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9L2",
			"MNA42",
			"MN952"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9L2,MNA42,MN952"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9R2",
			"MNA92"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9R2,MNA92"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9E2",
			"MN9V2"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9E2,MN9V2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9J2",
			"MNA02"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9J2,MNA02"
	},
	{
		type: "iPhone",
		generation: "iPhone 7",
		models: [
			"MN9P2",
			"MNA72"
		],
		aNumbers: [
			"A1660",
			"A1779",
			"A1780"
		],
		fccIds: [
			"BCG-E3091A"
		],
		internalName: "D101AP",
		identifier: "iPhone9,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1778",
		modelsSearchable: "MN9P2,MNA72"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQH2",
			"MNR12",
			"MNR52",
			"MNR92",
			"MNRJ2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MNQH2,MNR12,MNR52,MNR92,MNRJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN482",
			"MN5T2",
			"MN642",
			"MN6F2",
			"MNFP2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN482,MN5T2,MN642,MN6F2,MNFP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4E2",
			"MN5Y2",
			"MN692",
			"MN6L2",
			"MNFV2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4E2,MN5Y2,MN692,MN6L2,MNFV2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQK2",
			"MNR32",
			"MNR72",
			"MNRC2",
			"MNRL2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MNQK2,MNR32,MNR72,MNRC2,MNRL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4A2",
			"MN5V2",
			"MN662",
			"MN6H2",
			"MNFR2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4A2,MN5V2,MN662,MN6H2,MNFR2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4J2",
			"MN612",
			"MN6C2",
			"MN6N2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4J2,MN612,MN6C2,MN6N2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MQU22"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Jet Black",
		storage: "32GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MQU22"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4D2",
			"MN5X2",
			"MN682",
			"MN6K2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Jet Black",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4D2,MN5X2,MN682,MN6K2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4L2",
			"MN632",
			"MN6E2",
			"MN6Q2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Jet Black",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4L2,MN632,MN6E2,MN6Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MPR12",
			"MPR02",
			"MPQV2",
			"MPQW2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MPR12,MPR02,MPQV2,MPQW2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MPRA2",
			"MPR92",
			"MPR52",
			"MPR62"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MPRA2,MPR92,MPR52,MPR62"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQL2",
			"MNR42",
			"MNR82",
			"MNRD2",
			"MNRM2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MNQL2,MNR42,MNR82,MNRD2,MNRM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4C2",
			"MN5W2",
			"MN672",
			"MN6J2",
			"MNFT2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4C2,MN5W2,MN672,MN6J2,MNFT2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4K2",
			"MN622",
			"MN6D2",
			"MN6P2",
			"MNFY2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4K2,MN622,MN6D2,MN6P2,MNFY2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQJ2",
			"MNR22",
			"MNR62",
			"MNRA2",
			"MNRK2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MNQJ2,MNR22,MNR62,MNRA2,MNRK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN492",
			"MN5U2",
			"MN652",
			"MN6G2",
			"MNFQ2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN492,MN5U2,MN652,MN6G2,MNFQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN4F2",
			"MN602",
			"MN6A2",
			"MN6M2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3087A",
			"BCG-E3088A"
		],
		internalName: "D11AP",
		identifier: "iPhone9,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MN4F2,MN602,MN6A2,MN6M2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQR2",
			"MNQW2",
			"MNQM2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Black",
		storage: "32 GB",
		bootrom: "A1784",
		modelsSearchable: "MNQR2,MNQW2,MNQM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN522",
			"MN5G2",
			"MN4M2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Black",
		storage: "128 GB",
		bootrom: "A1784",
		modelsSearchable: "MN522,MN5G2,MN4M2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN592",
			"MN5M2",
			"MN4W2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Black",
		storage: "256 GB",
		bootrom: "A1784",
		modelsSearchable: "MN592,MN5M2,MN4W2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQU2",
			"MNQY2",
			"MNQP2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Gold",
		storage: "32 GB",
		bootrom: "A1784",
		modelsSearchable: "MNQU2,MNQY2,MNQP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN552",
			"MN5J2",
			"MN4Q2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Gold",
		storage: "128 GB",
		bootrom: "A1784",
		modelsSearchable: "MN552,MN5J2,MN4Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN5D2",
			"MN5P2",
			"MN4Y2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1784",
		modelsSearchable: "MN5D2,MN5P2,MN4Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN572",
			"MN5L2",
			"MN4V2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Jet Black",
		storage: "128 GB",
		bootrom: "A1784",
		modelsSearchable: "MN572,MN5L2,MN4V2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN5F2",
			"MN5R2",
			"MN512"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Jet Black",
		storage: "256 GB",
		bootrom: "A1784",
		modelsSearchable: "MN5F2,MN5R2,MN512"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MPQW2",
			"MPQY2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "A1784",
		modelsSearchable: "MPQW2,MPQY2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MPR72",
			"MPR82"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "A1784",
		modelsSearchable: "MPR72,MPR82"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQV2",
			"MNR02",
			"MNQQ2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Rose Gold",
		storage: "32 GB",
		bootrom: "A1784",
		modelsSearchable: "MNQV2,MNR02,MNQQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN562",
			"MN5K2",
			"MN4U2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Rose Gold",
		storage: "128 GB",
		bootrom: "A1784",
		modelsSearchable: "MN562,MN5K2,MN4U2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN5E2",
			"MN5Q2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Rose Gold",
		storage: "256 GB",
		bootrom: "A1784",
		modelsSearchable: "MN5E2,MN5Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MNQT2",
			"MNQX2",
			"MNQN2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Silver",
		storage: "32 GB",
		bootrom: "A1784",
		modelsSearchable: "MNQT2,MNQX2,MNQN2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN532",
			"MN5H2",
			"MN4P2"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "A1784",
		modelsSearchable: "MN532,MN5H2,MN4P2"
	},
	{
		type: "iPhone",
		generation: "iPhone 7 Plus",
		models: [
			"MN5C2",
			"MN5N2",
			"MN4X2",
			"MN502"
		],
		aNumbers: [
			"A1661",
			"A1785",
			"A1786"
		],
		fccIds: [
			"BCG-E3092A"
		],
		internalName: "D111AP",
		identifier: "iPhone9,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1784",
		modelsSearchable: "MN5C2,MN5N2,MN4X2,MN502"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ6M2",
			"MQ742",
			"MQ772",
			"MQ7A2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ6M2,MQ742,MQ772,MQ7A2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ7H2",
			"MQ802",
			"MQ832",
			"MQ862"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ7H2,MQ802,MQ832,MQ862"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ6L2",
			"MQ732",
			"MQ762",
			"MQ792"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ6L2,MQ732,MQ762,MQ792"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ7G2",
			"MQ7Y2",
			"MQ822",
			"MQ852"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ7G2,MQ7Y2,MQ822,MQ852"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ6K2",
			"MQ722",
			"MQ752",
			"MQ782"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ6K2,MQ722,MQ752,MQ782"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MX132"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MX132"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ7F2",
			"MQ7X2",
			"MQ812",
			"MQ842"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "iPhone10,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ7F2,MQ7X2,MQ812,MQ842"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MRRK2",
			"MRRR2",
			"MRRT2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "D20AAP",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MRRK2,MRRR2,MRRT2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MRRL2",
			"MRRW2",
			"MRRX2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3159A",
			"BCG-E3171A"
		],
		internalName: "D20AP",
		identifier: "D20AAP",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MRRL2,MRRW2,MRRX2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ6J2",
			"MQ6X2",
			"MQ712"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "iPhone10,4",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1905",
		modelsSearchable: "MQ6J2,MQ6X2,MQ712"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ7E2",
			"MQ7T2",
			"MQ7W2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "iPhone10,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1905",
		modelsSearchable: "MQ7E2,MQ7T2,MQ7W2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ6H2",
			"MQ6W2",
			"MQ702"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "iPhone10,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1905",
		modelsSearchable: "MQ6H2,MQ6W2,MQ702"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ7D2",
			"MQ7R2",
			"MQ7V2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "iPhone10,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1905",
		modelsSearchable: "MQ7D2,MQ7R2,MQ7V2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ6G2",
			"MQ6V2",
			"MQ6Y2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "iPhone10,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1905",
		modelsSearchable: "MQ6G2,MQ6V2,MQ6Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MQ7C2",
			"MQ7Q2",
			"MQ7U2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "iPhone10,4",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1905",
		modelsSearchable: "MQ7C2,MQ7Q2,MQ7U2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MRRM2",
			"MRRP2",
			"MRRQ2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "D201AAP",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "A1905",
		modelsSearchable: "MRRM2,MRRP2,MRRQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8",
		models: [
			"MRRN2",
			"MRRU2",
			"MRRV2"
		],
		aNumbers: [
			"A1863",
			"A1906",
			"A1907"
		],
		fccIds: [
			"BCG-E3172A"
		],
		internalName: "D201AP",
		identifier: "D201AAP",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "A1905",
		modelsSearchable: "MRRN2,MRRU2,MRRV2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8F2",
			"MQ9F2",
			"MQ982",
			"MQ9M2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "iPhone10,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ8F2,MQ9F2,MQ982,MQ9M2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8J2",
			"MQ9C2",
			"MQ9J2",
			"MQ9Q2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "iPhone10,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ8J2,MQ9C2,MQ9J2,MQ9Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8E2",
			"MQ9E2",
			"MQ972",
			"MQ9L2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "iPhone10,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ8E2,MQ9E2,MQ972,MQ9L2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8H2",
			"MQ9A2",
			"MQ9H2",
			"MQ9P2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "iPhone10,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ8H2,MQ9A2,MQ9H2,MQ9P2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8D2",
			"MQ9D2",
			"MQ962",
			"MQ9K2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "iPhone10,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ8D2,MQ9D2,MQ962,MQ9K2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8G2",
			"MQ9G2",
			"MQ992",
			"MQ9N2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "iPhone10,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQ8G2,MQ9G2,MQ992,MQ9N2"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MRTG2",
			"MRTJ2",
			"MRT72"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "D21AAP",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MRTG2,MRTJ2,MRT72"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MRTH2",
			"MRTK2",
			"MRT82"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3160A",
			"BCG-E3173A"
		],
		internalName: "D21AP",
		identifier: "D21AAP",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MRTH2,MRTK2,MRT82"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8N2",
			"MQ8V2",
			"MQ922"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "iPhone10,5",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A1897",
		modelsSearchable: "MQ8N2,MQ8V2,MQ922"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8R2",
			"MQ8Y2",
			"MQ952"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "iPhone10,5",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A1897",
		modelsSearchable: "MQ8R2,MQ8Y2,MQ952"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8M2",
			"MQ8U2",
			"MQ912"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "iPhone10,5",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1897",
		modelsSearchable: "MQ8M2,MQ8U2,MQ912"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8Q2",
			"MQ8X2",
			"MQ942"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "iPhone10,5",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1897",
		modelsSearchable: "MQ8Q2,MQ8X2,MQ942"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8L2",
			"MQ8T2",
			"MQ902"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "iPhone10,5",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1897",
		modelsSearchable: "MQ8L2,MQ8T2,MQ902"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MQ8P2",
			"MQ8W2",
			"MQ932"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "iPhone10,5",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1897",
		modelsSearchable: "MQ8P2,MQ8W2,MQ932"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MRTC2",
			"MRTE2",
			"MRT92"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "D211AAP",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "A1897",
		modelsSearchable: "MRTC2,MRTE2,MRT92"
	},
	{
		type: "iPhone",
		generation: "iPhone 8 Plus",
		models: [
			"MRTA2",
			"MRTD2",
			"MRTF2"
		],
		aNumbers: [
			"A1864",
			"A1898",
			"A1899"
		],
		fccIds: [
			"BCG-E3174A"
		],
		internalName: "D211AP",
		identifier: "D211AAP",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "A1897",
		modelsSearchable: "MRTA2,MRTD2,MRTF2"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQCT2",
			"MQCL2",
			"MQAY2",
			"MQA62"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3161A"
		],
		internalName: "D22AP",
		identifier: "iPhone10,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQCT2,MQCL2,MQAY2,MQA62"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQCW2",
			"MQCP2",
			"MQC22",
			"MQA92"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3161A"
		],
		internalName: "D22AP",
		identifier: "iPhone10,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQCW2,MQCP2,MQC22,MQA92"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQCR2",
			"MQCK2",
			"MQAX2",
			"MQA52"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3161A"
		],
		internalName: "D22AP",
		identifier: "iPhone10,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQCR2,MQCK2,MQAX2,MQA52"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQCV2",
			"MQCN2",
			"MQC12",
			"MQA82"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3161A"
		],
		internalName: "D22AP",
		identifier: "iPhone10,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3332.0.0.1.23",
		modelsSearchable: "MQCV2,MQCN2,MQC12,MQA82"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQAK2",
			"MQAR2",
			"MQAD2"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3175A"
		],
		internalName: "D221AP",
		identifier: "iPhone10,6",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A1901",
		modelsSearchable: "MQAK2,MQAR2,MQAD2"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQAN2",
			"MQAV2",
			"MQAG2"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3175A"
		],
		internalName: "D221AP",
		identifier: "iPhone10,6",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A1901",
		modelsSearchable: "MQAN2,MQAV2,MQAG2"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQAJ2",
			"MQAQ2",
			"MQAC2"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3175A"
		],
		internalName: "D221AP",
		identifier: "iPhone10,6",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A1901",
		modelsSearchable: "MQAJ2,MQAQ2,MQAC2"
	},
	{
		type: "iPhone",
		generation: "iPhone X",
		models: [
			"MQAM2",
			"MQAU2",
			"MQAF2"
		],
		aNumbers: [
			"A1865",
			"A1902"
		],
		fccIds: [
			"BCG-E3175A"
		],
		internalName: "D221AP",
		identifier: "iPhone10,6",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A1901",
		modelsSearchable: "MQAM2,MQAU2,MQAF2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3K2",
			"MT2E2",
			"MT302",
			"MT472"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3K2,MT2E2,MT302,MT472"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3T2",
			"MT2L2",
			"MT362",
			"MT4G2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3T2,MT2L2,MT362,MT4G2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT402",
			"MT2T2",
			"MT3D2",
			"MT4R2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT402,MT2T2,MT3D2,MT4R2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3R2",
			"MT2K2",
			"MT352",
			"MT4F2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3R2,MT2K2,MT352,MT4F2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3Y2",
			"MT2R2",
			"MT3C2",
			"MT4Q2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3Y2,MT2R2,MT3C2,MT4Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT462",
			"MT2Y2",
			"MT3J2",
			"MT4Y2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT462,MT2Y2,MT3J2,MT4Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3Q2",
			"MT2J2",
			"MT342",
			"MT4D2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Coral",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3Q2,MT2J2,MT342,MT4D2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3X2",
			"MT2Q2",
			"MT3A2",
			"MT4N2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Coral",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3X2,MT2Q2,MT3A2,MT4N2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT452",
			"MT2X2",
			"MT3H2",
			"MT4X2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Coral",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT452,MT2X2,MT3H2,MT4X2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3M2",
			"MT2G2",
			"MT322",
			"MT492"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3M2,MT2G2,MT322,MT492"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3V2",
			"MT2N2",
			"MT382",
			"MT4J2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3V2,MT2N2,MT382,MT4J2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT422",
			"MT2V2",
			"MT3F2",
			"MT4V2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT422,MT2V2,MT3F2,MT4V2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3L2",
			"MT2F2",
			"MT312",
			"MT482"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3L2,MT2F2,MT312,MT482"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3U2",
			"MT2M2",
			"MT372",
			"MT4H2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3U2,MT2M2,MT372,MT4H2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT412",
			"MT2U2",
			"MT3E2",
			"MT4U2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT412,MT2U2,MT3E2,MT4U2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3N2",
			"MT2H2",
			"MT332",
			"MT4A2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3N2,MT2H2,MT332,MT4A2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT3W2",
			"MT2P2",
			"MT392",
			"MT4L2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT3W2,MT2P2,MT392,MT4L2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT442",
			"MT2W2",
			"MT3G2",
			"MT4W2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "N841AP",
		identifier: "iPhone11,8",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT442,MT2W2,MT3G2,MT4W2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRY42"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRY42"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRY92"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRY92"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYJ2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYA2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYA2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYH2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYH2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYQ2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRY82"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Coral",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRY82"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYG2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Coral",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYG2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYP2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Coral",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYP2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRY62"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRY62"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYE2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYE2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYM2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYM2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRY52"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRY52"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYD2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYD2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYL2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYL2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRY72"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRY72"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYF2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYF2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MRYN2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2105",
		identifier: "BCG-E3237A",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MRYN2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT002"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT002"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0G2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0G2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0V2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0V2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0E2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0E2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0U2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0U2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT112"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT112"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0A2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Coral",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0A2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0T2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Coral",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0T2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT102"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Coral",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT102"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT062"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT062"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0N2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0N2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0X2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0X2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT032"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT032"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0J2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0J2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0W2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0W2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT082"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT082"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0Q2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT0Y2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2106[4]",
		identifier: "BCG-E3238A",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT0Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT122"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT122"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT192"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT192"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1H2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1H2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT182"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT182"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1G2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1G2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1Q2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT172"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Coral",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT172"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1F2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Coral",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1F2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1P2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Coral",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1P2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT142"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT142"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1D2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1D2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1L2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1L2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT132"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT132"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1A2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1A2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1J2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1J2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT162"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT162"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1E2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1E2"
	},
	{
		type: "iPhone",
		generation: "iPhone XR",
		models: [
			"MT1M2"
		],
		aNumbers: [
			"A1984"
		],
		fccIds: [
			"BCG-E3220A"
		],
		internalName: "A2108[5]",
		identifier: "BCG-E3220A",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT1M2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT8W2",
			"MTA22",
			"MT8L2",
			"MTAJ2",
			"MT962"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT8W2,MTA22,MT8L2,MTAJ2,MT962"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT902",
			"MTA92",
			"MT8P2",
			"MTAQ2",
			"MT992"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT902,MTA92,MT8P2,MTAQ2,MT992"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT932",
			"MTAF2",
			"MT8T2",
			"MTAV2",
			"MT9D2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT932,MTAF2,MT8T2,MTAV2,MT9D2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT8V2",
			"MTA12",
			"MT8K2",
			"MTAH2",
			"MT952"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT8V2,MTA12,MT8K2,MTAH2,MT952"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT8Y2",
			"MTA82",
			"MT8N2",
			"MTAN2",
			"MT982"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT8Y2,MTA82,MT8N2,MTAN2,MT982"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT922",
			"MTAD2",
			"MT8R2",
			"MTAU2",
			"MT9C2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT922,MTAD2,MT8R2,MTAU2,MT9C2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT8U2",
			"MTA02",
			"MT8J2",
			"MTAG2",
			"MT942"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT8U2,MTA02,MT8J2,MTAG2,MT942"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT8X2",
			"MTA72",
			"MT8M2",
			"MTAL2",
			"MT972"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT8X2,MTA72,MT8M2,MTAL2,MT972"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT912",
			"MTAA2",
			"MT8Q2",
			"MTAR2",
			"MT9A2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "D321AP",
		identifier: "iPhone11,2",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT912,MTAA2,MT8Q2,MTAR2,MT9A2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9G2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9G2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9K2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9K2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9N2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9N2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9F2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9F2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9J2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9J2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9M2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9M2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9E2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9E2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9H2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9H2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9L2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2097",
		identifier: "BCG-E3232A",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9L2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTAY2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTAY2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTE22"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTE22"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTE52"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTE52"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTAX2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTAX2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTE12"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTE12"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTE42"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTE42"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTAW2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTAW2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTE02"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTE02"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MTE32"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2098[4]",
		identifier: "BCG-E3233A",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MTE32"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9R2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9R2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9V2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9V2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9Y2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9Q2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9U2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9U2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9X2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9X2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9P2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9P2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9T2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9T2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS",
		models: [
			"MT9W2"
		],
		aNumbers: [
			"A1920"
		],
		fccIds: [
			"BCG-E3218A"
		],
		internalName: "A2100[1]",
		identifier: "BCG-E3218A",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT9W2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT5X2",
			"MT672",
			"MT5M2",
			"MT6H2",
			"MT5C2",
			"3D897[6]"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT5X2,MT672,MT5M2,MT6H2,MT5C2,3D897[6]"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT612",
			"MT6A2",
			"MT5Q2",
			"MT6L2",
			"MT5F2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT612,MT6A2,MT5Q2,MT6L2,MT5F2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT642",
			"MT6E2",
			"MT5U2",
			"MT6P2",
			"MT5J2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT642,MT6E2,MT5U2,MT6P2,MT5J2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT5W2",
			"MT662",
			"MT5L2",
			"MT6G2",
			"MT5A2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT5W2,MT662,MT5L2,MT6G2,MT5A2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT602",
			"MT692",
			"MT5P2",
			"MT6K2",
			"MT5E2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT602,MT692,MT5P2,MT6K2,MT5E2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT632",
			"MT6D2",
			"MT5T2",
			"MT6N2",
			"MT5H2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT632,MT6D2,MT5T2,MT6N2,MT5H2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT5V2",
			"MT652",
			"MT5K2",
			"MT6F2",
			"MT592"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT5V2,MT652,MT5K2,MT6F2,MT592"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT5Y2",
			"MT682",
			"MT5N2",
			"MT6J2",
			"MT5D2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT5Y2,MT682,MT5N2,MT6J2,MT5D2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT622",
			"MT6C2",
			"MT5R2",
			"MT6M2",
			"MT5G2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "D331pAP",
		identifier: "iPhone11,6",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT622,MT6C2,MT5R2,MT6M2,MT5G2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT522",
			"3D879[6]"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT522,3D879[6]"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT552"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT552"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT582"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT582"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT512"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT512"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT542"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT542"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT572"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT572"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT502"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT502"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT532"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT532"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT562"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2101",
		identifier: "BCG-E3234A",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT562"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6T2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6T2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6W2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6W2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT702"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT702"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6R2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6R2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6V2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6V2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6Y2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6Y2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6Q2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6Q2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6U2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6U2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT6X2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2102[4]",
		identifier: "BCG-E3235A",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT6X2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT732"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT732"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT762"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT762"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT792"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT792"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT722"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT722"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT752"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT752"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT782"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT782"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT712"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT712"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT742"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT742"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT772"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"BCG-E3219A"
		],
		internalName: "A2104[5]",
		identifier: "BCG-E3219A",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 3865.0.0.4.7",
		modelsSearchable: "MT772"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT7D2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Gold",
		storage: "64 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "MT7D2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT7G2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "MT7G2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"?"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Gold",
		storage: "512 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "?"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"?"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Silver",
		storage: "64 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "?"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"?"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "?"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"?"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Silver",
		storage: "512 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "?"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"?"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "?"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"MT7E2"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "MT7E2"
	},
	{
		type: "iPhone",
		generation: "iPhone XS Max",
		models: [
			"?"
		],
		aNumbers: [
			"A1921"
		],
		fccIds: [
			"?"
		],
		internalName: "D331AP",
		identifier: "iPhone11,4",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "A2103[7]",
		modelsSearchable: "?"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWHT2",
			"MWK02",
			"MWJE2",
			"MWKM2",
			"MWL72"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHT2,MWK02,MWJE2,MWKM2,MWL72"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ02",
			"MWK72",
			"MWJL2",
			"MWKU2",
			"MWLE2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ02,MWK72,MWJL2,MWKU2,MWLE2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ62",
			"MWKF2",
			"MWJT2",
			"MWL12",
			"MWLL2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ62,MWKF2,MWJT2,MWL12,MWLL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWHY2",
			"MWK62",
			"MWJK2",
			"MWKT2",
			"MWLD2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHY2,MWK62,MWJK2,MWKT2,MWLD2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ52",
			"MWKE2",
			"MWJR2",
			"MWL02",
			"MWLK2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ52,MWKE2,MWJR2,MWL02,MWLK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJD2",
			"MWKL2",
			"MWJY2",
			"MWL62",
			"MWLR2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJD2,MWKL2,MWJY2,MWL62,MWLR2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWHV2",
			"MWK22",
			"MWJG2",
			"MWKP2",
			"MWL92"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHV2,MWK22,MWJG2,MWKP2,MWL92"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ22",
			"MWK92",
			"MWJN2",
			"MWKW2",
			"MWLG2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ22,MWK92,MWJN2,MWKW2,MWLG2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ92",
			"MWKH2",
			"MWJV2",
			"MWL32",
			"MWLN2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ92,MWKH2,MWJV2,MWL32,MWLN2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWHX2",
			"MWK52",
			"MWJJ2",
			"MWKR2",
			"MWLC2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Purple",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHX2,MWK52,MWJJ2,MWKR2,MWLC2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ42",
			"MWKD2",
			"MWJQ2",
			"MWKY2",
			"MWLJ2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Purple",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ42,MWKD2,MWJQ2,MWKY2,MWLJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJC2",
			"MWKK2",
			"MWJX2",
			"MWL52",
			"MWLQ2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Purple",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJC2,MWKK2,MWJX2,MWL52,MWLQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWHU2",
			"MWK12",
			"MWJF2",
			"MWKN2",
			"MWL82"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHU2,MWK12,MWJF2,MWKN2,MWL82"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ12",
			"MWK82",
			"MWJM2",
			"MWKV2",
			"MWLF2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ12,MWK82,MWJM2,MWKV2,MWLF2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ72",
			"MWKG2",
			"MWJU2",
			"MWL22",
			"MWLM2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ72,MWKG2,MWJU2,MWL22,MWLM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWHW2",
			"MWK32",
			"MWJH2",
			"MWKQ2",
			"MWLA2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHW2,MWK32,MWJH2,MWKQ2,MWLA2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJ32",
			"MWKC2",
			"MWJP2",
			"MWKX2",
			"MWLH2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJ32,MWKC2,MWJP2,MWKX2,MWLH2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWJA2",
			"MWKJ2",
			"MWJW2",
			"MWL42",
			"MWLP2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "iPhone12,1",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWJA2,MWKJ2,MWJW2,MWL42,MWLP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWLT2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWLT2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM02"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM02"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM72"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM72"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWLY2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWLY2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM62"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM62"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWMD2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWMD2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWLV2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWLV2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM32"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM32"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM92"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM92"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWLX2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Purple",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWLX2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM52"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Purple",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM52"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWMC2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Purple",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWMC2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWLU2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWLU2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM22"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM22"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM82"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM82"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWLW2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWLW2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWM42"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWM42"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWMA2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2221",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWMA2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN02"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN02"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN72"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN72"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNF2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNF2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN62"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN62"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNE2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNE2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNL2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN22"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN22"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN92"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN92"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNH2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNH2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN52"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Purple",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN52"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWND2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Purple",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWND2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNK2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Purple",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN12"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN12"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN82"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN82"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNG2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNG2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWN32"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWN32"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNC2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Yellow",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNC2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11",
		models: [
			"MWNJ2"
		],
		aNumbers: [
			"A2111"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "N104AP",
		identifier: "A2223[5]",
		color: "Yellow",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWNJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9E2",
			"MWA82",
			"MW9T2",
			"MWAQ2",
			"MWCK2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9E2,MWA82,MW9T2,MWAQ2,MWCK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9J2",
			"MWAE2",
			"MW9X2",
			"MWAV2",
			"MWCP2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9J2,MWAE2,MW9X2,MWAV2,MWCP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9N2",
			"MWAJ2",
			"MWA42",
			"MWC02",
			"MWCU2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9N2,MWAJ2,MWA42,MWC02,MWCU2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9F2",
			"MWA92",
			"MW9U2",
			"MWAR2",
			"MWCL2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Midnight Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9F2,MWA92,MW9U2,MWAR2,MWCL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9K2",
			"MWAF2",
			"MW9Y2",
			"MWAW2",
			"MWCQ2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Midnight Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9K2,MWAF2,MW9Y2,MWAW2,MWCQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9P2",
			"MWAL2",
			"MWA52",
			"MWC12",
			"MWCV2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Midnight Green",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9P2,MWAL2,MWA52,MWC12,MWCV2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9D2",
			"MWA72",
			"MW9R2",
			"MWAP2",
			"MWCJ2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9D2,MWA72,MW9R2,MWAP2,MWCJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9H2",
			"MWAD2",
			"MW9W2",
			"MWAU2",
			"MWCN2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9H2,MWAD2,MW9W2,MWAU2,MWCN2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9M2",
			"MWAH2",
			"MWA32",
			"MWAY2",
			"MWCT2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9M2,MWAH2,MWA32,MWAY2,MWCT2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9C2",
			"MWA62",
			"MW9Q2",
			"MWAM2",
			"MWCH2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9C2,MWA62,MW9Q2,MWAM2,MWCH2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9G2",
			"MWAA2",
			"MW9V2",
			"MWAT2",
			"MWCM2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9G2,MWAA2,MW9V2,MWAT2,MWCM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MW9L2",
			"MWAG2",
			"MWA12",
			"MWAX2",
			"MWCR2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "iPhone12,3",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MW9L2,MWAG2,MWA12,MWAX2,MWCR2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC52"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC52"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC92"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC92"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWCF2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWCF2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC62"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Midnight Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC62"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWCC2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Midnight Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWCC2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWCG2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Midnight Green",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWCG2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC32"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC32"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC82"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC82"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWCE2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWCE2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC22"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC22"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWC72"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWC72"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWCD"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2215",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWCD"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDC2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDC2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDG2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDG2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDL2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDD2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Midnight Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDD2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDH2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Midnight Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDH2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDM2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Midnight Green",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDA2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDA2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDF2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDF2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDK2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWD92"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWD92"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDE2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDE2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro",
		models: [
			"MWDJ2"
		],
		aNumbers: [
			"A2160"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D421AP",
		identifier: "A2217[5]",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWDJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFC2",
			"MWG42",
			"MWFQ2",
			"MWGH2",
			"MWH12"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFC2,MWG42,MWFQ2,MWGH2,MWH12"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFG2",
			"MWG82",
			"MWFV2",
			"MWGM2",
			"MWH62"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFG2,MWG82,MWFV2,MWGM2,MWH62"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFL2",
			"MWGD2",
			"MWG02",
			"MWGR2",
			"MWHA2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFL2,MWGD2,MWG02,MWGR2,MWHA2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFD2",
			"MWG52",
			"MWFR2",
			"MWGJ2",
			"MWH22"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Midnight Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFD2,MWG52,MWFR2,MWGJ2,MWH22"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFH2",
			"MWG92",
			"MWFW2",
			"MWGN2",
			"MWH72"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Midnight Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFH2,MWG92,MWFW2,MWGN2,MWH72"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFM2",
			"MWGE2",
			"MWG12",
			"MWGT2",
			"MWHC2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Midnight Green",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFM2,MWGE2,MWG12,MWGT2,MWHC2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFA2",
			"MWG32",
			"MWFP2",
			"MWGG2",
			"MWH02"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFA2,MWG32,MWFP2,MWGG2,MWH02"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFF2",
			"MWG72",
			"MWFU2",
			"MWGL2",
			"MWH52"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFF2,MWG72,MWFU2,MWGL2,MWH52"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFK2",
			"MWGC2",
			"MWFY2",
			"MWGQ2",
			"MWH92"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFK2,MWGC2,MWFY2,MWGQ2,MWH92"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF92",
			"MWG22",
			"MWFN2",
			"MWGF2",
			"MWGY2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF92,MWG22,MWFN2,MWGF2,MWGY2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFE2",
			"MWG62",
			"MWFT2",
			"MWGK2",
			"MWH42"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFE2,MWG62,MWFT2,MWGK2,MWH42"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWFJ2",
			"MWGA2",
			"MWFX2",
			"MWGP2",
			"MWH82"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "iPhone12,5",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWFJ2,MWGA2,MWFX2,MWGP2,MWH82"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHG2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHG2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHL2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHL2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHQ2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHQ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHH2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Midnight Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHH2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHM2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Midnight Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHM2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHR2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Midnight Green",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHR2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHF2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHF2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHK2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHK2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHP2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHP2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHD2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHD2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHJ2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHJ2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWHN2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2220",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWHN2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWEX2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWEX2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF32"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF32"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF72"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF72"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF02"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Midnight Green",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF02"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF42"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Midnight Green",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF42"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF82"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Midnight Green",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF82"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWEW2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWEW2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF22"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF22"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF62"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF62"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWEV2"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWEV2"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF12"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF12"
	},
	{
		type: "iPhone",
		generation: "iPhone 11 Pro Max",
		models: [
			"MWF52"
		],
		aNumbers: [
			"A2161"
		],
		fccIds: [
			"BCG-E3309A"
		],
		internalName: "D431AP",
		identifier: "A2218[5]",
		color: "Space Gray",
		storage: "512 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MWF52"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MX9T2",
			"MX9A2",
			"MX9H2",
			"MX9E2",
			"MX9L2",
			"MX9P2",
			"MXAN2",
			"MHGQ3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MX9T2,MX9A2,MX9H2,MX9E2,MX9L2,MX9P2,MXAN2,MHGQ3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MXD12",
			"MXCJ2",
			"MXCQ2",
			"MXCM2",
			"MXCU2",
			"MXCX2",
			"MXD72",
			"MHGU3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MXD12,MXCJ2,MXCQ2,MXCM2,MXCU2,MXCX2,MXD72,MHGU3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MXVU2",
			"MXVC2",
			"MXVJ2",
			"MXVF2",
			"MXVM2",
			"MXVQ2",
			"MXW12",
			"MHGX3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MXVU2,MXVC2,MXVJ2,MXVF2,MXVM2,MXVQ2,MXW12,MHGX3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MX9R2",
			"MX992",
			"MX9G2",
			"MX9D2",
			"MX9K2",
			"MX9N2",
			"MXAM2",
			"MHGP3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MX9R2,MX992,MX9G2,MX9D2,MX9K2,MX9N2,MXAM2,MHGP3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MXD02",
			"MXCH2",
			"MXCP2",
			"MXCL2",
			"MXCT2",
			"MXCW2",
			"MXD62",
			"MHGT3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MXD02,MXCH2,MXCP2,MXCL2,MXCT2,MXCW2,MXD62,MHGT3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MXVT2",
			"MXVA2",
			"MXVH2",
			"MXVE2",
			"MXVL2",
			"MXVP2",
			"MXW02",
			"MHGW3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MXVT2,MXVA2,MXVH2,MXVE2,MXVL2,MXVP2,MXW02,MHGW3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MX9U2",
			"MX9C2",
			"MX9J2",
			"MX9F2",
			"MX9M2",
			"MX9Q2",
			"MXAP2",
			"MHGR3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MX9U2,MX9C2,MX9J2,MX9F2,MX9M2,MX9Q2,MXAP2,MHGR3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MXD22",
			"MXCK2",
			"MXCR2",
			"MXCN2",
			"MXCV2",
			"MXCY2",
			"MXD82",
			"MHGV3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MXD22,MXCK2,MXCR2,MXCN2,MXCV2,MXCY2,MXD82,MHGV3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (2nd generation)",
		models: [
			"MXVV2",
			"MXVD2",
			"MXVK2",
			"MXVG2",
			"MXVN2",
			"MXVR2",
			"MXW22",
			"MHGY3"
		],
		aNumbers: [
			"A2275",
			"A2296",
			"A2298"
		],
		fccIds: [
			"E3500A",
			"E3501A"
		],
		internalName: "D79AP",
		identifier: "iPhone12,8",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 4479.0.0.100.4",
		modelsSearchable: "MXVV2,MXVD2,MXVK2,MXVG2,MXVN2,MXVR2,MXW22,MHGY3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG803",
			"MGDY3",
			"MG613",
			"MG7H3",
			"MG713",
			"MG6H3",
			"MG8G3",
			"MGA63"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG803,MGDY3,MG613,MG7H3,MG713,MG6H3,MG8G3,MGA63"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG853",
			"MGE43",
			"MG8M3",
			"MG663",
			"MG7N3",
			"MG763",
			"MG6N3",
			"MGDM3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG853,MGE43,MG8M3,MG663,MG7N3,MG763,MG6N3,MGDM3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG8A3",
			"MGEA3",
			"MG6C3",
			"MG7U3",
			"MG7C3",
			"MG6V3",
			"MG8T3",
			"MGDT3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG8A3,MGEA3,MG6C3,MG7U3,MG7C3,MG6V3,MG8T3,MGDT3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG7Y3",
			"MGDX3",
			"MG603",
			"MG7G3",
			"MG703",
			"MG6G3",
			"MG8F3",
			"MGA03"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG7Y3,MGDX3,MG603,MG7G3,MG703,MG6G3,MG8F3,MGA03"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG843",
			"MGE33",
			"MG653",
			"MG7M3",
			"MG753",
			"MG6M3",
			"MG8L3",
			"MGDJ3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG843,MGE33,MG653,MG7M3,MG753,MG6M3,MG8L3,MGDJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG893C",
			"MGE93",
			"MG8R3",
			"MG6A3",
			"MG7T3",
			"MG7A3",
			"MG6U3",
			"MGDR3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG893C,MGE93,MG8R3,MG6A3,MG7T3,MG7A3,MG6U3,MGDR3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG813",
			"MGE03",
			"MG623",
			"MG7J3",
			"MG723",
			"MG6J3",
			"MG8H3",
			"MGAE3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG813,MGE03,MG623,MG7J3,MG723,MG6J3,MG8H3,MGAE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG863",
			"MGE53",
			"MG8N3",
			"MG673",
			"MG7P3",
			"MG6P3",
			"MG773",
			"MGDN3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG863,MGE53,MG8N3,MG673,MG7P3,MG6P3,MG773,MGDN3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG8C3",
			"MGEC3",
			"MG6D3",
			"MG7V3",
			"MG7D3",
			"MG6W3",
			"MG8U3",
			"MGDU3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG8C3,MGEC3,MG6D3,MG7V3,MG7D3,MG6W3,MG8U3,MGDU3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG833",
			"MGE23",
			"MG8K3",
			"MG643",
			"MG7L3",
			"MG743",
			"MG6L3",
			"MGAV3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Green",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG833,MGE23,MG8K3,MG643,MG7L3,MG743,MG6L3,MGAV3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG883",
			"MGE73",
			"MG693",
			"MG7R3",
			"MG793",
			"MG6T3",
			"MG8Q3",
			"MGDQ3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG883,MGE73,MG693,MG7R3,MG793,MG6T3,MG8Q3,MGDQ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG8E3",
			"MGEE3",
			"MG8W3",
			"MG6F3",
			"MG7X3",
			"MG7F3",
			"MG6Y3",
			"MGDW3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG8E3,MGEE3,MG8W3,MG6F3,MG7X3,MG7F3,MG6Y3,MGDW3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG823",
			"MGE13",
			"MG8J3",
			"MG633",
			"MG7K3",
			"MG733",
			"MG6K3",
			"MGAP3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG823,MGE13,MG8J3,MG633,MG7K3,MG733,MG6K3,MGAP3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG873",
			"MGE63",
			"MG683",
			"MG7Q3",
			"MG783",
			"MG6Q3",
			"MG8P3",
			"MGDP3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG873,MGE63,MG683,MG7Q3,MG783,MG6Q3,MG8P3,MGDP3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MG8D3",
			"MGED3",
			"MG6E3",
			"MG7W3",
			"MG7E3",
			"MG6X3",
			"MG8V3",
			"MGDV3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MG8D3,MGED3,MG6E3,MG7W3,MG7E3,MG6X3,MG8V3,MGDV3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MJNL3",
			"MJQ23",
			"MJNY3",
			"MJNT3",
			"MJQ83",
			"MJQF3",
			"MJQ53",
			"MJQC3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Purple",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MJNL3,MJQ23,MJNY3,MJNT3,MJQ83,MJQF3,MJQ53,MJQC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MJQ93",
			"MJNN3",
			"MJQ33",
			"MJQ03",
			"MJNW3",
			"MJQG3",
			"MJQ63",
			"MJQD3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Purple",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MJQ93,MJNN3,MJQ33,MJQ03,MJNW3,MJQG3,MJQ63,MJQD3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 mini",
		models: [
			"MJNR3",
			"MJQ43",
			"MJQ13",
			"MJNX3",
			"MJQA3",
			"MJQH3",
			"MJQ73",
			"MJQE3"
		],
		aNumbers: [
			"A2176",
			"A2398",
			"A2400",
			"A2399"
		],
		fccIds: [
			"BCG-E3539A"
		],
		internalName: "D52gAP",
		identifier: "iPhone13,1",
		color: "Purple",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MJNR3,MJQ43,MJQ13,MJNX3,MJQA3,MJQH3,MJQ73,MJQE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGN3",
			"MGJ63",
			"MGEG3",
			"MGG63",
			"MGFM3",
			"MGF53",
			"MGH73",
			"MGHP3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGN3,MGJ63,MGEG3,MGG63,MGFM3,MGF53,MGH73,MGHP3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGV3",
			"MGJC3",
			"MGHD3",
			"MGET3",
			"MGGC3",
			"MGFT3",
			"MGFA3",
			"MGHV3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "White",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGV3,MGJC3,MGHD3,MGET3,MGGC3,MGFT3,MGFA3,MGHV3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGH23",
			"MGJH3",
			"MGF03",
			"MGGH3",
			"MGG13",
			"MGFG3",
			"MGHJ3",
			"MGJ13"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "White",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGH23,MGJH3,MGF03,MGGH3,MGG13,MGFG3,MGHJ3,MGJ13"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGM3",
			"MGJ53",
			"MGEF3",
			"MGG53",
			"MGFL3",
			"MGF43",
			"MGH63",
			"MGHN3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGM3,MGJ53,MGEF3,MGG53,MGFL3,MGF43,MGH63,MGHN3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGU3",
			"MGJA3",
			"MGHC3",
			"MGER3",
			"MGGA3",
			"MGFR3",
			"MGF93",
			"MGHU3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Black",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGU3,MGJA3,MGHC3,MGER3,MGGA3,MGFR3,MGF93,MGHU3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGH13",
			"MGJG3",
			"MGHH3",
			"MGEX3",
			"MGGG3",
			"MGG03",
			"MGFF3",
			"MGJ03"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Black",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGH13,MGJG3,MGHH3,MGEX3,MGGG3,MGG03,MGFF3,MGJ03"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGP3",
			"MGJ73",
			"MGEH3",
			"MGG73",
			"MGFN3",
			"MGF63",
			"MGH83",
			"MGHQ3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGP3,MGJ73,MGEH3,MGG73,MGFN3,MGF63,MGH83,MGHQ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGW3",
			"MGJD3",
			"MGHE3",
			"MGEU3",
			"MGGD3",
			"MGFW3",
			"MGFC3",
			"MGHW3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGW3,MGJD3,MGHE3,MGEU3,MGGD3,MGFW3,MGFC3,MGHW3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGH33",
			"MGJJ3",
			"MGF13",
			"MGGJ3",
			"MGG23",
			"MGFH3",
			"MGHK3",
			"MGJ23"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGH33,MGJJ3,MGF13,MGGJ3,MGG23,MGFH3,MGHK3,MGJ23"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGT3",
			"MGJ93",
			"MGEQ3",
			"MGG93",
			"MGFQ3",
			"MGF83",
			"MGHA3",
			"MGHT3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Green",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGT3,MGJ93,MGEQ3,MGG93,MGFQ3,MGF83,MGHA3,MGHT3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGY3",
			"MGJF3",
			"MGHG3",
			"MGEW3",
			"MGGF3",
			"MGFY3",
			"MGFE3",
			"MGHY3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGY3,MGJF3,MGHG3,MGEW3,MGGF3,MGFY3,MGFE3,MGHY3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGH53",
			"MGJL3",
			"MGHM3",
			"MGF33",
			"MGGL3",
			"MGG43",
			"MGFK3",
			"MGJ43"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGH53,MGJL3,MGHM3,MGF33,MGGL3,MGG43,MGFK3,MGJ43"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGQ3",
			"MGJ83",
			"MGH93",
			"MGEK3",
			"MGG83",
			"MGFP3",
			"MGF73",
			"MGHR3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGQ3,MGJ83,MGH93,MGEK3,MGG83,MGFP3,MGF73,MGHR3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGGX3",
			"MGJE3",
			"MGEV3",
			"MGGE3",
			"MGFX3",
			"MGFD3",
			"MGHF3",
			"MGHX3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGGX3,MGJE3,MGEV3,MGGE3,MGFX3,MGFD3,MGHF3,MGHX3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MGH43",
			"MGJK3",
			"MGF23",
			"MGGK3",
			"MGG33",
			"MGFJ3",
			"MGHL3",
			"MGJ33"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGH43,MGJK3,MGF23,MGGK3,MGG33,MGFJ3,MGHL3,MGJ33"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MJMX3",
			"MJN73",
			"MJN43",
			"MJN13",
			"MJNE3",
			"MJNM3",
			"MJNA3",
			"MJNH3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Purple",
		storage: "64 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MJMX3,MJN73,MJN43,MJN13,MJNE3,MJNM3,MJNA3,MJNH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MJNF3",
			"MJMY3",
			"MJN83",
			"MJN53",
			"MJN23",
			"MJNP3",
			"MJNC3",
			"MJNJ3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Purple",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MJNF3,MJMY3,MJN83,MJN53,MJN23,MJNP3,MJNC3,MJNJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12",
		models: [
			"MJN03",
			"MJN93",
			"MJN63",
			"MJN33",
			"MJNG3",
			"MJNQ3",
			"MJND3",
			"MJNK3"
		],
		aNumbers: [
			"A2172",
			"A2402",
			"A2404",
			"A2403"
		],
		fccIds: [
			"BCG-E3542A"
		],
		internalName: "D53gAP",
		identifier: "iPhone13,2",
		color: "Purple",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MJN03,MJN93,MJN63,MJN33,MJNG3,MJNQ3,MJND3,MJNK3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLA3",
			"MGML3",
			"MGJN3",
			"MGKW3",
			"MGKH3",
			"MGK23",
			"MGLP3",
			"MGM63"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLA3,MGML3,MGJN3,MGKW3,MGKH3,MGK23,MGLP3,MGM63"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLF3",
			"MGMQ3",
			"MGLU3",
			"MGJT3",
			"MGL23",
			"MGKM3",
			"MGK63",
			"MGMA3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLF3,MGMQ3,MGLU3,MGJT3,MGL23,MGKM3,MGK63,MGMA3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLK3",
			"MGMV3",
			"MGJX3",
			"MGL63",
			"MGKR3",
			"MGKC3",
			"MGLY3",
			"MGMG3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLK3,MGMV3,MGJX3,MGL63,MGKR3,MGKC3,MGLY3,MGMG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGL93",
			"MGMK3",
			"MGJM3",
			"MGKV3",
			"MGKG3",
			"MGK13",
			"MGLN3",
			"MGM53"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Graphite",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGL93,MGMK3,MGJM3,MGKV3,MGKG3,MGK13,MGLN3,MGM53"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLE3",
			"MGMP3",
			"MGLT3",
			"MGJR3",
			"MGKL3",
			"MGK53",
			"MGL03",
			"MGM93"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Graphite",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLE3,MGMP3,MGLT3,MGJR3,MGKL3,MGK53,MGL03,MGM93"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLJ3",
			"MGMU3",
			"MGLX3",
			"MGJW3",
			"MGL53",
			"MGKQ3",
			"MGKA3",
			"MGMF3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Graphite",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLJ3,MGMU3,MGLX3,MGJW3,MGL53,MGKQ3,MGKA3,MGMF3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLC3",
			"MGMM3",
			"MGJP3",
			"MGKX3",
			"MGKJ3",
			"MGK33",
			"MGLQ3",
			"MGM73"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLC3,MGMM3,MGJP3,MGKX3,MGKJ3,MGK33,MGLQ3,MGM73"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLG3",
			"MGMR3",
			"MGJU3",
			"MGL33",
			"MGKN3",
			"MGK73",
			"MGLV3",
			"MGMC3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLG3,MGMR3,MGJU3,MGL33,MGKN3,MGK73,MGLV3,MGMC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLL3",
			"MGMW3",
			"MGM23",
			"MGJY3",
			"MGL73",
			"MGKT3",
			"MGKE3",
			"MGMH3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLL3,MGMW3,MGM23,MGJY3,MGL73,MGKT3,MGKE3,MGMH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLD3",
			"MGMN3",
			"MGJQ3",
			"MGKY3",
			"MGKK3",
			"MGK43",
			"MGLR3",
			"MGM83"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Pacific Blue",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLD3,MGMN3,MGJQ3,MGKY3,MGKK3,MGK43,MGLR3,MGM83"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLH3",
			"MGMT3",
			"MGJV3",
			"MGL43",
			"MGKP3",
			"MGK93",
			"MGLW3",
			"MGMD3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Pacific Blue",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLH3,MGMT3,MGJV3,MGL43,MGKP3,MGK93,MGLW3,MGMD3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro",
		models: [
			"MGLM3",
			"MGMX3",
			"MGK03",
			"MGL83",
			"MGKU3",
			"MGKF3",
			"MGM43",
			"MGMJ3"
		],
		aNumbers: [
			"A2341",
			"A2406",
			"A2407",
			"A2408"
		],
		fccIds: [
			"BCG-E3545A"
		],
		internalName: "D53pAP",
		identifier: "iPhone13,3",
		color: "Pacific Blue",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGLM3,MGMX3,MGK03,MGL83,MGKU3,MGKF3,MGM43,MGMJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC13",
			"MGD83",
			"MG8Y3",
			"MGA93",
			"MG9Q3",
			"MG9C3",
			"MGCG3",
			"MGCV3"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC13,MGD83,MG8Y3,MGA93,MG9Q3,MG9C3,MGCG3,MGCV3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC53",
			"MGDD3",
			"MGCL3",
			"MG933",
			"MGAJ3",
			"MG9V3",
			"MG9G3",
			"MGD03"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC53,MGDD3,MGCL3,MG933,MGAJ3,MG9V3,MG9G3,MGD03"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGCA3",
			"MGDH3",
			"MG973",
			"MGAU3",
			"MGA23",
			"MG9L3",
			"MGCQ3",
			"MGD43"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGCA3,MGDH3,MG973,MGAU3,MGA23,MG9L3,MGCQ3,MGD43"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC03",
			"MGD73",
			"MG8X3",
			"MGA73",
			"MG9P3",
			"MG9A3",
			"MGCF3",
			"MGCU3"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Graphite",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC03,MGD73,MG8X3,MGA73,MG9P3,MG9A3,MGCF3,MGCU3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC43",
			"MGDC3",
			"MGCK3",
			"MG923",
			"MGAH3",
			"MG9U3",
			"MG9F3",
			"MGCY3"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Graphite",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC43,MGDC3,MGCK3,MG923,MGAH3,MG9U3,MG9F3,MGCY3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC93",
			"MGDG3",
			"MGCP3",
			"MG963",
			"MGAR3",
			"MG9Y3",
			"MG9K3",
			"MGD33"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Graphite",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC93,MGDG3,MGCP3,MG963,MGAR3,MG9Y3,MG9K3,MGD33"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC23",
			"MGD93",
			"MG903",
			"MGAA3",
			"MG9R3",
			"MG9D3",
			"MGCH3",
			"MGCW3"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC23,MGD93,MG903,MGAA3,MG9R3,MG9D3,MGCH3,MGCW3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC63",
			"MGDE3",
			"MG943",
			"MGAM3",
			"MG9W3",
			"MG9H3",
			"MGCM3",
			"MGD13"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC63,MGDE3,MG943,MGAM3,MG9W3,MG9H3,MGCM3,MGD13"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGCC3",
			"MGDK3",
			"MGCR3",
			"MG983",
			"MGAW3",
			"MGA33",
			"MG9M3",
			"MGD53"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGCC3,MGDK3,MGCR3,MG983,MGAW3,MGA33,MG9M3,MGD53"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC33",
			"MGDA3",
			"MGCJ3",
			"MG913",
			"MGAF3",
			"MG9T3",
			"MG9E3",
			"MGCX3"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Pacific Blue",
		storage: "128 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC33,MGDA3,MGCJ3,MG913,MGAF3,MG9T3,MG9E3,MGCX3"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGC73",
			"MGDF3",
			"MG953",
			"MGAQ3",
			"MG9X3",
			"MG9J3",
			"MGCN3",
			"MGD23"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Pacific Blue",
		storage: "256 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGC73,MGDF3,MG953,MGAQ3,MG9X3,MG9J3,MGCN3,MGD23"
	},
	{
		type: "iPhone",
		generation: "iPhone 12 Pro Max",
		models: [
			"MGCE3",
			"MGDL3",
			"MG993",
			"MGAX3",
			"MGA43",
			"MG9N3",
			"MGCT3",
			"MGD63"
		],
		aNumbers: [
			"A2342",
			"A2410",
			"A2411",
			"A2412"
		],
		fccIds: [
			"BCG-E3548A"
		],
		internalName: "D54pAP",
		identifier: "iPhone13,4",
		color: "Pacific Blue",
		storage: "512 GB",
		bootrom: "Bootrom 5281.0.0.100.45",
		modelsSearchable: "MGCE3,MGDL3,MG993,MGAX3,MGA43,MG9N3,MGCT3,MGD63"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK33",
			"MLHQ3",
			"MLDF3",
			"MLJG3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK33,MLHQ3,MLDF3,MLJG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK83",
			"MLHW3",
			"MLDL3",
			"MLJM3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK83,MLHW3,MLDL3,MLJM3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLKE3",
			"MLJ23",
			"MLDR3",
			"MLJW3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "PRODUCT(RED)",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLKE3,MLJ23,MLDR3,MLJW3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK13",
			"MLHN3",
			"MLDD3",
			"MLJE3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Starlight",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK13,MLHN3,MLDD3,MLJE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK63",
			"MLHU3",
			"MLDJ3",
			"MLJK3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK63,MLHU3,MLDJ3,MLJK3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLKC3",
			"MLJ03",
			"MLDP3",
			"MLJR3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Starlight",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLKC3,MLJ03,MLDP3,MLJR3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK03",
			"MLHM3",
			"MLDC3",
			"MLJC3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Midnight",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK03,MLHM3,MLDC3,MLJC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK53",
			"MLHT3",
			"MLDH3",
			"MLJJ3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Midnight",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK53,MLHT3,MLDH3,MLJJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLKA3",
			"MLHY3",
			"MLDN3",
			"MLJP3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Midnight",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLKA3,MLHY3,MLDN3,MLJP3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK43",
			"MLHR3",
			"MLDG3",
			"MLJH3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK43,MLHR3,MLDG3,MLJH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK93",
			"MLHX3",
			"MLDM3",
			"MLJN3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK93,MLHX3,MLDM3,MLJN3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLKF3",
			"MLJ33",
			"MLDT3",
			"MLJY3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Blue",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLKF3,MLJ33,MLDT3,MLJY3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK23",
			"MLHP3",
			"MLDE3",
			"MLJF3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Pink",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK23,MLHP3,MLDE3,MLJF3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLK73",
			"MLHV3",
			"MLDK3",
			"MLJL3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Pink",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLK73,MLHV3,MLDK3,MLJL3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MLKD3",
			"MLJ13",
			"MLDQ3",
			"MLJU3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Pink",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLKD3,MLJ13,MLDQ3,MLJU3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MNF83",
			"MNF53",
			"MNFF3",
			"MNFC3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNF83,MNF53,MNFF3,MNFC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MNF93",
			"MNF63",
			"MNFG3",
			"MNFD3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNF93,MNF63,MNFG3,MNFD3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 mini",
		models: [
			"MNFA3",
			"MNF73",
			"MNFH3",
			"MNFE3"
		],
		aNumbers: [
			"A2481",
			"A2626",
			"A2629",
			"A2630",
			"A2628"
		],
		fccIds: [
			"?"
		],
		internalName: "D16AP",
		identifier: "iPhone14,4",
		color: "Green",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNFA3,MNF73,MNFH3,MNFE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLPJ3",
			"MLMQ3",
			"MLDX3",
			"MLNF3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLPJ3,MLMQ3,MLDX3,MLNF3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQ93",
			"MLN03",
			"MLE33",
			"MLNL3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQ93,MLN03,MLE33,MLNL3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQF3",
			"MLN53",
			"MLEA3",
			"MLNR3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "PRODUCT(RED)",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQF3,MLN53,MLEA3,MLNR3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLPG3",
			"MLMM3",
			"MLDV3",
			"MLND3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Starlight",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLPG3,MLMM3,MLDV3,MLND3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQ73",
			"MLMX3",
			"MLE13",
			"MLNJ3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQ73,MLMX3,MLE13,MLNJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQD3",
			"MLN33",
			"MLE73",
			"MLNP3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Starlight",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQD3,MLN33,MLE73,MLNP3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLPF3",
			"MLML3",
			"MLDU3",
			"MLNC3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Midnight",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLPF3,MLML3,MLDU3,MLNC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQ63",
			"MLN23",
			"MLE03",
			"MLNH3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Midnight",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQ63,MLN23,MLE03,MLNH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQC3",
			"MLN23",
			"MLE63",
			"MLNN3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Midnight",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQC3,MLN23,MLE63,MLNN3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLPK3",
			"MLMT3",
			"MLDY3",
			"MLNG3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLPK3,MLMT3,MLDY3,MLNG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQA3",
			"MLN13",
			"MLE43",
			"MLNM3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQA3,MLN13,MLE43,MLNM3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQG3",
			"MLN83",
			"MLEC3",
			"MLNT3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Blue",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQG3,MLN83,MLEC3,MLNT3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLPH3",
			"MLMN3",
			"MLDW3",
			"MLNE3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Pink",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLPH3,MLMN3,MLDW3,MLNE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQ83",
			"MLMY3",
			"MLE23",
			"MLNK3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Pink",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQ83,MLMY3,MLE23,MLNK3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MLQE3",
			"MLN43",
			"MLE93",
			"MLNQ3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Pink",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLQE3,MLN43,MLE93,MLNQ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MNGD3",
			"MNG93",
			"MNGK3",
			"MNGG3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Green",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNGD3,MNG93,MNGK3,MNGG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MNGE3",
			"MNGA3",
			"MNGL3",
			"MNGH3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Green",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNGE3,MNGA3,MNGL3,MNGH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13",
		models: [
			"MNGF3",
			"MNGC3",
			"MNGM3",
			"MNGJ3"
		],
		aNumbers: [
			"A2482",
			"A2631",
			"A2634",
			"A2635",
			"A2633"
		],
		fccIds: [
			"?"
		],
		internalName: "D17AP",
		identifier: "iPhone14,5",
		color: "Green",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNGF3,MNGC3,MNGM3,MNGJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLV93",
			"MLTP3",
			"MLT53"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Graphite",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLV93,MLTP3,MLT53"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVE3",
			"MLTW3",
			"MLT93"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Graphite",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVE3,MLTW3,MLT93"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVH3",
			"MLU13",
			"MLTF3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Graphite",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVH3,MLU13,MLTF3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVV3",
			"MLU93",
			"MLTK3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Graphite",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVV3,MLU93,MLTK3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVC3",
			"MLTR3",
			"MLT73"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVC3,MLTR3,MLT73"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVK3",
			"MLTY3",
			"MLTH3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVK3,MLTY3,MLTH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVQ3",
			"MLU43",
			"MLTH3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVQ3,MLU43,MLTH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVY3",
			"MLUC3",
			"MLTM3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Gold",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVY3,MLUC3,MLTM3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVA3",
			"MLTQ3",
			"MLT63"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVA3,MLTQ3,MLT63"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVF3",
			"MLTX3",
			"MLTC3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVF3,MLTX3,MLTC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVN3",
			"MLU33",
			"MLTG3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVN3,MLU33,MLTG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVW3",
			"MLUA3",
			"MLTL3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Silver",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVW3,MLUA3,MLTL3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVD3",
			"MLTT3",
			"MLT83"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Sierra Blue",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVD3,MLTT3,MLT83"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVP3",
			"MLU03",
			"MLTE3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Sierra Blue",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVP3,MLU03,MLTE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLVU3",
			"MLU73",
			"MLTJ3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Sierra Blue",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLVU3,MLU73,MLTJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MLW03",
			"MLUD3",
			"MLTN3"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Sierra Blue",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLW03,MLUD3,MLTN3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MNDT3",
			"MNDN3",
			"MNE23"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Alpine Green",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNDT3,MNDN3,MNE23"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MNDU3",
			"MNDP3",
			"MNE33"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Alpine Green",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNDU3,MNDP3,MNE33"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MNDV3",
			"MNDQ3",
			"MNE43"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Alpine Green",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNDV3,MNDQ3,MNE43"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro",
		models: [
			"MNDW3",
			"MNDR3",
			"MNE53"
		],
		aNumbers: [
			"A2483",
			"A2636",
			"A2639",
			"A2640",
			"A2638"
		],
		fccIds: [
			"?"
		],
		internalName: "D63AP",
		identifier: "iPhone14,2",
		color: "Alpine Green",
		storage: "1 TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNDW3,MNDR3,MNE53"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLL63",
			"MLKL3",
			"MLH43"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Graphite",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLL63,MLKL3,MLH43"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLA3",
			"MLKR3",
			"MLH83"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Graphite",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLA3,MLKR3,MLH83"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLF3",
			"MLKW3",
			"MLHD3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Graphite",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLF3,MLKW3,MLHD3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLK3",
			"MLL23",
			"MLHH3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Graphite",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLK3,MLL23,MLHH3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLL83",
			"MLKN3",
			"MLH63"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLL83,MLKN3,MLH63"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLD3",
			"MLKU3",
			"MLHA3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLD3,MLKU3,MLHA3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLH3",
			"MLKY3",
			"MLHF3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLH3,MLKY3,MLHF3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLM3",
			"MLL43",
			"MLHK3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Gold",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLM3,MLL43,MLHK3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLL73",
			"MLKM3",
			"MLH53"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLL73,MLKM3,MLH53"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLC3",
			"MLKT3",
			"MLH93"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLC3,MLKT3,MLH93"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLG3",
			"MLKX3",
			"MLHE3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLG3,MLKX3,MLHE3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLL3",
			"MLL33",
			"MLHJ3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Silver",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLL3,MLL33,MLHJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLL93",
			"MLKP3",
			"MLH73"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Sierra Blue",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLL93,MLKP3,MLH73"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLE3",
			"MLKV3",
			"MLHC3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Sierra Blue",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLE3,MLKV3,MLHC3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLJ3",
			"MLL03",
			"MLHG3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Sierra Blue",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLJ3,MLL03,MLHG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MLLN3",
			"MLL53",
			"MLHL3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Sierra Blue",
		storage: "1TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MLLN3,MLL53,MLHL3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MNCP3",
			"MNCK3",
			"MNCY3"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Alpine Green",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNCP3,MNCK3,MNCY3"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MNCQ3",
			"MNCL3",
			"MND03"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Alpine Green",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNCQ3,MNCL3,MND03"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MNCR3",
			"MNCM3",
			"MND13"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Alpine Green",
		storage: "512 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNCR3,MNCM3,MND13"
	},
	{
		type: "iPhone",
		generation: "iPhone 13 Pro Max",
		models: [
			"MNCT3",
			"MNCN3",
			"MND23"
		],
		aNumbers: [
			"A2484",
			"A2641",
			"A2644",
			"A2645",
			"A2643"
		],
		fccIds: [
			"BCG-E4003A"
		],
		internalName: "D64AP",
		identifier: "iPhone14,3",
		color: "Alpine Green",
		storage: "1 TB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MNCT3,MNCN3,MND23"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMX53",
			"MMWV3",
			"MMXF3",
			"MMYC3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "Midnight",
		storage: "64 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMX53,MMWV3,MMXF3,MMYC3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMX83",
			"MMWY3",
			"MMXJ3",
			"MMYF3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "Midnight",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMX83,MMWY3,MMXJ3,MMYF3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMXC3",
			"MMX23",
			"MMXM3",
			"MMYJ3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "Midnight",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMXC3,MMX23,MMXM3,MMYJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMX63",
			"MMWW3",
			"MMXG3",
			"MMYD3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "Starlight",
		storage: "64 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMX63,MMWW3,MMXG3,MMYD3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMX93",
			"MMX03",
			"MMXK3",
			"MMYG3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "Starlight",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMX93,MMX03,MMXK3,MMYG3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMXD3",
			"MMX33",
			"MMXN3",
			"MMYK3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMXD3,MMX33,MMXN3,MMYK3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMX73",
			"MMWX3",
			"MMXH3",
			"MMYE3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMX73,MMWX3,MMXH3,MMYE3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMXA3",
			"MMX13",
			"MMXL3",
			"MMYH3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMXA3,MMX13,MMXL3,MMYH3"
	},
	{
		type: "iPhone",
		generation: "iPhone SE (3rd generation)",
		models: [
			"MMXE3",
			"MMX43",
			"MMXP3",
			"MMYL3"
		],
		aNumbers: [
			"A2595",
			"A2782",
			"A2783",
			"A2784",
			"A2785"
		],
		fccIds: [
			"BCG-E4082A",
			"BCG-E8064A",
			"BCG-E4083A",
			"BCG-E8076A"
		],
		internalName: "D49AP",
		identifier: "iPhone14,6",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 6338.0.0.200.19",
		modelsSearchable: "MMXE3,MMX43,MMXP3,MMYL3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPVN3",
			"MPVH3",
			"MPVG3",
			"MPVJ3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Blue",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MPVN3,MPVH3,MPVG3,MPVJ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPWP3",
			"MPWM3",
			"MPWL3",
			"MPWN3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Blue",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPWP3,MPWM3,MPWL3,MPWN3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPXN3",
			"MPXL3",
			"MPXK3",
			"MPXM3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Blue",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MPXN3,MPXL3,MPXK3,MPXM3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPUF3",
			"MPUA3",
			"MPU93",
			"MPUD3V"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Midnight",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MPUF3,MPUA3,MPU93,MPUD3V"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPVX3",
			"MPVV3",
			"MPVU3",
			"MPVW3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Midnight",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPVX3,MPVV3,MPVU3,MPVW3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPWW3",
			"MPWU3",
			"MPWT3",
			"MPWV3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Midnight",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MPWW3,MPWU3,MPWT3,MPWV3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPUR3",
			"MPUN3",
			"MPUJ3",
			"MPUQ3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Starlight",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MPUR3,MPUN3,MPUJ3,MPUQ3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPW43",
			"MPW23",
			"MPW13",
			"MPW33"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPW43,MPW23,MPW13,MPW33"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPX33",
			"MPX13",
			"MPX03",
			"MPX23"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Starlight",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MPX33,MPX13,MPX03,MPX23"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPVA3",
			"MPV73",
			"MPV63",
			"MPV93"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MPVA3,MPV73,MPV63,MPV93"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPWH3",
			"MPWF3",
			"MPWE3",
			"MPWG3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPWH3,MPWF3,MPWE3,MPWG3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPXG3",
			"MPXE3",
			"MPXD3",
			"MPXF3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "PRODUCT(RED)",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MPXG3,MPXE3,MPXD3,MPXF3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPV03",
			"MPUX3",
			"MPUW3",
			"MPUY3"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Purple",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MPV03,MPUX3,MPUW3,MPUY3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPWA3",
			"MPW83",
			"MPW73",
			"MPW93"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Purple",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MPWA3,MPW83,MPW73,MPW93"
	},
	{
		type: "iPhone",
		generation: "iPhone 14",
		models: [
			"MPX93",
			"MPX73",
			"MPX63",
			"MPX83"
		],
		aNumbers: [
			"A2649",
			"A2881",
			"A2882",
			"A2883",
			"A2884"
		],
		fccIds: [
			"?"
		],
		internalName: "D27AP",
		identifier: "iPhone14,7",
		color: "Purple",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MPX93,MPX73,MPX63,MPX83"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ523",
			"MQ3W3",
			"MQ3A3",
			"MQ4H3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Blue",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MQ523,MQ3W3,MQ3A3,MQ4H3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ583",
			"MQ423",
			"MQ3G3",
			"MQ4Q3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Blue",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MQ583,MQ423,MQ3G3,MQ4Q3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ5G3",
			"MQ493",
			"MQ3Q3",
			"MQ4W3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Blue",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MQ5G3,MQ493,MQ3Q3,MQ4W3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ4X3",
			"MQ3R3",
			"MQ353",
			"MQ4A3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Midnight",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MQ4X3,MQ3R3,MQ353,MQ4A3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ533",
			"MQ3X3",
			"MQ3C3",
			"MQ4J3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Midnight",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MQ533,MQ3X3,MQ3C3,MQ4J3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ593",
			"MQ433",
			"MQ3H3",
			"MQ4R3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Midnight",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MQ593,MQ433,MQ3H3,MQ4R3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ4Y3",
			"MQ3T3",
			"MQ363",
			"MQ4D3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Starlight",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MQ4Y3,MQ3T3,MQ363,MQ4D3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ553",
			"MQ3Y3",
			"MQ3D3",
			"MQ4L3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Starlight",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MQ553,MQ3Y3,MQ3D3,MQ4L3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ5D3",
			"MQ443",
			"MQ3J3",
			"MQ4T3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Starlight",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MQ5D3,MQ443,MQ3J3,MQ4T3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ513",
			"MQ3V3",
			"MQ393",
			"MQ4F3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MQ513,MQ3V3,MQ393,MQ4F3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ573",
			"MQ413",
			"MQ3F3",
			"MQ4P3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MQ573,MQ413,MQ3F3,MQ4P3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ5F3",
			"MQ473",
			"MQ3P3",
			"MQ4V3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "PRODUCT(RED)",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MQ5F3,MQ473,MQ3P3,MQ4V3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ503",
			"MQ3U3",
			"MQ373",
			"MQ4E3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Purple",
		storage: "128 GB",
		bootrom: "?",
		modelsSearchable: "MQ503,MQ3U3,MQ373,MQ4E3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ563",
			"MQ403",
			"MQ3E3",
			"MQ4M3V"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Purple",
		storage: "256 GB",
		bootrom: "?",
		modelsSearchable: "MQ563,MQ403,MQ3E3,MQ4M3V"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Plus",
		models: [
			"MQ5E3",
			"MQ463",
			"MQ3K3",
			"MQ4U3"
		],
		aNumbers: [
			"A2632",
			"A2885",
			"A2886",
			"A2887",
			"A2888"
		],
		fccIds: [
			"?"
		],
		internalName: "D28AP",
		identifier: "iPhone14,8",
		color: "Purple",
		storage: "512 GB",
		bootrom: "?",
		modelsSearchable: "MQ5E3,MQ463,MQ3K3,MQ4U3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ0E3",
			"MQ0G3",
			"MQ0D3",
			"MQ0F3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Deep Purple",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ0E3,MQ0G3,MQ0D3,MQ0F3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ1D3",
			"MQ1F3",
			"MQ1C3",
			"MQ1E3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Deep Purple",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ1D3,MQ1F3,MQ1C3,MQ1E3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ273",
			"MQ293",
			"MQ263",
			"MQ283"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Deep Purple",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ273,MQ293,MQ263,MQ283"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ303",
			"MQ323",
			"MQ2Y3",
			"MQ313"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Deep Purple",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ303,MQ323,MQ2Y3,MQ313"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ063",
			"MQ083",
			"MQ053",
			"MQ073"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ063,MQ083,MQ053,MQ073"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ163",
			"MQ183",
			"MQ143",
			"MQ173"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ163,MQ183,MQ143,MQ173"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ213",
			"MQ233",
			"MQ203",
			"MQ223"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ213,MQ233,MQ203,MQ223"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ2T3",
			"MQ2V3",
			"MQ2R3",
			"MQ2U3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Gold",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ2T3,MQ2V3,MQ2R3,MQ2U3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ003",
			"MQ023",
			"MPXY3",
			"MQ013"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ003,MQ023,MPXY3,MQ013"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ0X3",
			"MQ103",
			"MQ0W3",
			"MQ0Y3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ0X3,MQ103,MQ0W3,MQ0Y3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ1U3",
			"MQ1W3",
			"MQ1R3",
			"MQ1V3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ1U3,MQ1W3,MQ1R3,MQ1V3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ2L3",
			"MQ2N3",
			"MQ2K3",
			"MQ2M3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Silver",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ2L3,MQ2N3,MQ2K3,MQ2M3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MPXT3",
			"MPXV3",
			"MPXR3",
			"MPXU3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Space Black",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MPXT3,MPXV3,MPXR3,MPXU3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ0N3",
			"MQ0T3",
			"MQ0M3",
			"MQ0Q3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Space Black",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ0N3,MQ0T3,MQ0M3,MQ0Q3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ1K3",
			"MQ1M3",
			"MQ1J3",
			"MQ1L3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Space Black",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ1K3,MQ1M3,MQ1J3,MQ1L3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro",
		models: [
			"MQ2E3",
			"MQ2G3",
			"MQ2D3",
			"MQ2F3"
		],
		aNumbers: [
			"A2650",
			"A2889",
			"A2890",
			"A2891",
			"A2892"
		],
		fccIds: [
			"BCG-E8140A",
			"BCG-E8151A"
		],
		internalName: "D73AP",
		identifier: "iPhone15,2",
		color: "Space Black",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ2E3,MQ2G3,MQ2D3,MQ2F3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9T3",
			"MQ8R3",
			"MQ863",
			"MQ993"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Deep Purple",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9T3,MQ8R3,MQ863,MQ993"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9X3",
			"MQ8W3",
			"MQ8A3",
			"MQ9E3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Deep Purple",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9X3,MQ8W3,MQ8A3,MQ9E3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQAM3",
			"MQ913",
			"MQ8G3",
			"MQ9J3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Deep Purple",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQAM3,MQ913,MQ8G3,MQ9J3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQC53",
			"MQ953",
			"MQ8M3",
			"MQ9N3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Deep Purple",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQC53,MQ953,MQ8M3,MQ9N3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9R3",
			"MQ8Q3",
			"MQ853",
			"MQ983"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9R3,MQ8Q3,MQ853,MQ983"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9W3",
			"MQ8V3",
			"MQ893",
			"MQ9D3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9W3,MQ8V3,MQ893,MQ9D3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQAJ3",
			"MQ903",
			"MQ8F3",
			"MQ9H3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Gold",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQAJ3,MQ903,MQ8F3,MQ9H3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQC43",
			"MQ943",
			"MQ8L3",
			"MQ9M3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Gold",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQC43,MQ943,MQ8L3,MQ9M3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9Q3",
			"MQ8P3",
			"MQ843",
			"MQ973"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9Q3,MQ8P3,MQ843,MQ973"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9V3",
			"MQ8U3",
			"MQ883",
			"MQ9C3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9V3,MQ8U3,MQ883,MQ9C3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQAH3",
			"MQ8Y3",
			"MQ8E3",
			"MQ9G3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Silver",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQAH3,MQ8Y3,MQ8E3,MQ9G3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQC33",
			"MQ933",
			"MQ8J3",
			"MQ9L3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Silver",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQC33,MQ933,MQ8J3,MQ9L3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9P3",
			"MQ8N3",
			"MQ833",
			"MQ963"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Space Black",
		storage: "128 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9P3,MQ8N3,MQ833,MQ963"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQ9U3",
			"MQ8T3",
			"MQ873",
			"MQ9A3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Space Black",
		storage: "256 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQ9U3,MQ8T3,MQ873,MQ9A3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQAF3",
			"MQ8X3",
			"MQ8D3",
			"MQ9F3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Space Black",
		storage: "512 GB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQAF3,MQ8X3,MQ8D3,MQ9F3"
	},
	{
		type: "iPhone",
		generation: "iPhone 14 Pro Max",
		models: [
			"MQC23",
			"MQ923",
			"MQ8H3",
			"MQ9K3"
		],
		aNumbers: [
			"A2651",
			"A2893",
			"A2894",
			"A2895",
			"A2896"
		],
		fccIds: [
			"?"
		],
		internalName: "D74AP",
		identifier: "iPhone15,3",
		color: "Space Black",
		storage: "1 TB",
		bootrom: "Bootrom 7195.0.0.300.25",
		modelsSearchable: "MQC23,MQ923,MQ8H3,MQ9K3"
	}
];

var ipods = [
	{
		type: "iPod touch",
		generation: "iPod touch",
		models: [
			"MA623",
			"MA624",
			"MA839"
		],
		aNumbers: [
			"A1213"
		],
		fccIds: [
			"BCGA1213"
		],
		internalName: "N45AP",
		identifier: "iPod1,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MA623,MA624,MA839"
	},
	{
		type: "iPod touch",
		generation: "iPod touch",
		models: [
			"MA627",
			"MA628"
		],
		aNumbers: [
			"A1213"
		],
		fccIds: [
			"BCGA1213"
		],
		internalName: "N45AP",
		identifier: "iPod1,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MA627,MA628"
	},
	{
		type: "iPod touch",
		generation: "iPod touch",
		models: [
			"MB376"
		],
		aNumbers: [
			"A1213"
		],
		fccIds: [
			"BCGA1213"
		],
		internalName: "N45AP",
		identifier: "iPod1,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom Rev.2",
		modelsSearchable: "MB376"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (2nd generation)",
		models: [
			"MB525",
			"MB528",
			"MB529"
		],
		aNumbers: [
			"A1288",
			"A1319"
		],
		fccIds: [
			"BCGA1288"
		],
		internalName: "N72AP",
		identifier: "iPod2,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom 240.4",
		modelsSearchable: "MB525,MB528,MB529"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (2nd generation)",
		models: [
			"MB531",
			"MB532"
		],
		aNumbers: [
			"A1288",
			"A1319"
		],
		fccIds: [
			"BCGA1288"
		],
		internalName: "N72AP",
		identifier: "iPod2,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 240.4",
		modelsSearchable: "MB531,MB532"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (2nd generation)",
		models: [
			"MB533",
			"MB534"
		],
		aNumbers: [
			"A1288",
			"A1319"
		],
		fccIds: [
			"BCGA1288"
		],
		internalName: "N72AP",
		identifier: "iPod2,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 240.4",
		modelsSearchable: "MB533,MB534"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (2nd generation)",
		models: [
			"MC086"
		],
		aNumbers: [
			"A1288",
			"A1319"
		],
		fccIds: [
			"BCGA1288"
		],
		internalName: "N72AP",
		identifier: "iPod2,1",
		color: "Bootrom 240.5.1",
		storage: "8 GB",
		bootrom: "Bootrom 240.4",
		modelsSearchable: "MC086"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (3rd generation)",
		models: [
			"MC008"
		],
		aNumbers: [
			"A1318"
		],
		fccIds: [
			"BCG-2310"
		],
		internalName: "N18AP",
		identifier: "iPod3,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 359.5",
		modelsSearchable: "MC008"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (3rd generation)",
		models: [
			"MC011"
		],
		aNumbers: [
			"A1318"
		],
		fccIds: [
			"BCG-2310"
		],
		internalName: "N18AP",
		identifier: "iPod3,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 359.5",
		modelsSearchable: "MC011"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"MC540"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "Black",
		storage: "8 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC540"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"ME178"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "Black",
		storage: "16 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "ME178"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"MC544"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "Black",
		storage: "32 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC544"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"MC547"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "Black",
		storage: "64 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MC547"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"MD057"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "White",
		storage: "8 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MD057"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"ME179"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "White",
		storage: "16 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "ME179"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"MD058"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "White",
		storage: "32 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MD058"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (4th generation)",
		models: [
			"MD059"
		],
		aNumbers: [
			"A1367"
		],
		fccIds: [
			"BCG-E2407"
		],
		internalName: "N81AP",
		identifier: "iPod4,1",
		color: "White",
		storage: "64 GB",
		bootrom: "Bootrom 574.4",
		modelsSearchable: "MD059"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD723"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Black & Slate",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD723"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD724"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Black & Slate",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD724"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MGG32"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Blue",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MGG32"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD717"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Blue",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD717"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD718"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Blue",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD718"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MGFY2"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Pink",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MGFY2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MC903"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Pink",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MC903"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MC904"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Pink",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MC904"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MGG72"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "PRODUCT(RED)",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MGG72"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD749"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "PRODUCT(RED)",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD749"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD750"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD750"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MGG52"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "White & Silver",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MGG52"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD720",
			"ME108[6]"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "White & Silver",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD720,ME108[6]"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD721"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "White & Silver",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD721"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MGG82"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MGG82"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"ME978"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "ME978"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"ME979"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "ME979"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MGG12"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Yellow",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "MGG12"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD714"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Yellow",
		storage: "32 GB",
		bootrom: "ROM",
		modelsSearchable: "MD714"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"MD715"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "N78AP",
		identifier: "iPod5,1",
		color: "Yellow",
		storage: "64 GB",
		bootrom: "ROM",
		modelsSearchable: "MD715"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (5th generation)",
		models: [
			"ME643"
		],
		aNumbers: [
			"A1421"
		],
		fccIds: [
			"BCG-A1421"
		],
		internalName: "A1509",
		identifier: "N78aAP",
		color: "Black & Silver",
		storage: "16 GB",
		bootrom: "ROM",
		modelsSearchable: "ME643"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKH22"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Blue",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKH22"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHV2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Blue",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHV2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHE2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Blue",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHE2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKWP2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKWP2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKH02"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Gold",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKH02"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHT2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHT2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHC2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Gold",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHC2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKWM2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKWM2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKGX2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Pink",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKGX2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHQ2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Pink",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHQ2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKGW2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Pink",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKGW2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKWK2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Pink",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKWK2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKH82"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "PRODUCT(RED)",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKH82"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKJ22"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "PRODUCT(RED)",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKJ22"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHN2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "PRODUCT(RED)",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHN2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKWW2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKWW2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKH42"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Silver",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKH42"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHX2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHX2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHJ2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Silver",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHJ2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKWR2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKWR2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKH62"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Space Gray",
		storage: "16 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKH62"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKJ02"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKJ02"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKHL2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Space Gray",
		storage: "64 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKHL2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (6th generation)",
		models: [
			"MKWU2"
		],
		aNumbers: [
			"A1574"
		],
		fccIds: [
			"BCGA1574"
		],
		internalName: "N102AP",
		identifier: "iPod7,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 1992.0.0.1.19",
		modelsSearchable: "MKWU2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHU2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Blue",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHU2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ32"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Blue",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ32"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJC2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Blue",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJC2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHT2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Gold",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHT2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ22"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Gold",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ22"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ92"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Gold",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ92"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHR2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Pink",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHR2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHY2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Pink",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHY2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ82"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Pink",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ82"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHX2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "PRODUCT(RED)",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHX2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ72"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "PRODUCT(RED)",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ72"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJF2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "PRODUCT(RED)",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJF2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHV2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Silver",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHV2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ52"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Silver",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ52"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJD2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Silver",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJD2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVHW2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Space Gray",
		storage: "32 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVHW2"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJ62"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Space Gray",
		storage: "128 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJ62"
	},
	{
		type: "iPod touch",
		generation: "iPod touch (7th generation)",
		models: [
			"MVJE2"
		],
		aNumbers: [
			"A2178"
		],
		fccIds: [
			"BCGA2178"
		],
		internalName: "N112AP",
		identifier: "iPod9,1",
		color: "Space Gray",
		storage: "256 GB",
		bootrom: "Bootrom 2696.0.0.1.33",
		modelsSearchable: "MVJE2"
	}
];

/**
 * Retrieves all devices from the dataset.
 * @returns {IDevice[]} - An array of all devices.
 */
const getAllDevices = () => {
    return [...airpods, ...appleWatches, ...ipads, ...iphones, ...ipods];
};
/**
 * Searches for device by their model.
 * @param {string} model - The model to search for.
 * @returns {IDevice} - The device that matches the provided model.
 */
const searchByModel = (model) => {
    const device = getAllDevices().find((device) => device.modelsSearchable.includes(model));
    return device || null;
};
/**
 * Searches for devices by their type.
 * @param {string} type - The type to search for.
 * @returns {IDevice[]} - An array of IDevice that match the provided type.
 */
const searchByType = (type) => {
    return getAllDevices().filter((device) => device.type === type);
};

exports.getAllDevices = getAllDevices;
exports.searchByModel = searchByModel;
exports.searchByType = searchByType;
