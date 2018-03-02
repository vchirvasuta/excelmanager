//Export top 100
records = [];
var cursor = db.getCollection('companyDataFileValid').find({}, {});
var i = 0;
while(cursor.hasNext() && i<100) {
    i++;
    records.push(cursor.next())
}
print(tojson(records));


//Insert documents
db.getCollection('companyDataFile').insertMany([
	{
		"_id" : ObjectId("594e086b3e5c832107db1320"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-09-04T03:15:58.820+0200",
					"localActivityCode" : "4761",
					"retainedScoreSource" : "996",
					"localTotalEmployees" : 1,
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2004",
					"foundationDate" : "20041124",
					"atRatingScore" : "4",
					"numberOfEmployees" : 1,
					"workingCapital" : {
						"value" : "0",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-09-04T00:00:00.000+0200",
					"localFormeJuridique" : "100",
					"atRatingScoreType" : "D",
					"retainedScore" : "2.092",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-09-04T00:00:00.000+0200",
					"localExpPaiemt" : "1",
					"currencyUnit" : "0",
					"interpretedScore" : "4",
					"retainedScoreSourceName" : "Coface Internal Light Score",
					"informationSupplierReference" : "246105",
					"interpretedScoreSourceName" : "ICON LatAm",
					"nace" : "4761",
					"interpretedScoreSource" : "562",
					"legalForm" : "0001",
					"currency" : "USD",
					"exchangeRate" : "0.84697391"
				},
				"evaluation" : {
					"scoreDate" : "20170904",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "562",
					"score" : "4"
				},
				"sourceId" : "562",
				"financialStatement" : {
					"fiscalPeriod" : "IA"
				},
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "AV. DE LA PRENSA N48-86 Y RIO TOPO",
				"primaryName" : "PANCHI MEDIAVILLA SANTIAGO FERNANDO",
				"telephoneNumber" : "5932249-9525",
				"faxNumber" : "593994959996",
				"postalTown" : "QUITO"
			},
			"yearY1" : {
				"financialStatement" : {
					"fiscalPeriod" : "IA"
				},
				"sourceId" : "562"
			},
			"yearY2" : {
				"financialStatement" : {
					"fiscalPeriod" : "IA"
				},
				"sourceId" : "562"
			}
		},
		"easyNumber" : "00009401069900",
		"countryCode" : "ECU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "246105",
					"sourceIdType" : "IP",
					"code" : "562"
				},
				"contentNature" : "I1_LIGHTINQ",
				"supplyMode" : "MONITORING"
			},
			"receivedDataEDMSid" : "EDMS-01-15151513"
		},
		"companyDataFileId" : "CDF-59aca94cdd0b0679d56aa604",
		"creationDate" : ISODate("2017-09-04T01:15:56.740Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-221349983",
		"riskDataSnapshot" : {
			"crsNumber" : "275026722"
		},
		"lastUpdateDate" : ISODate("2017-09-04T01:15:59.366Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12fc"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-06-29T08:01:50.676+0200",
					"localActivityCode" : "4311",
					"retainedScoreSource" : "158",
					"localTotalEmployees" : 1,
					"yearStarted" : "2015",
					"foundationDate" : "20150504",
					"atRatingScore" : "4",
					"numberOfEmployees" : 1,
					"retainedScoreDate" : "2017-06-29T00:00:00.000+0200",
					"localFormeJuridique" : "00003",
					"atRatingScoreType" : "D",
					"retainedScore" : "503",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-06-29T00:00:00.000+0200",
					"localExpPaiemt" : "029",
					"currencyUnit" : "0",
					"interpretedScore" : "503",
					"retainedScoreSourceName" : "AKCI  ALLGEMEINE KREDIT COFACE INFORMATIONS GMBH",
					"informationSupplierReference" : "7331184576",
					"interpretedScoreSourceName" : "VERBAND DER VEREINE CREDITREFORM E.V.",
					"nace" : "4311",
					"interpretedScoreSource" : "165",
					"turnover" : {
						"value" : "75000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0055",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170629",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "165",
					"score" : "503"
				},
				"sourceId" : "165"
			},
			"identification" : {
				"addressLine" : "28  Sudetenring",
				"primaryName" : "Zdravko Frcek \nAbbrucharbeiten, Heizung-Lüftung-Sanitär",
				"zipCode" : "71642",
				"postalTown" : "Ludwigsburg"
			},
			"yearY1" : {
				"sourceId" : "165"
			},
			"yearY2" : {
				"sourceId" : "165"
			}
		},
		"easyNumber" : "00010048000100",
		"countryCode" : "DEU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "7331184576",
					"requestId" : "78435599",
					"reportId" : "A53894105",
					"sourceIdType" : "IP",
					"code" : "165"
				},
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "ORDER",
				"businessLine" : "CREDIT_INS"
			},
			"receivedDataEDMSid" : "EDMS-01-14067949"
		},
		"companyDataFileId" : "CDF-595497ccefcf264d9a3e3a44",
		"DefaultBlock" : {
			"ENTERPRISE_DEVELOPMENT_CODE" : "0",
			"CREDIT_OPINION" : "31",
			"OriginScoreDate" : "20170629",
			"OriginScore" : "320"
		},
		"creationDate" : ISODate("2017-06-29T06:01:48.187Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-207478567",
		"riskDataSnapshot" : {
			"crsNumber" : "121B4BCH3"
		},
		"lastUpdateDate" : ISODate("2017-06-29T06:01:51.015Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12fd"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-05-09T12:54:32.947+0200",
					"localActivityCode" : "9999",
					"retainedScoreSource" : "63",
					"yearStarted" : "2010",
					"foundationDate" : "20100101",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-05-09T00:00:00.000+0200",
					"primaryGeographicArea" : "BC",
					"atRatingScoreType" : "E",
					"retainedScore" : "6.018",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "CAD",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"retainedScoreSourceName" : "COFACE SA",
					"informationSupplierReference" : "200702347",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"interpretedScoreSource" : "447",
					"legalForm" : "0091",
					"currency" : "CAD",
					"notationAgency" : "3",
					"exchangeRate" : "0.69407224"
				},
				"evaluation" : {
					"scoreDate" : "20170509",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "145 Chadwick Ct Unit 220",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "200702347",
					"identifierName" : "DUN_CAN"
				},
				"primaryName" : "Digi117 Ltd",
				"telephoneNumber" : "(778) 772-4770",
				"zipCode" : "V7M 3K2",
				"postalTown" : "North Vancouver"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00010046005300",
		"countryCode" : "CAN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13241948"
		},
		"companyDataFileId" : "EDMS-01-13241948",
		"creationDate" : ISODate("2017-05-09T10:53:44Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f9"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-05-19T14:42:44.305+0200",
					"retainedScoreSource" : "468",
					"yearStarted" : "2000",
					"foundationDate" : "20000121",
					"stock" : {
						"value" : "44938000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"atRatingScore" : "7",
					"numberOfEmployees" : 1000,
					"workingCapital" : {
						"value" : "110657000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-05-19T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "CR3",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-19T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "67560000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"totalAssests" : {
						"value" : "332012000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"netIncome" : {
						"value" : "70237000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScore" : "CR3",
					"retainedScoreSourceName" : "EXPERIAN CHINA",
					"issuedCapital" : {
						"value" : "67560000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "EXPERIAN CHINA",
					"nace" : "2932",
					"interpretedScoreSource" : "468",
					"netWorth" : {
						"value" : "180256000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "387816000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "CNY",
					"notationAgency" : "8",
					"exchangeRate" : "0.13533346"
				},
				"evaluation" : {
					"scoreDate" : "20170519",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "468",
					"score" : "CR3"
				},
				"sourceId" : "468"
			},
			"identification" : {
				"addressLine" : "Tonglin Industrial Zone, Xinchang Town",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "510100400024384",
					"identifierName" : "RGN_CHN"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "S",
					"identifierValue" : "91510129720326930U",
					"identifierName" : "USCC_CHN"
				},
				"primaryName" : "TONGLIN CASTING INDUSTRIAL CO., LTD.",
				"telephoneNumber" : "13982002908",
				"url" : "www.tppgroup.hk",
				"zipCode" : "611300",
				"postalTown" : "Dayi County, Chengdu City, Sichuan Province"
			},
			"yearY1" : {
				"sourceId" : "468"
			},
			"yearY2" : {
				"sourceId" : "468"
			}
		},
		"easyNumber" : "00010050009900",
		"countryCode" : "CHN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "468"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13413709"
		},
		"companyDataFileId" : "EDMS-01-13413709",
		"creationDate" : ISODate("2017-05-19T12:42:12Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12ed"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"localActivityCode" : "7487",
					"retainedScoreSource" : "531",
					"yearStarted" : "1998",
					"foundationDate" : "19980701",
					"stock" : {
						"value" : "2211000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"atRatingScore" : "0",
					"numberOfEmployees" : 37,
					"workingCapital" : {
						"value" : "1009000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2010-09-09T00:00:00.000+02:00",
					"retainedScore" : "0",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "3883000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2009",
					"currencyUnit" : "0",
					"alarmCode" : "96",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"issuedCapital" : {
						"value" : "715000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "03592899",
					"interpretedScoreSourceName" : "GRAYDON - UK LIMITED",
					"nace" : "8299",
					"interpretedScoreSource" : "2",
					"netWorth" : {
						"value" : "919000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "9117000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "GBP"
				},
				"evaluation" : {
					"scoreDate" : "20100929",
					"scoreSourceId" : "2"
				},
				"sourceId" : "2"
			},
			"identification" : {
				"addressLine" : "109 SWAN STREET, SILEBYLEICESTERSHIRE",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "GB364839417",
					"identifierName" : "VAT_GBR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "03592899",
					"identifierName" : "RGN_GBR"
				},
				"primaryName" : "HCK GROUP LIMITED",
				"telephoneNumber" : "0870 062 2010",
				"zipCode" : "LE12 7NN",
				"postalTown" : "LOUGHBOROUGH"
			},
			"yearY1" : {
				"sourceId" : "2"
			},
			"yearY2" : {
				"sourceId" : "2"
			}
		},
		"easyNumber" : "555422400",
		"countryCode" : "GBR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "2"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-82085437"
		},
		"companyDataFileId" : "01-EDMS-82085437",
		"creationDate" : ISODate("2010-09-29T06:42:12Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1305"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2017-05-02T19:15:50.800+0200",
					"localActivityCode" : "C380000",
					"retainedScoreSource" : "531",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2013",
					"foundationDate" : "20130509",
					"atRatingScore" : "4",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2017-05-02T00:00:00.000+0200",
					"primaryGeographicArea" : "RJ",
					"atRatingScoreType" : "C",
					"retainedScore" : "4",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-01T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "250000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "20",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"issuedCapital" : {
						"value" : "250000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "18088289",
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"nace" : "4778",
					"interpretedScoreSource" : "481",
					"legalForm" : "0016",
					"currency" : "BRL",
					"notationAgency" : "1",
					"exchangeRate" : "0.29744200"
				},
				"evaluation" : {
					"scoreDate" : "20170501",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "481",
					"score" : "20"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "R BASILIO DA GAMA 11 SL 211 ABOLICAO",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "18088289000108",
					"identifierName" : "CNPJ_BRA"
				},
				"primaryName" : "DENT SERV COMERCIO E SERVICOS CORRELATOS DE SAUDE LTDA ME",
				"zipCode" : "20750030",
				"postalTown" : "RIO DE JANEIRO"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00009847525300",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "481"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13138873"
		},
		"companyDataFileId" : "EDMS-01-13138873",
		"creationDate" : ISODate("2017-05-02T06:02:42Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1307"),
		"inputData" : {
			"yearY1" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalShareHolderEquity" : {
								"value" : "-17252000000"
							},
							"totalEquityLiabilities" : {
								"value" : "50689000000"
							},
							"equityCapital" : {
								"value" : "-17252000000"
							},
							"totalCurrentLiabilities" : {
								"value" : "47581000000"
							}
						},
						"assets" : {
							"totalCurrentAssets" : {
								"value" : "31205000000"
							}
						}
					},
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "-3267000000"
						},
						"operationgIncome" : {
							"value" : "1729000000"
						}
					}
				},
				"sourceId" : "123"
			},
			"yearY2" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalShareHolderEquity" : {
								"value" : "-14604000000"
							},
							"totalEquityLiabilities" : {
								"value" : "45476000000"
							},
							"equityCapital" : {
								"value" : "-14604000000"
							},
							"totalCurrentLiabilities" : {
								"value" : "56784000000"
							}
						},
						"assets" : {
							"totalCurrentAssets" : {
								"value" : "23636000000"
							}
						}
					},
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "-4991000000"
						},
						"operationgIncome" : {
							"value" : "-986000000"
						}
					}
				},
				"sourceId" : "123"
			},
			"yearY" : {
				"financialStatement" : {
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "-1967000000"
						},
						"operationgIncome" : {
							"value" : "3911000000"
						}
					},
					"balanceSheet" : {
						"liabilities" : {
							"equityCapital" : {
								"value" : "-18884000000"
							},
							"totalShareHolderEquity" : {
								"value" : "-18884000000"
							},
							"totalCurrentLiabilities" : {
								"value" : "63773000000"
							},
							"totalEquityLiabilities" : {
								"value" : "46831000000"
							}
						},
						"assets" : {
							"totalCurrentAssets" : {
								"value" : "29900000000"
							}
						}
					}
				},
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2017-03-20T12:57:09.512+0100",
					"localActivityCode" : "4621",
					"retainedScoreSource" : "123",
					"yearStarted" : "2004",
					"foundationDate" : "20041106",
					"stock" : {
						"value" : "7505000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"atRatingScore" : "4",
					"numberOfEmployees" : 55,
					"workingCapital" : {
						"value" : "-33873000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-03-20T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "CCC+",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-03-20T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "500000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "46831000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "CCC+",
					"alarmCode" : "88",
					"retainedScoreSourceName" : "KED ( KOREA ENTERPRISE DATA CO. LTD)",
					"issuedCapital" : {
						"value" : "500000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "KED ( KOREA ENTERPRISE DATA CO. LTD)",
					"nace" : "4621",
					"interpretedScoreSource" : "123",
					"netWorth" : {
						"value" : "-18884000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "108275000000",
						"currency" : "KRW",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "KRW",
					"notationAgency" : "1",
					"exchangeRate" : "0.00082242"
				},
				"evaluation" : {
					"scoreDate" : "20170320",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "123",
					"score" : "CCC+"
				},
				"sourceId" : "123"
			},
			"identification" : {
				"addressLine" : "330, Gangnam-daero, Gangnam-gu",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "214-87-61437",
					"identifierName" : "RCS_KOR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "110111-3112044",
					"identifierName" : "CRP_KOR"
				},
				"primaryName" : "SUNG HONG CO.,LTD.",
				"telephoneNumber" : "82236771748",
				"zipCode" : "06252",
				"faxNumber" : "8225874183",
				"postalTown" : "Seoul"
			}
		},
		"easyNumber" : "00009841020900",
		"countryCode" : "KOR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "123"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12576100"
		},
		"companyDataFileId" : "EDMS-01-12576100",
		"DefaultBlock" : {
			"LOCAL_NAME" : "SUNG HONG CO.,LTD."
		},
		"creationDate" : ISODate("2017-03-20T11:53:52Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f1"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"localActivityCode" : "4120",
					"retainedScoreSource" : "0",
					"yearStarted" : "1999",
					"foundationDate" : "19990701",
					"numberOfEmployees" : 6,
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "25000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"balanceSheetDate" : "2009",
					"currencyUnit" : "0",
					"alarmCode" : "71",
					"retainedScoreSourceName" : "0",
					"informationSupplierReference" : "1855970",
					"interpretedScoreSourceName" : "CS CONNECT GMBH & CO. KG",
					"nace" : "4120",
					"interpretedScoreSource" : "405",
					"turnover" : {
						"value" : "2000000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0009",
					"currency" : "EUR"
				},
				"evaluation" : {
					"scoreDate" : "20100914",
					"scoreSourceId" : "405",
					"score" : "0"
				},
				"sourceId" : "405"
			},
			"identification" : {
				"addressLine" : "STRANDSTR. 106",
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "HRB 8111",
					"identifierName" : "HRN_DEU"
				},
				"primaryName" : "IBG HAUS MV GMBH",
				"telephoneNumber" : "0381/600670",
				"zipCode" : "18055",
				"postalTown" : "ROSTOCK"
			},
			"yearY1" : {
				"sourceId" : "405"
			},
			"yearY2" : {
				"sourceId" : "405"
			}
		},
		"easyNumber" : "121958200",
		"countryCode" : "DEU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "405"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-80328405"
		},
		"companyDataFileId" : "01-EDMS-80328405",
		"creationDate" : ISODate("2010-09-14T05:02:59Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1300"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-05-04T12:54:21.397+0200",
					"localActivityCode" : "5812",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2015",
					"foundationDate" : "20151117",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-05-04T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "190",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-04T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "20000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "190",
					"retainedScoreSourceName" : "CRIF TURKEY",
					"issuedCapital" : {
						"value" : "5000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "CRIF TURKEY",
					"nace" : "5610",
					"interpretedScoreSource" : "210",
					"legalForm" : "0003",
					"currency" : "TRY",
					"notationAgency" : "2",
					"exchangeRate" : "0.25542893"
				},
				"evaluation" : {
					"scoreDate" : "20170504",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "190"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "100. YIL BULVARI NO: 99/72 OSTIM OSB MAHALLESI OSTIM FINANS VE IS MERKEZI",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "389121",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "6310718085",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "NILTUGSAH RESTORAN GIDA TURIZM INSAAT TICARET LIMITED SIRKETI",
				"telephoneNumber" : "905438339432",
				"postalTown" : "YENIMAHALLE"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00010044005500",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13181334"
		},
		"companyDataFileId" : "EDMS-01-13181334",
		"creationDate" : ISODate("2017-05-04T10:54:19Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12ef"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"localActivityCode" : "1581",
					"retainedScoreSource" : "531",
					"yearStarted" : "1950",
					"foundationDate" : "19500701",
					"stock" : {
						"value" : "107000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"atRatingScore" : "0",
					"numberOfEmployees" : 72,
					"workingCapital" : {
						"value" : "214000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2010-05-21T00:00:00.000+02:00",
					"retainedScore" : "0",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "1650000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2008",
					"currencyUnit" : "0",
					"alarmCode" : "71",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"issuedCapital" : {
						"value" : "5000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "00486128",
					"interpretedScoreSourceName" : "GRAYDON - UK LIMITED",
					"nace" : "1071",
					"interpretedScoreSource" : "2",
					"netWorth" : {
						"value" : "819000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "GBP"
				},
				"evaluation" : {
					"scoreDate" : "20100916",
					"scoreSourceId" : "2"
				},
				"sourceId" : "2"
			},
			"identification" : {
				"addressLine" : "LEYTONSTONE HOUSE, LEYTONSTONEE111GA",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "GB248296038",
					"identifierName" : "VAT_GBR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "00486128",
					"identifierName" : "RGN_GBR"
				},
				"primaryName" : "GOSWELL BAKERIES LIMITED",
				"telephoneNumber" : "02074746141",
				"faxNumber" : "02074731715",
				"postalTown" : "LONDON"
			},
			"yearY1" : {
				"sourceId" : "2"
			},
			"yearY2" : {
				"sourceId" : "2"
			}
		},
		"easyNumber" : "555299400",
		"countryCode" : "GBR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "2"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-80779559"
		},
		"companyDataFileId" : "01-EDMS-80779559",
		"creationDate" : ISODate("2010-09-17T06:27:00Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f2"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"localActivityCode" : "4669",
					"retainedScoreSource" : "0",
					"yearStarted" : "1973",
					"foundationDate" : "19730701",
					"numberOfEmployees" : 6,
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "100000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"balanceSheetDate" : "2009",
					"currencyUnit" : "0",
					"alarmCode" : "71",
					"retainedScoreSourceName" : "0",
					"informationSupplierReference" : "1532703",
					"interpretedScoreSourceName" : "CS CONNECT GMBH & CO. KG",
					"nace" : "4669",
					"interpretedScoreSource" : "405",
					"turnover" : {
						"value" : "2000000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0009",
					"currency" : "EUR"
				},
				"evaluation" : {
					"scoreDate" : "20100904",
					"scoreSourceId" : "405",
					"score" : "0"
				},
				"sourceId" : "405"
			},
			"identification" : {
				"addressLine" : "ADAM-OPEL-STR. 4",
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "HRB 34063",
					"identifierName" : "HRN_DEU"
				},
				"primaryName" : "RWZ-KOMMUNALTECHNIK GMBH",
				"telephoneNumber" : "06074/875830",
				"zipCode" : "63322",
				"postalTown" : "ROEDERMARK"
			},
			"yearY1" : {
				"sourceId" : "405"
			},
			"yearY2" : {
				"sourceId" : "405"
			}
		},
		"easyNumber" : "121711600",
		"countryCode" : "DEU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "405"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-79372720"
		},
		"companyDataFileId" : "01-EDMS-79372720",
		"creationDate" : ISODate("2010-09-06T05:02:10Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f3"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-06-21T08:40:01.239+0200",
					"localActivityCode" : "464",
					"retainedScoreSource" : "531",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2008",
					"foundationDate" : "20080101",
					"stock" : {
						"value" : "41504000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"atRatingScore" : "4",
					"numberOfEmployees" : 10,
					"workingCapital" : {
						"value" : "732",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-06-19T00:00:00.000+0200",
					"atRatingScoreType" : "C",
					"retainedScore" : "4",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-06-21T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "10000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "55229000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "5",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"informationSupplierReference" : "87256140",
					"interpretedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"nace" : "464",
					"interpretedScoreSource" : "469",
					"netWorth" : {
						"value" : "732000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "89697000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"legalForm" : "0003",
					"currency" : "RUB",
					"notationAgency" : "4",
					"exchangeRate" : "0.01583177"
				},
				"evaluation" : {
					"scoreDate" : "20170621",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "469",
					"score" : "5"
				},
				"sourceId" : "469"
			},
			"identification" : {
				"addressLine" : "km.  Rezhevskoy Trakt 15 5A",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "6659167468",
					"identifierName" : "VAT_RUS"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "1086659002803",
					"identifierName" : "RRK_RUS"
				},
				"primaryName" : "OOO \"SITES TSENTR\"",
				"telephoneNumber" : "73432166433",
				"zipCode" : "623700",
				"postalTown" : "g.  Berezovskiy"
			},
			"yearY1" : {
				"sourceId" : "469"
			},
			"yearY2" : {
				"sourceId" : "469"
			}
		},
		"easyNumber" : "00010095005400",
		"countryCode" : "RUS",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "469"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13934765"
		},
		"companyDataFileId" : "EDMS-01-13934765",
		"creationDate" : ISODate("2017-06-21T06:39:59Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12ee"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"localActivityCode" : "7011",
					"retainedScoreSource" : "63",
					"yearStarted" : "1994",
					"foundationDate" : "19940701",
					"atRatingScore" : "2",
					"numberOfEmployees" : 10,
					"workingCapital" : {
						"value" : "1687000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2010-09-07T00:00:00.000+02:00",
					"retainedScore" : "6.97",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "1848000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2009",
					"currencyUnit" : "0",
					"alarmCode" : "96",
					"retainedScoreSourceName" : "COFACE SA",
					"issuedCapital" : {
						"value" : "1000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"bankruptcyPrediction" : "10",
					"informationSupplierReference" : "02925673",
					"interpretedScoreSourceName" : "GRAYDON - UK LIMITED",
					"nace" : "6810",
					"interpretedScoreSource" : "2",
					"netWorth" : {
						"value" : "1690000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "GBP",
					"notationAgency" : "B-"
				},
				"evaluation" : {
					"scoreDate" : "20100906",
					"scoreSourceId" : "2"
				},
				"sourceId" : "2"
			},
			"identification" : {
				"addressLine" : "THE CHESTNUTS TYDEHAMS, BERKSHIRE",
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "02925673",
					"identifierName" : "RGN_GBR"
				},
				"primaryName" : "THAMES VALE HOMES LIMITED",
				"zipCode" : "RG14 6JT",
				"postalTown" : "NEWBURY"
			},
			"yearY1" : {
				"sourceId" : "2"
			},
			"yearY2" : {
				"sourceId" : "2"
			}
		},
		"easyNumber" : "555299500",
		"countryCode" : "GBR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "2"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-79506030"
		},
		"companyDataFileId" : "01-EDMS-79506030",
		"creationDate" : ISODate("2010-09-07T06:38:02Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f0"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"localActivityCode" : "5146",
					"retainedScoreSource" : "531",
					"yearStarted" : "1966",
					"foundationDate" : "19660701",
					"stock" : {
						"value" : "282000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"atRatingScore" : "0",
					"numberOfEmployees" : 38,
					"workingCapital" : {
						"value" : "837000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2010-06-10T00:00:00.000+02:00",
					"retainedScore" : "0",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "3108000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2003",
					"currencyUnit" : "0",
					"alarmCode" : "71",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"issuedCapital" : {
						"value" : "16260",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "00894639",
					"interpretedScoreSourceName" : "GRAYDON - UK LIMITED",
					"nace" : "4646",
					"interpretedScoreSource" : "2",
					"netWorth" : {
						"value" : "1343000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "4183000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "GBP"
				},
				"evaluation" : {
					"scoreDate" : "20100930",
					"scoreSourceId" : "2"
				},
				"sourceId" : "2"
			},
			"identification" : {
				"addressLine" : "822 FOUNTAIN COURT, BIRCHWOOD BOULEVARD BIRCHWOOD",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "GB673561713",
					"identifierName" : "VAT_GBR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "00894639",
					"identifierName" : "RGN_GBR"
				},
				"primaryName" : "HEG (NUMBER 3) LIMITED",
				"zipCode" : "WA3 7QZ",
				"postalTown" : "WARRINGTON"
			},
			"yearY1" : {
				"sourceId" : "2"
			},
			"yearY2" : {
				"sourceId" : "2"
			}
		},
		"easyNumber" : "555054200",
		"countryCode" : "GBR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "2"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-82247575"
		},
		"companyDataFileId" : "01-EDMS-82247575",
		"creationDate" : ISODate("2010-09-30T06:46:17Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1306"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-03-14T21:07:53.267+0100",
					"localActivityCode" : "C080300",
					"retainedScoreSource" : "481",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2008",
					"foundationDate" : "20080203",
					"atRatingScore" : "4",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2017-03-14T00:00:00.000+0100",
					"primaryGeographicArea" : "RJ",
					"atRatingScoreType" : "D",
					"retainedScore" : "16",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-03-14T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "88000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "16",
					"alarmCode" : "94",
					"retainedScoreSourceName" : "SERASA EXPERIAN",
					"issuedCapital" : {
						"value" : "88000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "09437735",
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"nace" : "4762",
					"interpretedScoreSource" : "481",
					"currency" : "BRL",
					"notationAgency" : "4",
					"exchangeRate" : "0.30282612"
				},
				"evaluation" : {
					"scoreDate" : "20170314",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "481",
					"score" : "16"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "AV PST MARTIN LUTHER KING JR 9199 LT 1000 PAL 1930 COLEGIO",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "09437735000151",
					"identifierName" : "CNPJ_BRA"
				},
				"primaryName" : "CRISTIANO MARQUES DOS SANTOS EMBALAGENS EIRELI ME",
				"zipCode" : "21530012",
				"postalTown" : "RIO DE JANEIRO"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00009847520300",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "481"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12506766"
		},
		"companyDataFileId" : "EDMS-01-12506766",
		"creationDate" : ISODate("2017-03-14T20:07:51Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f7"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-05-24T14:59:04.825+0200",
					"localActivityCode" : "5094",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"yearStarted" : "2008",
					"foundationDate" : "20080815",
					"atRatingScore" : "4",
					"retainedScoreDate" : "2017-05-24T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "390",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-24T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "12025000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "390",
					"retainedScoreSourceName" : "CRIF TURKEY",
					"interpretedScoreSourceName" : "CRIF TURKEY",
					"nace" : "4648",
					"interpretedScoreSource" : "210",
					"legalForm" : "0003",
					"currency" : "TRY",
					"notationAgency" : "4",
					"exchangeRate" : "0.25542893"
				},
				"evaluation" : {
					"scoreDate" : "20170524",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "210",
					"score" : "390"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "REASURANS HAN, KAT:5 NO: 57 HARBIYE MAHALLESI ABDI IPEKCI CADDESI",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "675226",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "7810436223",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "SWAROVSKI KRISTAL TICARET LIMITED SIRKETI",
				"telephoneNumber" : "902122334008",
				"zipCode" : "34367",
				"faxNumber" : "902122252342",
				"postalTown" : "NISANTASI, SISLI"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00010074502500",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13491498"
		},
		"companyDataFileId" : "EDMS-01-13491498",
		"creationDate" : ISODate("2017-05-24T12:59:03Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1315"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-11-29T12:49:24.470+0100",
					"retainedScoreSource" : "63",
					"yearStarted" : "2014",
					"foundationDate" : "20140226",
					"atRatingScore" : "6",
					"retainedScoreDate" : "2016-11-29T00:00:00.000+0100",
					"atRatingScoreType" : "E",
					"retainedScore" : "1.317",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "909781074",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "2257169598",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"retainedScoreSourceName" : "COFACE SA",
					"issuedCapital" : {
						"value" : "1171662307",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "9370234338",
					"interpretedScoreSourceName" : "CREDITREFORM LUXEMBOURG",
					"interpretedScoreSource" : "89",
					"legalForm" : "0011",
					"currency" : "EUR",
					"notationAgency" : "6",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20161129",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "89"
				},
				"sourceId" : "89"
			},
			"identification" : {
				"addressLine" : "43  Ave J.-F. Kennedy",
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "B 185.489",
					"identifierName" : "RCS_LUX"
				},
				"primaryName" : "VM Holding SA",
				"zipCode" : "1855",
				"postalTown" : "Luxembourg"
			},
			"yearY1" : {
				"sourceId" : "89"
			},
			"yearY2" : {
				"sourceId" : "89"
			}
		},
		"easyNumber" : "00009541055900",
		"countryCode" : "LUX",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "89"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10981039"
		},
		"companyDataFileId" : "EDMS-01-10981039",
		"creationDate" : ISODate("2016-11-29T11:49:22Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1321"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-08-08T18:11:23.899+0200",
					"localActivityCode" : "4771",
					"retainedScoreSource" : "528",
					"yearStarted" : "2016",
					"foundationDate" : "20160101",
					"atRatingScore" : "4",
					"numberOfEmployees" : 1,
					"retainedScoreDate" : "2016-08-08T00:00:00.000+0200",
					"primaryGeographicArea" : "PONTEVEDRA",
					"atRatingScoreType" : "D",
					"retainedScore" : "12.97",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-08-08T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "12.97",
					"alarmCode" : "86",
					"retainedScoreSourceName" : "AXESOR",
					"informationSupplierReference" : "8748820",
					"interpretedScoreSourceName" : "AXESOR",
					"nace" : "4771",
					"interpretedScoreSource" : "528",
					"legalForm" : "0099",
					"currency" : "EUR",
					"notationAgency" : "1",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20160808",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "528",
					"score" : "12.97"
				},
				"sourceId" : "528"
			},
			"identification" : {
				"addressLine" : "ARZOBISPO GELMIREZ 9 BJ - EDIF VENECIA",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "ES35418745X",
					"identifierName" : "NIF_ESP"
				},
				"primaryName" : "MARIA MILAGROS RODEIRO ROSALES %%",
				"telephoneNumber" : "986170727",
				"zipCode" : "36600",
				"postalTown" : "VILAGARCIA DE AROUSA"
			},
			"yearY1" : {
				"sourceId" : "528"
			},
			"yearY2" : {
				"sourceId" : "528"
			}
		},
		"easyNumber" : "00009387076300",
		"countryCode" : "ESP",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "528"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-9404637"
		},
		"companyDataFileId" : "EDMS-01-9404637",
		"creationDate" : ISODate("2016-08-08T16:11:20Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db132a"),
		"inputData" : {
			"yearY1" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalShareHolderEquity" : {
								"value" : "89604",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longTermDebt" : {
								"value" : "0",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalNonCurrentLiabilities" : {
								"value" : "86145",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalEquityLiabilities" : {
								"value" : "1448243",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longAndMediumTermProvsions" : {
								"value" : "86145",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"equityCapital" : {
								"value" : "89604",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						},
						"assets" : {
							"stock" : {
								"value" : "0",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"accountsReceivable" : {
								"value" : "1318209",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"cashAndEquivalent" : {
								"value" : "36473",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "1448243",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalFixedAssets" : {
								"value" : "51318",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalCurrentAssets" : {
								"value" : "1396925",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						}
					},
					"profitAndLoss" : {
						"ebitdaCoface" : {
							"value" : "89590",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netResultBeforeTax" : {
							"value" : "75502",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"depreciationAndAmortization" : {
							"value" : "11551",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netOperatingResult" : {
							"value" : "78039",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"exceptionalResult" : {
							"value" : "-1574",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netIncome" : {
							"value" : "5183",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "1546074",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"staffCost" : {
							"value" : "627781",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operatingCost" : {
							"value" : "1468039",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "126263",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgCashFlow" : {
							"value" : "16734",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "1546078",
							"currency" : "EUR",
							"currencyUnit" : 0
						}
					},
					"financialStatementDate" : "20141231",
					"currencyUnit" : "0",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000"
				},
				"sourceId" : "87"
			},
			"yearY2" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalShareHolderEquity" : {
								"value" : "84422",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longTermDebt" : {
								"value" : "0",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalNonCurrentLiabilities" : {
								"value" : "17742",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalEquityLiabilities" : {
								"value" : "676603",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longAndMediumTermProvsions" : {
								"value" : "17742",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"equityCapital" : {
								"value" : "84422",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						},
						"assets" : {
							"stock" : {
								"value" : "0",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"accountsReceivable" : {
								"value" : "556797",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"cashAndEquivalent" : {
								"value" : "24138",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "676603",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalFixedAssets" : {
								"value" : "29553",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalCurrentAssets" : {
								"value" : "647050",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						}
					},
					"profitAndLoss" : {
						"ebitdaCoface" : {
							"value" : "27353",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netResultBeforeTax" : {
							"value" : "31191",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"depreciationAndAmortization" : {
							"value" : "5720",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netOperatingResult" : {
							"value" : "21633",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"exceptionalResult" : {
							"value" : "9587",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netIncome" : {
							"value" : "13449",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "386910",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"staffCost" : {
							"value" : "40080",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operatingCost" : {
							"value" : "366591",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "72611",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgCashFlow" : {
							"value" : "19169",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "388224",
							"currency" : "EUR",
							"currencyUnit" : 0
						}
					},
					"financialStatementDate" : "20131231",
					"currencyUnit" : "0",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000"
				},
				"sourceId" : "87"
			},
			"yearY" : {
				"financialStatement" : {
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "80302",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operatingCost" : {
							"value" : "2290551",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"staffCost" : {
							"value" : "1098469",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "2246593",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netOperatingResult" : {
							"value" : "-43958",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgCashFlow" : {
							"value" : "109236",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"ebitdaCoface" : {
							"value" : "-15024",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "910177",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"depreciationAndAmortization" : {
							"value" : "28934",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netResultBeforeTax" : {
							"value" : "152005",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "2246220",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"exceptionalResult" : {
							"value" : "211350",
							"currency" : "EUR",
							"currencyUnit" : 0
						}
					},
					"balanceSheet" : {
						"assets" : {
							"cashAndEquivalent" : {
								"value" : "75726",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalCurrentAssets" : {
								"value" : "1913190",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"stock" : {
								"value" : "0",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalFixedAssets" : {
								"value" : "68707",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "1981897",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"accountsReceivable" : {
								"value" : "1758715",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						},
						"liabilities" : {
							"equityCapital" : {
								"value" : "309906",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalShareHolderEquity" : {
								"value" : "309906",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longTermDebt" : {
								"value" : "531825",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalNonCurrentLiabilities" : {
								"value" : "669445",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalEquityLiabilities" : {
								"value" : "1981897",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longAndMediumTermProvsions" : {
								"value" : "137620",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"financialStatementDate" : "20151231",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000",
					"sizeCapital" : {
						"value" : "150000",
						"currency" : "EUR",
						"currencyUnit" : 0
					}
				},
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-03-09T15:10:28.772+0100",
					"localActivityCode" : "6202",
					"retainedScoreSource" : "87",
					"localTotalEmployees" : 77,
					"yearStarted" : "2010",
					"foundationDate" : "20100129",
					"stock" : {
						"value" : "0",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"atRatingScore" : "3",
					"workingCapital" : {
						"value" : "910177",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-11-18T00:00:00.000+0100",
					"primaryGeographicArea" : "RM",
					"localFormeJuridique" : "SR",
					"atRatingScoreType" : "D",
					"retainedScore" : "843",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 3,
					"totalAssests" : {
						"value" : "1981897",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"localExpPaiemt" : "0",
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"alarmCode" : "74",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "150000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "RM1257308",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "6202",
					"interpretedScoreSource" : "87",
					"netWorth" : {
						"value" : "309906",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "2246220",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0006",
					"currency" : "EUR",
					"notationAgency" : "7",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170309",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "87",
					"score" : "NA"
				},
				"sourceId" : "87",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "VIA BENEDETTO CROCE 19",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "10806721006",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "RM1257308",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "10806721006",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "PUNTONET S.R.L.",
				"zipCode" : "00142",
				"postalTown" : "ROMA"
			}
		},
		"easyNumber" : "00009142590800",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12443696"
		},
		"companyDataFileId" : "EDMS-01-12443696",
		"creationDate" : ISODate("2017-03-09T14:10:27Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12fe"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-05-05T15:16:24.393+0200",
					"localActivityCode" : "1542",
					"retainedScoreSource" : "447",
					"yearStarted" : "2004",
					"foundationDate" : "20040101",
					"atRatingScore" : "5",
					"numberOfEmployees" : 13,
					"retainedScoreDate" : "2017-04-09T00:00:00.000+0200",
					"primaryGeographicArea" : "CO",
					"atRatingScoreType" : "D",
					"retainedScore" : "1431",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-04-09T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1431",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "796285893",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4120",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "5000000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "4",
					"exchangeRate" : "0.93260383"
				},
				"evaluation" : {
					"scoreDate" : "20170409",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1431"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "553 25 1/2 Road",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "796285893",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "PNCI Construction, Inc.",
				"telephoneNumber" : "(970) 242-3548",
				"url" : "www.pnciconstruction.com",
				"zipCode" : "81505",
				"postalTown" : "Grand Junction"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00010045505400",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13202163"
		},
		"companyDataFileId" : "EDMS-01-13202163",
		"creationDate" : ISODate("2017-05-05T13:16:23Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db130c"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-08-14T16:02:35.475+0200",
					"localActivityCode" : "1542",
					"retainedScoreSource" : "447",
					"yearStarted" : "2009",
					"foundationDate" : "20090101",
					"atRatingScore" : "5",
					"numberOfEmployees" : 15,
					"retainedScoreDate" : "2017-07-31T00:00:00.000+0200",
					"primaryGeographicArea" : "SC",
					"atRatingScoreType" : "D",
					"retainedScore" : "1435",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-07-31T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1435",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "078463318",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4120",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "7801644",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"exchangeRate" : "0.86872347"
				},
				"evaluation" : {
					"scoreDate" : "20170731",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1435"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "100 BRIGADE ST # 1",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "078463318",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Linden Construction Of South Carolina, Inc.",
				"telephoneNumber" : "(843) 637-4375",
				"url" : "www.lindenconstructionco.com",
				"zipCode" : "29403",
				"postalTown" : "CHARLESTON"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009588051200",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "ORDER",
				"businessLine" : "CREDIT_INS",
				"source" : {
					"reportId" : "170814AB04AD",
					"sourceIdType" : "IP",
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-14871709"
		},
		"companyDataFileId" : "CDF-5991ad794edd02364716e3e5",
		"creationDate" : ISODate("2017-08-14T14:02:33.379Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-217854169",
		"riskDataSnapshot" : {
			"crsNumber" : "285941976"
		},
		"lastUpdateDate" : ISODate("2017-08-14T14:02:35.832Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1322"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-08-04T23:01:59.159+0200",
					"localActivityCode" : "C160000",
					"retainedScoreSource" : "481",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2014",
					"foundationDate" : "20140801",
					"atRatingScore" : "5",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2016-08-04T00:00:00.000+0200",
					"primaryGeographicArea" : "MT",
					"atRatingScoreType" : "D",
					"retainedScore" : "14",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-08-04T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "0",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "14",
					"retainedScoreSourceName" : "SERASA EXPERIAN",
					"issuedCapital" : {
						"value" : "0",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "20779050",
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"nace" : "462",
					"interpretedScoreSource" : "481",
					"legalForm" : "0011",
					"currency" : "BRL",
					"notationAgency" : "2",
					"exchangeRate" : "0.27576317"
				},
				"evaluation" : {
					"scoreDate" : "20160804",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "481",
					"score" : "14"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "AV DA PRODUCAO 810 W SL 02 BANDEIRANTES",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "20779050000126",
					"identifierName" : "CNPJ_BRA"
				},
				"primaryName" : "DAL COSTA AGRONEGOCIO S/A",
				"telephoneNumber" : "6535495033",
				"zipCode" : "78455000",
				"postalTown" : "LUCAS DO RIO VERDE"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00009387071300",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "481"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-9357933"
		},
		"companyDataFileId" : "EDMS-01-9357933",
		"creationDate" : ISODate("2016-08-04T21:01:57Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f4"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-06-22T08:30:47.328+0200",
					"localActivityCode" : "5651",
					"tradeStyle" : "Kanji and Kenny Ma",
					"retainedScoreSource" : "447",
					"yearStarted" : "2016",
					"foundationDate" : "20160101",
					"atRatingScore" : "6",
					"numberOfEmployees" : 2,
					"retainedScoreDate" : "2017-05-07T00:00:00.000+0200",
					"primaryGeographicArea" : "CA",
					"atRatingScoreType" : "D",
					"retainedScore" : "1477",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-07T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1477",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "080491171",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4771",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "46399",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "1",
					"exchangeRate" : "0.90436355"
				},
				"evaluation" : {
					"scoreDate" : "20170507",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1477"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "1015 Crocker St #P7",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "080491171",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Kanji Couture, Inc.",
				"telephoneNumber" : "(213) 746-4414",
				"zipCode" : "90021",
				"postalTown" : "Los Angeles"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00010095000400",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13957964"
		},
		"companyDataFileId" : "EDMS-01-13957964",
		"creationDate" : ISODate("2017-06-22T06:23:54Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1316"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"localActivityCode" : "S180100",
					"tradeStyle" : "TORRES",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"yearStarted" : "1989",
					"foundationDate" : "19890606",
					"numberOfEmployees" : 41,
					"primaryGeographicArea" : "SP",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"locationStatus" : "HQ",
					"currencyUnit" : "0",
					"informationSupplierReference" : "60830544000102",
					"language2" : "en",
					"nace" : "2550",
					"legalForm" : "0002",
					"currency" : "BRL",
					"exchangeRate" : "0.25680152",
					"retainedScore" : "5",
					"retainedScoreDate" : "2018-01-10T00:00:00.000+0100",
					"retainedScoreSource" : 531,
					"retainedScoreSourceName" : "MANUAL",
					"interpretedScore" : "8",
					"interpretedScoreDate" : "2018-01-13T00:00:00.000+0100",
					"interpretedScoreSource" : 481,
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"scoreIntegratedDate" : "2018-01-15T16:14:25.448+0100",
					"atRatingScore" : "5",
					"atRatingScoreType" : "C"
				},
				"evaluation" : {
					"scoreDate" : "20180113",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "481",
					"score" : "08"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "R CECILIA ROIZEN 450, CIDADE INDUSTRIAL S",
				"addressLine2" : "R CECILIA ROIZEN 450, CIDADE INDUSTRIAL S",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "60830544000102",
					"identifierName" : "CNPJ_BRA"
				},
				"primaryName" : "TORRES GALVANIZACAO A FOGO LTDA",
				"telephoneNumber" : "011-024129212",
				"zipCode" : "07222-020",
				"faxNumber" : "0011-064124188",
				"postalTown" : "GUARULHOS, SP",
				"postalTown2" : "GUARULHOS, SP"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00009541050900",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "60830544000102",
					"sourceIdType" : "IP",
					"code" : "481"
				},
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "SPONTANEOUS"
			},
			"receivedDataEDMSid" : "EDMS-01-17051699"
		},
		"companyDataFileId" : "CDF-5a5a23435cc9d82a9e1242da",
		"creationDate" : ISODate("2018-01-13T15:18:27.290Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-250221433",
		"lastUpdateDate" : ISODate("2018-01-15T15:14:25.747Z"),
		"cnyStatus" : "W",
		"riskDataSnapshot" : {
			"potentialExposure" : {
				"politic" : {
					"currencyUnit" : "0",
					"value" : "0",
					"currency" : "EUR"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"limit" : {
					"currency" : "EUR",
					"value" : "0",
					"currencyUnit" : "0"
				},
				"cgd" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				}
			},
			"externalExposure" : {
				"currency" : "EUR",
				"currencyUnit" : "0",
				"value" : "0"
			},
			"realExposure" : {
				"limit" : {
					"currency" : "EUR",
					"value" : "128400",
					"currencyUnit" : "0"
				},
				"politic" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"cgd" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				}
			},
			"underReviewRating" : 0,
			"claimSnapshot" : {
				"claimSeverity" : "0",
				"claimDate" : "20161128"
			},
			"pendingRequest" : 0
		},
		"blackList" : "0",
		"vigilance" : "0",
		"sensitiveFile" : 0,
		"activePolicy" : "0",
		"countryNotation" : "C",
		"surveillanceStatus" : "1",
		"groupDataSnapshot" : {
			"legalGroupMember" : "0",
			"gfrHead" : "0",
			"gucGroupMember" : "0",
			"frgGroupMember" : "0"
		},
		"outputData" : {
			"retainedAssessmentData" : {
				"yearY" : {
					"rsData" : {
						"locationStatus" : "HQ",
						"foundationDate" : "19890606",
						"language2" : "en",
						"informationSupplierReference" : "60830544000102",
						"currency" : "BRL",
						"nbIdentifiers" : 1,
						"localActivityCode" : "S180100",
						"primaryGeographicArea" : "SP",
						"netIncomeLoss" : {
							"value" : "3",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"yearStarted" : "1989",
						"nace" : "2550",
						"paymentExperience" : "1",
						"currencyUnit" : "0",
						"tradeStyle" : "TORRES",
						"numberOfEmployees" : 41,
						"legalForm" : "0002",
						"exchangeRate" : "0.25680152",
						"retainedScore" : "5",
						"retainedScoreDate" : "2018-01-10T00:00:00.000+0100",
						"retainedScoreSource" : 531,
						"retainedScoreSourceName" : "MANUAL",
						"interpretedScore" : "8",
						"interpretedScoreDate" : "2018-01-13T00:00:00.000+0100",
						"interpretedScoreSource" : 481,
						"interpretedScoreSourceName" : "SERASA EXPERIAN",
						"scoreIntegratedDate" : "2018-01-15T16:14:25.448+0100",
						"atRatingScore" : "5",
						"atRatingScoreType" : "C"
					},
					"evaluation" : {
						"scoreOrigin" : "C",
						"score" : "5",
						"scoreDate" : "20180110",
						"scoreType" : "C",
						"scoreSourceId" : "531"
					},
					"roadReportStatus" : "0"
				},
				"identification" : {
					"addressLine" : "R CECILIA ROIZEN 450, CIDADE INDUSTRIAL S",
					"addressLine2" : "R CECILIA ROIZEN 450, CIDADE INDUSTRIAL S",
					"legalIdentifier" : {
						"identifierCategory" : "S",
						"identifierValue" : "60830544000102",
						"identifierName" : "CNPJ_BRA"
					},
					"primaryName" : "TORRES GALVANIZACAO A FOGO LTDA",
					"telephoneNumber" : "011-024129212",
					"zipCode" : "07222-020",
					"faxNumber" : "0011-064124188",
					"postalTown" : "GUARULHOS, SP",
					"postalTown2" : "GUARULHOS, SP"
				}
			},
			"retainedDra" : {
				"idDra" : "AUTO-01-103178958",
				"draType" : "C",
				"dra" : "5",
				"expectedDraType" : "D"
			},
			"computedBy" : {
				"retainedEDMSIdY" : "EDMS-01-17051699",
				"idCall" : "00009541050900-TRAC-1516029265399"
			}
		}
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db131b"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-10-06T12:12:09.060+0200",
					"retainedScoreSource" : "502",
					"yearStarted" : "1998",
					"foundationDate" : "19981001",
					"atRatingScore" : "4",
					"numberOfEmployees" : 6,
					"retainedScoreDate" : "2016-10-06T00:00:00.000+0200",
					"primaryGeographicArea" : "Gauteng",
					"atRatingScoreType" : "D",
					"retainedScore" : "4",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "ZAR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-10-06T00:00:00.000+0200",
					"currencyUnit" : "0",
					"interpretedScore" : "4",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE SOUTH AFRICA",
					"interpretedScoreSourceName" : "COFACE SOUTH AFRICA",
					"language2" : "en",
					"nace" : "4719",
					"interpretedScoreSource" : "502",
					"currency" : "ZAR",
					"notationAgency" : "3"
				},
				"evaluation" : {
					"scoreDate" : "20161006",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "502",
					"score" : "4"
				},
				"sourceId" : "502"
			},
			"identification" : {
				"addressLine2" : "Unit 2, Motor City, 26 Main Reef Road",
				"primaryName" : "PRIBEN DISTRIBUTIONS CC",
				"zipCode" : "2092",
				"postalTown2" : "Langlaagte"
			},
			"yearY1" : {
				"sourceId" : "502"
			},
			"yearY2" : {
				"sourceId" : "502"
			}
		},
		"easyNumber" : "00009458569200",
		"countryCode" : "ZAF",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "502"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10234115"
		},
		"companyDataFileId" : "EDMS-01-10234115",
		"creationDate" : ISODate("2016-10-06T10:11:37Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db131e"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-03-02T09:07:20.199+0100",
					"localActivityCode" : "7379",
					"retainedScoreSource" : "447",
					"yearStarted" : "2000",
					"foundationDate" : "20000101",
					"atRatingScore" : "6",
					"numberOfEmployees" : 20,
					"retainedScoreDate" : "2016-10-16T00:00:00.000+0200",
					"primaryGeographicArea" : "TX",
					"atRatingScoreType" : "D",
					"retainedScore" : "1487",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-10-16T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1487",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "195388371",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "6202",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "4746290",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "7",
					"exchangeRate" : "0.93961560"
				},
				"evaluation" : {
					"scoreDate" : "20161016",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1487"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "3204 LONG PRAIRIE RD STE E",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "195388371",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Pinebreeze Technologies Inc.",
				"telephoneNumber" : "(972) 899-2366",
				"url" : "www.pinebreeze.com",
				"zipCode" : "75022",
				"postalTown" : "FLOWER MOUND"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009446565400",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12332689"
		},
		"companyDataFileId" : "EDMS-01-12332689",
		"creationDate" : ISODate("2017-03-02T08:07:14Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db132b"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-05-15T09:45:08.878+0200",
					"localActivityCode" : "563",
					"retainedScoreSource" : "87",
					"localTotalEmployees" : 5,
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2014",
					"foundationDate" : "20140113",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-05-15T00:00:00.000+0200",
					"primaryGeographicArea" : "FI",
					"localFormeJuridique" : "DI",
					"atRatingScoreType" : "D",
					"retainedScore" : "1166",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-15T00:00:00.000+0200",
					"nbIdentifiers" : 3,
					"localExpPaiemt" : "0",
					"currencyUnit" : "0",
					"interpretedScore" : "1166",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "2000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "FI626156",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "563",
					"interpretedScoreSource" : "87",
					"turnover" : {
						"value" : "213000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0080",
					"currency" : "EUR",
					"notationAgency" : "4",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170515",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "87",
					"score" : "1166"
				},
				"financialStatement" : {
					"profitAndLoss" : {
						"turnover" : {
							"value" : "213000"
						}
					},
					"sizeCapital" : {
						"value" : "2000"
					}
				},
				"sourceId" : "87",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "VIA DI SAN NICCOLO' 56/R",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "06408240486",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "FI626156",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "FRRGRD94P11D612E",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "FERRIGNO GERARDO",
				"zipCode" : "50125",
				"postalTown" : "FIRENZE"
			},
			"yearY1" : {
				"sourceId" : "87"
			},
			"yearY2" : {
				"sourceId" : "87"
			}
		},
		"easyNumber" : "00009136591400",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13321722"
		},
		"companyDataFileId" : "EDMS-01-13321722",
		"creationDate" : ISODate("2017-05-15T07:45:07Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db132c"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-05-17T14:39:12.637+0200",
					"retainedScoreSource" : "63",
					"yearStarted" : "2007",
					"foundationDate" : "20070101",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2016-05-17T00:00:00.000+0200",
					"atRatingScoreType" : "E",
					"retainedScore" : "4.82",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "DZD",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"retainedScoreSourceName" : "COFACE SA",
					"interpretedScoreSourceName" : "CAGEX CIE ALGERIENNE D'ASSURANCE ET DE GARANTIE DES EXPORTATIONS",
					"nace" : "4730",
					"interpretedScoreSource" : "496",
					"legalForm" : "0057",
					"currency" : "DZD",
					"notationAgency" : "3",
					"exchangeRate" : "0.00811374"
				},
				"evaluation" : {
					"scoreDate" : "20160517",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "496",
					"score" : "3.05"
				},
				"sourceId" : "496"
			},
			"identification" : {
				"addressLine" : "RUE LARBI BEN MHIDI AIN TEMOUCHENT",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "07A4227200",
					"identifierName" : "RCS_DZA"
				},
				"primaryName" : "MOKHTAR SAID",
				"telephoneNumber" : "0551 64 70 65",
				"postalTown" : "AIN TEMOUCHENT"
			},
			"yearY1" : {
				"sourceId" : "496"
			},
			"yearY2" : {
				"sourceId" : "496"
			}
		},
		"easyNumber" : "00009032606800",
		"countryCode" : "DZA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "496"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8135321"
		},
		"companyDataFileId" : "EDMS-01-8135321",
		"creationDate" : ISODate("2016-05-17T12:38:38Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1302"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-04-12T12:57:09.716+0200",
					"localActivityCode" : "1542",
					"retainedScoreSource" : "447",
					"yearStarted" : "2006",
					"foundationDate" : "20060101",
					"atRatingScore" : "7",
					"numberOfEmployees" : 6,
					"retainedScoreDate" : "2017-04-09T00:00:00.000+0200",
					"primaryGeographicArea" : "SC",
					"atRatingScoreType" : "D",
					"retainedScore" : "1520",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-04-09T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1520",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "801766002",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4120",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "1556552",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "6",
					"exchangeRate" : "0.93591809"
				},
				"evaluation" : {
					"scoreDate" : "20170409",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1520"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "141 E Main St",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "801766002",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Ecclesia Construction Company, LLC",
				"telephoneNumber" : "(803) 327-5670",
				"url" : "www.ecclesiaconstruction.com",
				"zipCode" : "29730",
				"postalTown" : "Rock Hill"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00010016503300",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12911257"
		},
		"companyDataFileId" : "EDMS-01-12911257",
		"creationDate" : ISODate("2017-04-12T10:54:49Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db130e"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-01-24T09:46:44.689+0100",
					"retainedScoreSource" : "63",
					"atRatingScore" : "1",
					"retainedScoreDate" : "2017-01-24T00:00:00.000+0100",
					"atRatingScoreType" : "E",
					"retainedScore" : "27.98",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "AED",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"currencyUnit" : "0",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE SA",
					"interpretedScoreSourceName" : "INTERNATIONAL COMPANY PROLIFE",
					"language2" : "en",
					"nace" : "4771",
					"interpretedScoreSource" : "139",
					"currency" : "AED",
					"notationAgency" : "1"
				},
				"evaluation" : {
					"scoreDate" : "20170124",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "139",
					"score" : "n/a"
				},
				"sourceId" : "139"
			},
			"identification" : {
				"addressLine2" : "P.O. Box\t214432",
				"primaryName" : "WORTHY CLOTHING L.L.C",
				"telephoneNumber" : "(971) 50 140 5890",
				"postalTown2" : "Dubai"
			},
			"yearY1" : {
				"sourceId" : "139"
			},
			"yearY2" : {
				"sourceId" : "139"
			}
		},
		"easyNumber" : "00009572057800",
		"countryCode" : "AR3",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "139"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11791519"
		},
		"companyDataFileId" : "EDMS-01-11791519",
		"creationDate" : ISODate("2017-01-24T08:46:13Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1314"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-12-26T14:58:39.387+0100",
					"localActivityCode" : "8051",
					"tradeStyle" : "+Brian Center Health & Rehabilitation/Hendersonville",
					"retainedScoreSource" : "447",
					"yearStarted" : "2005",
					"foundationDate" : "20050101",
					"atRatingScore" : "0",
					"numberOfEmployees" : 99,
					"retainedScoreDate" : "2016-12-24T00:00:00.000+0100",
					"primaryGeographicArea" : "NC",
					"atRatingScoreType" : "D",
					"retainedScore" : "0",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-12-24T00:00:00.000+0100",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "0",
					"alarmCode" : "37",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "361522902",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "8690",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "2907223",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0099",
					"currency" : "USD",
					"notationAgency" : "7",
					"exchangeRate" : "0.92601557"
				},
				"evaluation" : {
					"scoreDate" : "20161224",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "0"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "1870 Pisgah Rd",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "361522902",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "SSC Hendersonville Operating Company LLC",
				"zipCode" : "28739",
				"postalTown" : "Hendersonville"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009557059300",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11389881"
		},
		"companyDataFileId" : "EDMS-01-11389881",
		"creationDate" : ISODate("2016-12-24T11:36:58Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1327"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-06-17T13:42:29.695+0200",
					"retainedScoreSource" : "63",
					"yearStarted" : "1997",
					"foundationDate" : "19970101",
					"atRatingScore" : "4",
					"numberOfEmployees" : 3,
					"retainedScoreDate" : "2016-06-17T00:00:00.000+0200",
					"atRatingScoreType" : "E",
					"retainedScore" : "3.31",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "AED",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE SA",
					"interpretedScoreSourceName" : "INFOCREDIT",
					"language2" : "en",
					"nace" : "4646",
					"interpretedScoreSource" : "68",
					"turnover" : {
						"value" : "1560000",
						"currency" : "AED",
						"currencyUnit" : 0
					},
					"legalForm" : "0080",
					"currency" : "AED",
					"notationAgency" : "4",
					"exchangeRate" : "0.24063993"
				},
				"evaluation" : {
					"scoreDate" : "20160617",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "68",
					"score" : "NA"
				},
				"sourceId" : "68"
			},
			"identification" : {
				"addressLine2" : "Ground Floor, Damas Building, Opp. HSBC Bank & Chothram Supermarket Sheikh Hamad Bin Abdullah Street",
				"primaryName" : "Reema Pharmacy",
				"telephoneNumber" : "97097192241124",
				"zipCode" : "591",
				"email" : "abdulharshadac@gmail.com",
				"faxNumber" : "97097192241134",
				"postalTown2" : "Fujairah"
			},
			"yearY1" : {
				"sourceId" : "68"
			},
			"yearY2" : {
				"sourceId" : "68"
			}
		},
		"easyNumber" : "00009225587500",
		"countryCode" : "AR4",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "68"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8603239"
		},
		"companyDataFileId" : "EDMS-01-8603239",
		"creationDate" : ISODate("2016-06-17T11:41:54Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f8"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-06-07T08:47:41.221+0200",
					"localActivityCode" : "4634",
					"retainedScoreSource" : "87",
					"localTotalEmployees" : "NON DICHIARATI",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2017",
					"foundationDate" : "20160704",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-06-07T00:00:00.000+0200",
					"primaryGeographicArea" : "RC",
					"localFormeJuridique" : "SR",
					"atRatingScoreType" : "D",
					"retainedScore" : "977",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-06-07T00:00:00.000+0200",
					"nbIdentifiers" : 3,
					"localExpPaiemt" : "0",
					"currencyUnit" : "0",
					"interpretedScore" : "977",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "2500",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "RC199887",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "4634",
					"interpretedScoreSource" : "87",
					"legalForm" : "0006",
					"currency" : "EUR",
					"notationAgency" : "4",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170607",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "87",
					"score" : "977"
				},
				"sourceId" : "87",
				"financialStatement" : {
					"sizeCapital" : {
						"value" : "2500"
					}
				},
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "VIA TRAPEZI CASE POPOLARI SNC",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "02942560802",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "RC199887",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "02942560802",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "BUY & DRINK S.R.L.",
				"zipCode" : "89131",
				"postalTown" : "REGGIO DI CALABRIA"
			},
			"yearY1" : {
				"sourceId" : "87"
			},
			"yearY2" : {
				"sourceId" : "87"
			}
		},
		"easyNumber" : "00010062008700",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13696648"
		},
		"companyDataFileId" : "EDMS-01-13696648",
		"creationDate" : ISODate("2017-06-07T06:47:40Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12fa"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-05-11T12:00:41.928+0200",
					"localActivityCode" : "5610A",
					"retainedScoreSource" : "557",
					"yearStarted" : "2016",
					"foundationDate" : "20160715",
					"atRatingScore" : "3",
					"numberOfEmployees" : 1,
					"retainedScoreDate" : "2016-08-23T00:00:00.000+0200",
					"localFormeJuridique" : "5710",
					"atRatingScoreType" : "D",
					"retainedScore" : "02.51",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-08-23T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "15000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "02.51",
					"retainedScoreSourceName" : "IRIS France",
					"interpretedScoreSourceName" : "IRIS France",
					"nace" : "5610",
					"interpretedScoreSource" : "557",
					"legalForm" : "0019",
					"currency" : "EUR",
					"notationAgency" : "3",
					"exchangeRate" : "1.00000000"
				},
				"financialStatement" : {
					"type" : "SS",
					"currencyUnit" : "0",
					"nbOfEmployees" : 1,
					"sizeCapital" : {
						"value" : "15000",
						"currencyUnit" : 0
					}
				},
				"externalExperience" : {
					"paymentExperience" : {
						"nb6to12" : 0,
						"nb0to6" : 0,
						"nb12to24" : 0,
						"nbOver24" : 0
					}
				},
				"evaluation" : {
					"scoreDate" : "20160823",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "557",
					"score" : "02.51"
				},
				"sourceId" : "557",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "73 Rue de Seine",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "821537065",
					"identifierName" : "SIREN"
				},
				"primaryName" : "CREPERIE DE LA SEINE",
				"zipCode" : "75006",
				"postalTown" : "PARIS 06"
			},
			"yearY1" : {
				"sourceId" : "557"
			},
			"yearY2" : {
				"sourceId" : "557"
			}
		},
		"easyNumber" : "00010048505100",
		"countryCode" : "FRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "557"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13281385"
		},
		"companyDataFileId" : "EDMS-01-13281385",
		"DefaultBlock" : {
			"Language" : "fr"
		},
		"creationDate" : ISODate("2017-05-11T10:00:40Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12ff"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-10-16T03:27:05.750+0200",
					"localActivityCode" : "3320B",
					"retainedScoreSource" : "557",
					"localTotalEmployees" : 20,
					"yearStarted" : "2017",
					"foundationDate" : "20170407",
					"atRatingScore" : "7",
					"numberOfEmployees" : 20,
					"retainedScoreDate" : "2017-06-23T00:00:00.000+0200",
					"localFormeJuridique" : "5720",
					"atRatingScoreType" : "D",
					"retainedScore" : "00.40",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-06-23T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "100000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"localExpPaiemt" : "1",
					"currencyUnit" : "0",
					"interpretedScore" : "00.40",
					"retainedScoreSourceName" : "ELLISPHERE",
					"interpretedScoreSourceName" : "ELLISPHERE",
					"nace" : "3320",
					"interpretedScoreSource" : "557",
					"legalForm" : "0019",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000"
				},
				"financialStatement" : {
					"type" : "SS",
					"balanceSheet" : {
						"liabilities" : {
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currency" : "EUR"
							}
						}
					},
					"nbOfEmployees" : 20,
					"profitAndLoss" : {
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currency" : "EUR"
						}
					},
					"currency" : "EUR",
					"exchangeRate" : "1.00000000",
					"sizeCapital" : {
						"value" : "100000",
						"currency" : "EUR"
					}
				},
				"externalExperience" : {
					"taxArrears" : {
						"oldestArrear" : "20170622",
						"nbOfArrears" : 0,
						"newestArrear" : "20170622",
						"totalAmount" : {
							"value" : "0",
							"currency" : "EUR"
						}
					}
				},
				"evaluation" : {
					"scoreDate" : "20170623",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "557",
					"score" : "00.40"
				},
				"sourceId" : "557",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "150 Rue des Andrillots",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "828900993",
					"identifierName" : "SIREN"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "FR30828900993",
					"identifierName" : "VAT_FRA"
				},
				"primaryName" : "SOFI RHONE ALPES",
				"telephoneNumber" : "0475715065",
				"zipCode" : "26600",
				"postalTown" : "GRANGES LES BEAUMONT"
			},
			"yearY1" : {
				"sourceId" : "557"
			},
			"yearY2" : {
				"sourceId" : "557"
			}
		},
		"easyNumber" : "00010045000400",
		"countryCode" : "FRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "828900993",
					"sourceIdType" : "IP",
					"code" : "557"
				},
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "MONITORING"
			},
			"receivedDataEDMSid" : "EDMS-01-15803372"
		},
		"companyDataFileId" : "CDF-59e40ae709770c32a52cb4eb",
		"DefaultBlock" : {
			"LOCAL_NAME" : "SOFI RHONE ALPES",
			"Language" : "fr"
		},
		"creationDate" : ISODate("2017-10-16T01:27:03.113Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-230023625",
		"riskDataSnapshot" : {
			"crsNumber" : "100C94FP4"
		},
		"lastUpdateDate" : ISODate("2017-10-16T01:27:06.207Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1308"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-09-06T21:46:48.854+0200",
					"localActivityCode" : "F4210",
					"retainedScoreSource" : "996",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"yearStarted" : "2010",
					"foundationDate" : "20100423",
					"atRatingScore" : "5",
					"numberOfEmployees" : 1000,
					"workingCapital" : {
						"value" : "24362849000",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-09-06T00:00:00.000+0200",
					"primaryGeographicArea" : "DC",
					"atRatingScoreType" : "D",
					"retainedScore" : "1.128",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "12898544754",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "129212546000",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"alarmCode" : "66",
					"retainedScoreSourceName" : "Coface Internal Light Score",
					"issuedCapital" : {
						"value" : "12898544754",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "9003546375",
					"interpretedScoreSourceName" : "INFORMA COLOMBIA SA",
					"nace" : "4299",
					"interpretedScoreSource" : "586",
					"netWorth" : {
						"value" : "40190881000",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "75159677000",
						"currency" : "COP",
						"currencyUnit" : 0
					},
					"legalForm" : "0019",
					"currency" : "COP",
					"exchangeRate" : "0.00028507"
				},
				"evaluation" : {
					"scoreDate" : "20170621",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "586",
					"score" : "67"
				},
				"sourceId" : "586"
			},
			"identification" : {
				"addressLine" : "CALLE 93 14 71 PISO 2",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "900354637-5",
					"identifierName" : "NIT_COL"
				},
				"primaryName" : "HIDALGO E HIDALGO COLOMBIA SAS",
				"telephoneNumber" : "16167223",
				"faxNumber" : "16212950",
				"postalTown" : "BOGOTA"
			},
			"yearY1" : {
				"sourceId" : "586"
			},
			"yearY2" : {
				"sourceId" : "586"
			}
		},
		"easyNumber" : "00009690541000",
		"countryCode" : "COL",
		"builtFrom" : {
			"supply" : {
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "ORDER",
				"businessLine" : "CREDIT_INS",
				"source" : {
					"reportId" : "00009690541000",
					"sourceIdType" : "IP",
					"code" : "586"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-15211602"
		},
		"companyDataFileId" : "CDF-59b050a64edd0256508ca39a",
		"creationDate" : ISODate("2017-09-06T19:46:46.811Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-222131288",
		"riskDataSnapshot" : {
			"crsNumber" : "225044394"
		},
		"lastUpdateDate" : ISODate("2017-09-06T19:46:49.221Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db130a"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-02-28T14:33:13.425+0100",
					"localActivityCode" : "4781Z",
					"retainedScoreSource" : "557",
					"yearStarted" : "2017",
					"foundationDate" : "20170208",
					"atRatingScore" : "3",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2017-02-21T00:00:00.000+0100",
					"localFormeJuridique" : "5720",
					"atRatingScoreType" : "D",
					"retainedScore" : "02.00",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-02-21T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "5000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "02.00",
					"retainedScoreSourceName" : "IRIS France",
					"interpretedScoreSourceName" : "IRIS France",
					"nace" : "4781",
					"interpretedScoreSource" : "557",
					"legalForm" : "0019",
					"currency" : "EUR",
					"notationAgency" : "3",
					"exchangeRate" : "1.00000000"
				},
				"financialStatement" : {
					"type" : "SS",
					"currencyUnit" : "0",
					"nbOfEmployees" : 0,
					"sizeCapital" : {
						"value" : "5000",
						"currencyUnit" : 0
					}
				},
				"externalExperience" : {
					"paymentExperience" : {
						"nb6to12" : 0,
						"nb0to6" : 0,
						"nb12to24" : 0,
						"nbOver24" : 0
					}
				},
				"evaluation" : {
					"scoreDate" : "20170221",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "557",
					"score" : "02.00"
				},
				"sourceId" : "557",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "19 Rue du Calvaire",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "827653973",
					"identifierName" : "SIREN"
				},
				"primaryName" : "AU PETIT BON HOME",
				"zipCode" : "62150",
				"postalTown" : "CAUCOURT"
			},
			"yearY1" : {
				"sourceId" : "557"
			},
			"yearY2" : {
				"sourceId" : "557"
			}
		},
		"easyNumber" : "00009619048100",
		"countryCode" : "FRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "557"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12300527"
		},
		"companyDataFileId" : "EDMS-01-12300527",
		"DefaultBlock" : {
			"Language" : "fr"
		},
		"creationDate" : ISODate("2017-02-28T13:33:11Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1313"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-01-02T07:52:20.677+0100",
					"localActivityCode" : "4721",
					"retainedScoreSource" : "63",
					"yearStarted" : "2012",
					"foundationDate" : "20120930",
					"atRatingScore" : "2",
					"numberOfEmployees" : 100,
					"retainedScoreDate" : "2017-01-02T00:00:00.000+0100",
					"atRatingScoreType" : "E",
					"retainedScore" : "12.30",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "AED",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"currencyUnit" : "0",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE SA",
					"interpretedScoreSourceName" : "RIME INFORMATION BUREAU LIMITED",
					"language2" : "en",
					"nace" : "4721",
					"interpretedScoreSource" : "188",
					"currency" : "AED",
					"notationAgency" : "2"
				},
				"evaluation" : {
					"scoreDate" : "20170102",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "188",
					"score" : "n/a"
				},
				"sourceId" : "188"
			},
			"identification" : {
				"addressLine2" : "Owned by Sheikh Saoud Bin Khaled Bin Sultan Al Qasimi Maliha Road, near National Paint  Industrial Area No. 17, near University City",
				"primaryName" : "AL SAFEER MARKET LLC-BRANCH 3",
				"telephoneNumber" : "(971 6) 542 8999",
				"zipCode" : "22320",
				"faxNumber" : "(971 6) 539 2773",
				"postalTown2" : "Sharjah"
			},
			"yearY1" : {
				"sourceId" : "188"
			},
			"yearY2" : {
				"sourceId" : "188"
			}
		},
		"easyNumber" : "00009558054200",
		"countryCode" : "AR6",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "188"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11478895"
		},
		"companyDataFileId" : "EDMS-01-11478895",
		"creationDate" : ISODate("2017-01-02T06:51:48Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1318"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-11-09T15:04:06.727+0100",
					"localActivityCode" : "4332B",
					"retainedScoreSource" : "557",
					"yearStarted" : "2016",
					"foundationDate" : "20160912",
					"atRatingScore" : "3",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2016-09-14T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "02.00",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-09-14T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "8000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "02.00",
					"retainedScoreSourceName" : "IRIS France",
					"interpretedScoreSourceName" : "IRIS France",
					"nace" : "4332",
					"interpretedScoreSource" : "557",
					"legalForm" : "0019",
					"currency" : "EUR",
					"notationAgency" : "2",
					"exchangeRate" : "1.00000000"
				},
				"financialStatement" : {
					"type" : "SS",
					"balanceSheet" : {
						"liabilities" : {
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							},
							"totalNonCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"nbOfEmployees" : 0,
					"profitAndLoss" : {
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"cashBalance" : {
							"value" : "0",
							"currencyUnit" : 0
						}
					},
					"sizeCapital" : {
						"value" : "8000",
						"currencyUnit" : 0
					}
				},
				"externalExperience" : {
					"paymentExperience" : {
						"nb6to12" : 0,
						"nb0to6" : 0,
						"nb12to24" : 0,
						"nbOver24" : 0
					}
				},
				"evaluation" : {
					"scoreDate" : "20160914",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "557",
					"score" : "02.00"
				},
				"sourceId" : "557",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "7 B Rue du Bourrelier",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "822314472",
					"identifierName" : "SIREN"
				},
				"primaryName" : "VINISUR",
				"telephoneNumber" : "0787275274",
				"zipCode" : "34230",
				"postalTown" : "PAULHAN"
			},
			"yearY1" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalNonCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							},
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"profitAndLoss" : {
						"workingCapital" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"cashBalance" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currencyUnit" : 0
						}
					}
				},
				"sourceId" : "557"
			},
			"yearY2" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalNonCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							},
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"profitAndLoss" : {
						"workingCapital" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"cashBalance" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currencyUnit" : 0
						}
					}
				},
				"sourceId" : "557"
			}
		},
		"easyNumber" : "00009525052500",
		"countryCode" : "FRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "557"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10705768"
		},
		"companyDataFileId" : "EDMS-01-10705768",
		"DefaultBlock" : {
			"Language" : "fr"
		},
		"creationDate" : ISODate("2016-11-09T14:03:58Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1323"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-07-22T14:45:19.377+0200",
					"localActivityCode" : "7011",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2005",
					"foundationDate" : "20051012",
					"atRatingScore" : "4",
					"retainedScoreDate" : "2016-07-22T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "385",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-07-22T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "20750000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "385",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "5510",
					"interpretedScoreSource" : "210",
					"legalForm" : "0011",
					"currency" : "TRY",
					"notationAgency" : "5",
					"exchangeRate" : "0.30546901"
				},
				"evaluation" : {
					"scoreDate" : "20160722",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "385"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "SAHIRPASA ISHANI K:5 NO:59 INONU MAHALLESI CUMHURIYET CADDESI ELMADAG",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "567494",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "0080663356",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "AGRON TURIZM VE TICARET ANONIM SIRKETI",
				"telephoneNumber" : "902123936510",
				"zipCode" : "34384",
				"faxNumber" : "902122306815",
				"postalTown" : "SISLI"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00009376577400",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-9163179"
		},
		"companyDataFileId" : "EDMS-01-9163179",
		"creationDate" : ISODate("2016-07-22T12:45:16Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1324"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-07-12T08:26:45.604+0200",
					"retainedScoreSource" : "164",
					"yearStarted" : "0000",
					"foundationDate" : "00000101",
					"atRatingScore" : "2",
					"retainedScoreDate" : "2016-07-11T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "12.3",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "INR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-07-11T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "12.3",
					"retainedScoreSourceName" : "COFACE INDIA CREDIT MANAGEMENT SERVICES",
					"informationSupplierReference" : "6243924",
					"interpretedScoreSourceName" : "COFACE INDIA CREDIT MANAGEMENT SERVICES",
					"language2" : "en",
					"interpretedScoreSource" : "164",
					"currency" : "INR",
					"notationAgency" : "2",
					"exchangeRate" : "0.01323465"
				},
				"evaluation" : {
					"scoreDate" : "20160711",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "164",
					"score" : "12,3"
				},
				"sourceId" : "164"
			},
			"identification" : {
				"addressLine2" : "B-106, Zone-1, Opposite to Dindayal Park, Vyapar Vihar,",
				"primaryName" : "S.P. MARKETING",
				"telephoneNumber" : "9827177725",
				"zipCode" : "495001",
				"legalIdentifier2" : {
					"identifierValue" : "Non-Incorporated"
				},
				"postalTown2" : "Bilaspur (Chhattisgarh)"
			},
			"yearY1" : {
				"sourceId" : "164"
			},
			"yearY2" : {
				"sourceId" : "164"
			}
		},
		"easyNumber" : "00009365078500",
		"countryCode" : "IND",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "164"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8952879"
		},
		"companyDataFileId" : "EDMS-01-8952879",
		"creationDate" : ISODate("2016-07-11T12:48:18Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1328"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-06-03T07:53:14.076+0200",
					"retainedScoreSource" : "164",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2016-06-02T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "5",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "INR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-06-02T00:00:00.000+0200",
					"currencyUnit" : "0",
					"interpretedScore" : "5",
					"retainedScoreSourceName" : "COFACE INDIA CREDIT MANAGEMENT SERVICES",
					"informationSupplierReference" : "6239638",
					"interpretedScoreSourceName" : "COFACE INDIA CREDIT MANAGEMENT SERVICES",
					"language2" : "en",
					"interpretedScoreSource" : "164",
					"currency" : "INR",
					"notationAgency" : "2",
					"exchangeRate" : "0.01320977"
				},
				"evaluation" : {
					"scoreDate" : "20160602",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "164",
					"score" : "5"
				},
				"sourceId" : "164"
			},
			"identification" : {
				"addressLine2" : "Shop No G9, Ground Floor, President Tower, Near Madhumilan Square",
				"primaryName" : "AASHIRWAD TRADERS",
				"zipCode" : "452001",
				"postalTown2" : "Indore (Madhya Pradesh)"
			},
			"yearY1" : {
				"sourceId" : "164"
			},
			"yearY2" : {
				"sourceId" : "164"
			}
		},
		"easyNumber" : "00009161598900",
		"countryCode" : "IND",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "164"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8361908"
		},
		"companyDataFileId" : "EDMS-01-8361908",
		"creationDate" : ISODate("2016-06-02T12:43:54Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1317"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-11-15T17:00:34.408+0100",
					"localActivityCode" : "13",
					"retainedScoreSource" : "63",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"atRatingScore" : "1",
					"retainedScoreDate" : "2016-11-15T00:00:00.000+0100",
					"atRatingScoreType" : "E",
					"retainedScore" : "15.07",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "NOK",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"alarmCode" : "86",
					"retainedScoreSourceName" : "COFACE SA",
					"informationSupplierReference" : "971755512",
					"interpretedScoreSourceName" : "EXPERIAN NORWAY",
					"nace" : "13",
					"interpretedScoreSource" : "58",
					"legalForm" : "0099",
					"currency" : "NOK",
					"notationAgency" : "1",
					"exchangeRate" : "0.11109977"
				},
				"evaluation" : {
					"scoreDate" : "20161115",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "58"
				},
				"sourceId" : "58"
			},
			"identification" : {
				"addressLine" : "KOLSTADGATA 1",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "971755512",
					"identifierName" : "RGN_NOR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "NO971755512",
					"identifierName" : "VAT_NOR"
				},
				"primaryName" : "RAUMA ULLVAREFABRIKK AS",
				"zipCode" : "6310",
				"postalTown" : "VEBLUNGSNES"
			},
			"yearY1" : {
				"sourceId" : "58"
			},
			"yearY2" : {
				"sourceId" : "58"
			}
		},
		"easyNumber" : "00009530057000",
		"countryCode" : "NOR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "58"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10783268"
		},
		"companyDataFileId" : "EDMS-01-10783268",
		"creationDate" : ISODate("2016-11-15T16:00:31Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1303"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-06-27T08:08:38.545+0200",
					"localActivityCode" : "C130400",
					"retainedScoreSource" : "481",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"yearStarted" : "1992",
					"foundationDate" : "19921221",
					"atRatingScore" : "5",
					"retainedScoreDate" : "2017-03-30T00:00:00.000+0200",
					"primaryGeographicArea" : "RS",
					"atRatingScoreType" : "D",
					"retainedScore" : "14",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "40000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"retainedScoreSourceName" : "SERASA EXPERIAN",
					"issuedCapital" : {
						"value" : "40000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "94963576",
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"nace" : "4773",
					"interpretedScoreSource" : "481",
					"legalForm" : "0016",
					"currency" : "BRL",
					"exchangeRate" : "0.28229159"
				},
				"evaluation" : {
					"scoreDate" : "20170627",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "481"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "AV TIRADENTES 1717, CENTRO",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "94963576000106",
					"identifierName" : "CNPJ_BRA"
				},
				"primaryName" : "LATSCH E BOCHI LTDA FARMACIA FRONTEIRA",
				"telephoneNumber" : "055-034332277",
				"zipCode" : "097650000",
				"faxNumber" : "0000-000000000",
				"postalTown" : "ITAQUI"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00009941515900",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "94963576",
					"sourceIdType" : "IP",
					"code" : "481"
				},
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "MONITORING"
			},
			"receivedDataEDMSid" : "EDMS-01-14023275"
		},
		"companyDataFileId" : "CDF-5951f664efcf263ac341ebec",
		"creationDate" : ISODate("2017-06-27T06:08:36.442Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-207495283",
		"riskDataSnapshot" : {
			"crsNumber" : "175139582"
		},
		"lastUpdateDate" : ISODate("2017-06-27T06:08:38.976Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1310"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-01-23T09:53:27.898+0100",
					"localActivityCode" : "4617B",
					"retainedScoreSource" : "557",
					"yearStarted" : "1998",
					"foundationDate" : "19980101",
					"atRatingScore" : "3",
					"numberOfEmployees" : 25,
					"retainedScoreDate" : "2017-01-19T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "04.95",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-01-19T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "150000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"currencyUnit" : "0",
					"interpretedScore" : "04.95",
					"retainedScoreSourceName" : "IRIS France",
					"interpretedScoreSourceName" : "IRIS France",
					"nace" : "4617",
					"interpretedScoreSource" : "557",
					"legalForm" : "0011",
					"currency" : "EUR",
					"notationAgency" : "6",
					"exchangeRate" : "1.00000000"
				},
				"financialStatement" : {
					"type" : "SS",
					"balanceSheet" : {
						"liabilities" : {
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							},
							"totalNonCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"nbOfEmployees" : 25,
					"profitAndLoss" : {
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"cashBalance" : {
							"value" : "0",
							"currencyUnit" : 0
						}
					},
					"sizeCapital" : {
						"value" : "150000",
						"currencyUnit" : 0
					}
				},
				"externalExperience" : {
					"paymentExperience" : {
						"nb6to12" : 0,
						"nb0to6" : 0,
						"nb12to24" : 0,
						"nbOver24" : 0
					}
				},
				"evaluation" : {
					"scoreDate" : "20170119",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "557",
					"score" : "04.95"
				},
				"sourceId" : "557",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "3 Rue de l'Industrie",
				"primaryName" : "THERASCIENCE SAM",
				"telephoneNumber" : "97708721",
				"faxNumber" : "97708722",
				"postalTown" : "MONACO"
			},
			"yearY1" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalNonCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							},
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"profitAndLoss" : {
						"workingCapital" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"cashBalance" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currencyUnit" : 0
						}
					}
				},
				"sourceId" : "557"
			},
			"yearY2" : {
				"financialStatement" : {
					"balanceSheet" : {
						"liabilities" : {
							"totalNonCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							},
							"totalCurrentLiabilities" : {
								"value" : "0",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"profitAndLoss" : {
						"workingCapital" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"cashBalance" : {
							"value" : "0",
							"currencyUnit" : 0
						},
						"needOfWorkingCaptial" : {
							"value" : "0",
							"currencyUnit" : 0
						}
					}
				},
				"sourceId" : "557"
			}
		},
		"easyNumber" : "00009564053600",
		"countryCode" : "MCO",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "557"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11772477"
		},
		"companyDataFileId" : "EDMS-01-11772477",
		"DefaultBlock" : {
			"Language" : "fr"
		},
		"creationDate" : ISODate("2017-01-23T08:53:26Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1326"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-06-16T16:11:08.997+0200",
					"localActivityCode" : "5111",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2012",
					"foundationDate" : "20120402",
					"atRatingScore" : "4",
					"retainedScoreDate" : "2016-06-16T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "284",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-06-16T00:00:00.000+0200",
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "284",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "4676",
					"interpretedScoreSource" : "210",
					"legalForm" : "0080",
					"currency" : "TRY",
					"notationAgency" : "2",
					"exchangeRate" : "0.30093001"
				},
				"evaluation" : {
					"scoreDate" : "20160616",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "284"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "NO:10/4 KEMALPASA MAHALLESI 7087/4 SOKAK",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "160203",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "44497455158",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "COZUM KAGIT, KAGIT URUNLERI VE MATBAA MALZEMELERI SANAYI TICARET - VEDAT HIZLIATES",
				"telephoneNumber" : "902324796411",
				"zipCode" : "35060",
				"postalTown" : "PINARBASI, BORNOVA"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00009280082000",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8588129"
		},
		"companyDataFileId" : "EDMS-01-8588129",
		"creationDate" : ISODate("2016-06-16T14:11:04Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db130f"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-01-17T08:12:57.072+0100",
					"localActivityCode" : "5045",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2016",
					"foundationDate" : "20160928",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-01-17T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "190",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-01-17T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "150000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "190",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"issuedCapital" : {
						"value" : "37500",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "4651",
					"interpretedScoreSource" : "210",
					"legalForm" : "0003",
					"currency" : "TRY",
					"notationAgency" : "2",
					"exchangeRate" : "0.27087966"
				},
				"evaluation" : {
					"scoreDate" : "20170117",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "190"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "NAILE APARTMANI NO:86/9 19 MAYIS MAHALLESI INONU CADDESI",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "50094",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "7700437516",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "SIDRA BILISIM TEKNOLOJILERI LIMITED SIRKETI",
				"telephoneNumber" : "902163728888",
				"postalTown" : "KADIKOY"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00009568053200",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11685021"
		},
		"companyDataFileId" : "EDMS-01-11685021",
		"creationDate" : ISODate("2017-01-17T07:12:54Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db131a"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2016-10-19T11:17:48.642+0200",
					"localActivityCode" : "4673",
					"retainedScoreSource" : "469",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2003",
					"foundationDate" : "20030101",
					"stock" : {
						"value" : "17753700",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"atRatingScore" : "6",
					"numberOfEmployees" : 200,
					"workingCapital" : {
						"value" : "6890",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-10-19T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "6",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-10-19T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "2200",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "35866200",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "6",
					"retainedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"informationSupplierReference" : "81366660",
					"interpretedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"nace" : "4673",
					"interpretedScoreSource" : "469",
					"netWorth" : {
						"value" : "8882700",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "68740200",
						"currency" : "BYN",
						"currencyUnit" : 0
					},
					"legalForm" : "0003",
					"currency" : "BYN",
					"notationAgency" : "3",
					"exchangeRate" : "0.45810619"
				},
				"evaluation" : {
					"scoreDate" : "20161019",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "469",
					"score" : "6"
				},
				"sourceId" : "469"
			},
			"identification" : {
				"addressLine" : "Melezha ul., ,5, korp.2, ofis 1301, kom.1",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "190516148",
					"identifierName" : "VAT_BLR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "190516148",
					"identifierName" : "RGN_BLR"
				},
				"primaryName" : "OOO \"Astomstroy\"",
				"telephoneNumber" : "375172372666",
				"zipCode" : "220090",
				"postalTown" : "Minsk"
			},
			"yearY1" : {
				"sourceId" : "469"
			},
			"yearY2" : {
				"sourceId" : "469"
			}
		},
		"easyNumber" : "00009485061500",
		"countryCode" : "BLR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "469"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10418532"
		},
		"companyDataFileId" : "EDMS-01-10418532",
		"creationDate" : ISODate("2016-10-19T09:17:45Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db131f"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-09-14T16:58:41.364+0200",
					"localActivityCode" : "5944",
					"tradeStyle" : "(Foreign Parent is S Tous SL, Manresa, Spain.)",
					"retainedScoreSource" : "447",
					"yearStarted" : "2005",
					"foundationDate" : "20050101",
					"atRatingScore" : "7",
					"numberOfEmployees" : 6,
					"retainedScoreDate" : "2017-04-23T00:00:00.000+0200",
					"primaryGeographicArea" : "NY",
					"atRatingScoreType" : "D",
					"retainedScore" : "1504",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-04-23T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "1504",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "079402403",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4777",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "865811",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"exchangeRate" : "0.84697391"
				},
				"evaluation" : {
					"scoreDate" : "20170423",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1504"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "610 5th Ave Ste 5",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "079402403",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Tous USA, Inc.",
				"telephoneNumber" : "(212) 757-2316",
				"url" : "www.tous.com",
				"zipCode" : "10020",
				"postalTown" : "New York"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009405069500",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "ORDER",
				"businessLine" : "CREDIT_INS",
				"source" : {
					"reportId" : "170914A2FD3A",
					"sourceIdType" : "IP",
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-15340478"
		},
		"companyDataFileId" : "CDF-59ba991f7d82ce0cf00b33fd",
		"creationDate" : ISODate("2017-09-14T14:58:39.430Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-223808664",
		"riskDataSnapshot" : {
			"crsNumber" : "285920837"
		},
		"lastUpdateDate" : ISODate("2017-09-14T14:58:41.755Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1311"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-12-29T22:15:04.769+0100",
					"localActivityCode" : "6282",
					"tradeStyle" : "Religious Communities Trust",
					"retainedScoreSource" : "447",
					"yearStarted" : "1981",
					"foundationDate" : "19810101",
					"atRatingScore" : "7",
					"numberOfEmployees" : 17,
					"retainedScoreDate" : "2016-04-10T00:00:00.000+0200",
					"primaryGeographicArea" : "IL",
					"atRatingScoreType" : "D",
					"retainedScore" : "1524",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-04-10T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "2191286326",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"balanceSheetDate" : "2005",
					"currencyUnit" : "0",
					"interpretedScore" : "1524",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "177878097",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "6619",
					"interpretedScoreSource" : "447",
					"netWorth" : {
						"value" : "2185920717",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "272144675",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "9",
					"exchangeRate" : "0.92601557"
				},
				"evaluation" : {
					"scoreDate" : "20160410",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1524"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "20 N WACKER DR STE 2000",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "177878097",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Christian Brothers Investment Services, Inc.",
				"telephoneNumber" : "(312) 526-3343",
				"zipCode" : "60606",
				"postalTown" : "CHICAGO"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009561553900",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11452831"
		},
		"companyDataFileId" : "EDMS-01-11452831",
		"creationDate" : ISODate("2016-12-29T21:15:02Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1319"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-11-15T09:05:43.291+0100",
					"retainedScoreSource" : "63",
					"yearStarted" : "2000",
					"foundationDate" : "20000107",
					"atRatingScore" : "2",
					"numberOfEmployees" : 9,
					"retainedScoreDate" : "2016-11-15T00:00:00.000+0100",
					"atRatingScoreType" : "E",
					"retainedScore" : "8.657",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "IDR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-11-15T00:00:00.000+0100",
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "3",
					"retainedScoreSourceName" : "COFACE SA",
					"interpretedScoreSourceName" : "PT VISI GLOBALINDO DATA UTAMA",
					"language2" : "en",
					"nace" : "6820",
					"interpretedScoreSource" : "559",
					"turnover" : {
						"value" : "10000000000",
						"currency" : "IDR",
						"currencyUnit" : 0
					},
					"legalForm" : "0016",
					"currency" : "IDR",
					"notationAgency" : "2",
					"exchangeRate" : "0.00006963"
				},
				"evaluation" : {
					"scoreDate" : "20161115",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "559",
					"score" : "3"
				},
				"sourceId" : "559"
			},
			"identification" : {
				"addressLine2" : "Jl. Mayor Oking No.1  Kelurahan Puspanegara, Kecamatan Citeureup  Kab. Bogor",
				"primaryName" : "CV. KHARISMA SEJAHTERA ABADI",
				"telephoneNumber" : "+622187943948",
				"zipCode" : "16810",
				"email" : "kharismaled@gmail.com",
				"postalTown2" : "Jawa Barat"
			},
			"yearY1" : {
				"sourceId" : "559"
			},
			"yearY2" : {
				"sourceId" : "559"
			}
		},
		"easyNumber" : "00009524557600",
		"countryCode" : "IDN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "559"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10774923"
		},
		"companyDataFileId" : "EDMS-01-10774923",
		"creationDate" : ISODate("2016-11-15T08:05:10Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1325"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-07-01T08:19:25.664+0200",
					"localActivityCode" : "4652",
					"retainedScoreSource" : "164",
					"yearStarted" : "2014",
					"foundationDate" : "20140812",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2016-06-30T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "5",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "INR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-06-30T00:00:00.000+0200",
					"currencyUnit" : "0",
					"interpretedScore" : "5",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE INDIA CREDIT MANAGEMENT SERVICES",
					"informationSupplierReference" : "6242965",
					"interpretedScoreSourceName" : "COFACE INDIA CREDIT MANAGEMENT SERVICES",
					"language2" : "en",
					"nace" : "4652",
					"interpretedScoreSource" : "164",
					"legalForm" : "0002",
					"currency" : "INR",
					"notationAgency" : "4",
					"exchangeRate" : "0.01323465"
				},
				"evaluation" : {
					"scoreDate" : "20160630",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "164",
					"score" : "5"
				},
				"sourceId" : "164"
			},
			"identification" : {
				"addressLine2" : "1301 W6 Tower, TDI City, Kundli",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "AAC-5771",
					"identifierName" : "RGN_IND"
				},
				"primaryName" : "AVEO MEP SOLUTIONS LLP",
				"telephoneNumber" : "9811067275",
				"zipCode" : "131028",
				"email" : "rishabh.aggarwal@hotmail.com",
				"postalTown2" : "Sonepat (Haryana)"
			},
			"yearY1" : {
				"sourceId" : "164"
			},
			"yearY2" : {
				"sourceId" : "164"
			}
		},
		"easyNumber" : "00009357079300",
		"countryCode" : "IND",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "164"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8794526"
		},
		"companyDataFileId" : "EDMS-01-8794526",
		"creationDate" : ISODate("2016-06-30T11:50:20Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f5"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-06-03T00:09:01.145+0200",
					"localActivityCode" : "2241",
					"tradeStyle" : "(Subsidiary of WILTON BRANDS LLC, WOODRIDGE, IL)",
					"retainedScoreSource" : "447",
					"yearStarted" : "2011",
					"foundationDate" : "20110101",
					"atRatingScore" : "6",
					"numberOfEmployees" : 725,
					"retainedScoreDate" : "2016-07-17T00:00:00.000+0200",
					"primaryGeographicArea" : "NY",
					"atRatingScoreType" : "D",
					"retainedScore" : "1482",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-07-17T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "HQ",
					"currencyUnit" : "0",
					"interpretedScore" : "1482",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "157494006",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "1330",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "125392540",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "7",
					"exchangeRate" : "0.90436355"
				},
				"evaluation" : {
					"scoreDate" : "20160717",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1482"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "261 Madison Ave 4th Flr",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "157494006",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Simplicity Creative Group, Inc.",
				"telephoneNumber" : "(212) 686-7676",
				"url" : "www.simplicity.com",
				"zipCode" : "10016",
				"postalTown" : "New York"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00010084006500",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13641481"
		},
		"companyDataFileId" : "EDMS-01-13641481",
		"creationDate" : ISODate("2017-06-02T22:08:58Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1309"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-03-06T13:38:27.033+0100",
					"localActivityCode" : "5052",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2016",
					"foundationDate" : "20160607",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-03-06T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "190",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-03-06T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "300000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "190",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"issuedCapital" : {
						"value" : "75000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "4672",
					"interpretedScoreSource" : "210",
					"legalForm" : "0011",
					"currency" : "TRY",
					"notationAgency" : "2",
					"exchangeRate" : "0.25633828"
				},
				"evaluation" : {
					"scoreDate" : "20170306",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "190"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "SULTAN SANAYI SITESI C BLOK 3/C32-1A BATTALGAZI MAHALLESI SADIKOGLU SOKAK",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "39418",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "2930502953",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "DERYA MUMESSILLIK DEGERLI MADENLER SANAYI VE TICARET ANONIM SIRKETI",
				"postalTown" : "SULTANBEYLI"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00009674542600",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12379221"
		},
		"companyDataFileId" : "EDMS-01-12379221",
		"creationDate" : ISODate("2017-03-06T12:38:25Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1329"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-06-15T07:25:24.837+0200",
					"localActivityCode" : "469",
					"retainedScoreSource" : "469",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2014",
					"foundationDate" : "20140101",
					"atRatingScore" : "3",
					"workingCapital" : {
						"value" : "10",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-06-15T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "3",
					"netIncomeLoss" : {
						"value" : "2",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-06-15T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "10000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 20,
					"totalAssests" : {
						"value" : "40000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "3",
					"retainedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"informationSupplierReference" : "107596542",
					"interpretedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"nace" : "469",
					"interpretedScoreSource" : "469",
					"netWorth" : {
						"value" : "10000",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "0",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"legalForm" : "0003",
					"currency" : "RUB",
					"notationAgency" : "1",
					"exchangeRate" : "0.01342742"
				},
				"evaluation" : {
					"scoreDate" : "20160615",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "469",
					"score" : "3"
				},
				"sourceId" : "469"
			},
			"identification" : {
				"addressLine" : "ul. Petrovka, d. 19, str. 1, pom. 13",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "7734718341",
					"identifierName" : "VAT_RUS"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "1147746129772",
					"identifierName" : "RRK_RUS"
				},
				"primaryName" : "OOO «Server»",
				"telephoneNumber" : "74956231382",
				"zipCode" : "123458",
				"postalTown" : "Moskva"
			},
			"yearY1" : {
				"sourceId" : "469"
			},
			"yearY2" : {
				"sourceId" : "469"
			}
		},
		"easyNumber" : "00009161593900",
		"countryCode" : "RUS",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "469"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8560557"
		},
		"companyDataFileId" : "EDMS-01-8560557",
		"creationDate" : ISODate("2016-06-15T05:25:20Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db130b"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2017-03-02T11:43:36.121+0100",
					"localActivityCode" : "4642",
					"retainedScoreSource" : "469",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "1995",
					"foundationDate" : "19950101",
					"atRatingScore" : "0",
					"numberOfEmployees" : 10,
					"retainedScoreDate" : "2017-02-28T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "0",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "RUB",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-02-28T00:00:00.000+0100",
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "0",
					"alarmCode" : "85",
					"retainedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"informationSupplierReference" : "102099620",
					"interpretedScoreSourceName" : "COFACE RUS SERVICES COMPANY",
					"nace" : "4642",
					"interpretedScoreSource" : "469",
					"legalForm" : "0001",
					"currency" : "RUB",
					"notationAgency" : "1",
					"exchangeRate" : "0.01574859"
				},
				"evaluation" : {
					"scoreDate" : "20170228",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "469",
					"score" : "0"
				},
				"sourceId" : "469"
			},
			"identification" : {
				"addressLine" : "ul. Moskovskaya 117",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "645300136109",
					"identifierName" : "VAT_RUS"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "304645336501145",
					"identifierName" : "RRK_RUS"
				},
				"primaryName" : "IP Nosenko Evgeniy Vladimirovich",
				"telephoneNumber" : "78452721812",
				"zipCode" : "410000",
				"postalTown" : "Saratov"
			},
			"yearY1" : {
				"sourceId" : "469"
			},
			"yearY2" : {
				"sourceId" : "469"
			}
		},
		"easyNumber" : "00009599555100",
		"countryCode" : "RUS",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "469"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12302224"
		},
		"companyDataFileId" : "EDMS-01-12302224",
		"creationDate" : ISODate("2017-02-28T15:15:17Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db131c"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-10-11T12:48:55.304+0200",
					"localActivityCode" : "3261",
					"retainedScoreSource" : "447",
					"yearStarted" : "2010",
					"foundationDate" : "20100101",
					"atRatingScore" : "7",
					"numberOfEmployees" : 1,
					"retainedScoreDate" : "2014-05-18T00:00:00.000+0200",
					"primaryGeographicArea" : "NJ",
					"atRatingScoreType" : "D",
					"retainedScore" : "1510",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2014-05-18T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1510",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "967933305",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "2342",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "110905",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "6",
					"exchangeRate" : "0.89189430"
				},
				"evaluation" : {
					"scoreDate" : "20140518",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1510"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "115 Newfield Ave Ste C",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "967933305",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Mainstream International, Inc.",
				"telephoneNumber" : "(609) 297-0540",
				"url" : "www.mainstreamintl.com",
				"zipCode" : "08837",
				"postalTown" : "Edison"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009458069200",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10296778"
		},
		"companyDataFileId" : "EDMS-01-10296778",
		"creationDate" : ISODate("2016-10-11T10:36:49Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db130d"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-02-14T05:21:02.032+0100",
					"retainedScoreSource" : "63",
					"yearStarted" : "2014",
					"foundationDate" : "20140121",
					"atRatingScore" : "2",
					"retainedScoreDate" : "2017-02-14T00:00:00.000+0100",
					"atRatingScoreType" : "E",
					"retainedScore" : "9.297",
					"netIncomeLoss" : {
						"value" : "2",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "1000000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"totalAssests" : {
						"value" : "912000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"netIncome" : {
						"value" : "-17000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"retainedScoreSourceName" : "COFACE SA",
					"issuedCapital" : {
						"value" : "1000000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "EASE CREDIT SERVICES (BEIJING) LTD",
					"nace" : "2611",
					"interpretedScoreSource" : "610",
					"netWorth" : {
						"value" : "911000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "1340000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "CNY",
					"notationAgency" : "2",
					"exchangeRate" : "0.13663255"
				},
				"evaluation" : {
					"scoreDate" : "20170214",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "610",
					"score" : "37"
				},
				"sourceId" : "610"
			},
			"identification" : {
				"addressLine" : "Building 2, No. 8, Minying Road, Zhangpu Town",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "320583000659100",
					"identifierName" : "RGN_CHN"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "S",
					"identifierValue" : "913205830914662196",
					"identifierName" : "USCC_CHN"
				},
				"primaryName" : "KUNSHAN DEYUSHENG PHOTOELECTRIC TECHNOLOGY CO., LTD.",
				"postalTown" : "Kunshan"
			},
			"yearY1" : {
				"sourceId" : "610"
			},
			"yearY2" : {
				"sourceId" : "610"
			}
		},
		"easyNumber" : "00009586556400",
		"countryCode" : "CHN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "610"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12095223"
		},
		"companyDataFileId" : "EDMS-01-12095223",
		"creationDate" : ISODate("2017-02-14T04:20:31Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12f6"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2017-05-31T20:12:38.687+0200",
					"localActivityCode" : "2752",
					"tradeStyle" : "Tri-Co Evolution",
					"retainedScoreSource" : "447",
					"yearStarted" : "1985",
					"foundationDate" : "19850101",
					"atRatingScore" : "6",
					"retainedScoreDate" : "2017-05-19T00:00:00.000+0200",
					"primaryGeographicArea" : "ON",
					"atRatingScoreType" : "D",
					"retainedScore" : "1442",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "CAD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-19T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "HQ",
					"currencyUnit" : "0",
					"interpretedScore" : "1442",
					"alarmCode" : "95",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "244830600",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "1812",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "7500000",
						"currency" : "CAD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "CAD",
					"notationAgency" : "2",
					"exchangeRate" : "0.69407224"
				},
				"evaluation" : {
					"scoreDate" : "20170519",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1442"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "47-B Antares Dr",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "244830600",
					"identifierName" : "DUN_CAN"
				},
				"primaryName" : "Tri-Co Group Inc, The",
				"telephoneNumber" : "(613) 736-7777",
				"zipCode" : "K2E 7W6",
				"faxNumber" : "(613) 736-0707",
				"postalTown" : "Ottawa"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00010074507500",
		"countryCode" : "CAN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13599326"
		},
		"companyDataFileId" : "EDMS-01-13599326",
		"creationDate" : ISODate("2017-05-31T16:53:52Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1301"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-05-08T10:38:38.673+0200",
					"localActivityCode" : "8129",
					"retainedScoreSource" : "83",
					"yearStarted" : "1987",
					"foundationDate" : "19870101",
					"atRatingScore" : "6",
					"numberOfEmployees" : 20,
					"retainedScoreDate" : "2017-05-08T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "1.42",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "HKD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-08T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "500000",
						"currency" : "HKD",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "1.42",
					"retainedScoreSourceName" : "COFACE GREATER CHINA SERVICES",
					"issuedCapital" : {
						"value" : "500000",
						"currency" : "HKD",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "6270089",
					"interpretedScoreSourceName" : "COFACE GREATER CHINA SERVICES",
					"nace" : "8129",
					"interpretedScoreSource" : "83",
					"legalForm" : "0002",
					"currency" : "HKD",
					"notationAgency" : "6",
					"exchangeRate" : "0.11995658"
				},
				"evaluation" : {
					"scoreDate" : "20170508",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "83",
					"score" : "1,42"
				},
				"sourceId" : "83"
			},
			"identification" : {
				"addressLine" : "Room 12, 9/F, Block B2, Hang Wai Industrial Centre No. 6 Kin Tai Street",
				"primaryName" : "HOI LUEN ENVIRONMENTAL SERVICES LIMITED",
				"telephoneNumber" : "2510 8816",
				"legalIdentifier3" : {
					"identifierValue" : "HK20170504115712"
				},
				"faxNumber" : "2570 9273",
				"postalTown" : "HONG KONG"
			},
			"yearY1" : {
				"sourceId" : "83"
			},
			"yearY2" : {
				"sourceId" : "83"
			}
		},
		"easyNumber" : "00010044000500",
		"countryCode" : "HKG",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "83"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13220939"
		},
		"companyDataFileId" : "EDMS-01-13220939",
		"creationDate" : ISODate("2017-05-08T08:38:37Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1304"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"localActivityCode" : "S040400",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"yearStarted" : "1977",
					"foundationDate" : "19770812",
					"stock" : {
						"value" : "28877000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"numberOfEmployees" : 26,
					"workingCapital" : {
						"value" : "31457000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"primaryGeographicArea" : "MA",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "3500000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "64407000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"alarmCode" : "94",
					"issuedCapital" : {
						"value" : "3500000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "06249791",
					"nace" : "4120",
					"netWorth" : {
						"value" : "37921000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "15536000",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"legalForm" : "0016",
					"currency" : "BRL",
					"exchangeRate" : "0.25680152",
					"retainedScore" : "18",
					"retainedScoreDate" : "2018-01-27T00:00:00.000+0100",
					"retainedScoreSource" : 481,
					"retainedScoreSourceName" : "SERASA EXPERIAN",
					"interpretedScore" : "18",
					"interpretedScoreDate" : "2018-01-27T00:00:00.000+0100",
					"interpretedScoreSource" : 481,
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"scoreIntegratedDate" : "2018-01-27T08:24:59.572+0100",
					"atRatingScore" : "4",
					"atRatingScoreType" : "D"
				},
				"evaluation" : {
					"scoreDate" : "20180127",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "481",
					"score" : "18"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "R DOS GURIATAS 20 21 QD 05, RENASCENCA II",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "06249791000174",
					"identifierName" : "CNPJ_BRA"
				},
				"primaryName" : "CONSTRUTORA ESCUDO INDUSTRIA E COMERCIO LTDA CONSTRUTORA ESCUDO",
				"telephoneNumber" : "098-032169873",
				"zipCode" : "065099110",
				"faxNumber" : "0000-000000000",
				"postalTown" : "SAO LUIS"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00009941510900",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "06249791",
					"sourceIdType" : "IP",
					"code" : "481"
				},
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "MONITORING"
			},
			"receivedDataEDMSid" : "EDMS-01-17244712"
		},
		"companyDataFileId" : "CDF-5a6c294733fa3e09861673a7",
		"creationDate" : ISODate("2018-01-27T07:24:55.544Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-253572042",
		"lastUpdateDate" : ISODate("2018-01-27T07:24:59.826Z"),
		"cnyStatus" : "W",
		"riskDataSnapshot" : {
			"potentialExposure" : {
				"politic" : {
					"currencyUnit" : "0",
					"value" : "0",
					"currency" : "EUR"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"limit" : {
					"currency" : "EUR",
					"value" : "0",
					"currencyUnit" : "0"
				},
				"cgd" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				}
			},
			"externalExposure" : {
				"currency" : "EUR",
				"currencyUnit" : "0",
				"value" : "0"
			},
			"realExposure" : {
				"limit" : {
					"currency" : "EUR",
					"value" : "154080",
					"currencyUnit" : "0"
				},
				"politic" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"cgd" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				}
			},
			"underReviewRating" : 0,
			"claimSnapshot" : {
				"claimSeverity" : "0",
				"claimDate" : "20170330"
			},
			"pendingRequest" : 0
		},
		"blackList" : "0",
		"vigilance" : "0",
		"sensitiveFile" : 0,
		"activePolicy" : "0",
		"countryNotation" : "C",
		"surveillanceStatus" : "1",
		"groupDataSnapshot" : {
			"legalGroupMember" : "1",
			"gfrHead" : "0",
			"gucGroupMember" : "0",
			"frgGroupMember" : "0"
		},
		"outputData" : {
			"retainedAssessmentData" : {
				"yearY" : {
					"rsData" : {
						"nominalCapital" : {
							"value" : "3500000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"issuedCapital" : {
							"value" : "3500000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"foundationDate" : "19770812",
						"workingCapital" : {
							"value" : "31457000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"totalAssests" : {
							"value" : "64407000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"informationSupplierReference" : "06249791",
						"currency" : "BRL",
						"turnover" : {
							"value" : "15536000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"nbIdentifiers" : 1,
						"localActivityCode" : "S040400",
						"primaryGeographicArea" : "MA",
						"netIncomeLoss" : {
							"value" : "1",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"yearStarted" : "1977",
						"nace" : "4120",
						"stock" : {
							"value" : "28877000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"paymentExperience" : "2",
						"currencyUnit" : "0",
						"balanceSheetDate" : "2016",
						"numberOfEmployees" : 26,
						"netWorth" : {
							"value" : "37921000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"legalForm" : "0016",
						"exchangeRate" : "0.25680152",
						"alarmCode" : "94",
						"retainedScore" : "18",
						"retainedScoreDate" : "2018-01-27T00:00:00.000+0100",
						"retainedScoreSource" : 481,
						"retainedScoreSourceName" : "SERASA EXPERIAN",
						"interpretedScore" : "18",
						"interpretedScoreDate" : "2018-01-27T00:00:00.000+0100",
						"interpretedScoreSource" : 481,
						"interpretedScoreSourceName" : "SERASA EXPERIAN",
						"scoreIntegratedDate" : "2018-01-27T08:24:59.572+0100",
						"atRatingScore" : "4",
						"atRatingScoreType" : "D"
					},
					"evaluation" : {
						"scoreOrigin" : "D_STD",
						"score" : "18",
						"scoreDate" : "20180127",
						"scoreType" : "D",
						"scoreSourceId" : "481"
					},
					"roadReportStatus" : "0"
				},
				"yearY1" : {
					"rsData" : {
						"currency" : "BRL",
						"legalForm" : "0016",
						"interpretedScore" : "8",
						"atRatingScoreType" : "D",
						"nominalCapital" : {
							"value" : "3500000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"numberOfEmployees" : 26,
						"issuedCapital" : {
							"value" : "3500000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"exchangeRate" : "0.29928393",
						"notationAgency" : "7",
						"nace" : "4120",
						"retainedScoreSource" : "481",
						"retainedScoreDate" : "2017-04-08T00:00:00.000+0200",
						"netWorth" : {
							"value" : "41309000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"informationSupplierReference" : "06249791",
						"atRatingScore" : "6",
						"turnover" : {
							"value" : "41636000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"primaryGeographicArea" : "MA",
						"yearStarted" : "1977",
						"totalAssests" : {
							"value" : "55760000",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"nbIdentifiers" : 1,
						"netIncomeLoss" : {
							"value" : "1",
							"currency" : "BRL",
							"currencyUnit" : 0
						},
						"localActivityCode" : "S040400",
						"paymentExperience" : "1",
						"scoreIntegratedDate" : "2017-04-09T08:03:08.206+0200",
						"balanceSheetDate" : "2015",
						"interpretedScoreDate" : "2017-04-08T00:00:00.000+0200",
						"interpretedScoreSourceName" : "SERASA EXPERIAN",
						"foundationDate" : "19770812",
						"retainedScoreSourceName" : "SERASA EXPERIAN",
						"retainedScore" : "8",
						"currencyUnit" : "0",
						"interpretedScoreSource" : "481"
					},
					"sourceId" : "481",
					"evaluation" : {
						"scoreSourceId" : "481"
					}
				},
				"identification" : {
					"addressLine" : "R DOS GURIATAS 20 21 QD 05, RENASCENCA II",
					"legalIdentifier" : {
						"identifierCategory" : "L",
						"identifierValue" : "06249791000174",
						"identifierName" : "CNPJ_BRA"
					},
					"primaryName" : "CONSTRUTORA ESCUDO INDUSTRIA E COMERCIO LTDA CONSTRUTORA ESCUDO",
					"telephoneNumber" : "098-032169873",
					"zipCode" : "065099110",
					"faxNumber" : "0000-000000000",
					"postalTown" : "SAO LUIS"
				}
			},
			"computedBy" : {
				"retainedEDMSIdY1" : "EDMS-01-12859924",
				"retainedEDMSIdY" : "EDMS-01-17244712",
				"idCall" : "00009941510900-TRAC-1517037899486"
			},
			"retainedDra" : {
				"idDra" : "AUTO-01-104634935",
				"draType" : "D",
				"dra" : "4",
				"expectedDraType" : "D"
			}
		}
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db131d"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-09-27T19:28:02.604+0200",
					"retainedScoreSource" : "63",
					"atRatingScore" : "2",
					"retainedScoreDate" : "2016-09-27T00:00:00.000+0200",
					"primaryGeographicArea" : "ON",
					"atRatingScoreType" : "E",
					"retainedScore" : "12.30",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "CAD",
						"currencyUnit" : 0
					},
					"currencyUnit" : "0",
					"retainedScoreSourceName" : "COFACE SA",
					"informationSupplierReference" : "203426192",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"interpretedScoreSource" : "447",
					"currency" : "CAD",
					"notationAgency" : "2",
					"exchangeRate" : "0.68693421"
				},
				"evaluation" : {
					"scoreDate" : "20160927",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "3"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "10 Carlow Crt Unit 2",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "203426192",
					"identifierName" : "DUN_CAN"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "S",
					"identifierValue" : "203426192",
					"identifierName" : "DUN_CAN"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "S",
					"identifierValue" : "203426192",
					"identifierName" : "DUN_CAN"
				},
				"primaryName" : "Total Access Solutions Ltd",
				"zipCode" : "L1N 9T7",
				"postalTown" : "Whitby"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009448065200",
		"countryCode" : "CAN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10094581"
		},
		"companyDataFileId" : "EDMS-01-10094581",
		"creationDate" : ISODate("2016-09-27T10:43:46Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db12fb"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-05-15T17:14:47.042+0200",
					"localActivityCode" : "4531",
					"retainedScoreSource" : "502",
					"yearStarted" : "2007",
					"foundationDate" : "20070101",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2017-05-15T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "5",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "ZAR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-15T00:00:00.000+0200",
					"currencyUnit" : "0",
					"interpretedScore" : "5",
					"retainedScoreSourceName" : "COFACE SOUTH AFRICA",
					"informationSupplierReference" : "6270927",
					"interpretedScoreSourceName" : "COFACE SOUTH AFRICA",
					"nace" : "4531",
					"interpretedScoreSource" : "502",
					"legalForm" : "0099",
					"currency" : "ZAR",
					"notationAgency" : "6",
					"exchangeRate" : "0.06925986"
				},
				"evaluation" : {
					"scoreDate" : "20170515",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "502",
					"score" : "5"
				},
				"sourceId" : "502"
			},
			"identification" : {
				"addressLine" : "427 BEREA ROAD",
				"primaryName" : "BEREA BATTERY CENTRE CC",
				"telephoneNumber" : "031 202 9409",
				"zipCode" : "4001",
				"faxNumber" : "031 202 9087",
				"postalTown" : "DURBAN"
			},
			"yearY1" : {
				"sourceId" : "502"
			},
			"yearY2" : {
				"sourceId" : "502"
			}
		},
		"easyNumber" : "00010048005100",
		"countryCode" : "ZAF",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "502"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13329812"
		},
		"companyDataFileId" : "EDMS-01-13329812",
		"creationDate" : ISODate("2017-05-15T15:14:45Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1312"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-12-22T16:30:10.539+0100",
					"localActivityCode" : "2511",
					"tradeStyle" : "Furniture Source International",
					"retainedScoreSource" : "447",
					"yearStarted" : "2001",
					"foundationDate" : "20010101",
					"atRatingScore" : "8",
					"numberOfEmployees" : 9,
					"retainedScoreDate" : "2016-12-18T00:00:00.000+0100",
					"primaryGeographicArea" : "TX",
					"atRatingScoreType" : "D",
					"retainedScore" : "1550",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-12-18T00:00:00.000+0100",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1550",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "132794699",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "3102",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "4500000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "7",
					"exchangeRate" : "0.92601557"
				},
				"evaluation" : {
					"scoreDate" : "20161218",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1550"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "14761 Fm 2154 Rd",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "132794699",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "FSI Enterprises, LLC",
				"telephoneNumber" : "(979) 690-2917",
				"url" : "www.furnitureshopcollegestation.com",
				"zipCode" : "77845",
				"postalTown" : "College Station"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00009558059200",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11360844"
		},
		"companyDataFileId" : "EDMS-01-11360844",
		"creationDate" : ISODate("2016-12-22T15:30:08Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1353"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-06-03T11:33:09.149+0200",
					"localActivityCode" : "469",
					"retainedScoreSource" : "432",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2012",
					"foundationDate" : "20120101",
					"atRatingScore" : "4",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2016-06-03T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "4",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "CZK",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-06-03T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "200000",
						"currency" : "CZK",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "204000",
						"currency" : "CZK",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2013",
					"currencyUnit" : "0",
					"interpretedScore" : "4",
					"retainedScoreSourceName" : "CZECH REPUBLIC CREDIT MANAGEMENT SERVICES",
					"issuedCapital" : {
						"value" : "200000",
						"currency" : "CZK",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "105740553",
					"interpretedScoreSourceName" : "CZECH REPUBLIC CREDIT MANAGEMENT SERVICES",
					"nace" : "469",
					"interpretedScoreSource" : "432",
					"netWorth" : {
						"value" : "204000",
						"currency" : "CZK",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "656000",
						"currency" : "CZK",
						"currencyUnit" : 0
					},
					"legalForm" : "0003",
					"currency" : "CZK",
					"notationAgency" : "2",
					"exchangeRate" : "0.03700147"
				},
				"evaluation" : {
					"scoreDate" : "20160603",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "432",
					"score" : "4"
				},
				"sourceId" : "432"
			},
			"identification" : {
				"addressLine" : "namesti Pratelstvi 1518/3",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "CZ24316601",
					"identifierName" : "VAT_CZE"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "C 195888",
					"identifierName" : "RGN_CZE"
				},
				"primaryName" : "BeeS Česká republika s.r.o.",
				"telephoneNumber" : "420702 002 200",
				"zipCode" : "102 00",
				"postalTown" : "Praha 10 - Hostivar"
			},
			"yearY1" : {
				"sourceId" : "432"
			},
			"yearY2" : {
				"sourceId" : "432"
			}
		},
		"easyNumber" : "00008662148800",
		"countryCode" : "CZE",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "432"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8378795"
		},
		"companyDataFileId" : "EDMS-01-8378795",
		"creationDate" : ISODate("2016-06-03T09:33:03Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1333"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-03-26T12:45:35.606+0100",
					"localActivityCode" : "5082",
					"tradeStyle" : "(Foreign Parent is Sandvik AB, Sandviken, Sweden.)",
					"retainedScoreSource" : "447",
					"yearStarted" : "1978",
					"foundationDate" : "19780101",
					"atRatingScore" : "5",
					"numberOfEmployees" : 60,
					"retainedScoreDate" : "2016-03-13T00:00:00.000+0100",
					"primaryGeographicArea" : "GA",
					"atRatingScoreType" : "D",
					"retainedScore" : "1421",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-03-13T00:00:00.000+0100",
					"nbIdentifiers" : 1,
					"locationStatus" : "HQ",
					"currencyUnit" : "0",
					"interpretedScore" : "1421",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "092774850",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4663",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "119800712",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0016",
					"currency" : "USD",
					"notationAgency" : "7",
					"exchangeRate" : "0.90147326"
				},
				"evaluation" : {
					"scoreDate" : "20160313",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1421"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "300 Technology Ct",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "092774850",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Sandvik Mining and Construction USA, LLC",
				"telephoneNumber" : "(404) 589-3800",
				"zipCode" : "30082",
				"postalTown" : "Smyrna"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00008925612500",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-7419622"
		},
		"companyDataFileId" : "EDMS-01-7419622",
		"DefaultBlock" : {
			"URL" : "www.sandvik.com"
		},
		"creationDate" : ISODate("2016-03-26T11:39:21Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1335"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-03-30T18:40:16.569+0200",
					"localActivityCode" : "4676",
					"retainedScoreSource" : "176",
					"yearStarted" : "2013",
					"foundationDate" : "20130101",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2016-03-30T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "6.48",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "MAD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-03-30T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "2000000",
						"currency" : "MAD",
						"currencyUnit" : 0
					},
					"totalAssests" : {
						"value" : "1053389",
						"currency" : "MAD",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "6.48",
					"retainedScoreSourceName" : "COFACE SERVICES MAGHREB",
					"informationSupplierReference" : "6233378",
					"interpretedScoreSourceName" : "COFACE SERVICES MAGHREB",
					"nace" : "4676",
					"interpretedScoreSource" : "176",
					"netWorth" : {
						"value" : "1003758",
						"currency" : "MAD",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "MAD",
					"notationAgency" : "2",
					"exchangeRate" : "0.09220750"
				},
				"evaluation" : {
					"scoreDate" : "20160330",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "176",
					"score" : "6,48"
				},
				"sourceId" : "176"
			},
			"identification" : {
				"addressLine" : "157, IMM RACINE D ANFA",
				"primaryName" : "NORYA HOLDING",
				"telephoneNumber" : "522 772785",
				"zipCode" : "20040",
				"postalTown" : "CASABLANCA"
			},
			"yearY1" : {
				"sourceId" : "176"
			},
			"yearY2" : {
				"sourceId" : "176"
			}
		},
		"easyNumber" : "00008925112500",
		"countryCode" : "MAR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "176"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-7460206"
		},
		"companyDataFileId" : "EDMS-01-7460206",
		"creationDate" : ISODate("2016-03-30T16:40:13Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db133e"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2016-02-12T15:22:47.862+0100",
					"localActivityCode" : "4789",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2011",
					"foundationDate" : "20111020",
					"atRatingScore" : "3",
					"retainedScoreDate" : "2016-02-12T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "168",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-02-12T00:00:00.000+0100",
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "168",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "5229",
					"interpretedScoreSource" : "210",
					"legalForm" : "0080",
					"currency" : "TRY",
					"notationAgency" : "2",
					"exchangeRate" : "0.30569354"
				},
				"evaluation" : {
					"scoreDate" : "20160212",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "168"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "N:15 FERHATPASA MAHALLESI G30 SOKAK",
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "50233720978",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "CAKAR TASIMACILIK SULEYMAN CAKAR",
				"telephoneNumber" : "902166616061",
				"zipCode" : "34888",
				"postalTown" : "ATASEHIR"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00008871627900",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-6833225"
		},
		"companyDataFileId" : "EDMS-01-6833225",
		"creationDate" : ISODate("2016-02-12T14:22:42Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1366"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-10-20T17:37:58.802+0200",
					"localActivityCode" : "4719",
					"retainedScoreSource" : "528",
					"yearStarted" : "2015",
					"foundationDate" : "20150618",
					"stock" : {
						"value" : "154961",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"atRatingScore" : "6",
					"numberOfEmployees" : 4,
					"workingCapital" : {
						"value" : "2910",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-10-20T00:00:00.000+0200",
					"primaryGeographicArea" : "ALICANTE",
					"atRatingScoreType" : "D",
					"retainedScore" : "5.58",
					"netIncomeLoss" : {
						"value" : "2",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-10-20T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "3500",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "222209",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "5.58",
					"retainedScoreSourceName" : "AXESOR",
					"issuedCapital" : {
						"value" : "3500",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "8368926",
					"interpretedScoreSourceName" : "AXESOR",
					"nace" : "4719",
					"interpretedScoreSource" : "528",
					"netWorth" : {
						"value" : "2910",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "279652",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0007",
					"currency" : "EUR",
					"notationAgency" : "2",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20161020",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "528",
					"score" : "5.58"
				},
				"sourceId" : "528"
			},
			"identification" : {
				"addressLine" : "C/ GIJON, 150.",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "ESB54867676",
					"identifierName" : "NIF_ESP"
				},
				"primaryName" : "QUESADA MARKET SL %%",
				"telephoneNumber" : "964252153",
				"zipCode" : "03170",
				"postalTown" : "ROJALES"
			},
			"yearY1" : {
				"sourceId" : "528"
			},
			"yearY2" : {
				"sourceId" : "528"
			}
		},
		"easyNumber" : "00008423662700",
		"countryCode" : "ESP",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "528"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10445466"
		},
		"companyDataFileId" : "EDMS-01-10445466",
		"creationDate" : ISODate("2016-10-20T15:37:56Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db136f"),
		"inputData" : {
			"yearY" : {
				"financialStatement" : {
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "410000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "6727000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "6727000",
							"currency" : "USD",
							"currencyUnit" : 0
						}
					},
					"type" : "SC",
					"balanceSheet" : {
						"liabilities" : {
							"equityCapital" : {
								"value" : "1740000",
								"currency" : "USD",
								"currencyUnit" : 0
							},
							"totalEquityLiabilities" : {
								"value" : "4196000",
								"currency" : "USD",
								"currencyUnit" : 0
							}
						},
						"assets" : {
							"stock" : {
								"value" : "52000",
								"currency" : "USD",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "4196000",
								"currency" : "USD",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"nbOfEmployees" : 110,
					"financialStatementDate" : "20160000",
					"fiscalPeriodNbMonth" : 12,
					"currency" : "USD",
					"fiscalPeriod" : "AA",
					"exchangeRate" : "0.85193389"
				},
				"rsData" : {
					"paymentExperience" : "4",
					"localActivityCode" : "861",
					"localTotalEmployees" : 110,
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2005",
					"foundationDate" : "20050128",
					"stock" : {
						"value" : "52000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"numberOfEmployees" : 110,
					"workingCapital" : {
						"value" : "0",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"localFormeJuridique" : "119",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"nominalCapital" : {
						"value" : "1740000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "4196000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"localExpPaiemt" : "350",
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"alarmCode" : "94",
					"informationSupplierReference" : "221551",
					"nace" : "861",
					"netWorth" : {
						"value" : "1740000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "6727000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0099",
					"currency" : "USD",
					"exchangeRate" : "0.85193389",
					"retainedScore" : "0.765",
					"retainedScoreDate" : "2017-12-05T00:00:00.000+0100",
					"retainedScoreSource" : 996,
					"retainedScoreSourceName" : "Coface Internal Light Score",
					"interpretedScore" : "5",
					"interpretedScoreDate" : "2017-12-05T00:00:00.000+0100",
					"interpretedScoreSource" : 562,
					"interpretedScoreSourceName" : "ICON LatAm",
					"scoreIntegratedDate" : "2017-12-05T18:24:12.125+0100",
					"atRatingScore" : "6",
					"atRatingScoreType" : "D"
				},
				"evaluation" : {
					"scoreDate" : "20171205",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "562",
					"score" : "5"
				},
				"sourceId" : "562",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "KM 2 1/2 VIA QUININDE S/N Y MARGEN DERECHO SANTO DOMINGO",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "1791975790001",
					"identifierName" : "RUC_ECU"
				},
				"primaryName" : "MEDICAL CUBACENTER S.A.",
				"telephoneNumber" : "5932379 0385",
				"postalTown" : "SANTO DOMINGO DE LOS TSACHILAS"
			},
			"yearY1" : {
				"financialStatement" : {
					"nbOfEmployees" : 95,
					"financialStatementDate" : "20150000",
					"balanceSheet" : {
						"liabilities" : {
							"totalEquityLiabilities" : {
								"value" : "3118000",
								"currency" : "USD",
								"currencyUnit" : 0
							},
							"equityCapital" : {
								"value" : "200000",
								"currency" : "USD",
								"currencyUnit" : 0
							}
						},
						"assets" : {
							"stock" : {
								"value" : "888000",
								"currency" : "USD",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "3118000",
								"currency" : "USD",
								"currencyUnit" : 0
							}
						}
					},
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "13000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "4384000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "4384000",
							"currency" : "USD",
							"currencyUnit" : 0
						}
					},
					"fiscalPeriod" : "AA",
					"currencyUnit" : "0",
					"currency" : "USD",
					"fiscalPeriodNbMonth" : 12,
					"exchangeRate" : "0.85193389"
				},
				"sourceId" : "562"
			},
			"yearY2" : {
				"financialStatement" : {
					"financialStatementDate" : "20140000",
					"balanceSheet" : {
						"liabilities" : {
							"totalEquityLiabilities" : {
								"value" : "2279000",
								"currency" : "USD",
								"currencyUnit" : 0
							},
							"equityCapital" : {
								"value" : "223000",
								"currency" : "USD",
								"currencyUnit" : 0
							}
						},
						"assets" : {
							"stock" : {
								"value" : "73000",
								"currency" : "USD",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "2279000",
								"currency" : "USD",
								"currencyUnit" : 0
							}
						}
					},
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "49000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "3934000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "3934000",
							"currency" : "USD",
							"currencyUnit" : 0
						}
					},
					"fiscalPeriod" : "AA",
					"currencyUnit" : "0",
					"currency" : "USD",
					"fiscalPeriodNbMonth" : 12,
					"exchangeRate" : "0.85193389"
				},
				"sourceId" : "562"
			}
		},
		"easyNumber" : "00008409169100",
		"countryCode" : "ECU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "221551",
					"sourceIdType" : "IP",
					"code" : "562"
				},
				"contentNature" : "I1_LIGHTINQ",
				"supplyMode" : "REVISION",
				"businessLine" : "CREDIT_INS"
			},
			"receivedDataEDMSid" : "EDMS-01-16571692"
		},
		"companyDataFileId" : "CDF-5a26d6394edd021c1caeeb97",
		"creationDate" : ISODate("2017-12-05T17:24:09.316Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-237135278",
		"riskDataSnapshot" : {
			"potentialExposure" : {
				"politic" : {
					"currencyUnit" : "0",
					"value" : "0",
					"currency" : "EUR"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"limit" : {
					"currency" : "EUR",
					"value" : "76557",
					"currencyUnit" : "0"
				},
				"cgd" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				}
			},
			"externalExposure" : {
				"currency" : "EUR",
				"currencyUnit" : "0",
				"value" : "0"
			},
			"realExposure" : {
				"limit" : {
					"currency" : "EUR",
					"value" : "34025",
					"currencyUnit" : "0"
				},
				"politic" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"cgd" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				}
			},
			"claimSnapshot" : {
				"claimStep" : "01",
				"claimSeverity" : "1",
				"claimDate" : "20160920"
			},
			"underReviewRating" : 0,
			"pendingRequest" : 0
		},
		"lastUpdateDate" : ISODate("2017-12-05T17:24:16.619Z"),
		"cnyStatus" : "W",
		"blackList" : "0",
		"vigilance" : "0",
		"sensitiveFile" : 0,
		"activePolicy" : "0",
		"countryNotation" : "C",
		"surveillanceStatus" : "2",
		"groupDataSnapshot" : {
			"legalGroupMember" : "0",
			"gfrHead" : "0",
			"gucGroupMember" : "0",
			"frgGroupMember" : "0"
		},
		"outputData" : {
			"retainedAssessmentData" : {
				"yearY" : {
					"rsData" : {
						"nominalCapital" : {
							"value" : "1740000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"foundationDate" : "20050128",
						"workingCapital" : {
							"value" : "0",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"totalAssests" : {
							"value" : "4196000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"informationSupplierReference" : "221551",
						"currency" : "USD",
						"turnover" : {
							"value" : "6727000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"nbIdentifiers" : 1,
						"localActivityCode" : "861",
						"localExpPaiemt" : "350",
						"netIncomeLoss" : {
							"value" : "1",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"localFormeJuridique" : "119",
						"yearStarted" : "2005",
						"localTotalEmployees" : 110,
						"nace" : "861",
						"stock" : {
							"value" : "52000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"paymentExperience" : "4",
						"currencyUnit" : "0",
						"balanceSheetDate" : "2016",
						"numberOfEmployees" : 110,
						"netWorth" : {
							"value" : "1740000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"legalForm" : "0099",
						"exchangeRate" : "0.85193389",
						"alarmCode" : "94",
						"retainedScore" : "0.765",
						"retainedScoreDate" : "2017-12-05T00:00:00.000+0100",
						"retainedScoreSource" : 996,
						"retainedScoreSourceName" : "Coface Internal Light Score",
						"interpretedScore" : "5",
						"interpretedScoreDate" : "2017-12-05T00:00:00.000+0100",
						"interpretedScoreSource" : 562,
						"interpretedScoreSourceName" : "ICON LatAm",
						"scoreIntegratedDate" : "2017-12-05T18:24:12.125+0100",
						"atRatingScore" : "6",
						"atRatingScoreType" : "D"
					},
					"evaluation" : {
						"scoreOrigin" : "D_LGH",
						"score" : "0.765",
						"scoreDate" : "20171205",
						"scoreType" : "D",
						"scoreSourceId" : "996"
					},
					"roadReportStatus" : "1"
				},
				"yearY1" : {
					"rsData" : {
						"currency" : "USD",
						"legalForm" : "0099",
						"interpretedScore" : "3",
						"atRatingScoreType" : "D",
						"nominalCapital" : {
							"value" : "200000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"numberOfEmployees" : 95,
						"localExpPaiemt" : "350",
						"exchangeRate" : "0.90694330",
						"notationAgency" : "7",
						"nace" : "861",
						"retainedScoreSource" : "996",
						"retainedScoreDate" : "2016-11-17T00:00:00.000+0100",
						"netWorth" : {
							"value" : "200000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "-328000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"informationSupplierReference" : "221551",
						"atRatingScore" : "4",
						"alarmCode" : "94",
						"localTotalEmployees" : 95,
						"turnover" : {
							"value" : "4486000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"yearStarted" : "2005",
						"totalAssests" : {
							"value" : "3118000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"nbIdentifiers" : 1,
						"netIncomeLoss" : {
							"value" : "1",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"localActivityCode" : "861",
						"paymentExperience" : "4",
						"stock" : {
							"value" : "887000",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"scoreIntegratedDate" : "2016-11-17T22:22:56.587+0100",
						"balanceSheetDate" : "2015",
						"interpretedScoreDate" : "2016-11-17T00:00:00.000+0100",
						"localFormeJuridique" : "119",
						"interpretedScoreSourceName" : "ICON LatAm",
						"foundationDate" : "20050128",
						"retainedScoreSourceName" : "Coface Internal Light Score",
						"retainedScore" : "2.840",
						"currencyUnit" : "0",
						"interpretedScoreSource" : "562"
					},
					"sourceId" : "562",
					"roadReportStatus" : "1",
					"evaluation" : {
						"scoreSourceId" : "562"
					}
				},
				"identification" : {
					"addressLine" : "KM 2 1/2 VIA QUININDE S/N Y MARGEN DERECHO SANTO DOMINGO",
					"legalIdentifier" : {
						"identifierCategory" : "L",
						"identifierValue" : "1791975790001",
						"identifierName" : "RUC_ECU"
					},
					"primaryName" : "MEDICAL CUBACENTER S.A.",
					"telephoneNumber" : "5932379 0385",
					"postalTown" : "SANTO DOMINGO DE LOS TSACHILAS"
				}
			},
			"computedBy" : {
				"retainedEDMSIdY1" : "EDMS-01-10828047",
				"retainedEDMSIdY" : "EDMS-01-16571692",
				"idCall" : "00008409169100-TRAC-1512494652076"
			},
			"retainedDra" : {
				"idDra" : "AUTO-01-99333717",
				"draType" : "D",
				"dra" : "6",
				"expectedDraType" : "D"
			}
		}
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1376"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2015-05-14T18:03:01.123+0200",
					"localActivityCode" : "5999",
					"retainedScoreSource" : "560",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "1969",
					"foundationDate" : "19690101",
					"atRatingScore" : "4",
					"numberOfEmployees" : 3,
					"retainedScoreDate" : "2015-05-14T00:00:00.000+0200",
					"primaryGeographicArea" : "FL",
					"retainedScore" : "18",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2015-05-14T00:00:00.000+0200",
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "18",
					"retainedScoreSourceName" : "EXPERIAN US",
					"bankruptcyPrediction" : "2",
					"informationSupplierReference" : "743827638",
					"interpretedScoreSourceName" : "EXPERIAN US",
					"nace" : "4775",
					"interpretedScoreSource" : "560",
					"turnover" : {
						"value" : "693000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0099",
					"currency" : "USD",
					"notationAgency" : "BB-",
					"exchangeRate" : "0.92770403"
				},
				"evaluation" : {
					"scoreDate" : "20150514",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "560",
					"score" : "18"
				},
				"sourceId" : "560"
			},
			"identification" : {
				"addressLine" : "10680 NW 37TH TER",
				"primaryName" : "BINCA, LLC",
				"telephoneNumber" : "305-470-2426",
				"zipCode" : "33178-4207",
				"postalTown" : "DORAL"
			},
			"yearY1" : {
				"sourceId" : "560"
			},
			"yearY2" : {
				"sourceId" : "560"
			}
		},
		"easyNumber" : "00008404164600",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "560"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-2486628"
		},
		"companyDataFileId" : "EDMS-01-2486628",
		"creationDate" : ISODate("2015-05-14T16:02:59Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1380"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-06-20T09:00:34.259+0200",
					"localActivityCode" : "4643",
					"retainedScoreSource" : "158",
					"yearStarted" : "2015",
					"foundationDate" : "20150224",
					"atRatingScore" : "7",
					"numberOfEmployees" : 1,
					"retainedScoreDate" : "2017-06-20T00:00:00.000+0200",
					"localFormeJuridique" : "21",
					"atRatingScoreType" : "D",
					"retainedScore" : "350",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-06-20T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "25000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"localExpPaiemt" : "1",
					"balanceSheetDate" : "2017",
					"currencyUnit" : "0",
					"interpretedScore" : "350",
					"retainedScoreSourceName" : "AKCI  ALLGEMEINE KREDIT COFACE INFORMATIONS GMBH",
					"informationSupplierReference" : "6081300",
					"interpretedScoreSourceName" : "CS CONNECT GMBH & CO. KG",
					"nace" : "4643",
					"interpretedScoreSource" : "405",
					"turnover" : {
						"value" : "500000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0009",
					"currency" : "EUR",
					"notationAgency" : "4",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170620",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "405",
					"score" : "350"
				},
				"sourceId" : "405"
			},
			"identification" : {
				"addressLine" : "Benzstr. 10",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "HRB 9058 61462",
					"identifierName" : "HRN_DEU"
				},
				"primaryName" : "HPG Handel GmbH",
				"telephoneNumber" : "08531/910990",
				"zipCode" : "65779",
				"faxNumber" : "08531/9109926",
				"postalTown" : "Kelkheim (Taunus)"
			},
			"yearY1" : {
				"sourceId" : "405"
			},
			"yearY2" : {
				"sourceId" : "405"
			}
		},
		"easyNumber" : "00008357679300",
		"countryCode" : "DEU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "405"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13914110"
		},
		"companyDataFileId" : "EDMS-01-13914110",
		"creationDate" : ISODate("2017-06-20T07:00:32Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1383"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"localActivityCode" : "2329",
					"yearStarted" : "2007",
					"foundationDate" : "20070101",
					"numberOfEmployees" : 11,
					"primaryGeographicArea" : "NY",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"informationSupplierReference" : "079467371",
					"nace" : "1413",
					"turnover" : {
						"value" : "1373230",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0016",
					"currency" : "USD",
					"exchangeRate" : "0.84486500",
					"retainedScore" : "1449",
					"retainedScoreDate" : "2017-10-09T00:00:00.000+0200",
					"retainedScoreSource" : 447,
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"interpretedScore" : "1449",
					"interpretedScoreDate" : "2017-10-09T00:00:00.000+0200",
					"interpretedScoreSource" : 447,
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"scoreIntegratedDate" : "2018-01-03T16:53:25.495+0100",
					"atRatingScore" : "6",
					"atRatingScoreType" : "D"
				},
				"evaluation" : {
					"scoreDate" : "20171009",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1449"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "195 CHRYSTIE ST RM 900",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "079467371",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Linder New York, LLC",
				"telephoneNumber" : "(646) 678-5819",
				"url" : "www.lindernewyork.com",
				"zipCode" : "10002",
				"postalTown" : "NEW YORK"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00008338176200",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "ORDER",
				"businessLine" : "CREDIT_INS",
				"source" : {
					"reportId" : "180103A59967",
					"sourceIdType" : "IP",
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-16913308"
		},
		"companyDataFileId" : "CDF-5a4cfc725cc9d82a9e11297d",
		"creationDate" : ISODate("2018-01-03T15:53:22.706Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-247954227",
		"riskDataSnapshot" : {
			"potentialExposure" : {
				"politic" : {
					"currencyUnit" : "0",
					"value" : "0",
					"currency" : "EUR"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"limit" : {
					"currency" : "EUR",
					"value" : "0",
					"currencyUnit" : "0"
				},
				"cgd" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				}
			},
			"externalExposure" : {
				"currency" : "EUR",
				"currencyUnit" : "0",
				"value" : "0"
			},
			"realExposure" : {
				"limit" : {
					"currency" : "EUR",
					"value" : "10000",
					"currencyUnit" : "0"
				},
				"politic" : {
					"currency" : "EUR",
					"currencyUnit" : "0",
					"value" : "0"
				},
				"opinion" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				},
				"cgd" : {
					"currencyUnit" : "0",
					"currency" : "EUR",
					"value" : "0"
				}
			},
			"underReviewRating" : 0,
			"claimSnapshot" : {
				"claimSeverity" : "0",
				"claimDate" : "20150305"
			},
			"pendingRequest" : 0
		},
		"lastUpdateDate" : ISODate("2018-01-03T15:53:26.057Z"),
		"cnyStatus" : "W",
		"blackList" : "0",
		"vigilance" : "0",
		"sensitiveFile" : 0,
		"activePolicy" : "0",
		"countryNotation" : "A2",
		"surveillanceStatus" : "1",
		"groupDataSnapshot" : {
			"legalGroupMember" : "0",
			"gfrHead" : "0",
			"gucGroupMember" : "0",
			"frgGroupMember" : "0"
		},
		"outputData" : {
			"retainedAssessmentData" : {
				"yearY" : {
					"rsData" : {
						"locationStatus" : "SL",
						"foundationDate" : "20070101",
						"informationSupplierReference" : "079467371",
						"currency" : "USD",
						"turnover" : {
							"value" : "1373230",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"nbIdentifiers" : 1,
						"localActivityCode" : "2329",
						"primaryGeographicArea" : "NY",
						"netIncomeLoss" : {
							"value" : "3",
							"currency" : "USD",
							"currencyUnit" : 0
						},
						"yearStarted" : "2007",
						"nace" : "1413",
						"paymentExperience" : "4",
						"currencyUnit" : "0",
						"numberOfEmployees" : 11,
						"legalForm" : "0016",
						"exchangeRate" : "0.84486500",
						"retainedScore" : "1449",
						"retainedScoreDate" : "2017-10-09T00:00:00.000+0200",
						"retainedScoreSource" : 447,
						"retainedScoreSourceName" : "Dun & Bradstreet",
						"interpretedScore" : "1449",
						"interpretedScoreDate" : "2017-10-09T00:00:00.000+0200",
						"interpretedScoreSource" : 447,
						"interpretedScoreSourceName" : "Dun & Bradstreet",
						"scoreIntegratedDate" : "2018-01-03T16:53:25.495+0100",
						"atRatingScore" : "6",
						"atRatingScoreType" : "D"
					},
					"evaluation" : {
						"scoreOrigin" : "D_STD",
						"score" : "1449",
						"scoreDate" : "20171009",
						"scoreType" : "D",
						"scoreSourceId" : "447"
					},
					"roadReportStatus" : "0"
				},
				"identification" : {
					"addressLine" : "195 CHRYSTIE ST RM 900",
					"legalIdentifier" : {
						"identifierCategory" : "L",
						"identifierValue" : "079467371",
						"identifierName" : "DUN_USA"
					},
					"primaryName" : "Linder New York, LLC",
					"telephoneNumber" : "(646) 678-5819",
					"url" : "www.lindernewyork.com",
					"zipCode" : "10002",
					"postalTown" : "NEW YORK"
				}
			},
			"retainedDra" : {
				"idDra" : "AUTO-01-102055215",
				"draType" : "D",
				"dra" : "6",
				"expectedDraType" : "D"
			},
			"computedBy" : {
				"retainedEDMSIdY" : "EDMS-01-16913308",
				"idCall" : "00008338176200-TRAC-1514994805452"
			}
		}
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1396"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2014-09-18T16:26:54.152+0200",
					"retainedScoreSource" : "63",
					"yearStarted" : "0000",
					"foundationDate" : "00000101",
					"atRatingScore" : "2",
					"retainedScoreDate" : "2014-09-18T00:00:00.000+0200",
					"retainedScore" : "12.30",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"currencyUnit" : "0",
					"retainedScoreSourceName" : "COFACE SA",
					"bankruptcyPrediction" : "10",
					"informationSupplierReference" : "6166924",
					"interpretedScoreSourceName" : "BEIJING GRAND DATA BANK CO. LTD",
					"interpretedScoreSource" : "558",
					"currency" : "CNY",
					"notationAgency" : "B-"
				},
				"evaluation" : {
					"scoreDate" : "20140918",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "558",
					"score" : "2"
				},
				"sourceId" : "558"
			},
			"identification" : {
				"addressLine" : "1F BUILDING 456 FUTE ROAD,WAIGAOQIA O FREE TRADE ZONE",
				"primaryName" : "EUROP ASIA INTERNARIONAL TRADING & :LOGISTIC",
				"zipCode" : "200131",
				"postalTown" : "SHANGHAI"
			},
			"yearY1" : {
				"sourceId" : "558"
			},
			"yearY2" : {
				"sourceId" : "558"
			}
		},
		"easyNumber" : "00008177197300",
		"countryCode" : "CHN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "558"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-224887764"
		},
		"companyDataFileId" : "01-EDMS-224887764",
		"creationDate" : ISODate("2014-09-18T08:43:34Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db13a4"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2014-07-10T23:26:58.845+0200",
					"localActivityCode" : "C040700",
					"retainedScoreSource" : "481",
					"yearStarted" : "2014",
					"foundationDate" : "20140101",
					"atRatingScore" : "5",
					"retainedScoreDate" : "2014-07-10T00:00:00.000+02:00",
					"primaryGeographicArea" : "PB",
					"retainedScore" : "17",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "BRL",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2014-07-10T00:00:00.000+02:00",
					"currencyUnit" : "0",
					"interpretedScore" : "17",
					"retainedScoreSourceName" : "SERASA EXPERIAN",
					"bankruptcyPrediction" : "1.3",
					"informationSupplierReference" : "19603834",
					"interpretedScoreSourceName" : "SERASA EXPERIAN",
					"nace" : "4722",
					"interpretedScoreSource" : "481",
					"currency" : "BRL",
					"notationAgency" : "BB-",
					"exchangeRate" : "0.32907985"
				},
				"evaluation" : {
					"scoreDate" : "20140710",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "481",
					"score" : "17"
				},
				"sourceId" : "481"
			},
			"identification" : {
				"addressLine" : "AV SEN RUI CARNEIRO 180 TER, MANAIRA",
				"primaryName" : "EMPORIO DAS CARNES EIRELI EPP EMPORIO DAS CARNES",
				"telephoneNumber" : "000-000000000",
				"zipCode" : "058039181",
				"faxNumber" : "0000-000000000",
				"postalTown" : "JOAO PESSOA"
			},
			"yearY1" : {
				"sourceId" : "481"
			},
			"yearY2" : {
				"sourceId" : "481"
			}
		},
		"easyNumber" : "00008143195700",
		"countryCode" : "BRA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "481"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-218338925"
		},
		"companyDataFileId" : "01-EDMS-218338925",
		"creationDate" : ISODate("2014-07-10T21:26:56Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db13a6"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-06-07T21:34:48.326+0200",
					"localActivityCode" : "4291",
					"retainedScoreSource" : "87",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2012",
					"foundationDate" : "20110922",
					"stock" : {
						"value" : "0",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"atRatingScore" : "4",
					"numberOfEmployees" : 1,
					"workingCapital" : {
						"value" : "63924",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-06-06T00:00:00.000+0200",
					"primaryGeographicArea" : "LT",
					"localFormeJuridique" : "SR",
					"atRatingScoreType" : "D",
					"retainedScore" : "1965",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-06-06T00:00:00.000+0200",
					"nbIdentifiers" : 3,
					"totalAssests" : {
						"value" : "158957",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"localExpPaiemt" : "0",
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "1965",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "LT186296",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "4291",
					"interpretedScoreSource" : "87",
					"netWorth" : {
						"value" : "76010",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "68720",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0006",
					"currency" : "EUR",
					"notationAgency" : "3",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20160606",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "87",
					"score" : "1965"
				},
				"sourceId" : "87"
			},
			"identification" : {
				"addressLine" : "VIA DELLA STAZIONE 244",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "02623730591",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "LT186296",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "02623730591",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "\"PARISELLA GINO S.R.L.\"",
				"zipCode" : "04022",
				"postalTown" : "FONDI"
			},
			"yearY1" : {
				"sourceId" : "87"
			},
			"yearY2" : {
				"sourceId" : "87"
			}
		},
		"easyNumber" : "00008142190800",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8440954"
		},
		"companyDataFileId" : "EDMS-01-8440954",
		"creationDate" : ISODate("2016-06-07T19:34:43Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1334"),
		"inputData" : {
			"yearY" : {
				"financialStatement" : {
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "7435",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "54748",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netResultBeforeTax" : {
							"value" : "7435",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "644361",
							"currency" : "EUR",
							"currencyUnit" : 0
						}
					},
					"balanceSheet" : {
						"liabilities" : {
							"equityCapital" : {
								"value" : "46465",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalShareHolderEquity" : {
								"value" : "46465",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						},
						"assets" : {
							"stock" : {
								"value" : "15370",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "339733",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"financialStatementDate" : "20161231",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000",
					"sizeCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					}
				},
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-06-18T21:51:12.368+0200",
					"localActivityCode" : "4673",
					"retainedScoreSource" : "87",
					"localTotalEmployees" : 2,
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2012",
					"foundationDate" : "20120919",
					"stock" : {
						"value" : "15370",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"atRatingScore" : "4",
					"workingCapital" : {
						"value" : "54748",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-06-16T00:00:00.000+0200",
					"primaryGeographicArea" : "BO",
					"localFormeJuridique" : "SU",
					"atRatingScoreType" : "D",
					"retainedScore" : "2012",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-06-16T00:00:00.000+0200",
					"nbIdentifiers" : 3,
					"totalAssests" : {
						"value" : "339733",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"localExpPaiemt" : "0",
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"interpretedScore" : "2012",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "BO502661",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "4673",
					"interpretedScoreSource" : "87",
					"netWorth" : {
						"value" : "46465",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "644361",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0006",
					"currency" : "EUR",
					"notationAgency" : "5",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170616",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "87",
					"score" : "2012"
				},
				"sourceId" : "87",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "VIA DAL LUZZO 6/C",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "03235061201",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "BO502661",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "03235061201",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "CARTARREDO DESIGN S.R.L.",
				"telephoneNumber" : "051/232830",
				"zipCode" : "40125",
				"postalTown" : "BOLOGNA"
			},
			"yearY1" : {
				"sourceId" : "87"
			},
			"yearY2" : {
				"sourceId" : "87"
			}
		},
		"easyNumber" : "00008925117500",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13879109"
		},
		"companyDataFileId" : "EDMS-01-13879109",
		"creationDate" : ISODate("2017-06-18T19:51:10Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1336"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-03-22T16:50:31.046+0100",
					"localActivityCode" : "1522",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_CLASSICALINQ",
					"yearStarted" : "2013",
					"foundationDate" : "20131112",
					"stock" : {
						"value" : "791738",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"atRatingScore" : "3",
					"numberOfEmployees" : 15,
					"workingCapital" : {
						"value" : "88214",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-03-22T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "226",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-03-22T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "100000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "1517429",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "226",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"issuedCapital" : {
						"value" : "32500",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "4120",
					"interpretedScoreSource" : "210",
					"netWorth" : {
						"value" : "195338",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "1642562",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"legalForm" : "0003",
					"currency" : "TRY",
					"notationAgency" : "2",
					"exchangeRate" : "0.30638953"
				},
				"evaluation" : {
					"scoreDate" : "20160322",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "210",
					"score" : "226"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "DEVECIOGLU APARTMANI NO.5/3 19 MAYIS MAHALLESI BAYAR CADDESI DILARA SOKAK",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "889851",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "1070314458",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "AYAPI TICARET TAAHHUT INSAAT SANAYI LIMITED SIRKETI",
				"telephoneNumber" : "902163721020",
				"zipCode" : "34710",
				"faxNumber" : "902163721030",
				"postalTown" : "KADIKOY"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00008921112900",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-7370408"
		},
		"companyDataFileId" : "EDMS-01-7370408",
		"creationDate" : ISODate("2016-03-22T15:50:28Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db135d"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2015-08-13T16:16:40.564+0200",
					"localActivityCode" : "4941",
					"retainedScoreSource" : "494",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2015",
					"foundationDate" : "20150101",
					"atRatingScore" : "5",
					"retainedScoreDate" : "2015-08-13T00:00:00.000+0200",
					"retainedScore" : "5",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "RON",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2015-08-13T00:00:00.000+0200",
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "5",
					"retainedScoreSourceName" : "COFACE ROMANIA CREDIT MANAGEMENT SERVICES",
					"bankruptcyPrediction" : "1.3",
					"informationSupplierReference" : "106490769",
					"interpretedScoreSourceName" : "COFACE ROMANIA CREDIT MANAGEMENT SERVICES",
					"nace" : "4941",
					"interpretedScoreSource" : "494",
					"legalForm" : "0003",
					"currency" : "RON",
					"notationAgency" : "BB-",
					"exchangeRate" : "0.22527001"
				},
				"evaluation" : {
					"scoreDate" : "20150813",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "494",
					"score" : "5"
				},
				"sourceId" : "494"
			},
			"identification" : {
				"addressLine" : "Dandoaia 32",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "34745205",
					"identifierName" : "VAT_ROU"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "J33/612/2015",
					"identifierName" : "RGN_ROU"
				},
				"primaryName" : "DAMPI SPEDITION SRL",
				"zipCode" : "527315",
				"postalTown" : "Iacobeni, jud Suceava"
			},
			"yearY1" : {
				"sourceId" : "494"
			},
			"yearY2" : {
				"sourceId" : "494"
			}
		},
		"easyNumber" : "00008439166100",
		"countryCode" : "ROU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "494"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-4035893"
		},
		"companyDataFileId" : "EDMS-01-4035893",
		"creationDate" : ISODate("2015-08-13T14:16:38Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db135f"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-05-31T04:37:33.849+0200",
					"localActivityCode" : "2042",
					"retainedScoreSource" : "528",
					"yearStarted" : "2015",
					"foundationDate" : "20150715",
					"atRatingScore" : "5",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2017-05-31T00:00:00.000+0200",
					"primaryGeographicArea" : "TOLEDO",
					"atRatingScoreType" : "D",
					"retainedScore" : "9.53",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-05-31T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "3000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 1,
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "9.53",
					"alarmCode" : "86",
					"retainedScoreSourceName" : "AXESOR",
					"issuedCapital" : {
						"value" : "3000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "8378142",
					"interpretedScoreSourceName" : "AXESOR",
					"nace" : "2042",
					"interpretedScoreSource" : "528",
					"legalForm" : "0007",
					"currency" : "EUR",
					"notationAgency" : "2",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170531",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "528",
					"score" : "9.53"
				},
				"sourceId" : "528"
			},
			"identification" : {
				"addressLine" : "C/ BRONCE, 47.",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "ESB87336145",
					"identifierName" : "NIF_ESP"
				},
				"primaryName" : "PERFUMS&BEAUTY INNOVA SL",
				"zipCode" : "45222",
				"postalTown" : "BOROX"
			},
			"yearY1" : {
				"sourceId" : "528"
			},
			"yearY2" : {
				"sourceId" : "528"
			}
		},
		"easyNumber" : "00008436666400",
		"countryCode" : "ESP",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "528"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-13582160"
		},
		"companyDataFileId" : "EDMS-01-13582160",
		"creationDate" : ISODate("2017-05-31T02:37:32Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1367"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-11-10T14:43:44.810+0100",
					"localActivityCode" : "3523",
					"retainedScoreSource" : "210",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2000",
					"foundationDate" : "20001218",
					"atRatingScore" : "4",
					"retainedScoreDate" : "2016-11-10T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "389",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-11-10T00:00:00.000+0100",
					"nominalCapital" : {
						"value" : "750000",
						"currency" : "TRY",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 2,
					"currencyUnit" : "0",
					"interpretedScore" : "389",
					"retainedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"interpretedScoreSourceName" : "FINAR ENFORMASYON VE DANIMANLIK HIZMETLERI ANOS",
					"nace" : "2830",
					"interpretedScoreSource" : "210",
					"legalForm" : "0003",
					"currency" : "TRY",
					"notationAgency" : "4",
					"exchangeRate" : "0.29488335"
				},
				"evaluation" : {
					"scoreDate" : "20161110",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "210",
					"score" : "389"
				},
				"sourceId" : "210"
			},
			"identification" : {
				"addressLine" : "NO:18 29 EKIM MAHALLESI BALKAN CADDESI",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "3955",
					"identifierName" : "RGN_TUR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "4930211941",
					"identifierName" : "VAT_TUR"
				},
				"primaryName" : "KALYON FILTRE VE SULAMA SISTEMLERI INSAAT TURIZM GIDA SANAYI VE TICARET LIMITED SIRKETI",
				"telephoneNumber" : "902322576180",
				"faxNumber" : "902328539693",
				"postalTown" : "YAZIBASI, TORBALI"
			},
			"yearY1" : {
				"sourceId" : "210"
			},
			"yearY2" : {
				"sourceId" : "210"
			}
		},
		"easyNumber" : "00008423167700",
		"countryCode" : "TUR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "210"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-10722585"
		},
		"companyDataFileId" : "EDMS-01-10722585",
		"creationDate" : ISODate("2016-11-10T13:43:42Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db136b"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2015-06-25T17:04:28.022+0200",
					"localActivityCode" : "4634",
					"retainedScoreSource" : "447",
					"yearStarted" : "2011",
					"foundationDate" : "20110101",
					"atRatingScore" : "5",
					"numberOfEmployees" : 3,
					"retainedScoreDate" : "2015-06-25T00:00:00.000+0200",
					"primaryGeographicArea" : "BC",
					"retainedScore" : "1415",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "CAD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2015-06-25T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"currencyUnit" : "0",
					"interpretedScore" : "1415",
					"retainedScoreSourceName" : "THE D&B CORPORATION",
					"bankruptcyPrediction" : "1.3",
					"informationSupplierReference" : "204409549",
					"interpretedScoreSourceName" : "THE D&B CORPORATION",
					"nace" : "4634",
					"interpretedScoreSource" : "447",
					"legalForm" : "0002",
					"currency" : "CAD",
					"notationAgency" : "BB-",
					"exchangeRate" : "0.73705275"
				},
				"evaluation" : {
					"scoreDate" : "20150625",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1415"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "137 Aspenwood Dr",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "204409549",
					"identifierName" : "DUN_CAN"
				},
				"primaryName" : "Foundry Brands Inc",
				"telephoneNumber" : "604 240-6478",
				"zipCode" : "V3H 4V7",
				"postalTown" : "Port Moody"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00008419663100",
		"countryCode" : "CAN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-3169473"
		},
		"companyDataFileId" : "EDMS-01-3169473",
		"DefaultBlock" : {
			"DBPaydex" : "999",
			"ControlYear" : "2011",
			"ReportNotUpdated" : "1",
			"FinancialStressScore" : "1415"
		},
		"creationDate" : ISODate("2015-06-25T15:04:26Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1371"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2015-06-04T06:19:53.993+0200",
					"retainedScoreSource" : "63",
					"yearStarted" : "2002",
					"foundationDate" : "20020101",
					"atRatingScore" : "3",
					"numberOfEmployees" : 25,
					"retainedScoreDate" : "2015-06-04T00:00:00.000+0200",
					"retainedScore" : "5.59",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "AED",
						"currencyUnit" : 6
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "6",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE SA",
					"bankruptcyPrediction" : "4",
					"interpretedScoreSourceName" : "INFOCREDIT",
					"nace" : "7022",
					"interpretedScoreSource" : "68",
					"turnover" : {
						"value" : "5",
						"currency" : "AED",
						"currencyUnit" : 6
					},
					"currency" : "AED",
					"notationAgency" : "B+",
					"exchangeRate" : "0.24384098"
				},
				"evaluation" : {
					"scoreDate" : "20150604",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "68",
					"score" : "NA"
				},
				"sourceId" : "68"
			},
			"identification" : {
				"addressLine" : "Office No.104, 1st Floor, NBAD Bank Bldg, Near Royal Clinic, Corniche Street, Al Qawasim Corniche",
				"primaryName" : "NEPTUNE CONSTRUCTION",
				"telephoneNumber" : "+971-7-2334011",
				"zipCode" : "529",
				"email" : "neptune_construction@yahoo.com",
				"faxNumber" : "+971-7-2334211",
				"postalTown" : "RAS AL KHAIMAH"
			},
			"yearY1" : {
				"sourceId" : "68"
			},
			"yearY2" : {
				"sourceId" : "68"
			}
		},
		"easyNumber" : "00008407664300",
		"countryCode" : "AR5",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "68"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-2802416"
		},
		"companyDataFileId" : "EDMS-01-2802416",
		"creationDate" : ISODate("2015-06-04T04:19:48Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1377"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-10-12T06:37:51.819+0200",
					"localActivityCode" : "4799",
					"retainedScoreSource" : "63",
					"yearStarted" : "1963",
					"foundationDate" : "19630701",
					"atRatingScore" : "4",
					"numberOfEmployees" : 50,
					"retainedScoreDate" : "2017-10-12T00:00:00.000+0200",
					"atRatingScoreType" : "E",
					"retainedScore" : "3.567",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "AED",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"alarmCode" : "45",
					"retainedScoreSourceName" : "COFACE SA",
					"interpretedScoreSourceName" : "INTERNATIONAL COMPANY PROLIFE",
					"language2" : "en",
					"nace" : "4799",
					"interpretedScoreSource" : "139",
					"turnover" : {
						"value" : "50000000",
						"currency" : "AED",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "AED",
					"exchangeRate" : "0.22852143"
				},
				"evaluation" : {
					"scoreDate" : "20171012",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "139",
					"score" : "n/a"
				},
				"sourceId" : "139"
			},
			"identification" : {
				"addressLine2" : "Shop No.3,Opposite Down Town Hotel,Ayal Nasir, Deira,",
				"primaryName" : "FAKHRUDDIN GENERAL TRADING CO. (LLC)",
				"telephoneNumber" : "(971 4) 226 7172",
				"zipCode" : "1299",
				"faxNumber" : "(971 4) 235 0027",
				"postalTown2" : "Dubai"
			},
			"yearY1" : {
				"sourceId" : "139"
			},
			"yearY2" : {
				"sourceId" : "139"
			}
		},
		"easyNumber" : "00009010104000",
		"countryCode" : "AR3",
		"builtFrom" : {
			"supply" : {
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "ORDER",
				"businessLine" : "CREDIT_INS",
				"source" : {
					"sourceIdType" : "IP",
					"code" : "139"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-15763497"
		},
		"companyDataFileId" : "CDF-59def19d4edd0249673a19ee",
		"creationDate" : ISODate("2017-10-12T04:37:49.810Z"),
		"jsonSchemaVersion" : "1.0",
		"lastUpdateDate" : ISODate("2017-10-12T04:37:52.183Z"),
		"cnyStatus" : "W",
		"businessFollowUpId" : "BUSI-01-228982814"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1389"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2015-11-10T20:24:58.026+0100",
					"localActivityCode" : "5999",
					"retainedScoreSource" : "560",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "2002",
					"foundationDate" : "20020101",
					"atRatingScore" : "4",
					"numberOfEmployees" : 6,
					"retainedScoreDate" : "2015-11-10T00:00:00.000+0100",
					"primaryGeographicArea" : "NY",
					"retainedScore" : "16",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2015-11-10T00:00:00.000+0100",
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"interpretedScore" : "16",
					"retainedScoreSourceName" : "EXPERIAN US",
					"bankruptcyPrediction" : "2",
					"informationSupplierReference" : "952637508",
					"interpretedScoreSourceName" : "EXPERIAN US",
					"nace" : "4775",
					"interpretedScoreSource" : "560",
					"turnover" : {
						"value" : "1387000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "BB-",
					"exchangeRate" : "0.89006846"
				},
				"evaluation" : {
					"scoreDate" : "20151110",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "560",
					"score" : "16"
				},
				"sourceId" : "560"
			},
			"identification" : {
				"addressLine" : "460 W 24TH ST APT 1F",
				"primaryName" : "KEVYN AUCOIN BEAUTY, INC.",
				"telephoneNumber" : "212-627-2600",
				"zipCode" : "10011-1366",
				"postalTown" : "NEW YORK"
			},
			"yearY1" : {
				"sourceId" : "560"
			},
			"yearY2" : {
				"sourceId" : "560"
			}
		},
		"easyNumber" : "00008311678900",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "560"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-5432464"
		},
		"companyDataFileId" : "EDMS-01-5432464",
		"creationDate" : ISODate("2015-11-10T19:24:56Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db138e"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2014-11-07T10:22:00.633+0100",
					"retainedScoreSource" : "502",
					"yearStarted" : "2010",
					"foundationDate" : "20100101",
					"stock" : {
						"value" : "2",
						"currency" : "ZAR",
						"currencyUnit" : 6
					},
					"atRatingScore" : "6",
					"numberOfEmployees" : 15,
					"retainedScoreDate" : "2014-11-07T00:00:00.000+01:00",
					"primaryGeographicArea" : "GAUTENG",
					"turnoverType" : "EST",
					"retainedScore" : "2",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "ZAR",
						"currencyUnit" : 6
					},
					"interpretedScoreDate" : "2014-11-07T00:00:00.000+01:00",
					"totalAssests" : {
						"value" : "6",
						"currency" : "ZAR",
						"currencyUnit" : 6
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "6",
					"interpretedScore" : "2",
					"retainedScoreSourceName" : "COFACE SOUTH AFRICA",
					"bankruptcyPrediction" : "0.7",
					"interpretedScoreSourceName" : "COFACE SOUTH AFRICA",
					"interpretedScoreSource" : "502",
					"netWorth" : {
						"value" : "2",
						"currency" : "ZAR",
						"currencyUnit" : 6
					},
					"turnover" : {
						"value" : "10",
						"currency" : "ZAR",
						"currencyUnit" : 6
					},
					"currency" : "ZAR",
					"notationAgency" : "BB+",
					"exchangeRate" : "0.07129300"
				},
				"evaluation" : {
					"scoreDate" : "20141107",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "502",
					"score" : "2"
				},
				"sourceId" : "502"
			},
			"identification" : {
				"addressLine" : "UNIT 3 LENCHEN PARK, MAGIEL STREET, HENNOPSPARK,",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "2010/014130/07",
					"identifierName" : "RGN_ZAF"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "S",
					"identifierValue" : "4200256834",
					"identifierName" : "VAT_ZAF"
				},
				"primaryName" : "METRISTAR PTY LTD",
				"telephoneNumber" : "012 653 0607",
				"zipCode" : "0046",
				"faxNumber" : "012 653 2901",
				"postalTown" : "CENTURION"
			},
			"yearY1" : {
				"sourceId" : "502"
			},
			"yearY2" : {
				"sourceId" : "502"
			}
		},
		"easyNumber" : "00008206184400",
		"countryCode" : "ZAF",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "502"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-230003477"
		},
		"companyDataFileId" : "01-EDMS-230003477",
		"creationDate" : ISODate("2014-11-07T09:21:55Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1399"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-04-05T08:56:00.146+0200",
					"localActivityCode" : "5229",
					"retainedScoreSource" : "435",
					"deliveryTypeCode" : "I1_LIGHTINQ",
					"yearStarted" : "1999",
					"foundationDate" : "19990101",
					"atRatingScore" : "5",
					"retainedScoreDate" : "2017-04-05T00:00:00.000+0200",
					"localFormeJuridique" : "100",
					"atRatingScoreType" : "D",
					"retainedScore" : "5",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "PLN",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-04-05T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"localExpPaiemt" : "1",
					"currencyUnit" : "0",
					"interpretedScore" : "5",
					"retainedScoreSourceName" : "COFACE POLAND CREDIT MANAGEMENT SERVICES",
					"informationSupplierReference" : "100241920",
					"interpretedScoreSourceName" : "COFACE POLAND CREDIT MANAGEMENT SERVICES",
					"nace" : "5229",
					"interpretedScoreSource" : "435",
					"legalForm" : "0001",
					"currency" : "PLN",
					"notationAgency" : "3",
					"exchangeRate" : "0.23325791"
				},
				"evaluation" : {
					"scoreDate" : "20170405",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "435",
					"score" : "5"
				},
				"sourceId" : "435",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "ul. Solinskiego 9",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "5251456869",
					"identifierName" : "VAT_POL"
				},
				"primaryName" : "NATA-2 Piotr Zdrojek",
				"telephoneNumber" : "48226193053",
				"zipCode" : "03-599",
				"faxNumber" : "48226789297",
				"postalTown" : "Warszawa"
			},
			"yearY1" : {
				"sourceId" : "435"
			},
			"yearY2" : {
				"sourceId" : "435"
			}
		},
		"easyNumber" : "00008173197700",
		"countryCode" : "POL",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "435"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12807232"
		},
		"companyDataFileId" : "EDMS-01-12807232",
		"creationDate" : ISODate("2017-04-05T06:55:58Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db139d"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-10-02T13:16:52.235+0200",
					"localActivityCode" : "4743",
					"retainedScoreSource" : "531",
					"yearStarted" : "2014",
					"foundationDate" : "20140711",
					"atRatingScore" : "7",
					"numberOfEmployees" : 1,
					"retainedScoreDate" : "2016-02-02T00:00:00.000+0100",
					"atRatingScoreType" : "C",
					"retainedScore" : "7",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-09-29T00:00:00.000+0200",
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "123974",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"interpretedScore" : "1.99",
					"alarmCode" : "88",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"interpretedScoreSourceName" : "GRAYDON NEDERLAND B.V.",
					"nace" : "4743",
					"interpretedScoreSource" : "119",
					"netWorth" : {
						"value" : "-871861",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0005",
					"currency" : "EUR",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170929",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "119",
					"score" : "1,99"
				},
				"sourceId" : "119"
			},
			"identification" : {
				"addressLine" : "WILHELMINAKADE 161",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "NL854191501B01",
					"identifierName" : "VAT_NLD"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "610689180000",
					"identifierName" : "HRN_NLD"
				},
				"primaryName" : "MEDIA MARKT WHOLESALE B.V.",
				"telephoneNumber" : "+31102076500",
				"zipCode" : "3072AP",
				"postalTown" : "ROTTERDAM"
			},
			"yearY1" : {
				"sourceId" : "119"
			},
			"yearY2" : {
				"sourceId" : "119"
			}
		},
		"easyNumber" : "00008160194000",
		"countryCode" : "NLD",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"cnyIdInSource" : "931774535",
					"sourceIdType" : "IP",
					"code" : "119"
				},
				"contentNature" : "I1_CLASSICALINQ",
				"supplyMode" : "MONITORING"
			},
			"receivedDataEDMSid" : "EDMS-01-15574894"
		},
		"companyDataFileId" : "CDF-59ce9f0709770c0bca94353a",
		"creationDate" : ISODate("2017-09-29T19:29:11.232Z"),
		"jsonSchemaVersion" : "1.0",
		"businessFollowUpId" : "BUSI-01-227074869",
		"riskDataSnapshot" : {
			"crsNumber" : "520470560"
		},
		"lastUpdateDate" : ISODate("2017-10-02T11:16:53.349Z"),
		"cnyStatus" : "W"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db13ac"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2014-06-09T23:09:48.724+0200",
					"localActivityCode" : "4751",
					"retainedScoreSource" : "87",
					"yearStarted" : "2013",
					"foundationDate" : "20130430",
					"stock" : {
						"value" : "55657",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"atRatingScore" : "1",
					"numberOfEmployees" : 8,
					"workingCapital" : {
						"value" : "-508703",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2014-06-09T00:00:00.000+0200",
					"primaryGeographicArea" : "BS",
					"localFormeJuridique" : "SR",
					"retainedScore" : "203",
					"netIncomeLoss" : {
						"value" : "2",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2014-06-09T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"nbIdentifiers" : 3,
					"totalAssests" : {
						"value" : "743024",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"localExpPaiemt" : "0",
					"balanceSheetDate" : "2013",
					"currencyUnit" : "0",
					"interpretedScore" : "203",
					"alarmCode" : "88",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"bankruptcyPrediction" : "25",
					"informationSupplierReference" : "BS541496",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "4751",
					"interpretedScoreSource" : "87",
					"netWorth" : {
						"value" : "-523002",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "82842",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0006",
					"currency" : "EUR",
					"notationAgency" : "CCC",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20140609",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "87",
					"score" : "203"
				},
				"sourceId" : "87"
			},
			"identification" : {
				"addressLine" : "VIA FLERO 36",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "03525640987",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "BS541496",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "03525640987",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "LOFT S.R.L.  ",
				"zipCode" : "25125",
				"postalTown" : "BRESCIA"
			},
			"yearY1" : {
				"sourceId" : "87"
			},
			"yearY2" : {
				"sourceId" : "87"
			}
		},
		"easyNumber" : "00008106694400",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-215009713"
		},
		"companyDataFileId" : "01-EDMS-215009713",
		"creationDate" : ISODate("2014-06-09T21:09:30Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1355"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-07-14T09:15:13.631+0200",
					"retainedScoreSource" : "531",
					"yearStarted" : "2008",
					"foundationDate" : "20081210",
					"stock" : {
						"value" : "5784000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"atRatingScore" : "5",
					"numberOfEmployees" : 20,
					"workingCapital" : {
						"value" : "24691000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2016-05-30T00:00:00.000+0200",
					"atRatingScoreType" : "C",
					"retainedScore" : "5",
					"netIncomeLoss" : {
						"value" : "2",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-07-14T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "30000000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"totalAssests" : {
						"value" : "178354000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"netIncome" : {
						"value" : "-1825000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScore" : "CR5",
					"retainedScoreSourceName" : "MANUAL SCORE",
					"issuedCapital" : {
						"value" : "30000000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"interpretedScoreSourceName" : "EXPERIAN CHINA",
					"nace" : "451",
					"interpretedScoreSource" : "468",
					"netWorth" : {
						"value" : "27316000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "158059000",
						"currency" : "CNY",
						"currencyUnit" : 0
					},
					"currency" : "CNY",
					"notationAgency" : "5",
					"exchangeRate" : "0.13509240"
				},
				"evaluation" : {
					"scoreDate" : "20160714",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "468",
					"score" : "CR5"
				},
				"sourceId" : "468"
			},
			"identification" : {
				"addressLine" : "No. 1, Jinxiang Rd., Yongxing Town, Gaoxin Dis., Fucheng District",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "510706000014051",
					"identifierName" : "RGN_CHN"
				},
				"primaryName" : "MIANYANG GAOXINQU XINQIANNAN INDUSTRIAL CO., LTD.",
				"telephoneNumber" : "(+86 816) 2317888/ 2566699/ 13990116167",
				"zipCode" : "621006",
				"postalTown" : "Mianyang City, Sichuan Province"
			},
			"yearY1" : {
				"sourceId" : "468"
			},
			"yearY2" : {
				"sourceId" : "468"
			}
		},
		"easyNumber" : "00008568153200",
		"countryCode" : "CHN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "468"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-9017977"
		},
		"companyDataFileId" : "EDMS-01-9017977",
		"creationDate" : ISODate("2016-07-14T07:14:41Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1356"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2017-04-01T01:30:23.269+0200",
					"localActivityCode" : "5248",
					"retainedScoreSource" : "2",
					"yearStarted" : "2015",
					"foundationDate" : "20150101",
					"atRatingScore" : "4",
					"workingCapital" : {
						"value" : "-41000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-04-01T00:00:00.000+0200",
					"atRatingScoreType" : "D",
					"retainedScore" : "405",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-04-01T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"totalAssests" : {
						"value" : "35000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2016",
					"currencyUnit" : "0",
					"interpretedScore" : "405",
					"alarmCode" : "88",
					"retainedScoreSourceName" : "GRAYDON - UK LIMITED",
					"issuedCapital" : {
						"value" : "1",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "09707230",
					"interpretedScoreSourceName" : "GRAYDON - UK LIMITED",
					"nace" : "47",
					"interpretedScoreSource" : "2",
					"netWorth" : {
						"value" : "-23000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "GBP",
					"notationAgency" : "1",
					"exchangeRate" : "1.15526338"
				},
				"evaluation" : {
					"scoreDate" : "20170401",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "2",
					"score" : "405"
				},
				"sourceId" : "2"
			},
			"identification" : {
				"addressLine" : "16 WATNEY MARKET,",
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "09707230",
					"identifierName" : "RGN_GBR"
				},
				"primaryName" : "WATNEY TRADE LTD",
				"zipCode" : "E1 2PR",
				"postalTown" : "LONDON"
			},
			"yearY1" : {
				"sourceId" : "2"
			},
			"yearY2" : {
				"sourceId" : "2"
			}
		},
		"easyNumber" : "00008527157300",
		"countryCode" : "GBR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "2"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-12752891"
		},
		"companyDataFileId" : "EDMS-01-12752891",
		"creationDate" : ISODate("2017-03-31T23:30:21Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1370"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2015-05-29T09:21:46.544+0200",
					"retainedScoreSource" : "63",
					"yearStarted" : "1985",
					"foundationDate" : "19850101",
					"atRatingScore" : "4",
					"numberOfEmployees" : 15,
					"retainedScoreDate" : "2015-05-29T00:00:00.000+0200",
					"retainedScore" : "4.47",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "IDR",
						"currencyUnit" : 6
					},
					"balanceSheetDate" : "2014",
					"currencyUnit" : "6",
					"retainedScoreSourceName" : "COFACE SA",
					"bankruptcyPrediction" : "2",
					"interpretedScoreSourceName" : "PT VISI GLOBALINDO DATA UTAMA",
					"nace" : "0147",
					"interpretedScoreSource" : "559",
					"turnover" : {
						"value" : "22140",
						"currency" : "IDR",
						"currencyUnit" : 6
					},
					"legalForm" : "0080",
					"currency" : "IDR",
					"notationAgency" : "BB-",
					"exchangeRate" : "0.00007168"
				},
				"evaluation" : {
					"scoreDate" : "20150529",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "559",
					"score" : "3"
				},
				"sourceId" : "559"
			},
			"identification" : {
				"addressLine" : "Kampung Sawah Ciputat Jl. Elang Raya No. 2 Bintaro, Tangerang",
				"primaryName" : "GUNAWAN FARM",
				"telephoneNumber" : "(62- 21)- 3161303",
				"zipCode" : "12330",
				"faxNumber" : "(62- 21)- 3161303",
				"postalTown" : "Banten"
			},
			"yearY1" : {
				"sourceId" : "559"
			},
			"yearY2" : {
				"sourceId" : "559"
			}
		},
		"easyNumber" : "00008407669300",
		"countryCode" : "IDN",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "559"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-2709560"
		},
		"companyDataFileId" : "EDMS-01-2709560",
		"creationDate" : ISODate("2015-05-29T07:21:41Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db13a3"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2014-07-22T13:14:57.758+0200",
					"localActivityCode" : "4639",
					"retainedScoreSource" : "447",
					"yearStarted" : "1998",
					"foundationDate" : "19980101",
					"atRatingScore" : "6",
					"numberOfEmployees" : 35,
					"retainedScoreDate" : "2014-07-22T00:00:00.000+02:00",
					"primaryGeographicArea" : "CA",
					"retainedScore" : "1470",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2014-07-22T00:00:00.000+02:00",
					"currencyUnit" : "0",
					"interpretedScore" : "1470",
					"retainedScoreSourceName" : "THE D&B CORPORATION",
					"bankruptcyPrediction" : "0.7",
					"informationSupplierReference" : "607652419",
					"interpretedScoreSourceName" : "THE D&B CORPORATION",
					"nace" : "4639",
					"interpretedScoreSource" : "447",
					"legalForm" : "0002",
					"currency" : "USD",
					"notationAgency" : "BB+",
					"exchangeRate" : "0.73570628"
				},
				"evaluation" : {
					"scoreDate" : "20140722",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1470"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "2225 S Castle Harbour Pl ",
				"primaryName" : "Montalvan Sales, Inc. ",
				"telephoneNumber" : "909 930-5670",
				"zipCode" : "91761",
				"postalTown" : "Ontario"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00008146190400",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-219330506"
		},
		"companyDataFileId" : "01-EDMS-219330506",
		"DefaultBlock" : {
			"ReportNotUpdated" : "1",
			"DBPaydex" : "77",
			"ControlYear" : "1998",
			"FinancialStressScore" : "1470"
		},
		"creationDate" : ISODate("2014-07-22T11:11:14Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db13a7"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "2",
					"scoreIntegratedDate" : "2016-12-21T18:27:28.831+0100",
					"localActivityCode" : "4520",
					"retainedScoreSource" : "528",
					"yearStarted" : "2013",
					"foundationDate" : "20130101",
					"atRatingScore" : "5",
					"numberOfEmployees" : 0,
					"retainedScoreDate" : "2016-12-21T00:00:00.000+0100",
					"primaryGeographicArea" : "BADAJOZ",
					"atRatingScoreType" : "D",
					"retainedScore" : "9.12",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-12-21T00:00:00.000+0100",
					"nbIdentifiers" : 1,
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "9.12",
					"retainedScoreSourceName" : "AXESOR",
					"informationSupplierReference" : "8084685",
					"interpretedScoreSourceName" : "AXESOR",
					"nace" : "4520",
					"interpretedScoreSource" : "528",
					"turnover" : {
						"value" : "94726",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0053",
					"currency" : "EUR",
					"notationAgency" : "3",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20161221",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "528",
					"score" : "9.12"
				},
				"sourceId" : "528"
			},
			"identification" : {
				"addressLine" : "HERREROS, Nº 4",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "ESJ06642086",
					"identifierName" : "NIF_ESP"
				},
				"primaryName" : "TAPIA Y TAPIA SCOL",
				"zipCode" : "06400",
				"postalTown" : "DON BENITO"
			},
			"yearY1" : {
				"sourceId" : "528"
			},
			"yearY2" : {
				"sourceId" : "528"
			}
		},
		"easyNumber" : "00008138191200",
		"countryCode" : "ESP",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "528"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11343926"
		},
		"companyDataFileId" : "EDMS-01-11343926",
		"creationDate" : ISODate("2016-12-21T17:27:26Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db13ab"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2016-06-06T22:37:11.563+0200",
					"localActivityCode" : "5431",
					"retainedScoreSource" : "447",
					"yearStarted" : "1906",
					"foundationDate" : "19060101",
					"atRatingScore" : "8",
					"numberOfEmployees" : 3,
					"retainedScoreDate" : "2016-04-10T00:00:00.000+0200",
					"primaryGeographicArea" : "NJ",
					"atRatingScoreType" : "D",
					"retainedScore" : "1538",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2016-04-10T00:00:00.000+0200",
					"nbIdentifiers" : 1,
					"locationStatus" : "SL",
					"currencyUnit" : "0",
					"interpretedScore" : "1538",
					"retainedScoreSourceName" : "Dun & Bradstreet",
					"informationSupplierReference" : "101398048",
					"interpretedScoreSourceName" : "Dun & Bradstreet",
					"nace" : "4721",
					"interpretedScoreSource" : "447",
					"turnover" : {
						"value" : "300000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0091",
					"currency" : "USD",
					"notationAgency" : "7",
					"exchangeRate" : "0.88408802"
				},
				"evaluation" : {
					"scoreDate" : "20160410",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "447",
					"score" : "1538"
				},
				"sourceId" : "447"
			},
			"identification" : {
				"addressLine" : "892 PALISADE AVE",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "101398048",
					"identifierName" : "DUN_USA"
				},
				"primaryName" : "Limones Farms Inc",
				"telephoneNumber" : "(201) 836-2886",
				"zipCode" : "07666",
				"postalTown" : "TEANECK"
			},
			"yearY1" : {
				"sourceId" : "447"
			},
			"yearY2" : {
				"sourceId" : "447"
			}
		},
		"easyNumber" : "00008114198600",
		"countryCode" : "USA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "447"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-8419637"
		},
		"companyDataFileId" : "EDMS-01-8419637",
		"creationDate" : ISODate("2016-06-06T20:37:07Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1359"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2015-10-08T17:42:50.424+0200",
					"retainedScoreSource" : "562",
					"yearStarted" : "2011",
					"foundationDate" : "20110101",
					"atRatingScore" : "8",
					"numberOfEmployees" : 76,
					"retainedScoreDate" : "2015-10-08T00:00:00.000+0200",
					"primaryGeographicArea" : "Sonora",
					"retainedScore" : "8",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "MXN",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2015-10-08T00:00:00.000+0200",
					"nominalCapital" : {
						"value" : "33016506",
						"currency" : "MXN",
						"currencyUnit" : 0
					},
					"totalAssests" : {
						"value" : "26986296",
						"currency" : "MXN",
						"currencyUnit" : 0
					},
					"locationStatus" : "HQ",
					"balanceSheetDate" : "2014",
					"currencyUnit" : "0",
					"netIncome" : {
						"value" : "14799666",
						"currency" : "MXN",
						"currencyUnit" : 0
					},
					"interpretedScore" : "8",
					"retainedScoreSourceName" : "ICON LatAm",
					"bankruptcyPrediction" : "0.15",
					"interpretedScoreSourceName" : "ICON LatAm",
					"nace" : "68",
					"interpretedScoreSource" : "562",
					"turnover" : {
						"value" : "47528387",
						"currency" : "MXN",
						"currencyUnit" : 0
					},
					"legalForm" : "0011",
					"currency" : "MXN",
					"notationAgency" : "BBB-",
					"exchangeRate" : "0.05296012"
				},
				"evaluation" : {
					"scoreDate" : "20151008",
					"scoreOrigin" : "D_LGH",
					"scoreSourceId" : "562",
					"score" : "8"
				},
				"sourceId" : "562"
			},
			"identification" : {
				"addressLine" : "Ignacio Hernández No. 70 Col. Jesús Gracia",
				"legalIdentifier" : {
					"identifierCategory" : "S",
					"identifierValue" : "IIC-110525-Q8A",
					"identifierName" : "RFC_MEX"
				},
				"primaryName" : "INCODES INMOBILIARIA, CONSTRUCTORES Y DESARROLLADORES, S.A. DE C.V.",
				"telephoneNumber" : "(662)2621767",
				"zipCode" : "83140",
				"email" : "luis.bonson@siemco.com.mx",
				"faxNumber" : "(662)3530408",
				"postalTown" : "Huatabampo"
			},
			"yearY1" : {
				"sourceId" : "562"
			},
			"yearY2" : {
				"sourceId" : "562"
			}
		},
		"easyNumber" : "00008444160600",
		"countryCode" : "MEX",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "562"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-4928746"
		},
		"companyDataFileId" : "EDMS-01-4928746",
		"creationDate" : ISODate("2015-10-08T15:42:44Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1363"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2017-01-13T06:18:43.356+0100",
					"retainedScoreSource" : "158",
					"atRatingScore" : "4",
					"retainedScoreDate" : "2017-01-13T00:00:00.000+0100",
					"atRatingScoreType" : "D",
					"retainedScore" : "50",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-01-13T00:00:00.000+0100",
					"currencyUnit" : "0",
					"interpretedScore" : "50",
					"retainedScoreSourceName" : "AKCI  ALLGEMEINE KREDIT COFACE INFORMATIONS GMBH",
					"interpretedScoreSourceName" : "VERBAND DER VEREINE CREDITREFORM E.V.",
					"nace" : "87",
					"interpretedScoreSource" : "165",
					"currency" : "EUR",
					"notationAgency" : "4",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170113",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "165",
					"score" : "50"
				},
				"sourceId" : "165"
			},
			"identification" : {
				"addressLine" : "Please do not cancel, under",
				"primaryName" : "CofaServe Test Company M2.2, Rating Debtor Transfer Destination",
				"zipCode" : "55124",
				"postalTown" : "Mainz"
			},
			"yearY1" : {
				"sourceId" : "165"
			},
			"yearY2" : {
				"sourceId" : "165"
			}
		},
		"easyNumber" : "00008431161900",
		"countryCode" : "DEU",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "165"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11627983"
		},
		"companyDataFileId" : "EDMS-01-11627983",
		"DefaultBlock" : {
			"OriginScoreDate" : "20170112",
			"OriginScore" : "0"
		},
		"creationDate" : ISODate("2017-01-12T11:47:29Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1369"),
		"inputData" : {
			"yearY" : {
				"financialStatement" : {
					"profitAndLoss" : {
						"netIncome" : {
							"value" : "11391",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operatingCost" : {
							"value" : "1471125",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"staffCost" : {
							"value" : "97556",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgIncome" : {
							"value" : "1491062",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netOperatingResult" : {
							"value" : "19937",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"operationgCashFlow" : {
							"value" : "14340",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"ebitdaCoface" : {
							"value" : "22886",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"workingCapital" : {
							"value" : "-4443",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"depreciationAndAmortization" : {
							"value" : "2949",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"netResultBeforeTax" : {
							"value" : "17650",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"turnover" : {
							"value" : "1491059",
							"currency" : "EUR",
							"currencyUnit" : 0
						},
						"exceptionalResult" : {
							"value" : "286",
							"currency" : "EUR",
							"currencyUnit" : 0
						}
					},
					"balanceSheet" : {
						"assets" : {
							"cashAndEquivalent" : {
								"value" : "227555",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalCurrentAssets" : {
								"value" : "1300862",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"stock" : {
								"value" : "90580",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalFixedAssets" : {
								"value" : "29513",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalAssets" : {
								"value" : "1330375",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"accountsReceivable" : {
								"value" : "901408",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						},
						"liabilities" : {
							"equityCapital" : {
								"value" : "21390",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalShareHolderEquity" : {
								"value" : "21390",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longTermDebt" : {
								"value" : "0",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalNonCurrentLiabilities" : {
								"value" : "3680",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"totalEquityLiabilities" : {
								"value" : "1330375",
								"currency" : "EUR",
								"currencyUnit" : 0
							},
							"longAndMediumTermProvsions" : {
								"value" : "3680",
								"currency" : "EUR",
								"currencyUnit" : 0
							}
						}
					},
					"currencyUnit" : "0",
					"nbOfEmployees" : 31,
					"financialStatementDate" : "20151231",
					"fiscalPeriodNbMonth" : 2,
					"currency" : "EUR",
					"fiscalPeriod" : "2",
					"exchangeRate" : "1.00000000",
					"sizeCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					}
				},
				"rsData" : {
					"paymentExperience" : "1",
					"scoreIntegratedDate" : "2017-01-20T11:03:32.694+0100",
					"localActivityCode" : "152",
					"retainedScoreSource" : "87",
					"localTotalEmployees" : 32,
					"yearStarted" : "2015",
					"foundationDate" : "20150309",
					"stock" : {
						"value" : "90580",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"atRatingScore" : "6",
					"numberOfEmployees" : 31,
					"workingCapital" : {
						"value" : "-4443",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2017-01-20T00:00:00.000+0100",
					"primaryGeographicArea" : "NA",
					"localFormeJuridique" : "SR",
					"atRatingScoreType" : "D",
					"retainedScore" : "3581",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2017-01-20T00:00:00.000+0100",
					"nbIdentifiers" : 3,
					"totalAssests" : {
						"value" : "1330375",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"localExpPaiemt" : "0",
					"balanceSheetDate" : "2015",
					"currencyUnit" : "0",
					"interpretedScore" : "3581",
					"retainedScoreSourceName" : "CERVED SPA",
					"issuedCapital" : {
						"value" : "10000",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"informationSupplierReference" : "NA926470",
					"interpretedScoreSourceName" : "CERVED SPA",
					"nace" : "152",
					"interpretedScoreSource" : "87",
					"netWorth" : {
						"value" : "21390",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "1491059",
						"currency" : "EUR",
						"currencyUnit" : 0
					},
					"legalForm" : "0006",
					"currency" : "EUR",
					"notationAgency" : "3",
					"exchangeRate" : "1.00000000"
				},
				"evaluation" : {
					"scoreDate" : "20170120",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "87",
					"score" : "3581"
				},
				"sourceId" : "87",
				"roadReportStatus" : "1"
			},
			"identification" : {
				"addressLine" : "VIA RISORGIMENTO 2",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "08027881211",
					"identifierName" : "VAT_ITA"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "E",
					"identifierValue" : "NA926470",
					"identifierName" : "CCIAA_ITA"
				},
				"legalIdentifier3" : {
					"identifierCategory" : "L",
					"identifierValue" : "08027881211",
					"identifierName" : "TAX_ITA"
				},
				"primaryName" : "CALZATURIFICIO XLEI S.R.L.",
				"zipCode" : "80028",
				"postalTown" : "GRUMO NEVANO"
			},
			"yearY1" : {
				"sourceId" : "87"
			},
			"yearY2" : {
				"sourceId" : "87"
			}
		},
		"easyNumber" : "00008421662900",
		"countryCode" : "ITA",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "87"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-11749469"
		},
		"companyDataFileId" : "EDMS-01-11749469",
		"creationDate" : ISODate("2017-01-20T10:03:29Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1385"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "4",
					"scoreIntegratedDate" : "2015-03-05T13:06:09.584+0100",
					"localActivityCode" : "7123",
					"retainedScoreSource" : "484",
					"yearStarted" : "2012",
					"foundationDate" : "20120101",
					"stock" : {
						"value" : "0",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"atRatingScore" : "0",
					"workingCapital" : {
						"value" : "-12711000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2015-03-04T00:00:00.000+0100",
					"primaryGeographicArea" : "CO. CLARE.",
					"retainedScore" : "0",
					"netIncomeLoss" : {
						"value" : "3",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2015-03-04T00:00:00.000+0100",
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "185932000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2013",
					"currencyUnit" : "0",
					"interpretedScore" : "0",
					"retainedScoreSourceName" : "EXPERIAN IRELAND LTD",
					"issuedCapital" : {
						"value" : "0",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"bankruptcyPrediction" : "100",
					"informationSupplierReference" : "629029",
					"interpretedScoreSourceName" : "EXPERIAN IRELAND LTD",
					"nace" : "7735",
					"interpretedScoreSource" : "484",
					"netWorth" : {
						"value" : "-156000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "17314000",
						"currency" : "USD",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "USD",
					"notationAgency" : "D",
					"exchangeRate" : "0.88108444"
				},
				"evaluation" : {
					"scoreDate" : "20150304",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "484",
					"score" : "0"
				},
				"sourceId" : "484"
			},
			"identification" : {
				"addressLine" : "4450 ATLANTIC AVENUE WESTPARK",
				"legalIdentifier" : {
					"identifierCategory" : "L",
					"identifierValue" : "510389",
					"identifierName" : "RGN_IRL"
				},
				"primaryName" : "SCARLET AIRCRAFT LEASING LIMITED  ",
				"telephoneNumber" : "061-723600",
				"legalIdentifier3" : {
					"identifierValue" : "629029"
				},
				"postalTown" : "SHANNON"
			},
			"yearY1" : {
				"sourceId" : "484"
			},
			"yearY2" : {
				"sourceId" : "484"
			}
		},
		"easyNumber" : "00008337671300",
		"countryCode" : "IRL",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "484"
				}
			},
			"receivedDataEDMSid" : "EDMS-01-1434007"
		},
		"companyDataFileId" : "EDMS-01-1434007",
		"creationDate" : ISODate("2015-03-05T12:06:07Z"),
		"jsonSchemaVersion" : "1.0"
	},
	{
		"_id" : ObjectId("594e086b3e5c832107db1390"),
		"inputData" : {
			"yearY" : {
				"rsData" : {
					"paymentExperience" : "3",
					"scoreIntegratedDate" : "2014-10-20T16:05:27.988+0200",
					"localActivityCode" : "7032",
					"retainedScoreSource" : "2",
					"yearStarted" : "1960",
					"foundationDate" : "19600101",
					"stock" : {
						"value" : "10885000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"atRatingScore" : "7",
					"numberOfEmployees" : 4807,
					"workingCapital" : {
						"value" : "-233850000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"retainedScoreDate" : "2014-10-20T00:00:00.000+02:00",
					"retainedScore" : "445",
					"netIncomeLoss" : {
						"value" : "1",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"interpretedScoreDate" : "2014-10-20T00:00:00.000+02:00",
					"nbIdentifiers" : 2,
					"totalAssests" : {
						"value" : "566983000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"balanceSheetDate" : "2013",
					"currencyUnit" : "0",
					"interpretedScore" : "445",
					"retainedScoreSourceName" : "GRAYDON - UK LIMITED",
					"issuedCapital" : {
						"value" : "319231097",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"bankruptcyPrediction" : "0.4",
					"informationSupplierReference" : "00661449",
					"interpretedScoreSourceName" : "GRAYDON - UK LIMITED",
					"nace" : "6832",
					"interpretedScoreSource" : "2",
					"netWorth" : {
						"value" : "147584000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"turnover" : {
						"value" : "566111000",
						"currency" : "GBP",
						"currencyUnit" : 0
					},
					"legalForm" : "0002",
					"currency" : "GBP",
					"notationAgency" : "BBB-",
					"exchangeRate" : "1.26401186"
				},
				"evaluation" : {
					"scoreDate" : "20141020",
					"scoreOrigin" : "D_STD",
					"scoreSourceId" : "2",
					"score" : "445"
				},
				"sourceId" : "2"
			},
			"identification" : {
				"addressLine" : "2 THE BRIARS WATERBERRY DRIVE, HAMPSHIRE",
				"legalIdentifier" : {
					"identifierCategory" : "E",
					"identifierValue" : "GB209921950",
					"identifierName" : "VAT_GBR"
				},
				"legalIdentifier2" : {
					"identifierCategory" : "L",
					"identifierValue" : "00661449",
					"identifierName" : "RGN_GBR"
				},
				"primaryName" : "JOHNSON CONTROLS LIMITED  ",
				"telephoneNumber" : "023 92230500",
				"zipCode" : "PO7 7YH",
				"faxNumber" : "023 92230502",
				"postalTown" : "WATERLOOVILLE"
			},
			"yearY1" : {
				"sourceId" : "2"
			},
			"yearY2" : {
				"sourceId" : "2"
			}
		},
		"easyNumber" : "00008197195300",
		"countryCode" : "GBR",
		"builtFrom" : {
			"supply" : {
				"source" : {
					"code" : "2"
				}
			},
			"receivedDataEDMSid" : "01-EDMS-228126343"
		},
		"companyDataFileId" : "01-EDMS-228126343",
		"creationDate" : ISODate("2014-10-20T14:05:24Z"),
		"jsonSchemaVersion" : "1.0"
	}
])

