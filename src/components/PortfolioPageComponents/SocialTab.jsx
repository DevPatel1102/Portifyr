import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import TextInput from '../Portfolio/TextInput';

const SocialTab = ({ social, updateSocial }) => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            <TextInput
                label="GitHub"
                value={social.github}
                onChange={(value) => updateSocial('github', value)}
                icon={<Github size={18} />}
            />
            <TextInput
                label="LinkedIn"
                value={social.linkedin}
                onChange={(value) => updateSocial('linkedin', value)}
                icon={<Linkedin size={18} />}
            />
            <TextInput
                label="Twitter"
                value={social.twitter}
                onChange={(value) => updateSocial('twitter', value)}
                icon={<Twitter size={18} />}
            />
            <TextInput
                label="Email"
                value={social.email}
                onChange={(value) => updateSocial('email', value)}
                icon={<Mail size={18} />}
            />
        </div>
    );
};

export default SocialTab;