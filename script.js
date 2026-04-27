// --- 1. 資料定義區 ---

// 技能改為帶有百分比的結構，方便繪製進度條
const skillsData = {
    "程式語言 (Programming)": [
        { name: "C / C++", pct: 85 },
        { name: "Python", pct: 80 },
        { name: "MATLAB", pct: 70 }
    ],
    "前端與網頁 (Web)": [
        { name: "HTML / Tailwind CSS", pct: 85 },
        { name: "React / JavaScript", pct: 75 }
    ],
    "工程工具與 AI (Tools & AI)": [
        { name: "HSPICE 模擬", pct: 80 },
        { name: "Prompt Engineering", pct: 85 },
        { name: "Git / GitHub", pct: 70 }
    ]
};

const coursesData = [
    {
        name: "電路學 (Circuit Theory)",
        semester: "113-1",
        category: "電機核心",
        skills: ["電路分析", "HSPICE 模擬"],
        description: "電機工程基石，涵蓋一階與二階電路之時域與頻域響應分析。"
    },
    {
        name: "計算機程式 (Computer Programming)",
        semester: "112-1",
        category: "資工基礎",
        skills: ["C/C++", "演算法開發"],
        description: "學習程式邏輯與資料結構，並透過實作練習解決計算問題。"
    }
];

// 專案加入 image 欄位作為縮圖
const projectsData = [
    {
        name: "德州撲克記帳本",
        oneLiner: "專為線下球局設計的即時記帳工具。",
        details: "解決多人局頻繁買入、結算時帳目誤差的痛點，支援自動計算淨利與複製結果。",
        techStack: ["HTML", "Tailwind CSS", "JS"],
        image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=600&auto=format&fit=crop", // 撲克相關情境圖
        github: "#",
        demo: "poker.html",
        status: "MVP 已完成"
    },
    {
        name: "台股技術分析工具",
        oneLiner: "自動化 K 線形態篩選與策略測試應用。",
        details: "透過 Python 抓取即時數據，結合技術指標進行選股與歷史回測。",
        techStack: ["Python", "Pandas", "API"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop", // 股市相關情境圖
        github: "#",
        demo: "#",
        status: "開發中"
    }
];

// --- 2. 渲染邏輯區 ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 初始化 AOS 動畫
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });

    // 初始化 Lucide 圖示
    lucide.createIcons();

    // 更新年份
    const yearEl = document.getElementById('current-year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // 渲染 Skills (帶進度條)
    const skillsContainer = document.getElementById('skills-container');
    if(skillsContainer) {
        Object.keys(skillsData).forEach(key => {
            const div = document.createElement('div');
            div.className = 'skill-category';
            
            let skillsHtml = `<h3>${key}</h3>`;
            skillsData[key].forEach(skill => {
                skillsHtml += `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>${skill.name}</span>
                            <span>${skill.pct}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: 0%" data-target="${skill.pct}%"></div>
                        </div>
                    </div>
                `;
            });
            div.innerHTML = skillsHtml;
            skillsContainer.appendChild(div);
        });

        // 技能條動畫 (當滾動到該區塊時才展開)
        setTimeout(() => {
            document.querySelectorAll('.progress').forEach(bar => {
                bar.style.width = bar.getAttribute('data-target');
            });
        }, 500);
    }

    // 渲染 Courses
    const coursesContainer = document.getElementById('courses-container');
    if(coursesContainer) {
        coursesData.forEach((c, index) => {
            const div = document.createElement('div');
            div.className = 'course-item';
            div.setAttribute('data-aos', 'fade-up');
            div.setAttribute('data-aos-delay', index * 100);
            div.innerHTML = `
                <div class="course-info">
                    <div class="course-meta">${c.semester} | ${c.category}</div>
                    <h4>${c.name}</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">${c.description}</p>
                    <div class="course-skills">
                        ${c.skills.map(s => `<span class="c-skill"><i data-lucide="check-circle" class="icon-inline" style="width:12px; height:12px;"></i> ${s}</span>`).join('')}
                    </div>
                </div>
            `;
            coursesContainer.appendChild(div);
        });
        lucide.createIcons(); // 為新加入的 icon 重新渲染
    }

    // 渲染 Projects (帶圖片)
    const projectsContainer = document.getElementById('projects-container');
    if(projectsContainer) {
        projectsData.forEach((p, index) => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.setAttribute('data-aos', 'fade-up');
            div.setAttribute('data-aos-delay', index * 100);
            div.innerHTML = `
                <img src="${p.image}" alt="${p.name}" class="pj-img">
                <div class="pj-content">
                    <div class="pj-status">${p.status}</div>
                    <h3>${p.name}</h3>
                    <p class="pj-one-liner">${p.oneLiner}</p>
                    <p class="pj-details">${p.details}</p>
                    <div class="pj-tags">
                        ${p.techStack.map(t => `<span class="pj-tag">${t}</span>`).join('')}
                    </div>
                    <div class="pj-links">
                        <a href="${p.github}" class="pj-link"><i data-lucide="github" class="icon-inline"></i> Code</a>
                        <a href="${p.demo}" class="pj-link"><i data-lucide="external-link" class="icon-inline"></i> Demo</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(div);
        });
        lucide.createIcons();
    }
});
