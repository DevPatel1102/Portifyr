import React from 'react';
import TextInput from '../Portfolio/TextInput';
import ColorPicker from '../Portfolio/ColorPicker';

const GeneralTab = ({ portfolio, updatePortfolio }) => {
    return (
        <>
            <TextInput
                label="Name"
                value={portfolio.name}
                onChange={(value) => updatePortfolio('name', value)}
            />

            <TextInput
                label="Title"
                value={portfolio.title}
                onChange={(value) => updatePortfolio('title', value)}
            />

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                    value={portfolio.bio}
                    onChange={(e) => updatePortfolio('bio', e.target.value)}
                    className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                />
            </div>

            <TextInput
                label="Profile Image URL"
                value={portfolio.image}
                onChange={(value) => updatePortfolio('image', value)}
            />

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Colors</h3>
                <ColorPicker
                    label="Name Color"
                    value={portfolio.nameColor}
                    onChange={(value) => updatePortfolio('nameColor', value)}
                />
                <ColorPicker
                    label="Primary Color"
                    value={portfolio.primaryColor}
                    onChange={(value) => updatePortfolio('primaryColor', value)}
                />
                <ColorPicker
                    label="Secondary Color"
                    value={portfolio.secondaryColor}
                    onChange={(value) => updatePortfolio('secondaryColor', value)}
                />
                <ColorPicker
                    label="Background Color"
                    value={portfolio.backgroundColor}
                    onChange={(value) => updatePortfolio('backgroundColor', value)}
                />
                <ColorPicker
                    label="Accent Color"
                    value={portfolio.accentColor}
                    onChange={(value) => updatePortfolio('accentColor', value)}
                />
            </div>
        </>
    );
};

export default GeneralTab;