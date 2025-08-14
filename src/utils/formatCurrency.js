export function formatKES(amount){ if(amount==null) return 'KES 0'; return 'KES ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
