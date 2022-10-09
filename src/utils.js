export function htmlToPDF(html, options) {
  const pdf = new jsPDF(options);
  pdf.html(html, {
    callback: function(pdf) {
      pdf.save("test.pdf");
    },
  });
}
