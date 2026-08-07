const questionsData = [
    { id: 'Q1', text: '新しいことを始める前に、十分な知識を身につけておきたい。', axis: 'KP', target: 'K' },
    { id: 'Q2', text: '失敗してもいいから、とりあえず挑戦した方が早いと思う。', axis: 'KP', target: 'P' },
    { id: 'Q3', text: '何かを説明するときは、経験よりも根拠を重視する。', axis: 'KP', target: 'K' },
    { id: 'Q4', text: '「考えすぎ」と言われることがある。', axis: 'KP', target: 'K' },
    { id: 'Q5', text: '困ったらまず詳しい人や資料を探す。', axis: 'KP', target: 'K' },
    { id: 'Q6', text: '実際にやってみないと分からないことの方が多いと思う。', axis: 'KP', target: 'P' },
    { id: 'Q7', text: '一つの物事を深く理解することに楽しさを感じる。', axis: 'KP', target: 'K' },
    { id: 'Q8', text: '思い立ったら細かいことを気にせず行動する。', axis: 'KP', target: 'P' },

    { id: 'Q9', text: 'ルールは皆のために絶対必要だと思う。', axis: 'OF', target: 'O' },
    { id: 'Q10', text: '決まりごとは、状況によって柔軟に変えてよいと思う。', axis: 'OF', target: 'F' },
    { id: 'Q11', text: '集団では、個人より全体の調和を優先したい。', axis: 'OF', target: 'O' },
    { id: 'Q12', text: '自分らしさを守るためなら、周囲と違っても構わない。', axis: 'OF', target: 'F' },
    { id: 'Q13', text: '約束や時間は必ず守るべきだと思う。', axis: 'OF', target: 'O' },
    { id: 'Q14', text: '納得できない決まりには従いたくない。', axis: 'OF', target: 'F' },
    { id: 'Q15', text: '多少不自由でも秩序が保たれる方が安心できる。', axis: 'OF', target: 'O' },
    { id: 'Q16', text: '自由のためなら多少の混乱は受け入れられる。', axis: 'OF', target: 'F' },

    { id: 'Q17', text: '大切な決断は、一人で決めるより誰かと相談したい。', axis: 'BS', target: 'B' },
    { id: 'Q18', text: '自分の信念は、周囲に反対されても曲げたくない。', axis: 'BS', target: 'S' },
    { id: 'Q19', text: '成功は一人より仲間と分かち合いたい。', axis: 'BS', target: 'B' },
    { id: 'Q20', text: '他人より自分の成長を優先することが多い。', axis: 'BS', target: 'S' },
    { id: 'Q21', text: '誰かの役に立てることに喜びを感じる。', axis: 'BS', target: 'B' },
    { id: 'Q22', text: '人に合わせすぎるくらいなら、一人の方が気楽だ。', axis: 'BS', target: 'S' },
    { id: 'Q23', text: '仲間が困っていたら、自分の予定を後回しにできる。', axis: 'BS', target: 'B' },
    { id: 'Q24', text: '最後に頼れるのは自分だけだと思う。', axis: 'BS', target: 'S' },

    { id: 'Q25', text: '長年受け継がれてきたものには、それだけの価値があると思う。', axis: 'TI', target: 'T' },
    { id: 'Q26', text: '古いやり方より、新しい方法を試したくなる。', axis: 'TI', target: 'I' },
    { id: 'Q27', text: '伝統や文化は、多少不便でも守るべきだと思う。', axis: 'TI', target: 'T' },
    { id: 'Q28', text: '前例がなくても、良いと思えば挑戦したい。', axis: 'TI', target: 'I' },
    { id: 'Q29', text: '新しいことより、確立された方法の方が安心できる。', axis: 'TI', target: 'T' },
    { id: 'Q30', text: '「今までそうだったから」という理由だけでは納得できない。', axis: 'TI', target: 'I' },
    { id: 'Q31', text: '変化よりも安定を大切にしたい。', axis: 'TI', target: 'T' },
    { id: 'Q32', text: '世界は変わり続けるべきだと思う。', axis: 'TI', target: 'I' }
];

const tiebreakers = {
    KP: { rep: ['Q3', 'Q5', 'Q7'], final: 'Q5' },
    OF: { rep: ['Q9', 'Q12', 'Q16'], final: 'Q9' },
    BS: { rep: ['Q18', 'Q21', 'Q24'], final: 'Q18' },
    TI: { rep: ['Q25', 'Q28', 'Q30'], final: 'Q30' }
};