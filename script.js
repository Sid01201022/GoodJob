// --- 1. 資料定義區 (智丞，你以後只要改這裡就好) ---

const skillsData = {
    programming: ["C++", "Python", "MATLAB", "C"], //
    ai_ml: ["Prompt Engineering", "AI Productivity Tools", "Data Analysis"], //
    web: ["React", "Tailwind CSS", "JavaScript (ES6+)"], //
    tools: ["HSPICE", "Git / GitHub", "Vercel", "LaTeX"] //
};

const coursesData = [
    {
        name: "電路學 (Circuit Theory)",
        semester: "113-1",
        category: "電機核心",
        link: "#",
        skills: ["電路分析", "HSPICE 模擬"], //
        description: "電機工程基石，涵蓋一階與二階電路之時域與頻域響應分析。"
    },
    {
        name: "計算機程式 (Computer Programming)",
        semester: "112-1",
        category: "資工基礎",
        link: "#",
        skills: ["C/C++", "演算法開發"], //
        description: "學習程式邏輯與資料結構，並透過實作練習解決計算問題。"
    }
];

const projectsData = [
    {
        name: "德州撲克記帳本",
        oneLiner: "專為線下球局設計的即時記帳工具。",
        details: "解決多人局頻繁買入、結算時帳目誤差的痛點，支援自動計算淨利與複製結果。",
        techStack: ["HTML", "Tailwind CSS", "JS"],
        github: "#",
        demo: "poker.html",
        status: "MVP 已完成"
    },
    {
        name: "台股技術分析工具",
        oneLiner: "自動化 K 線形態篩選與策略測試應用。",
        details: "透過 Python 抓取即時數據，結合技術指標進行選股與歷史回測。",
        techStack: ["Python", "Pandas"],
        github: "#",
        demo: "#",
        status: "開發中"
    }
];

// --- 2. 渲染邏輯區 (負責把資料畫到網頁上) ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 更新年份
    const yearEl = document.getElementById('current-year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // 渲染 Skills
    const skillsContainer = document.getElementById('skills-container');
    if(skillsContainer) {
        Object.keys(skillsData).forEach(key => {
            const div = document.createElement('div');
            div.className = 'skill-category';
            div.innerHTML = `
                <h3>${key.toUpperCase().replace('_', ' / ')}</h3>
                <div class="skill-tags">
                    ${skillsData[key].map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
            `;
            skillsContainer.appendChild(div);
        });
    }

    // 渲染 Courses
    const coursesContainer = document.getElementById('courses-container');
    if(coursesContainer) {
        coursesData.forEach(c => {
            const div = document.createElement('div');
            div.className = 'course-item';
            div.innerHTML = `
                <div class="course-info">
                    <div class="course-meta">${c.semester} | ${c.category}</div>
                    <h4>${c.name}</h4>
                    <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 0.5rem;">${c.description}</p>
                    <div class="course-skills">
                        ${c.skills.map(s => `<span class="c-skill">#${s}</span>`).join('')}
                    </div>
                </div>
                <a href="${c.link}" class="course-link">📋</a>
            `;
            coursesContainer.appendChild(div);
        });
    }

    // 渲染 Projects
    const projectsContainer = document.getElementById('projects-container');
    if(projectsContainer) {
        projectsData.forEach(p => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerHTML = `
                <div class="pj-status">${p.status}</div>
                <h3>${p.name}</h3>
                <p class="pj-one-liner">${p.oneLiner}</p>
                <p class="pj-details">${p.details}</p>
                <div style="margin-bottom: 1rem;">
                    ${p.techStack.map(t => `<small style="background:#e0f2fe; color:#0369a1; padding:2px 6px; border-radius:4px; margin-right:4px; font-weight:700;">${t}</small>`).join('')}
                </div>
                <div class="pj-links">
                    <a href="${p.github}" class="pj-link">GitHub</a>
                    <a href="${p.demo}" class="pj-link">Live Demo</a>
                </div>
            `;
            projectsContainer.appendChild(div);
        });
    }
});