import sqlite3
import json
import sys

Location = 'E:\\User Account Info\\Documents\\GitHub\\Storage-Analytics\\app\\parser\\DataCore.db'
CONNECTION = sqlite3.connect(Location) ## Change this to the name of the Database
c = CONNECTION.cursor()

def getData(systemID : int):
	query = "SELECT SystemID, db.[from], db.[to], portTotalBandwidthMBPS, cpuLatestTotalAvgPct, portReadAvgIOSizeKB, portWriteAvgIOSizeKB FROM PERFORMANCE as db WHERE systemId = '{}'".format(str(systemID)) ## Change PERFORMANCE to the Name of the Table
	output = c.execute(query).fetchall()
	result = []
	for (SystemID, From, To, portTotalBandwidthMBPS, cpuLatestTotalAvgPct, portReadAvgIOSizeKB, portWriteAvgIOSizeKB) in output:
		result.append({"systemID" : int(SystemID), "from" : From, "to" : To, "portTotalBandwidthMBPS" : portTotalBandwidthMBPS, "cpuLatestTotalAvgPct" : cpuLatestTotalAvgPct, "portReadAvgIOSizeKB" : portReadAvgIOSizeKB, "portWriteAvgIOSizeKB" : portWriteAvgIOSizeKB})
	with open('JsonDumpFile.json', 'w') as f:
		json.dump(result[:30], f)
	return json.loads(json.dumps(result))

getData(int(sys.argv[1]))
