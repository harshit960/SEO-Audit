export function processPSIData(psidata: any): any {
  try {
    
    const listtt = psidata.lighthouseResult.audits['network-requests']?.details.items;
    
    const processedList = listtt.map((item: { url: any; statusCode: any; protocol: any; transferSize: number; resourceSize: number; priority: any; }) => ({
      url: item.url,
      statusCode: item.statusCode,
      protocol: item.protocol,
      transferSizeKB: (item.transferSize / 1024).toFixed(2),
      resourceSizeKB: (item.resourceSize / 1024).toFixed(2),
      priority: item.priority,
    }));
    
    // Sort the processed list by resourceSizeKB
    processedList.sort((a: { resourceSizeKB: string; }, b: { resourceSizeKB: string; }) => parseFloat(b.resourceSizeKB) - parseFloat(a.resourceSizeKB));
    
    return processedList;
    
  } catch (error) {
    return [];
  }
  }
  