import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Use Vite's base URL so the worker path works for root or subpath deployments
pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdfjs/pdf.worker.min.js`;

const TestPDFViewer = () => {
    const fileUrl = '/src/assets/documents/sample.pdf'; // Replace with an actual PDF file path

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Document file={fileUrl} onLoadError={console.error}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default TestPDFViewer;
