

const doc = new jspdf.jsPDF();

async function toPDF() {
    await doc.html(document.querySelector(".page"));
    doc.save("a4.pdf");
}