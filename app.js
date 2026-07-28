/* ===== 银行数据 ===== */
const BANKS = [
  { key: 'icbc',    name: '中国工商银行',   short: '工', color: '#C7000B' },
  { key: 'abc',     name: '中国农业银行',   short: '农', color: '#009076' },
  { key: 'boc',     name: '中国银行',       short: '中', color: '#AE0000' },
  { key: 'ccb',     name: '中国建设银行',   short: '建', color: '#0066B3' },
  { key: 'cmb',     name: '招商银行',       short: '招', color: '#C81D26' },
  { key: 'bocom',   name: '交通银行',       short: '交', color: '#003D7C' },
  { key: 'psbc',    name: '中国邮政储蓄银行', short: '邮', color: '#007B5F' },
  { key: 'citic',   name: '中信银行',       short: '信', color: '#B3282D' },
  { key: 'ceb',     name: '中国光大银行',   short: '光', color: '#7B1FA2' },
  { key: 'hxb',     name: '华夏银行',       short: '华', color: '#DD0E2C' },
  { key: 'cmbc',    name: '中国民生银行',   short: '民', color: '#00469A' },
  { key: 'cib',     name: '兴业银行',       short: '兴', color: '#005BAC' },
  { key: 'pab',     name: '平安银行',       short: '平', color: '#FF6600' },
  { key: 'spdb',    name: '上海浦东发展银行', short: '浦', color: '#5D2D8C' },
  { key: 'gdb',     name: '广发银行',       short: '广', color: '#8B1A1A' },
  { key: 'ceb2',    name: '浙商银行',       short: '浙', color: '#0088CC' },
  { key: 'bob',     name: '北京银行',       short: '京', color: '#D32F2F' },
  { key: 'bosc',    name: '上海银行',       short: '沪', color: '#1565C0' },
  { key: 'alipay',  name: '支付宝',         short: '支', color: '#1677FF' },
  { key: 'wechat',  name: '微信钱包',       short: '微', color: '#09BB07' },
  { key: 'unionpay',name: '银联云闪付',     short: '银', color: '#E60012' },
  { key: 'jd',      name: '京东金融',       short: '京', color: '#E1251B' },
  { key: 'cash',    name: '现金',           short: '现', color: '#78909C' },
  { key: 'other',   name: '其他',           short: '他', color: '#9E9E9E' },
];

/* ===== 表情库 ===== */
const EMOJI_LIST = [
  '🍚','🍜','🍞','🥗','🍔','🍕','☕','🍰','🍺','🧋',
  '🧴','🚿','🪥','💈','🧼','💆','💅','🧖','🛁','🧻',
  '📚','✏️','🖊️','📖','🎓','🏫','💻','📝','🎨','🔬',
  '👶','🧸','🍼','🚼','🎒','🛴','🎁','🧒','🎈','🏫',
  '👵','👴','🏠','💊','🩺','🧓','👨‍🦳','👩‍🦳','💝','🏡',
  '🚗','🚌','🚕','🚇','🚲','🛵','✈️','🚆','⛽','🅿️',
  '💊','🏥','🩹','🧬','💉','🩺','👨‍⚕️','🦷','🤒','💊',
  '🏠','🔑','🏦','🏡','🧾','📅','📦','🛋️','💡','🚿',
  '🎮','🎬','🎵','🎪','🎯','🎲','🎢','🎵','🎤','🍿',
  '🐾','🐶','🐱','🐰','🐹','🦜','🐟','🦴','🪺','🐦',
  '🎁','💌','💐','🤝','🎉','🎊','🧧','🍫','🌹','👨‍👩‍👦',
  '💼','📈','📉','📋','🖥️','📞','📠','🗂️','📌','📎',
  '📦','🛒','💳','💰','🤑','💸','🏦','📈','💹','🏆',
  '📝','❓','✨','⭐','🌟','💫','🔥','💥','🎉','🎊',
];

/* ===== 预设颜色方案 ===== */
const BG_COLORS = [
  { name: '浅灰', value: '#f0f2f5' },
  { name: '浅蓝', value: '#e3f2fd' },
  { name: '浅绿', value: '#e8f5e9' },
  { name: '浅粉', value: '#fce4ec' },
  { name: '浅黄', value: '#fffde7' },
  { name: '浅紫', value: '#f3e5f5' },
  { name: '米白', value: '#faf6f0' },
  { name: '天蓝', value: '#e0f7fa' },
  { name: '薄荷', value: '#e0f2f1' },
  { name: '暖橙', value: '#fff3e0' },
];

