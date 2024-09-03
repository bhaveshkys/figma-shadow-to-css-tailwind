import React, { useState } from 'react';

const ShadowForm = () => {
    const [inset, setInset] = useState(false);
    const [x, setX] = useState('0');
    const [y, setY] = useState('0');
    const [blur, setBlur] = useState('0');
    const [spread, setSpread] = useState('0');
    const [color, setColor] = useState('#000000');
    const [transparency, setTransparency] = useState('100');
    
    const generateCSS = () => {
        const alpha = transparency / 100;
        const rgbaColor = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${alpha})`;
        const boxShadow = `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${rgbaColor}`;
        return `box-shadow: ${boxShadow};`;
    };

    const generateTailwind = () => {
        const alpha = transparency / 100;
        const boxShadow = `${inset ? 'inset-' : ''}shadow-[${x}px_${y}px_${blur}px_${spread}px_rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)},${alpha})]`;
        return boxShadow;
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shadow Generator</h2>
            <form className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={inset}
                        onChange={(e) => setInset(e.target.checked)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-gray-700">Inset</label>
                </div>

                <div>
                    <label className="block text-gray-700">X Offset:</label>
                    <input
                        type="text"
                        value={x}
                        onChange={(e) => setX(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Y Offset:</label>
                    <input
                        type="text"
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Blur:</label>
                    <input
                        type="text"
                        value={blur}
                        onChange={(e) => setBlur(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Spread:</label>
                    <input
                        type="text"
                        value={spread}
                        onChange={(e) => setSpread(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Color:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="mt-1 block w-full h-10"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Transparency:</label>
                    <input
                        type="text"
                        value={transparency}
                        onChange={(e) => setTransparency(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </form>

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">CSS Code</h3>
                <pre className="bg-gray-100 p-4 rounded-md">
                    {generateCSS()}
                </pre>
                <button 
                    onClick={() => copyToClipboard(generateCSS())}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Copy CSS to Clipboard
                </button>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Tailwind Code</h3>
                <pre className="bg-gray-100 p-4 rounded-md">
                    {generateTailwind()}
                </pre>
                <button 
                    onClick={() => copyToClipboard(generateTailwind())}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Copy Tailwind to Clipboard
                </button>
            </div>
        </div>
    );
};

export default ShadowForm;
