export function calculateInvoiceTotals(items = [], tax = 0, discount = 0) {
  const subtotal = items.reduce((sum, item) => sum + Number(item.quantity || 1) * Number(item.unitPrice || 0), 0);
  const total = Math.max(subtotal + Number(tax || 0) - Number(discount || 0), 0);

  return { subtotal, total };
}
