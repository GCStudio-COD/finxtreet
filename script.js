const defaultConfig = {
    hero_headline: "Trade With Discipline.",
    hero_subheadline: "Learn Like a Professional.",
    hero_description: "Finxtreet Academy is mentor-guided educational academy and live trading environment built for those who value skill, structure, and long-term success not shortcuts.",
    cta_primary: "Start Your Trading Journey →",
    cta_secondary: "Book a Free Orientation",
    mission_title: "Why We Exist",
    quote_text: "Markets reward those who stay disciplined and prepared. At Finxtreet, we build that discipline through guided learning and shared market experience.",
    mentor_1_name: "John Smith",
    mentor_1_title: "Senior Forex Trader",
    mentor_2_name: "Sarah Johnson",
    mentor_2_title: "Market Strategist",
    mentor_3_name: "Mike Chen",
    mentor_3_title: "Trading Coach",
    mentor_4_name: "Alex Kumar",
    mentor_4_title: "Risk Manager",
    mentor_5_name: "Emma Wilson",
    mentor_5_title: "Technical Analyst",
    mentor_6_name: "David Lee",
    mentor_6_title: "Portfolio Manager",
    background_color: "#FFFFFF",
    surface_color: "#F8F8F8",
    text_color: "#000000",
    accent_color: "#42904f",
    secondary_accent: "#F8F8F8",
    font_family: "Inter",
    font_size: 16
};

let config = { ...defaultConfig };

async function onConfigChange(updatedConfig) {
    config = { ...config, ...updatedConfig };

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };
    setText('hero-headline', config.hero_headline || defaultConfig.hero_headline);
    setText('hero-subheadline', config.hero_subheadline || defaultConfig.hero_subheadline);
    setText('hero-description', config.hero_description || defaultConfig.hero_description);
    setText('cta-primary', config.cta_primary || defaultConfig.cta_primary);
    setText('cta-secondary', config.cta_secondary || defaultConfig.cta_secondary);
    setText('mission-title', config.mission_title || defaultConfig.mission_title);
    setText('quote-text', config.quote_text || defaultConfig.quote_text);

    updateMentorInfo();

    document.body.style.backgroundColor = config.background_color || defaultConfig.background_color;
    document.body.style.color = config.text_color || defaultConfig.text_color;
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            { get: () => config.background_color || defaultConfig.background_color, set: (value) => { config.background_color = value; if (window.elementSdk) window.elementSdk.setConfig({ background_color: value }); } },
            { get: () => config.accent_color || defaultConfig.accent_color, set: (value) => { config.accent_color = value; if (window.elementSdk) window.elementSdk.setConfig({ accent_color: value }); } },
            { get: () => config.text_color || defaultConfig.text_color, set: (value) => { config.text_color = value; if (window.elementSdk) window.elementSdk.setConfig({ text_color: value }); } },
            { get: () => config.surface_color || defaultConfig.surface_color, set: (value) => { config.surface_color = value; if (window.elementSdk) window.elementSdk.setConfig({ surface_color: value }); } },
            { get: () => config.secondary_accent || defaultConfig.secondary_accent, set: (value) => { config.secondary_accent = value; if (window.elementSdk) window.elementSdk.setConfig({ secondary_accent: value }); } }
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["hero_headline", config.hero_headline || defaultConfig.hero_headline],
        ["hero_subheadline", config.hero_subheadline || defaultConfig.hero_subheadline],
        ["hero_description", config.hero_description || defaultConfig.hero_description],
        ["cta_primary", config.cta_primary || defaultConfig.cta_primary],
        ["cta_secondary", config.cta_secondary || defaultConfig.cta_secondary],
        ["mission_title", config.mission_title || defaultConfig.mission_title],
        ["quote_text", config.quote_text || defaultConfig.quote_text],
        ["mentor_1_name", config.mentor_1_name || defaultConfig.mentor_1_name],
        ["mentor_1_title", config.mentor_1_title || defaultConfig.mentor_1_title],
        ["mentor_2_name", config.mentor_2_name || defaultConfig.mentor_2_name],
        ["mentor_2_title", config.mentor_2_title || defaultConfig.mentor_2_title],
        ["mentor_3_name", config.mentor_3_name || defaultConfig.mentor_3_name],
        ["mentor_3_title", config.mentor_3_title || defaultConfig.mentor_3_title],
        ["mentor_4_name", config.mentor_4_name || defaultConfig.mentor_4_name],
        ["mentor_4_title", config.mentor_4_title || defaultConfig.mentor_4_title],
        ["mentor_5_name", config.mentor_5_name || defaultConfig.mentor_5_name],
        ["mentor_5_title", config.mentor_5_title || defaultConfig.mentor_5_title],
        ["mentor_6_name", config.mentor_6_name || defaultConfig.mentor_6_name],
        ["mentor_6_title", config.mentor_6_title || defaultConfig.mentor_6_title]
    ]);
}

function updateMentorInfo() {
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set('mentor-1-name', config.mentor_1_name || defaultConfig.mentor_1_name || 'John Smith');
    set('mentor-1-title', config.mentor_1_title || defaultConfig.mentor_1_title || 'Senior Forex Trader');
    set('mentor-2-name', config.mentor_2_name || defaultConfig.mentor_2_name || 'Sarah Johnson');
    set('mentor-2-title', config.mentor_2_title || defaultConfig.mentor_2_title || 'Market Strategist');
    set('mentor-3-name', config.mentor_3_name || defaultConfig.mentor_3_name || 'Mike Chen');
    set('mentor-3-title', config.mentor_3_title || defaultConfig.mentor_3_title || 'Trading Coach');
    set('mentor-4-name', config.mentor_4_name || defaultConfig.mentor_4_name || 'Alex Kumar');
    set('mentor-4-title', config.mentor_4_title || defaultConfig.mentor_4_title || 'Risk Manager');
    set('mentor-5-name', config.mentor_5_name || defaultConfig.mentor_5_name || 'Emma Wilson');
    set('mentor-5-title', config.mentor_5_title || defaultConfig.mentor_5_title || 'Technical Analyst');
    set('mentor-6-name', config.mentor_6_name || defaultConfig.mentor_6_name || 'David Lee');
    set('mentor-6-title', config.mentor_6_title || defaultConfig.mentor_6_title || 'Portfolio Manager');
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.contains('flex');
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'p-6');
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'p-6');
            mobileMenu.style.background = 'rgba(255, 255, 255, 0.98)';
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu && mobileMenu.classList.contains('flex')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'p-6');
        }
    });
});

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
} else {
    onConfigChange(defaultConfig);
}

updateMentorInfo();
