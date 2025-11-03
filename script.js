document.addEventListener('DOMContentLoaded', function() {

    // --- (新) 案例库数据 ---
    // 包含了您的原始6个案例 + 40个新案例
    const cases = [
        // --- 您的原始案例 ---
        {
            id: 1, title: "Halicin抗生素发现", domain: "药物发现", technique: "生成模型",
            description: "MIT使用生成对抗网络发现新型广谱抗生素Halicin，可对抗耐药菌。效果提升: 90%",
            source: "https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1"
        },
        {
            id: 2, title: "MOF催化剂筛选", domain: "催化化学", technique: "GNN",
            description: "伯克利实验室开发3D-GNN模型，筛选出CO2还原性能提升40%的Ni-MOF催化剂。效果提升: 40%",
            source: "https://www.science.org/doi/10.1126/science.aax1566"
        },
        {
            id: 3, title: "逆合成路线规划 (IBM RXN)", domain: "合成化学", technique: "NLP",
            description: "IBM RXN系统使用Transformer模型实现80%准确率的逆合成分析。效果提升: 10倍",
            source: "https://pubs.acs.org/doi/10.1021/acscentsci.9b00576"
        },
        {
            id: 4, title: "流动化学优化 (MIT)", domain: "合成化学", technique: "RL",
            description: "MIT开发强化学习系统，自动优化流动化学反应条件。收率从68%提升至89%",
            source: "https://www.science.org/doi/10.1126/science.aay2387"
        },
        {
            id: 5, title: "钙钛矿材料设计", domain: "材料化学", technique: "机器学习",
            description: "通过机器学习预测钙钛矿太阳能电池材料的带隙和稳定性。筛选效率提升: 50倍",
            source: "https://www.nature.com/articles/s41560-021-00839-0"
        },
        {
            id: 6, title: "分子生成与优化 (Insilico)", domain: "药物发现", technique: "生成模型",
            description: "Insilico Medicine使用生成式AI设计新型纤维化药物分子。临床前实验显示显著活性",
            source: "https://www.nature.com/articles/s41587-019-0224-x"
        },
        // --- 您新增的 40 个案例 ---
        {
            id: 7, title: "荧光COF材料发现", domain: "材料化学", technique: "AI预测",
            description: "结合高通量筛选和机器学习，发现具有优异荧光性能的共价有机框架（COF）材料。",
            source: "https://www.nature.com/articles/s41557-025-01974-x"
        },
        {
            id: 8, title: "Prompt2Poly：AI设计聚合物", domain: "材料化学", technique: "生成模型",
            description: "使用基于提示（Prompt）的生成模型，根据所需的性质描述自动设计聚合物。",
            source: "https://pubs.rsc.org/en/content/articlelanding/2025/py/d5py00921a/unauth"
        },
        {
            id: 9, title: "GATE材料发现框架", domain: "材料化学", technique: "AI预测",
            description: "一个可泛化的AI框架，结合物理化学知识，用于加速新材料的发现。",
            source: "https://quantumzeitgeist.com/learning-gate-framework-enables-generalizable-materials-discovery-jointly-physicochemical/"
        },
        {
            id: 10, title: "AI驱动X射线光谱分析", domain: "物理化学", technique: "AI预测",
            description: "利用AI模型解析复杂的X射线光谱数据，以确定材料的电子结构。",
            source: "https://www.nature.com/articles/s41524-025-01771-7"
        },
        {
            id: 11, title: "AI在化学药物发现中的应用潜力", domain: "药物发现", technique: "AI预测",
            description: "综述AI技术（如深度学习）在药物靶点识别、分子筛选和设计中的应用。",
            source: "https://ieeexplore.ieee.org/document/10568743"
        },
        {
            id: 12, title: "AI预测有机反应的合适条件", domain: "合成化学", technique: "AI预测",
            description: "开发AI模型，通过分析大量文献数据，预测给定反应的最佳溶剂、温度和催化剂。",
            source: "https://pubs.acs.org/doi/10.1021/acscentsci.8b00357"
        },
        {
            id: 13, title: "化学反应产量预测 (IEEE)", domain: "合成化学", technique: "AI预测",
            description: "使用机器学习模型，根据反应物和条件预测化学反应的最终产率。",
            source: "https://ieeexplore.ieee.org/document/9440947"
        },
        {
            id: 14, title: "有机反应结果的预测", domain: "合成化学", technique: "AI预测",
            description: "利用AI模型，在反应进行前预测主要产物的结构，加速合成路线探索。",
            source: "https://pubs.acs.org/doi/10.1021/acscentsci.7b00064"
        },
        {
            id: 15, title: "定量构效关系 (QSAR)", domain: "化学信息学", technique: "机器学习",
            description: "综述QSAR模型的发展，利用分子结构描述符来预测其生物活性或物理化学性质。",
            source: "https://webofscience.clarivate.cn/wos/woscc/full-record/WOS:000349943100007"
        },
        {
            id: 16, title: "AI预测化学反应结果 (AIChE)", domain: "合成化学", technique: "AI预测",
            description: "应用AI技术，特别是深度学习，来预测复杂化学反应的产物和产率。",
            source: "https://aiche.onlinelibrary.wiley.com/doi/10.1002/aic.17190"
        },
        {
            id: 17, title: "AI在药物发现中的应用 (MDPI)", domain: "药物发现", technique: "AI预测",
            description: "讨论AI技术，包括机器学习和深度学习，在现代药物发现流程中的多样化应用。",
            source: "https://www.mdpi.com/1424-8247/16/9/1259"
        },
        {
            id: 18, title: "蛋白质复合物结构预测 (AlphaFold)", domain: "生物化学", technique: "深度学习",
            description: "利用深度学习（如AlphaFold-Multimer）高精度预测蛋白质-蛋白质相互作用和复合物结构。",
            source: "https://www.sciencedirect.com/science/article/pii/S0959440X23000039"
        },
        {
            id: 19, title: "计算多相催化", domain: "催化化学", technique: "AI预测",
            description: "结合AI和DFT计算，加速多相催化剂的筛选和机理研究。",
            source: "https://www.sciencedirect.com/science/article/pii/S0021951724001957"
        },
        {
            id: 20, title: "优化太阳能电池设计", domain: "材料化学", technique: "AI预测",
            description: "使用AI模型（如贝叶斯优化）来寻找高效、稳定的有机太阳能电池材料组合。",
            source: "https://pubs.acs.org/doi/10.1021/acs.jpclett.4c03580"
        },
        {
            id: 21, title: "选择可行电催化剂", domain: "催化化学", technique: "AI预测",
            description: "利用AI模型筛选电催化剂，加速例如CO2还原或析氢反应 (HER) 的催化剂开发。",
            source: "https://pubs.rsc.org/en/content/articlelanding/2024/ta/d4ta04991h"
        },
        {
            id: 22, title: "辅助催化剂优化", domain: "催化化学", technique: "AI预测",
            description: "综述机器学习在催化剂设计和优化中的应用，包括活性预测和机理探索。",
            source: "https://pubs.acs.org/doi/10.1021/acscatal.0c05661"
        },
        {
            id: 23, title: "二氧化钛光催化降解空气污染物预测", domain: "催化化学", technique: "AI预测",
            description: "开发AI模型预测TiO₂在光催化下降解挥发性有机物（VOCs）的效率。",
            source: "https://www.sciencedirect.com/science/article/pii/S2590123024008922"
        },
        {
            id: 24, title: "光催化水分解制氢深度学习预测", domain: "催化化学", technique: "深度学习",
            description: "使用深度学习模型预测不同催化剂在自然光下光催化水分解制氢的效率。",
            source: "https://www.sciencedirect.com/science/article/pii/S0196890423013535"
        },
        {
            id: 25, title: "一氧化碳的整合捕获和转化 (ICCAT)", domain: "催化化学", technique: "AI预测",
            description: "研究和预测用于CO₂捕获和原位转化为有价值化学品（如甲醇）的双功能材料。",
            source: "https://www.sciencedirect.com/science/article/pii/S2666546824000272"
        },
        {
            id: 26, title: "探索预测掺杂ZnO带隙的建模技术", domain: "材料化学", technique: "机器学习",
            description: "比较不同的机器学习模型（如ANN, SVM）在预测掺杂氧化锌（ZnO）半导体带隙方面的准确性。",
            source: "https://www.sciencedirect.com/science/article/pii/S0301010425000047"
        },
        {
            id: 27, title: "动态电池类型检测", domain: "材料化学", technique: "AI预测",
            description: "使用AI算法根据电池充放电曲线动态识别电池类型和健康状态（SOH）。",
            source: "https://ieeexplore.ieee.org/document/10374630"
        },
        {
            id: 28, title: "无机化学反应预测", domain: "合成化学", technique: "AI预测",
            description: "开发模型预测高温固相反应等无机化学反应的产物。",
            source: "https://ieeexplore.ieee.org/document/10986863"
        },
        {
            id: 29, title: "AI应用于逆合成预测及药物化学", domain: "药物发现", technique: "AI预测",
            description: "综述AI在逆合成分析和药物化学中的最新进展，特别是在先导化合物优化方面。",
            source: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.4c02749"
        },
        {
            id: 30, title: "电池优化 (IEEE)", domain: "材料化学", technique: "AI预测",
            description: "利用AI模型优化电池管理系统（BMS）和电极材料设计，以延长电池寿命。",
            source: "https://ieeexplore.ieee.org/document/10837428"
        },
        {
            id: 31, title: "对化学系统进行预测性洞察 (Chem. Rev.)", domain: "化学信息学", technique: "机器学习",
            description: "（综述）利用机器学习从大型化学数据集中提取洞察，预测反应性和材料性质。",
            source: "https://pubs.acs.org/doi/10.1021/acs.chemrev.1c00107"
        },
        {
            id: 32, title: "分子和材料科学 (Nature)", domain: "材料化学", technique: "机器学习",
            description: "（综述）机器学习在加速分子和材料科学发现中的应用，包括性质预测和结构生成。",
            source: "https://www.nature.com/articles/s41586-018-0337-2"
        },
        {
            id: 33, title: "探索化合物空间 (Nature)", domain: "化学信息学", technique: "机器学习",
            description: "（综述）如何使用机器学习和AI技术来探索广阔的化学化合物空间，寻找新分子。",
            source: "https://www.nature.com/articles/s41570-020-0189-9"
        },
        {
            id: 34, title: "分子性质预测 (Scopus)", domain: "化学信息学", technique: "AI预测",
            description: "利用AI模型（如GNN）从分子图结构中直接预测其物理化学性质。",
            source: "https://www.scopus.com/pages/publications/85158082388?inward="
        },
        {
            id: 35, title: "化学反应预测 (ACS)", domain: "合成化学", technique: "AI预测",
            description: "（综述）早期关于使用AI和数据驱动方法预测化学反应产物的尝试。",
            source: "https://pubs.acs.org/doi/10.1021/ci200207y"
        },
        {
            id: 36, title: "在机制层面预测复杂化学反应", domain: "合成化学", technique: "AI预测",
            description: "开发不仅预测产物，还能预测反应机理和过渡态的AI模型。",
            source: "https://pubs.acs.org/doi/10.1021/ci3003039"
        },
        {
            id: 37, title: "预测有机化学反应 (ACSCentSci)", domain: "合成化学", technique: "深度学习",
            description: "使用深度神经网络，通过“学习”大量已知反应来预测未知反应的结果。",
            source: "https://pubs.acs.org/doi/10.1021/acscentsci.6b00219"
        },
        {
            id: 38, title: "规划化学合成 (Nature)", domain: "合成化学", technique: "AI预测",
            description: "开发AI系统，自动进行逆合成分析，规划出从简单起始原料到复杂目标分子的合成路线。",
            source: "https://www.nature.com/articles/nature25978"
        },
        {
            id: 39, title: "构建过渡金属纳米颗粒的势能表面", domain: "物理化学", technique: "机器学习",
            description: "使用机器学习（如神经网络势）来构建高精度的过渡金属纳米颗粒势能表面，用于动力学模拟。",
            source: "https://ieeexplore.ieee.org/document/5366470"
        },
        {
            id: 40, title: "合成有机化学中的逆合成分析混合系统", domain: "合成化学", technique: "AI预测",
            description: "结合基于规则的专家系统和AI模型，进行更可靠的逆合成分析。",
            source: "https://ieeexplore.ieee.org/document/5726552"
        },
        {
            id: 41, title: "非线性建模 (IEEE)", domain: "化学信息学", technique: "机器学习",
            description: "在化学信息学中使用非线性建模技术（如神经网络）来处理复杂的构效关系。",
            source: "https://ieeexplore.ieee.org/document/5359997"
        },
        {
            id: 42, title: "聚合物性能预测与优化", domain: "材料化学", technique: "AI预测",
            description: "使用AI模型，根据聚合物的单体和结构来预测其机械性能、热性能等。",
            source: "https://ieeexplore.ieee.org/document/1650254"
        },
        {
            id: 43, title: "寻找和优化有机化学反应条件", domain: "合成化学", technique: "AI预测",
            description: "利用AI算法（如贝叶斯优化）在多维参数空间中快速寻找最佳反应条件。",
            source: "https://ieeexplore.ieee.org/document/11035048"
        },
        {
            id: 44, title: "分子性质预测 (IEEE 2024)", domain: "化学信息学", technique: "AI预测",
            description: "最新的AI模型进展，用于更精确地预测分子的多种性质。",
            source: "https://ieeexplore.ieee.org/document/10695352"
        },
        {
            id: 45, title: "分子性质预测 (IEEE 2025)", domain: "化学信息学", technique: "AI预测",
            description: "（2025年预印）关于使用大型图模型进行分子性质预测的最新研究。",
            source: "https://ieeexplore.ieee.org/document/10863929"
        },
        {
            id: 46, title: "预测物质溶解度", domain: "化学信息学", technique: "AI预测",
            description: "使用机器学习模型，根据分子结构预测其在不同溶剂中的溶解度。",
            source: "https://ieeexplore.ieee.org/document/9535593"
        },
        {
            id: 47, title: "加速化学反应 (IEEE)", domain: "合成化学", technique: "AI预测",
            description: "利用AI进行高通量虚拟筛选和反应条件优化，以加速化学反应的发现。",
            source: "https://ieeexplore.ieee.org/document/10150643"
        },
        {
            id: 48, title: "分子设计和优化 (JCIM)", domain: "药物发现", technique: "AI预测",
            description: "（综述）讨论用于药物设计的分子生成、优化和性质预测的AI方法。",
            source: "https://pubs.acs.org/doi/10.1021/acs.jcim.2c01191"
        },
        {
            id: 49, title: "预测化学反应产率 (IOP)", domain: "合成化学", technique: "AI预测",
            description: "开发机器学习模型，精确预测化学反应的产率，辅助实验决策。",
            source: "https://iopscience.iop.org/article/10.1088/2632-2153/abc81d"
        }
    ];

    // --- DOM 元素引用 ---
    const navItems = document.querySelectorAll('.nav-menu li');
    const workspacePages = document.querySelectorAll('.workspace-page');
    const toolboxItems = document.querySelectorAll('.toolbox-item');
    const modal = document.getElementById('tool-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModalButton = document.getElementById('close-modal-button');
    const backButtons = document.querySelectorAll('.btn-back');
    
    // 案例库筛选器
    const searchInput = document.getElementById('search-input');
    const domainFilter = document.getElementById('domain-filter');
    const techFilter = document.getElementById('tech-filter');
    const casesContainerFull = document.getElementById('cases-container-full');
    const casesContainerHome = document.getElementById('cases-container-home');

    // AI 聊天
    const chatInputs = {
        'home': document.getElementById('chat-input-home'),
        'full': document.getElementById('chat-input-full')
    };
    const sendButtons = {
        'home': document.getElementById('send-message-home'),
        'full': document.getElementById('send-message-full')
    };
    const chatMessages = {
        'home': document.getElementById('chat-messages-home'),
        'full': document.getElementById('chat-messages-full')
    };

    // --- 导航逻辑 (重构) ---
    function navigateToPage(pageId) {
        // 1. 隐藏所有页面
        workspacePages.forEach(page => page.classList.remove('active-page'));
        
        // 2. 激活对应页面
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active-page');
        } else {
            // Fallback 到首页
            document.getElementById('page-home').classList.add('active-page');
        }

        // 3. 更新侧边栏菜单的 'active' 状态
        navItems.forEach(item => {
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 侧边栏导航点击
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            navigateToPage(pageId);
        });
    });

    // 工具箱项目点击
    toolboxItems.forEach(item => {
        item.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            
            if (tool === 'syslab-cst' || tool === 'syslab-kinetics') {
                // (新) 导航到专属工具页面
                const pageId = (tool === 'syslab-cst') ? 'page-tool-cst' : 'page-tool-kinetics';
                navigateToPage(pageId);
                
                // (新) 同步更新侧边栏到 "工具箱"
                navItems.forEach(nav => {
                    nav.classList.toggle('active', nav.getAttribute('data-page') === 'toolbox');
                });
            } else {
                // (旧) 为其他工具打开模态框
                openToolModal(tool);
            }
        });
    });

    // 工具详情页的 "返回" 按钮
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            navigateToPage('toolbox');
        });
    });

    // --- 案例库逻辑 (重构) ---
    function populateFilters() {
        const domains = [...new Set(cases.map(item => item.domain))].sort();
        const techs = [...new Set(cases.map(item => item.technique))].sort();

        domainFilter.innerHTML = '<option value="">所有领域</option>';
        techFilter.innerHTML = '<option value="">所有技术</option>';
        
        domains.forEach(d => domainFilter.innerHTML += `<option value="${d}">${d}</option>`);
        techs.forEach(t => techFilter.innerHTML += `<option value="${t}">${t}</option>`);
    }

    // (新) 重写为列表视图
    function renderCases(container, caseList) {
        if (!container) return;
        container.innerHTML = '';
        if (caseList.length === 0) {
            container.innerHTML = '<p class="text-muted p-3">未找到匹配的案例。</p>';
            return;
        }

        caseList.forEach(item => {
            const caseHTML = `
                <div class="list-group-item case-list-item">
                    <div class="case-title">${item.title}</div>
                    <div class="case-description">${item.description}</div>
                    <div class="case-footer">
                        <div class="case-tags">
                            <span class="badge bg-primary tech-tag">${item.domain}</span>
                            <span class="badge bg-secondary tech-tag">${item.technique}</span>
                        </div>
                        <a href="${item.source}" target="_blank" class="case-link">
                            查看文献 <i class="fas fa-external-link-alt fa-xs"></i>
                        </a>
                    </div>
                </div>
            `;
            container.innerHTML += caseHTML;
        });
    }

    function filterAndRenderCases() {
        const domain = domainFilter.value;
        const tech = techFilter.value;
        const search = searchInput.value.toLowerCase();

        const filtered = cases.filter(item => {
            return (!domain || item.domain === domain) &&
                   (!tech || item.technique === tech) &&
                   (!search || item.title.toLowerCase().includes(search) ||
                               item.description.toLowerCase().includes(search));
        });

        // 渲染完整列表
        renderCases(casesContainerFull, filtered);
        
        // (新) 渲染首页的精简列表 (只显示前5个)
        renderCases(casesContainerHome, filtered.slice(0, 5));
    }

    // --- 模态框逻辑 (清理) ---
    function openToolModal(tool) {
        let title = '工具详情';
        let content = '<p>此工具详情将在后续版本中提供。</p>';

        switch(tool) {
            case 'orbital':
                title = '分子轨道可视化 (模拟)';
                content = `
                    <p>此工具可以展示不同量子数的原子轨道分布图和电子云密度图。</p>
                    <div class="alert alert-info mt-3">
                        <i class="fas fa-info-circle"></i> 
                        这是一个功能原型。完整的工具请在 "Syslab APP 工具箱" 中查找。
                    </div>
                `;
                break;
            case 'electrochemistry':
                title = '电化学参数计算 (模拟)';
                content = `
                    <p>此工具可以计算交换电流密度、传递系数等电化学动力学参数。</p>
                    <div class="alert alert-info mt-3">
                        <i class="fas fa-info-circle"></i> 
                        这是一个功能原型。完整的工具请在 "Syslab APP 工具箱" 中查找。
                    </div>
                `;
                break;
            case 'help': // (新) 帮助模态框
                title = '帮助中心';
                content = `
                    <h5>欢迎使用 AI 化学工具箱</h5>
                    <p>这是一个用于展示 AI 在化学领域应用的前端门户网站。</p>
                    <ul>
                        <li><b>工具箱:</b> 包含一系列可交互的化学工具。我们推荐下载并使用功能完善的 <b>Syslab APP</b> (如 CST 建模, 动力学Pro)。</li>
                        <li><b>案例库:</b> 汇集了 AI+化学领域的最新顶级科研文献。</li>
                        <li><b>AI 助手:</b> 一个模拟的聊天机器人，用于展示 AI 交互的潜力。</li>
                    </ul>
                `;
                break;
            // 其他工具...
        }
        
        modalTitle.textContent = title;
        modalContent.innerHTML = content;
        modal.style.display = 'flex';
    }

    closeModalButton.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // (新) 帮助按钮现在打开模态框
    document.getElementById('help-button').addEventListener('click', () => openToolModal('help'));
    // (新) 禁用的按钮没有点击事件
    // document.getElementById('settings-button')...
    // document.getElementById('user-avatar')...

    // --- AI 聊天逻辑 (保留模拟) ---
    function setupChat(id) {
        const input = chatInputs[id];
        const button = sendButtons[id];
        const messages = chatMessages[id];

        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender);
            messageDiv.textContent = text;
            messages.appendChild(messageDiv);
            messages.scrollTop = messages.scrollHeight;
        }

        function sendMessage() {
            const message = input.value.trim();
            if (message === '') return;
            
            addMessage(message, 'user');
            input.value = '';
            
            setTimeout(() => {
                const responses = [
                    "这是一个很好的问题。您可以在'案例库'中查找相关文献。",
                    "根据我的分析，您提到的功能与'CST 超表面建模' APP 相关，您可以在'工具箱'中下载它。",
                    "我是一个模拟助手。如需真实 AI 功能，需要连接到后端 LLM API。",
                    "我建议您查看'化学动力学Pro' APP，它使用 SciPy 进行了高精度模拟。"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, 'ai');
            }, 1000);
        }

        button.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
    
    setupChat('home');
    setupChat('full');

    // --- 初始化 ---
    populateFilters();
    filterAndRenderCases();
    navigateToPage('home'); // 默认显示首页
});
