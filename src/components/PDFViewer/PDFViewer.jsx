import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.js';

const PDFViewer = ({ fileUrl }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Document file={fileUrl} onLoadError={console.error}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PDFViewer;