import {ImageResponse} from 'next/og';

export const alt = 'Ryan Smith - Software Engineer';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '84px',
                color: '#1d3557',
                background: '#f7fbfc',
                borderBottom: '28px solid #e63946',
            }}
        >
            <div style={{fontSize: 28, color: '#457b9d'}}>SOFTWARE ENGINEER</div>
            <div style={{fontSize: 86, fontWeight: 700, marginTop: 24}}>Ryan Smith</div>
            <div style={{fontSize: 38, marginTop: 24}}>Embedded systems, thoughtful software, and physical computing.</div>
        </div>,
        size,
    );
}