/* ===== 应用主对象 ===== */
const App = {
  // 数据
  data: {
    accounts: [],
    transactions: [],
    expenseCategories: [
      { name: '餐饮', emoji: '🍚' },
      { name: '洗护', emoji: '🧴' },
      { name: '学习', emoji: '📚' },
      { name: '孩子', emoji: '👶' },
      { name: '父母', emoji: '👵' },
      { name: '交通', emoji: '🚗' },
      { name: '医疗', emoji: '💊' },
      { name: '房贷', emoji: '🏠' },
      { name: '娱乐', emoji: '🎮' },
      { name: '宠物', emoji: '🐾' },
      { name: '人情', emoji: '🎁' },
      { name: '工作', emoji: '💼' },
      { name: '其他', emoji: '📝' },
    ],
    incomeCategories: [
      { name: '底薪', emoji: '💰' },
      { name: '提成', emoji: '📈' },
      { name: '意外收入', emoji: '🎰' },
      { name: '外卖', emoji: '🛵' },
      { name: '电商', emoji: '📦' },
    ],
    settings: {
      bgColor: '#f0f2f5',
      theme: 'light',
    },
  },

  // 临时状态
  state: {
    currentPage: 'expense',
    selectedExpenseCategory: null,
    selectedIncomeCategory: null,
    selectedExpenseAccount: null,
    selectedIncomeAccount: null,
    selectedBank: null,
    editingAccountId: null,
    editingCategoryType: null,
    editingCategoryIndex: null,
    selectedEmoji: null,
    donutChart: null,
  },

  /* ===== 初始化 ===== */
  init() {
    this.loadData();
    this.bindEvents();
    this.applyTheme();
    this.renderAll();
    this.setTodayDate();
  },

  /* ===== 数据持久化 ===== */
  loadData() {
    const saved = localStorage.getItem('bookkeepingData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.data = { ...this.data, ...parsed };
        if (!this.data.settings) {
          this.data.settings = { bgColor: '#f0f2f5', theme: 'light' };
        }
      } catch (e) {
        console.error('数据加载失败', e);
      }
    } else {
      // 首次使用，创建示例账户
      this.data.accounts = [
        { id: this.genId(), bankKey: 'icbc', name: '工资卡', balance: 15000, number: '6222' },
        { id: this.genId(), bankKey: 'alipay', name: '支付宝', balance: 3200, number: '' },
      ];
      this.saveData();
    }
  },

  saveData() {
    localStorage.setItem('bookkeepingData', JSON.stringify(this.data));
  },

  genId() {
    return 'id_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
  },

  /* ===== 事件绑定 ===== */
  bindEvents() {
    // 导航切换
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchPage(btn.dataset.page);
      });
    });

    // 报表标签切换
    document.querySelectorAll('.report-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.report-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.report-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('report' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)).classList.add('active');
        if (tab.dataset.tab === 'chart') {
          this.renderChart();
        } else {
          this.renderDetail();
        }
      });
    });

    // 主题切换
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.theme-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.data.settings.theme = btn.dataset.theme;
        this.applyTheme();
        this.saveData();
      });
    });

    // 背景颜色选择
    document.getElementById('customBgColor').addEventListener('input', (e) => {
      this.data.settings.bgColor = e.target.value;
      this.applyTheme();
      this.saveData();
    });

    // 图表筛选
    document.getElementById('chartPeriod').addEventListener('change', () => this.renderChart());
    document.getElementById('chartType').addEventListener('change', () => this.renderChart());

    // 提交按钮
    document.getElementById('submitExpense').addEventListener('click', () => this.submitTransaction('expense'));
    document.getElementById('submitIncome').addEventListener('click', () => this.submitTransaction('income'));

    // 点击遮罩关闭弹窗
    document.getElementById('accountModal').addEventListener('click', (e) => {
      if (e.target.id === 'accountModal') this.closeAccountModal();
    });
    document.getElementById('categoryModal').addEventListener('click', (e) => {
      if (e.target.id === 'categoryModal') this.closeCategoryModal();
    });
  },

  /* ===== 页面切换 ===== */
  switchPage(page) {
    this.state.currentPage = page;
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');

    if (page === 'reports') {
      setTimeout(() => this.renderChart(), 100);
    }
  },

  /* ===== 主题应用 ===== */
  applyTheme() {
    const theme = this.data.settings.theme;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    document.body.style.background = this.data.settings.bgColor;

    // 更新颜色选择器UI
    document.querySelectorAll('.color-swatch').forEach(s => {
      s.classList.toggle('active', s.dataset.color === this.data.settings.bgColor);
    });
    document.getElementById('customBgColor').value = this.data.settings.bgColor;

    // 更新主题按钮
    document.querySelectorAll('.theme-option').forEach(b => {
      b.classList.toggle('active', b.dataset.theme === theme);
    });
  },

  /* ===== 设置今天日期 ===== */
  setTodayDate() {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    document.getElementById('expenseDate').value = dateStr;
    document.getElementById('incomeDate').value = dateStr;
    const display = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    document.getElementById('todayDate').textContent = display;
    document.getElementById('todayDate2').textContent = display;

    // 设置明细默认日期范围（本月）
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
    document.getElementById('detailStartDate').value = firstDay;
    document.getElementById('detailEndDate').value = dateStr;
  },

  /* ===== 渲染所有 ===== */
  renderAll() {
    this.renderExpenseCategories();
    this.renderIncomeCategories();
    this.renderAccountSelectors();
    this.renderExpenseList();
    this.renderIncomeList();
    this.renderAccountCards();
    this.renderBgColorPalette();
    this.renderCategoryManage();
    this.updateTotalBalance();
  },

  /* ===== 渲染支出分类 ===== */
  renderExpenseCategories() {
    const grid = document.getElementById('expenseCategoryGrid');
    grid.innerHTML = this.data.expenseCategories.map((cat, i) => `
      <div class="category-item" data-index="${i}" onclick="App.selectExpenseCategory(${i})">
        <span class="category-emoji">${cat.emoji}</span>
        <span class="category-name">${cat.name}</span>
      </div>
    `).join('');
  },

  selectExpenseCategory(i) {
    this.state.selectedExpenseCategory = i;
    document.querySelectorAll('#expenseCategoryGrid .category-item').forEach((el, idx) => {
      el.classList.toggle('selected', idx === i);
    });
  },

  /* ===== 渲染收入分类 ===== */
  renderIncomeCategories() {
    const grid = document.getElementById('incomeCategoryGrid');
    grid.innerHTML = this.data.incomeCategories.map((cat, i) => `
      <div class="category-item" data-index="${i}" onclick="App.selectIncomeCategory(${i})">
        <span class="category-emoji">${cat.emoji}</span>
        <span class="category-name">${cat.name}</span>
      </div>
    `).join('');
  },

  selectIncomeCategory(i) {
    this.state.selectedIncomeCategory = i;
    document.querySelectorAll('#incomeCategoryGrid .category-item').forEach((el, idx) => {
      el.classList.toggle('selected', idx === i);
    });
  },

  /* ===== 渲染账户选择器 ===== */
  renderAccountSelectors() {
    const renderSelector = (containerId, selectFn) => {
      const container = document.getElementById(containerId);
      if (this.data.accounts.length === 0) {
        container.innerHTML = '<span style="color: var(--text-muted); font-size: 13px;">请先在"账户"页面添加账户</span>';
        return;
      }
      container.innerHTML = this.data.accounts.map((acc, i) => {
        const bank = BANKS.find(b => b.key === acc.bankKey) || BANKS[BANKS.length - 1];
        return `
          <div class="account-chip" data-index="${i}" onclick="${selectFn}(${i})">
            <div class="bank-logo sm" style="background:${bank.color}">${bank.short}</div>
            <span class="account-chip-name">${acc.name}</span>
          </div>
        `;
      }).join('');
    };
    renderSelector('expenseAccountSelector', 'App.selectExpenseAccount');
    renderSelector('incomeAccountSelector', 'App.selectIncomeAccount');
  },

  selectExpenseAccount(i) {
    this.state.selectedExpenseAccount = i;
    document.querySelectorAll('#expenseAccountSelector .account-chip').forEach((el, idx) => {
      el.classList.toggle('selected', idx === i);
    });
  },

  selectIncomeAccount(i) {
    this.state.selectedIncomeAccount = i;
    document.querySelectorAll('#incomeAccountSelector .account-chip').forEach((el, idx) => {
      el.classList.toggle('selected', idx === i);
    });
  },

  /* ===== 提交交易 ===== */
  submitTransaction(type) {
    const isExpense = type === 'expense';
    const categoryIndex = isExpense ? this.state.selectedExpenseCategory : this.state.selectedIncomeCategory;
    const accountIndex = isExpense ? this.state.selectedExpenseAccount : this.state.selectedIncomeAccount;
    const amount = parseFloat(document.getElementById(isExpense ? 'expenseAmount' : 'incomeAmount').value);
    const date = document.getElementById(isExpense ? 'expenseDate' : 'incomeDate').value;
    const note = document.getElementById(isExpense ? 'expenseNote' : 'incomeNote').value;

    // 验证
    if (categoryIndex === null) {
      this.showToast('请选择分类', 'error');
      return;
    }
    if (!amount || amount <= 0) {
      this.showToast('请输入有效金额', 'error');
      return;
    }
    if (accountIndex === null) {
      this.showToast(isExpense ? '请选择账户' : '记录必须选择账户', 'error');
      return;
    }

    const categories = isExpense ? this.data.expenseCategories : this.data.incomeCategories;
    const category = categories[categoryIndex];
    const account = this.data.accounts[accountIndex];

    const transaction = {
      id: this.genId(),
      type: type,
      category: category.name,
      emoji: category.emoji,
      amount: amount,
      accountId: account.id,
      accountName: account.name,
      bankKey: account.bankKey,
      date: date,
      note: note || '',
      createdAt: new Date().toISOString(),
    };

    this.data.transactions.unshift(transaction);

    // 更新账户余额
    if (isExpense) {
      account.balance -= amount;
    } else {
      account.balance += amount;
    }

    this.saveData();

    // 清空表单
    document.getElementById(isExpense ? 'expenseAmount' : 'incomeAmount').value = '';
    document.getElementById(isExpense ? 'expenseNote' : 'incomeNote').value = '';
    if (isExpense) {
      this.state.selectedExpenseCategory = null;
      document.querySelectorAll('#expenseCategoryGrid .category-item').forEach(el => el.classList.remove('selected'));
    } else {
      this.state.selectedIncomeCategory = null;
      document.querySelectorAll('#incomeCategoryGrid .category-item').forEach(el => el.classList.remove('selected'));
    }

    this.showToast(isExpense ? '支出记录成功！' : '收入记录成功！', 'success');

    // 刷新列表
    this.renderExpenseList();
    this.renderIncomeList();
    this.renderAccountSelectors();
    this.renderAccountCards();
    this.updateTotalBalance();
  },

  /* ===== 渲染交易列表 ===== */
  renderExpenseList() {
    this.renderTransactionList('expenseList', 'expense');
  },

  renderIncomeList() {
    this.renderTransactionList('incomeList', 'income');
  },

  renderTransactionList(containerId, type) {
    const container = document.getElementById(containerId);
    const list = this.data.transactions.filter(t => t.type === type).slice(0, 20);

    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">${type === 'expense' ? '🧾' : '💵'}</span>
          暂无${type === 'expense' ? '支出' : '收入'}记录
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(tx => {
      const bank = BANKS.find(b => b.key === tx.bankKey) || BANKS[BANKS.length - 1];
      return `
        <div class="transaction-item">
          <div class="tx-emoji">${tx.emoji}</div>
          <div class="tx-info">
            <div class="tx-category">${tx.category}</div>
            ${tx.note ? `<div class="tx-note">${this.escapeHtml(tx.note)}</div>` : ''}
            <div class="tx-meta">${tx.date} · ${bank.name}</div>
          </div>
          <div class="tx-amount ${type}">${type === 'expense' ? '-' : '+'}¥${tx.amount.toFixed(2)}</div>
          <button class="tx-delete" onclick="App.deleteTransaction('${tx.id}')" title="删除">✕</button>
        </div>
      `;
    }).join('');
  },

  deleteTransaction(id) {
    const tx = this.data.transactions.find(t => t.id === id);
    if (!tx) return;

    // 回滚账户余额
    const account = this.data.accounts.find(a => a.id === tx.accountId);
    if (account) {
      if (tx.type === 'expense') {
        account.balance += tx.amount;
      } else {
        account.balance -= tx.amount;
      }
    }

    this.data.transactions = this.data.transactions.filter(t => t.id !== id);
    this.saveData();
    this.showToast('删除成功', 'success');
    this.renderExpenseList();
    this.renderIncomeList();
    this.renderAccountSelectors();
    this.renderAccountCards();
    this.updateTotalBalance();
  },

  /* ===== 账户管理 ===== */
  renderAccountCards() {
    const container = document.getElementById('accountCards');
    if (this.data.accounts.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <span class="empty-icon">🏦</span>
          暂无账户，点击右上角添加
        </div>
      `;
      return;
    }

    container.innerHTML = this.data.accounts.map(acc => {
      const bank = BANKS.find(b => b.key === acc.bankKey) || BANKS[BANKS.length - 1];
      return `
        <div class="account-card" style="--bank-color: ${bank.color}">
          <div class="account-card-header">
            <div class="bank-logo" style="background:${bank.color}">${bank.short}</div>
            <div class="account-card-info">
              <div class="account-card-name">${this.escapeHtml(acc.name)}</div>
              <div class="account-card-bank">${bank.name}</div>
            </div>
            <div class="account-card-actions">
              <button onclick="App.editAccount('${acc.id}')" title="编辑">✏️</button>
              <button onclick="App.deleteAccount('${acc.id}')" title="删除">🗑️</button>
            </div>
          </div>
          <div class="account-card-balance">¥${acc.balance.toFixed(2)}</div>
          ${acc.number ? `<div class="account-card-number">**** ${this.escapeHtml(acc.number)}</div>` : ''}
        </div>
      `;
    }).join('');
  },

  openAccountModal(accountId = null) {
    this.state.editingAccountId = accountId;
    this.state.selectedBank = null;
    document.getElementById('accountModalTitle').textContent = accountId ? '编辑账户' : '添加账户';

    // 渲染银行选择
    const grid = document.getElementById('bankGrid');
    grid.innerHTML = BANKS.map(bank => `
      <div class="bank-option" data-key="${bank.key}" onclick="App.selectBank('${bank.key}')">
        <div class="bank-logo" style="background:${bank.color}">${bank.short}</div>
        <span class="bank-option-name">${bank.name}</span>
      </div>
    `).join('');

    // 填充编辑数据
    if (accountId) {
      const acc = this.data.accounts.find(a => a.id === accountId);
      if (acc) {
        this.state.selectedBank = acc.bankKey;
        document.querySelector(`.bank-option[data-key="${acc.bankKey}"]`)?.classList.add('selected');
        document.getElementById('accountName').value = acc.name;
        document.getElementById('accountBalance').value = acc.balance;
        document.getElementById('accountNumber').value = acc.number || '';
      }
    } else {
      document.getElementById('accountName').value = '';
      document.getElementById('accountBalance').value = '';
      document.getElementById('accountNumber').value = '';
    }

    document.getElementById('accountModal').classList.add('active');
  },

  closeAccountModal() {
    document.getElementById('accountModal').classList.remove('active');
    this.state.editingAccountId = null;
    this.state.selectedBank = null;
  },

  selectBank(key) {
    this.state.selectedBank = key;
    document.querySelectorAll('.bank-option').forEach(el => {
      el.classList.toggle('selected', el.dataset.key === key);
    });
  },

  saveAccount() {
    if (!this.state.selectedBank) {
      this.showToast('请选择银行', 'error');
      return;
    }
    const name = document.getElementById('accountName').value.trim();
    if (!name) {
      this.showToast('请输入账户名称', 'error');
      return;
    }
    const balance = parseFloat(document.getElementById('accountBalance').value) || 0;
    const number = document.getElementById('accountNumber').value.trim();

    if (this.state.editingAccountId) {
      const acc = this.data.accounts.find(a => a.id === this.state.editingAccountId);
      if (acc) {
        acc.bankKey = this.state.selectedBank;
        acc.name = name;
        acc.balance = balance;
        acc.number = number;
      }
    } else {
      this.data.accounts.push({
        id: this.genId(),
        bankKey: this.state.selectedBank,
        name: name,
        balance: balance,
        number: number,
      });
    }

    this.saveData();
    this.closeAccountModal();
    this.showToast('账户保存成功', 'success');
    this.renderAccountCards();
    this.renderAccountSelectors();
    this.updateTotalBalance();
  },

  editAccount(id) {
    this.openAccountModal(id);
  },

  deleteAccount(id) {
    const acc = this.data.accounts.find(a => a.id === id);
    if (!acc) return;

    // 检查是否有关联交易
    const hasTx = this.data.transactions.some(t => t.accountId === id);
    if (hasTx) {
      if (!confirm('该账户有相关交易记录，删除后交易记录将保留但不再关联账户。确认删除？')) return;
    } else {
      if (!confirm(`确认删除账户"${acc.name}"？`)) return;
    }

    this.data.accounts = this.data.accounts.filter(a => a.id !== id);
    this.saveData();
    this.showToast('账户已删除', 'success');
    this.renderAccountCards();
    this.renderAccountSelectors();
    this.updateTotalBalance();
  },

  /* ===== 报表 - 环形图 ===== */
  renderChart() {
    const period = document.getElementById('chartPeriod').value;
    const type = document.getElementById('chartType').value;
    const canvas = document.getElementById('donutChart');

    if (!canvas) return;

    // 筛选数据
    let filtered = this.data.transactions.filter(t => t.type === type);
    const now = new Date();
    if (period === 'month') {
      filtered = filtered.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      });
    } else if (period === 'week') {
      const weekAgo = new Date(now);
      weekAgo.setDate(now.getDate() - 7);
      filtered = filtered.filter(t => new Date(t.date) >= weekAgo);
    } else if (period === 'year') {
      filtered = filtered.filter(t => new Date(t.date).getFullYear() === now.getFullYear());
    }

    // 按分类汇总
    const categoryMap = {};
    filtered.forEach(tx => {
      if (!categoryMap[tx.category]) {
        categoryMap[tx.category] = { amount: 0, emoji: tx.emoji };
      }
      categoryMap[tx.category].amount += tx.amount;
    });

    const labels = Object.keys(categoryMap);
    const amounts = labels.map(k => categoryMap[k].amount);
    const total = amounts.reduce((s, a) => s + a, 0);

    // 颜色方案
    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
      '#FF9F40', '#FF6B6B', '#C9CBCF', '#54A0FF', '#5EE2A0',
      '#FECA57', '#FF6348', '#A55EEA', '#26DE81', '#FD9644',
    ];

    // 更新摘要
    const summaryEl = document.getElementById('chartSummary');
    const typeLabel = type === 'expense' ? '总支出' : '总收入';
    summaryEl.innerHTML = `
      <div class="summary-label">${typeLabel}</div>
      <div class="summary-total" style="color: ${type === 'expense' ? 'var(--expense-color)' : 'var(--income-color)'}">¥${total.toFixed(2)}</div>
    `;

    // 更新图例
    const legendEl = document.getElementById('chartLegend');
    if (labels.length === 0) {
      legendEl.innerHTML = '<div class="empty-state" style="padding:20px;">暂无数据</div>';
    } else {
      legendEl.innerHTML = labels.map((label, i) => {
        const percent = total > 0 ? (amounts[i] / total * 100).toFixed(1) : 0;
        return `
          <div class="legend-item">
            <div class="legend-color" style="background:${colors[i % colors.length]}"></div>
            <span class="legend-name">${categoryMap[label].emoji} ${label}</span>
            <span class="legend-amount">¥${amounts[i].toFixed(2)}</span>
            <span class="legend-percent">${percent}%</span>
          </div>
        `;
      }).join('');
    }

    // 绘制图表
    if (this.state.donutChart) {
      this.state.donutChart.destroy();
    }

    const ctx = canvas.getContext('2d');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (labels.length === 0) {
      this.state.donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['暂无数据'],
          datasets: [{
            data: [1],
            backgroundColor: ['#e0e0e0'],
            borderWidth: 0,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
          cutout: '68%',
        },
      });
    } else {
      this.state.donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels.map(l => `${categoryMap[l].emoji} ${l}`),
          datasets: [{
            data: amounts,
            backgroundColor: colors.slice(0, labels.length),
            borderWidth: 2,
            borderColor: isDark ? '#1e2a45' : '#ffffff',
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(ctx) {
                  const val = ctx.parsed;
                  const pct = total > 0 ? (val / total * 100).toFixed(1) : 0;
                  return `${ctx.label}: ¥${val.toFixed(2)} (${pct}%)`;
                },
              },
            },
          },
          cutout: '68%',
        },
      });
    }
  },

  /* ===== 报表 - 明细 ===== */
  renderDetail() {
    const startDate = document.getElementById('detailStartDate').value;
    const endDate = document.getElementById('detailEndDate').value;
    const typeFilter = document.getElementById('detailType').value;

    let filtered = this.data.transactions.filter(t => {
      if (startDate && t.date < startDate) return false;
      if (endDate && t.date > endDate) return false;
      if (typeFilter !== 'all' && t.type !== typeFilter) return false;
      return true;
    });

    // 按日期降序排序
    filtered.sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));

    // 汇总
    const totalExpense = filtered.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const totalIncome = filtered.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const net = totalIncome - totalExpense;

    document.getElementById('detailSummary').innerHTML = `
      <div class="summary-card expense">
        <div class="summary-card-label">支出</div>
        <div class="summary-card-value">¥${totalExpense.toFixed(2)}</div>
      </div>
      <div class="summary-card income">
        <div class="summary-card-label">收入</div>
        <div class="summary-card-value">¥${totalIncome.toFixed(2)}</div>
      </div>
      <div class="summary-card net">
        <div class="summary-card-label">结余</div>
        <div class="summary-card-value" style="color: ${net >= 0 ? 'var(--income-color)' : 'var(--expense-color)'}">¥${net.toFixed(2)}</div>
      </div>
    `;

    // 按日期分组
    const listEl = document.getElementById('detailList');
    if (filtered.length === 0) {
      listEl.innerHTML = '<div class="empty-state"><span class="empty-icon">📋</span>暂无明细记录</div>';
      return;
    }

    const grouped = {};
    filtered.forEach(tx => {
      if (!grouped[tx.date]) grouped[tx.date] = [];
      grouped[tx.date].push(tx);
    });

    let html = '';
    Object.keys(grouped).sort((a, b) => b.localeCompare(a)).forEach(date => {
      const dayTx = grouped[date];
      const dayExpense = dayTx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
      const dayIncome = dayTx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);

      const dateObj = new Date(date);
      const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
      const dateLabel = `${dateObj.getMonth() + 1}月${dateObj.getDate()}日 周${weekDays[dateObj.getDay()]}`;

      html += `<div class="detail-group-date">${dateLabel} · 支出 ¥${dayExpense.toFixed(2)} · 收入 ¥${dayIncome.toFixed(2)}</div>`;
      html += dayTx.map(tx => {
        const bank = BANKS.find(b => b.key === tx.bankKey) || BANKS[BANKS.length - 1];
        return `
          <div class="transaction-item">
            <div class="tx-emoji">${tx.emoji}</div>
            <div class="tx-info">
              <div class="tx-category">${tx.category}</div>
              ${tx.note ? `<div class="tx-note">${this.escapeHtml(tx.note)}</div>` : ''}
              <div class="tx-meta">${bank.name} · ${tx.accountName}</div>
            </div>
            <div class="tx-amount ${tx.type}">${tx.type === 'expense' ? '-' : '+'}¥${tx.amount.toFixed(2)}</div>
          </div>
        `;
      }).join('');
    });

    listEl.innerHTML = html;
  },

  /* ===== 设置 - 背景色 ===== */
  renderBgColorPalette() {
    const palette = document.getElementById('bgColorPalette');
    palette.innerHTML = BG_COLORS.map(c => `
      <div class="color-swatch ${c.value === this.data.settings.bgColor ? 'active' : ''}"
           style="background:${c.value}"
           data-color="${c.value}"
           title="${c.name}"
           onclick="App.selectBgColor('${c.value}')">
      </div>
    `).join('');
  },

  selectBgColor(color) {
    this.data.settings.bgColor = color;
    this.applyTheme();
    this.saveData();
    this.showToast('背景颜色已更新', 'success');
  },

  /* ===== 设置 - 分类管理 ===== */
  renderCategoryManage() {
    const renderList = (containerId, categories, type) => {
      const container = document.getElementById(containerId);
      container.innerHTML = categories.map((cat, i) => `
        <div class="category-manage-item">
          <span class="cat-emoji">${cat.emoji}</span>
          <span class="cat-name">${this.escapeHtml(cat.name)}</span>
          <div class="cat-actions">
            <button onclick="App.editCategory('${type}', ${i})" title="编辑">✏️</button>
            <button onclick="App.deleteCategory('${type}', ${i})" title="删除">🗑️</button>
          </div>
        </div>
      `).join('');
    };
    renderList('expenseCategoryManage', this.data.expenseCategories, 'expense');
    renderList('incomeCategoryManage', this.data.incomeCategories, 'income');
  },

  openCategoryModal(type, index = null) {
    this.state.editingCategoryType = type;
    this.state.editingCategoryIndex = index;
    document.getElementById('categoryModalTitle').textContent = index !== null ? '编辑分类' : '添加分类';

    // 渲染表情选择器
    const picker = document.getElementById('emojiPicker');
    picker.innerHTML = EMOJI_LIST.map(emoji => `
      <div class="emoji-option" data-emoji="${emoji}" onclick="App.selectEmoji('${emoji}')">${emoji}</div>
    `).join('');

    // 填充编辑数据
    if (index !== null) {
      const categories = type === 'expense' ? this.data.expenseCategories : this.data.incomeCategories;
      const cat = categories[index];
      document.getElementById('categoryName').value = cat.name;
      this.state.selectedEmoji = cat.emoji;
      document.querySelector(`.emoji-option[data-emoji="${cat.emoji}"]`)?.classList.add('selected');
    } else {
      document.getElementById('categoryName').value = '';
      this.state.selectedEmoji = null;
    }

    document.getElementById('categoryModal').classList.add('active');
  },

  closeCategoryModal() {
    document.getElementById('categoryModal').classList.remove('active');
    this.state.editingCategoryType = null;
    this.state.editingCategoryIndex = null;
    this.state.selectedEmoji = null;
  },

  selectEmoji(emoji) {
    this.state.selectedEmoji = emoji;
    document.querySelectorAll('.emoji-option').forEach(el => {
      el.classList.toggle('selected', el.dataset.emoji === emoji);
    });
  },

  editCategory(type, index) {
    this.openCategoryModal(type, index);
  },

  saveCategory() {
    const name = document.getElementById('categoryName').value.trim();
    if (!name) {
      this.showToast('请输入分类名称', 'error');
      return;
    }
    if (!this.state.selectedEmoji) {
      this.showToast('请选择表情', 'error');
      return;
    }

    const categories = this.state.editingCategoryType === 'expense' ? this.data.expenseCategories : this.data.incomeCategories;

    if (this.state.editingCategoryIndex !== null) {
      categories[this.state.editingCategoryIndex].name = name;
      categories[this.state.editingCategoryIndex].emoji = this.state.selectedEmoji;
    } else {
      categories.push({ name, emoji: this.state.selectedEmoji });
    }

    this.saveData();
    this.closeCategoryModal();
    this.showToast('分类保存成功', 'success');
    this.renderExpenseCategories();
    this.renderIncomeCategories();
    this.renderCategoryManage();
  },

  deleteCategory(type, index) {
    const categories = type === 'expense' ? this.data.expenseCategories : this.data.incomeCategories;
    if (categories.length <= 1) {
      this.showToast('至少保留一个分类', 'error');
      return;
    }
    const cat = categories[index];
    if (!confirm(`确认删除分类"${cat.name}"？`)) return;

    categories.splice(index, 1);
    this.saveData();
    this.showToast('分类已删除', 'success');
    this.renderExpenseCategories();
    this.renderIncomeCategories();
    this.renderCategoryManage();
  },

  /* ===== 更新总资产 ===== */
  updateTotalBalance() {
    const total = this.data.accounts.reduce((s, a) => s + a.balance, 0);
    document.getElementById('totalBalance').textContent = '¥' + total.toFixed(2);
  },

  /* ===== 数据管理 ===== */
  exportData() {
    const dataStr = JSON.stringify(this.data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `记账数据_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('数据已导出', 'success');
  },

  importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const imported = JSON.parse(ev.target.result);
          if (!imported.accounts || !imported.transactions) {
            this.showToast('数据格式不正确', 'error');
            return;
          }
          if (!confirm('导入将覆盖当前数据，确认继续？')) return;
          this.data = imported;
          if (!this.data.settings) {
            this.data.settings = { bgColor: '#f0f2f5', theme: 'light' };
          }
          this.saveData();
          this.applyTheme();
          this.renderAll();
          this.showToast('数据导入成功', 'success');
        } catch (err) {
          this.showToast('导入失败：' + err.message, 'error');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  clearAllData() {
    if (!confirm('⚠️ 确认清空所有数据？此操作不可恢复！')) return;
    if (!confirm('再次确认：所有账户、交易记录将被永久删除！')) return;
    this.data = {
      accounts: [],
      transactions: [],
      expenseCategories: [
        { name: '餐饮', emoji: '🍚' },
        { name: '洗护', emoji: '🧴' },
        { name: '学习', emoji: '📚' },
        { name: '孩子', emoji: '👶' },
        { name: '父母', emoji: '👵' },
        { name: '交通', emoji: '🚗' },
        { name: '医疗', emoji: '💊' },
        { name: '房贷', emoji: '🏠' },
        { name: '娱乐', emoji: '🎮' },
        { name: '宠物', emoji: '🐾' },
        { name: '人情', emoji: '🎁' },
        { name: '工作', emoji: '💼' },
        { name: '其他', emoji: '📝' },
      ],
      incomeCategories: [
        { name: '底薪', emoji: '💰' },
        { name: '提成', emoji: '📈' },
        { name: '意外收入', emoji: '🎰' },
        { name: '外卖', emoji: '🛵' },
        { name: '电商', emoji: '📦' },
      ],
      settings: { bgColor: '#f0f2f5', theme: 'light' },
    };
    this.saveData();
    this.applyTheme();
    this.renderAll();
    this.showToast('所有数据已清空', 'success');
  },

  /* ===== 工具方法 ===== */
  showToast(msg, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show ' + type;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },
};

/* ===== 启动应用 ===== */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
