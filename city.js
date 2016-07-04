/**
 * Created by Dean on 16/3/10.
 */
var cities = [
    {
        url: 'http://www.dianping.com/shanghai',
        cityName: '上海',
        pinyin: 'shanghai'
    },
    {
        url: 'http://www.dianping.com/beijing',
        cityName: '北京',
        pinyin: 'beijing'
    },
    {
        url: 'http://www.dianping.com/chongqing',
        cityName: '重庆',
        pinyin: 'chongqing'
    },
    {
        url: 'http://www.dianping.com/tianjin',
        cityName: '天津',
        pinyin: 'tianjin'
    },
    {
        url: 'http://www.dianping.com/miyun',
        cityName: '密云县',
        pinyin: 'miyun'
    },
    {
        url: 'http://www.dianping.com/yanqing',
        cityName: '延庆县',
        pinyin: 'yanqing'
    },
    {
        url: 'http://www.dianping.com/tongnan',
        cityName: '潼南区',
        pinyin: 'tongnan'
    },
    {
        url: 'http://www.dianping.com/tongliang',
        cityName: '铜梁区',
        pinyin: 'tongliang'
    },
    {
        url: 'http://www.dianping.com/rongcang',
        cityName: '荣昌区',
        pinyin: 'rongcang'
    },
    {
        url: 'http://www.dianping.com/bishan',
        cityName: '璧山区',
        pinyin: 'bishan'
    },
    {
        url: 'http://www.dianping.com/dianjian',
        cityName: '垫江县',
        pinyin: 'dianjian'
    },
    {
        url: 'http://www.dianping.com/wulong',
        cityName: '武隆县',
        pinyin: 'wulong'
    },
    {
        url: 'http://www.dianping.com/fengdu',
        cityName: '丰都县',
        pinyin: 'fengdu'
    },
    {
        url: 'http://www.dianping.com/chengkou',
        cityName: '城口县',
        pinyin: 'chengkou'
    },
    {
        url: 'http://www.dianping.com/liangping',
        cityName: '梁平县',
        pinyin: 'liangping'
    },
    {
        url: 'http://www.dianping.com/kaixian',
        cityName: '开县',
        pinyin: 'kaixian'
    },
    {
        url: 'http://www.dianping.com/wuxia',
        cityName: '巫溪县',
        pinyin: 'wuxia'
    },
    {
        url: 'http://www.dianping.com/wushanxian',
        cityName: '巫山县',
        pinyin: 'wushanxian'
    },
    {
        url: 'http://www.dianping.com/fengjie',
        cityName: '奉节县',
        pinyin: 'fengjie'
    },
    {
        url: 'http://www.dianping.com/yunyang',
        cityName: '云阳县',
        pinyin: 'yunyang'
    },
    {
        url: 'http://www.dianping.com/zhongxian',
        cityName: '忠县',
        pinyin: 'zhongxian'
    },
    {
        url: 'http://www.dianping.com/shizhu',
        cityName: '石柱土家族自治县',
        pinyin: 'shizhu'
    },
    {
        url: 'http://www.dianping.com/pengshui',
        cityName: '彭水苗族土家族自治县',
        pinyin: 'pengshui'
    },
    {
        url: 'http://www.dianping.com/youyang',
        cityName: '酉阳土家族苗族自治县',
        pinyin: 'youyang'
    },
    {
        url: 'http://www.dianping.com/xiushan',
        cityName: '秀山土家族苗族自治县',
        pinyin: 'xiushan'
    },
    {
        url: 'http://www.dianping.com/chongmingxian',
        cityName: '崇明县',
        pinyin: 'chongmingxian'
    },
    {
        url: 'http://www.dianping.com/wanzhou',
        cityName: '万州区',
        pinyin: 'wanzhou'
    },
    {
        url: 'http://www.dianping.com/fuling',
        cityName: '涪陵区',
        pinyin: 'fuling'
    },
    {
        url: 'http://www.dianping.com/changshou',
        cityName: '长寿区',
        pinyin: 'changshou'
    },
    {
        url: 'http://www.dianping.com/hechuan',
        cityName: '合川区',
        pinyin: 'hechuan'
    },
    {
        url: 'http://www.dianping.com/yongchuan',
        cityName: '永川区',
        pinyin: 'yongchuan'
    },
    {
        url: 'http://www.dianping.com/nanchuan',
        cityName: '南川区',
        pinyin: 'nanchuan'
    },
    {
        url: 'http://www.dianping.com/taiwan',
        cityName: '台湾',
        pinyin: 'taiwan'
    },
    {
        url: 'http://www.dianping.com/hongkong',
        cityName: '香港',
        pinyin: 'hongkong'
    },
    {
        url: 'http://www.dianping.com/macau',
        cityName: '澳门',
        pinyin: 'macau'
    },
    {
        url: 'http://www.dianping.com/taipei',
        cityName: '台北',
        pinyin: 'taipei'
    },
    {
        url: 'http://www.dianping.com/hualien',
        cityName: '花莲',
        pinyin: 'hualien'
    },
    {
        url: 'http://www.dianping.com/kaohsiung',
        cityName: '高雄',
        pinyin: 'kaohsiung'
    },
    {
        url: 'http://www.dianping.com/tainan',
        cityName: '台南',
        pinyin: 'tainan'
    },
    {
        url: 'http://www.dianping.com/taoyuan',
        cityName: '桃园',
        pinyin: 'taoyuan'
    },
    {
        url: 'http://www.dianping.com/newtaipei',
        cityName: '新北',
        pinyin: 'newtaipei'
    },
    {
        url: 'http://www.dianping.com/taichung',
        cityName: '台中',
        pinyin: 'taichung'
    },
    {
        url: 'http://www.dianping.com/kenting',
        cityName: '垦丁',
        pinyin: 'kenting'
    },
    {
        url: 'http://www.dianping.com/alishan',
        cityName: '阿里山',
        pinyin: 'alishan'
    },
    {
        url: 'http://www.dianping.com/riyuetan',
        cityName: '南投',
        pinyin: 'riyuetan'
    },
    {
        url: 'http://www.dianping.com/shijiazhuang',
        cityName: '石家庄',
        pinyin: 'shijiazhuang'
    },
    {
        url: 'http://www.dianping.com/baoding',
        cityName: '保定',
        pinyin: 'baoding'
    },
    {
        url: 'http://www.dianping.com/qinhuangdao',
        cityName: '秦皇岛',
        pinyin: 'qinhuangdao'
    },
    {
        url: 'http://www.dianping.com/handan',
        cityName: '邯郸',
        pinyin: 'handan'
    },
    {
        url: 'http://www.dianping.com/langfang',
        cityName: '廊坊',
        pinyin: 'langfang'
    },
    {
        url: 'http://www.dianping.com/tangshan',
        cityName: '唐山',
        pinyin: 'tangshan'
    },
    {
        url: 'http://www.dianping.com/xingtai',
        cityName: '邢台',
        pinyin: 'xingtai'
    },
    {
        url: 'http://www.dianping.com/chengde',
        cityName: '承德',
        pinyin: 'chengde'
    },
    {
        url: 'http://www.dianping.com/cangzhou',
        cityName: '沧州',
        pinyin: 'cangzhou'
    },
    {
        url: 'http://www.dianping.com/zhangjiakou',
        cityName: '张家口',
        pinyin: 'zhangjiakou'
    },
    {
        url: 'http://www.dianping.com/hengshui',
        cityName: '衡水',
        pinyin: 'hengshui'
    },
    {
        url: 'http://www.dianping.com/nandaihe',
        cityName: '南戴河',
        pinyin: 'nandaihe'
    },
    {
        url: 'http://www.dianping.com/xinji',
        cityName: '辛集市',
        pinyin: 'xinji'
    },
    {
        url: 'http://www.dianping.com/gaocheng',
        cityName: '藁城区',
        pinyin: 'gaocheng'
    },
    {
        url: 'http://www.dianping.com/jinzhoushi',
        cityName: '晋州市',
        pinyin: 'jinzhoushi'
    },
    {
        url: 'http://www.dianping.com/xinle',
        cityName: '新乐市',
        pinyin: 'xinle'
    },
    {
        url: 'http://www.dianping.com/luquan',
        cityName: '鹿泉区',
        pinyin: 'luquan'
    },
    {
        url: 'http://www.dianping.com/jingjing',
        cityName: '井陉县',
        pinyin: 'jingjing'
    },
    {
        url: 'http://www.dianping.com/zhengding',
        cityName: '正定县',
        pinyin: 'zhengding'
    },
    {
        url: 'http://www.dianping.com/luancheng',
        cityName: '栾城区',
        pinyin: 'luancheng'
    },
    {
        url: 'http://www.dianping.com/xingtang',
        cityName: '行唐县',
        pinyin: 'xingtang'
    },
    {
        url: 'http://www.dianping.com/lingshou',
        cityName: '灵寿县',
        pinyin: 'lingshou'
    },
    {
        url: 'http://www.dianping.com/gaoyi',
        cityName: '高邑县',
        pinyin: 'gaoyi'
    },
    {
        url: 'http://www.dianping.com/shenzhe',
        cityName: '深泽县',
        pinyin: 'shenzhe'
    },
    {
        url: 'http://www.dianping.com/zanhuang',
        cityName: '赞皇县',
        pinyin: 'zanhuang'
    },
    {
        url: 'http://www.dianping.com/wuji',
        cityName: '无极县',
        pinyin: 'wuji'
    },
    {
        url: 'http://www.dianping.com/pingshan',
        cityName: '平山县',
        pinyin: 'pingshan'
    },
    {
        url: 'http://www.dianping.com/yuanshi',
        cityName: '元氏县',
        pinyin: 'yuanshi'
    },
    {
        url: 'http://www.dianping.com/zhaoxian',
        cityName: '赵县',
        pinyin: 'zhaoxian'
    },
    {
        url: 'http://www.dianping.com/xuanhua',
        cityName: '宣化县',
        pinyin: 'xuanhua'
    },
    {
        url: 'http://www.dianping.com/zhangbei',
        cityName: '张北县',
        pinyin: 'zhangbei'
    },
    {
        url: 'http://www.dianping.com/kangbao',
        cityName: '康保县',
        pinyin: 'kangbao'
    },
    {
        url: 'http://www.dianping.com/guyuanxian',
        cityName: '沽源县',
        pinyin: 'guyuanxian'
    },
    {
        url: 'http://www.dianping.com/shangyi',
        cityName: '尚义县',
        pinyin: 'shangyi'
    },
    {
        url: 'http://www.dianping.com/weixian',
        cityName: '蔚县',
        pinyin: 'weixian'
    },
    {
        url: 'http://www.dianping.com/yangyuan',
        cityName: '阳原县',
        pinyin: 'yangyuan'
    },
    {
        url: 'http://www.dianping.com/huaianxian',
        cityName: '怀安县',
        pinyin: 'huaianxian'
    },
    {
        url: 'http://www.dianping.com/wanquan',
        cityName: '万全县',
        pinyin: 'wanquan'
    },
    {
        url: 'http://www.dianping.com/huailai',
        cityName: '怀来县',
        pinyin: 'huailai'
    },
    {
        url: 'http://www.dianping.com/zhuolu',
        cityName: '涿鹿县',
        pinyin: 'zhuolu'
    },
    {
        url: 'http://www.dianping.com/chicheng',
        cityName: '赤城县',
        pinyin: 'chicheng'
    },
    {
        url: 'http://www.dianping.com/chongli',
        cityName: '崇礼县',
        pinyin: 'chongli'
    },
    {
        url: 'http://www.dianping.com/chengdexian',
        cityName: '承德县',
        pinyin: 'chengdexian'
    },
    {
        url: 'http://www.dianping.com/xinglong',
        cityName: '兴隆县',
        pinyin: 'xinglong'
    },
    {
        url: 'http://www.dianping.com/pingquan',
        cityName: '平泉县',
        pinyin: 'pingquan'
    },
    {
        url: 'http://www.dianping.com/luanping',
        cityName: '滦平县',
        pinyin: 'luanping'
    },
    {
        url: 'http://www.dianping.com/longhua',
        cityName: '隆化县',
        pinyin: 'longhua'
    },
    {
        url: 'http://www.dianping.com/fengning',
        cityName: '丰宁满族自治县',
        pinyin: 'fengning'
    },
    {
        url: 'http://www.dianping.com/kuancheng',
        cityName: '宽城满族自治县',
        pinyin: 'kuancheng'
    },
    {
        url: 'http://www.dianping.com/weichang',
        cityName: '围场满族蒙古族自治县',
        pinyin: 'weichang'
    },
    {
        url: 'http://www.dianping.com/cangli',
        cityName: '昌黎县',
        pinyin: 'cangli'
    },
    {
        url: 'http://www.dianping.com/qhdfuning',
        cityName: '抚宁县',
        pinyin: 'qhdfuning'
    },
    {
        url: 'http://www.dianping.com/lulong',
        cityName: '卢龙县',
        pinyin: 'lulong'
    },
    {
        url: 'http://www.dianping.com/qinglong',
        cityName: '青龙满族自治县',
        pinyin: 'qinglong'
    },
    {
        url: 'http://www.dianping.com/zunhua',
        cityName: '遵化市',
        pinyin: 'zunhua'
    },
    {
        url: 'http://www.dianping.com/qianan',
        cityName: '迁安市',
        pinyin: 'qianan'
    },
    {
        url: 'http://www.dianping.com/luanxian',
        cityName: '滦县',
        pinyin: 'luanxian'
    },
    {
        url: 'http://www.dianping.com/luannan',
        cityName: '滦南县',
        pinyin: 'luannan'
    },
    {
        url: 'http://www.dianping.com/leting',
        cityName: '乐亭县',
        pinyin: 'leting'
    },
    {
        url: 'http://www.dianping.com/qianxi',
        cityName: '迁西县',
        pinyin: 'qianxi'
    },
    {
        url: 'http://www.dianping.com/yutian',
        cityName: '玉田县',
        pinyin: 'yutian'
    },
    {
        url: 'http://www.dianping.com/bazhou',
        cityName: '霸州市',
        pinyin: 'bazhou'
    },
    {
        url: 'http://www.dianping.com/sanhe',
        cityName: '三河市',
        pinyin: 'sanhe'
    },
    {
        url: 'http://www.dianping.com/guan',
        cityName: '固安县',
        pinyin: 'guan'
    },
    {
        url: 'http://www.dianping.com/yongqing',
        cityName: '永清县',
        pinyin: 'yongqing'
    },
    {
        url: 'http://www.dianping.com/xianghe',
        cityName: '香河县',
        pinyin: 'xianghe'
    },
    {
        url: 'http://www.dianping.com/dacheng',
        cityName: '大城县',
        pinyin: 'dacheng'
    },
    {
        url: 'http://www.dianping.com/wenan',
        cityName: '文安县',
        pinyin: 'wenan'
    },
    {
        url: 'http://www.dianping.com/dachang',
        cityName: '大厂回族自治县',
        pinyin: 'dachang'
    },
    {
        url: 'http://www.dianping.com/dingzhou',
        cityName: '定州市',
        pinyin: 'dingzhou'
    },
    {
        url: 'http://www.dianping.com/zhuozhou',
        cityName: '涿州市',
        pinyin: 'zhuozhou'
    },
    {
        url: 'http://www.dianping.com/anguo',
        cityName: '安国市',
        pinyin: 'anguo'
    },
    {
        url: 'http://www.dianping.com/gaopaidian',
        cityName: '高碑店市',
        pinyin: 'gaopaidian'
    },
    {
        url: 'http://www.dianping.com/mancheng',
        cityName: '满城县',
        pinyin: 'mancheng'
    },
    {
        url: 'http://www.dianping.com/bdqingyuan',
        cityName: '清苑区',
        pinyin: 'bdqingyuan'
    },
    {
        url: 'http://www.dianping.com/bdyixian',
        cityName: '易县',
        pinyin: 'bdyixian'
    },
    {
        url: 'http://www.dianping.com/xushui',
        cityName: '徐水区',
        pinyin: 'xushui'
    },
    {
        url: 'http://www.dianping.com/laiyuan',
        cityName: '涞源县',
        pinyin: 'laiyuan'
    },
    {
        url: 'http://www.dianping.com/dingxing',
        cityName: '定兴县',
        pinyin: 'dingxing'
    },
    {
        url: 'http://www.dianping.com/shunping',
        cityName: '顺平县',
        pinyin: 'shunping'
    },
    {
        url: 'http://www.dianping.com/tangxian',
        cityName: '唐县',
        pinyin: 'tangxian'
    },
    {
        url: 'http://www.dianping.com/wangdu',
        cityName: '望都县',
        pinyin: 'wangdu'
    },
    {
        url: 'http://www.dianping.com/laishui',
        cityName: '涞水县',
        pinyin: 'laishui'
    },
    {
        url: 'http://www.dianping.com/gaoyang',
        cityName: '高阳县',
        pinyin: 'gaoyang'
    },
    {
        url: 'http://www.dianping.com/anxin',
        cityName: '安新县',
        pinyin: 'anxin'
    },
    {
        url: 'http://www.dianping.com/xiongxian',
        cityName: '雄县',
        pinyin: 'xiongxian'
    },
    {
        url: 'http://www.dianping.com/quyang',
        cityName: '曲阳县',
        pinyin: 'quyang'
    },
    {
        url: 'http://www.dianping.com/fuping',
        cityName: '阜平县',
        pinyin: 'fuping'
    },
    {
        url: 'http://www.dianping.com/boye',
        cityName: '博野县',
        pinyin: 'boye'
    },
    {
        url: 'http://www.dianping.com/lixian',
        cityName: '蠡县',
        pinyin: 'lixian'
    },
    {
        url: 'http://www.dianping.com/jizhou',
        cityName: '冀州市',
        pinyin: 'jizhou'
    },
    {
        url: 'http://www.dianping.com/shenzhou',
        cityName: '深州市',
        pinyin: 'shenzhou'
    },
    {
        url: 'http://www.dianping.com/zaoqiang',
        cityName: '枣强县',
        pinyin: 'zaoqiang'
    },
    {
        url: 'http://www.dianping.com/wuyi',
        cityName: '武邑县',
        pinyin: 'wuyi'
    },
    {
        url: 'http://www.dianping.com/wuqiang',
        cityName: '武强县',
        pinyin: 'wuqiang'
    },
    {
        url: 'http://www.dianping.com/raoyang',
        cityName: '饶阳县',
        pinyin: 'raoyang'
    },
    {
        url: 'http://www.dianping.com/anping',
        cityName: '安平县',
        pinyin: 'anping'
    },
    {
        url: 'http://www.dianping.com/gucheng',
        cityName: '故城县',
        pinyin: 'gucheng'
    },
    {
        url: 'http://www.dianping.com/jingxian',
        cityName: '景县',
        pinyin: 'jingxian'
    },
    {
        url: 'http://www.dianping.com/fucheng',
        cityName: '阜城县',
        pinyin: 'fucheng'
    },
    {
        url: 'http://www.dianping.com/botou',
        cityName: '泊头市',
        pinyin: 'botou'
    },
    {
        url: 'http://www.dianping.com/renqiu',
        cityName: '任丘市',
        pinyin: 'renqiu'
    },
    {
        url: 'http://www.dianping.com/huanghua',
        cityName: '黄骅市',
        pinyin: 'huanghua'
    },
    {
        url: 'http://www.dianping.com/hejian',
        cityName: '河间市',
        pinyin: 'hejian'
    },
    {
        url: 'http://www.dianping.com/cangxian',
        cityName: '沧县',
        pinyin: 'cangxian'
    },
    {
        url: 'http://www.dianping.com/qingxian',
        cityName: '青县',
        pinyin: 'qingxian'
    },
    {
        url: 'http://www.dianping.com/dongguang',
        cityName: '东光县',
        pinyin: 'dongguang'
    },
    {
        url: 'http://www.dianping.com/haixing',
        cityName: '海兴县',
        pinyin: 'haixing'
    },
    {
        url: 'http://www.dianping.com/yanshan',
        cityName: '盐山县',
        pinyin: 'yanshan'
    },
    {
        url: 'http://www.dianping.com/suning',
        cityName: '肃宁县',
        pinyin: 'suning'
    },
    {
        url: 'http://www.dianping.com/nanpi',
        cityName: '南皮县',
        pinyin: 'nanpi'
    },
    {
        url: 'http://www.dianping.com/wuqiao',
        cityName: '吴桥县',
        pinyin: 'wuqiao'
    },
    {
        url: 'http://www.dianping.com/xianxian',
        cityName: '献县',
        pinyin: 'xianxian'
    },
    {
        url: 'http://www.dianping.com/mengcun',
        cityName: '孟村回族自治县',
        pinyin: 'mengcun'
    },
    {
        url: 'http://www.dianping.com/nangong',
        cityName: '南宫市',
        pinyin: 'nangong'
    },
    {
        url: 'http://www.dianping.com/shahe',
        cityName: '沙河市',
        pinyin: 'shahe'
    },
    {
        url: 'http://www.dianping.com/xingtaixian',
        cityName: '邢台县',
        pinyin: 'xingtaixian'
    },
    {
        url: 'http://www.dianping.com/lincheng',
        cityName: '临城县',
        pinyin: 'lincheng'
    },
    {
        url: 'http://www.dianping.com/neiqiu',
        cityName: '内丘县',
        pinyin: 'neiqiu'
    },
    {
        url: 'http://www.dianping.com/boxiang',
        cityName: '柏乡县',
        pinyin: 'boxiang'
    },
    {
        url: 'http://www.dianping.com/longrao',
        cityName: '隆尧县',
        pinyin: 'longrao'
    },
    {
        url: 'http://www.dianping.com/renxian',
        cityName: '任县',
        pinyin: 'renxian'
    },
    {
        url: 'http://www.dianping.com/nanhe',
        cityName: '南和县',
        pinyin: 'nanhe'
    },
    {
        url: 'http://www.dianping.com/ningjing',
        cityName: '宁晋县',
        pinyin: 'ningjing'
    },
    {
        url: 'http://www.dianping.com/julu',
        cityName: '巨鹿县',
        pinyin: 'julu'
    },
    {
        url: 'http://www.dianping.com/xinhe',
        cityName: '新河县',
        pinyin: 'xinhe'
    },
    {
        url: 'http://www.dianping.com/guangzong',
        cityName: '广宗县',
        pinyin: 'guangzong'
    },
    {
        url: 'http://www.dianping.com/pingxiangxian',
        cityName: '平乡县',
        pinyin: 'pingxiangxian'
    },
    {
        url: 'http://www.dianping.com/xtweixian',
        cityName: '威县',
        pinyin: 'xtweixian'
    },
    {
        url: 'http://www.dianping.com/qinghe',
        cityName: '清河县',
        pinyin: 'qinghe'
    },
    {
        url: 'http://www.dianping.com/linxi',
        cityName: '临西县',
        pinyin: 'linxi'
    },
    {
        url: 'http://www.dianping.com/wuan',
        cityName: '武安市',
        pinyin: 'wuan'
    },
    {
        url: 'http://www.dianping.com/handanxian',
        cityName: '邯郸县',
        pinyin: 'handanxian'
    },
    {
        url: 'http://www.dianping.com/linzhang',
        cityName: '临漳县',
        pinyin: 'linzhang'
    },
    {
        url: 'http://www.dianping.com/chengan',
        cityName: '成安县',
        pinyin: 'chengan'
    },
    {
        url: 'http://www.dianping.com/daming',
        cityName: '大名县',
        pinyin: 'daming'
    },
    {
        url: 'http://www.dianping.com/shexian',
        cityName: '涉县',
        pinyin: 'shexian'
    },
    {
        url: 'http://www.dianping.com/cixian',
        cityName: '磁县',
        pinyin: 'cixian'
    },
    {
        url: 'http://www.dianping.com/feixiang',
        cityName: '肥乡县',
        pinyin: 'feixiang'
    },
    {
        url: 'http://www.dianping.com/yongnian',
        cityName: '永年县',
        pinyin: 'yongnian'
    },
    {
        url: 'http://www.dianping.com/qiuxian',
        cityName: '邱县',
        pinyin: 'qiuxian'
    },
    {
        url: 'http://www.dianping.com/jizhe',
        cityName: '鸡泽县',
        pinyin: 'jizhe'
    },
    {
        url: 'http://www.dianping.com/guangping',
        cityName: '广平县',
        pinyin: 'guangping'
    },
    {
        url: 'http://www.dianping.com/guantao',
        cityName: '馆陶县',
        pinyin: 'guantao'
    },
    {
        url: 'http://www.dianping.com/hdweixian',
        cityName: '魏县',
        pinyin: 'hdweixian'
    },
    {
        url: 'http://www.dianping.com/quzhouxian',
        cityName: '曲周县',
        pinyin: 'quzhouxian'
    },
    {
        url: 'http://www.dianping.com/rongchengxian',
        cityName: '容城县',
        pinyin: 'rongchengxian'
    },
    {
        url: 'http://www.dianping.com/taiyuan',
        cityName: '太原',
        pinyin: 'taiyuan'
    },
    {
        url: 'http://www.dianping.com/datong',
        cityName: '大同',
        pinyin: 'datong'
    },
    {
        url: 'http://www.dianping.com/jinzhong',
        cityName: '晋中',
        pinyin: 'jinzhong'
    },
    {
        url: 'http://www.dianping.com/linfen',
        cityName: '临汾',
        pinyin: 'linfen'
    },
    {
        url: 'http://www.dianping.com/changzhi',
        cityName: '长治',
        pinyin: 'changzhi'
    },
    {
        url: 'http://www.dianping.com/xinzhou',
        cityName: '忻州',
        pinyin: 'xinzhou'
    },
    {
        url: 'http://www.dianping.com/yuncheng',
        cityName: '运城',
        pinyin: 'yuncheng'
    },
    {
        url: 'http://www.dianping.com/jincheng',
        cityName: '晋城',
        pinyin: 'jincheng'
    },
    {
        url: 'http://www.dianping.com/shuozhou',
        cityName: '朔州',
        pinyin: 'shuozhou'
    },
    {
        url: 'http://www.dianping.com/yangquan',
        cityName: '阳泉',
        pinyin: 'yangquan'
    },
    {
        url: 'http://www.dianping.com/lvliang',
        cityName: '吕梁',
        pinyin: 'lvliang'
    },
    {
        url: 'http://www.dianping.com/gujiao',
        cityName: '古交市',
        pinyin: 'gujiao'
    },
    {
        url: 'http://www.dianping.com/qingxu',
        cityName: '清徐县',
        pinyin: 'qingxu'
    },
    {
        url: 'http://www.dianping.com/yangqu',
        cityName: '阳曲县',
        pinyin: 'yangqu'
    },
    {
        url: 'http://www.dianping.com/loufan',
        cityName: '娄烦县',
        pinyin: 'loufan'
    },
    {
        url: 'http://www.dianping.com/shanyin',
        cityName: '山阴县',
        pinyin: 'shanyin'
    },
    {
        url: 'http://www.dianping.com/yingxian',
        cityName: '应县',
        pinyin: 'yingxian'
    },
    {
        url: 'http://www.dianping.com/youyu',
        cityName: '右玉县',
        pinyin: 'youyu'
    },
    {
        url: 'http://www.dianping.com/huairen',
        cityName: '怀仁县',
        pinyin: 'huairen'
    },
    {
        url: 'http://www.dianping.com/yanggao',
        cityName: '阳高县',
        pinyin: 'yanggao'
    },
    {
        url: 'http://www.dianping.com/tianzhen',
        cityName: '天镇县',
        pinyin: 'tianzhen'
    },
    {
        url: 'http://www.dianping.com/guangling',
        cityName: '广灵县',
        pinyin: 'guangling'
    },
    {
        url: 'http://www.dianping.com/lingqiu',
        cityName: '灵丘县',
        pinyin: 'lingqiu'
    },
    {
        url: 'http://www.dianping.com/hunyuan',
        cityName: '浑源县',
        pinyin: 'hunyuan'
    },
    {
        url: 'http://www.dianping.com/zuoyun',
        cityName: '左云县',
        pinyin: 'zuoyun'
    },
    {
        url: 'http://www.dianping.com/datongxian',
        cityName: '大同县',
        pinyin: 'datongxian'
    },
    {
        url: 'http://www.dianping.com/pingding',
        cityName: '平定县',
        pinyin: 'pingding'
    },
    {
        url: 'http://www.dianping.com/yuxian',
        cityName: '盂县',
        pinyin: 'yuxian'
    },
    {
        url: 'http://www.dianping.com/lucheng',
        cityName: '潞城市',
        pinyin: 'lucheng'
    },
    {
        url: 'http://www.dianping.com/changzhixian',
        cityName: '长治县',
        pinyin: 'changzhixian'
    },
    {
        url: 'http://www.dianping.com/xiangyuan',
        cityName: '襄垣县',
        pinyin: 'xiangyuan'
    },
    {
        url: 'http://www.dianping.com/tunliu',
        cityName: '屯留县',
        pinyin: 'tunliu'
    },
    {
        url: 'http://www.dianping.com/pingshun',
        cityName: '平顺县',
        pinyin: 'pingshun'
    },
    {
        url: 'http://www.dianping.com/licheng',
        cityName: '黎城县',
        pinyin: 'licheng'
    },
    {
        url: 'http://www.dianping.com/huguan',
        cityName: '壶关县',
        pinyin: 'huguan'
    },
    {
        url: 'http://www.dianping.com/changzi',
        cityName: '长子县',
        pinyin: 'changzi'
    },
    {
        url: 'http://www.dianping.com/wuxiang',
        cityName: '武乡县',
        pinyin: 'wuxiang'
    },
    {
        url: 'http://www.dianping.com/qinxian',
        cityName: '沁县',
        pinyin: 'qinxian'
    },
    {
        url: 'http://www.dianping.com/qinyuan',
        cityName: '沁源县',
        pinyin: 'qinyuan'
    },
    {
        url: 'http://www.dianping.com/gaoping',
        cityName: '高平市',
        pinyin: 'gaoping'
    },
    {
        url: 'http://www.dianping.com/zhezhou',
        cityName: '泽州县',
        pinyin: 'zhezhou'
    },
    {
        url: 'http://www.dianping.com/qinshui',
        cityName: '沁水县',
        pinyin: 'qinshui'
    },
    {
        url: 'http://www.dianping.com/yangcheng',
        cityName: '阳城县',
        pinyin: 'yangcheng'
    },
    {
        url: 'http://www.dianping.com/lingchuan',
        cityName: '陵川县',
        pinyin: 'lingchuan'
    },
    {
        url: 'http://www.dianping.com/yuanping',
        cityName: '原平市',
        pinyin: 'yuanping'
    },
    {
        url: 'http://www.dianping.com/dingxiang',
        cityName: '定襄县',
        pinyin: 'dingxiang'
    },
    {
        url: 'http://www.dianping.com/wutai',
        cityName: '五台县',
        pinyin: 'wutai'
    },
    {
        url: 'http://www.dianping.com/daixian',
        cityName: '代县',
        pinyin: 'daixian'
    },
    {
        url: 'http://www.dianping.com/fanzhi',
        cityName: '繁峙县',
        pinyin: 'fanzhi'
    },
    {
        url: 'http://www.dianping.com/ningwu',
        cityName: '宁武县',
        pinyin: 'ningwu'
    },
    {
        url: 'http://www.dianping.com/jingle',
        cityName: '静乐县',
        pinyin: 'jingle'
    },
    {
        url: 'http://www.dianping.com/shenchi',
        cityName: '神池县',
        pinyin: 'shenchi'
    },
    {
        url: 'http://www.dianping.com/wuzai',
        cityName: '五寨县',
        pinyin: 'wuzai'
    },
    {
        url: 'http://www.dianping.com/kelan',
        cityName: '岢岚县',
        pinyin: 'kelan'
    },
    {
        url: 'http://www.dianping.com/hequ',
        cityName: '河曲县',
        pinyin: 'hequ'
    },
    {
        url: 'http://www.dianping.com/baode',
        cityName: '保德县',
        pinyin: 'baode'
    },
    {
        url: 'http://www.dianping.com/pianguan',
        cityName: '偏关县',
        pinyin: 'pianguan'
    },
    {
        url: 'http://www.dianping.com/jiexiu',
        cityName: '介休市',
        pinyin: 'jiexiu'
    },
    {
        url: 'http://www.dianping.com/yushe',
        cityName: '榆社县',
        pinyin: 'yushe'
    },
    {
        url: 'http://www.dianping.com/zuoquan',
        cityName: '左权县',
        pinyin: 'zuoquan'
    },
    {
        url: 'http://www.dianping.com/heshun',
        cityName: '和顺县',
        pinyin: 'heshun'
    },
    {
        url: 'http://www.dianping.com/xiyang',
        cityName: '昔阳县',
        pinyin: 'xiyang'
    },
    {
        url: 'http://www.dianping.com/shouyang',
        cityName: '寿阳县',
        pinyin: 'shouyang'
    },
    {
        url: 'http://www.dianping.com/taigu',
        cityName: '太谷县',
        pinyin: 'taigu'
    },
    {
        url: 'http://www.dianping.com/qixian',
        cityName: '祁县',
        pinyin: 'qixian'
    },
    {
        url: 'http://www.dianping.com/pingyao',
        cityName: '平遥县',
        pinyin: 'pingyao'
    },
    {
        url: 'http://www.dianping.com/lingshi',
        cityName: '灵石县',
        pinyin: 'lingshi'
    },
    {
        url: 'http://www.dianping.com/houma',
        cityName: '侯马市',
        pinyin: 'houma'
    },
    {
        url: 'http://www.dianping.com/huozhou',
        cityName: '霍州市',
        pinyin: 'huozhou'
    },
    {
        url: 'http://www.dianping.com/quwo',
        cityName: '曲沃县',
        pinyin: 'quwo'
    },
    {
        url: 'http://www.dianping.com/yichengxian',
        cityName: '翼城县',
        pinyin: 'yichengxian'
    },
    {
        url: 'http://www.dianping.com/xiangfen',
        cityName: '襄汾县',
        pinyin: 'xiangfen'
    },
    {
        url: 'http://www.dianping.com/hongdong',
        cityName: '洪洞县',
        pinyin: 'hongdong'
    },
    {
        url: 'http://www.dianping.com/guxian',
        cityName: '古县',
        pinyin: 'guxian'
    },
    {
        url: 'http://www.dianping.com/anzhe',
        cityName: '安泽县',
        pinyin: 'anzhe'
    },
    {
        url: 'http://www.dianping.com/fushan',
        cityName: '浮山县',
        pinyin: 'fushan'
    },
    {
        url: 'http://www.dianping.com/lfjixian',
        cityName: '吉县',
        pinyin: 'lfjixian'
    },
    {
        url: 'http://www.dianping.com/xiangning',
        cityName: '乡宁县',
        pinyin: 'xiangning'
    },
    {
        url: 'http://www.dianping.com/puxian',
        cityName: '蒲县',
        pinyin: 'puxian'
    },
    {
        url: 'http://www.dianping.com/daning',
        cityName: '大宁县',
        pinyin: 'daning'
    },
    {
        url: 'http://www.dianping.com/yonghe',
        cityName: '永和县',
        pinyin: 'yonghe'
    },
    {
        url: 'http://www.dianping.com/xixian',
        cityName: '隰县',
        pinyin: 'xixian'
    },
    {
        url: 'http://www.dianping.com/fenxi',
        cityName: '汾西县',
        pinyin: 'fenxi'
    },
    {
        url: 'http://www.dianping.com/xiaoyi',
        cityName: '孝义市',
        pinyin: 'xiaoyi'
    },
    {
        url: 'http://www.dianping.com/fengyang',
        cityName: '汾阳市',
        pinyin: 'fengyang'
    },
    {
        url: 'http://www.dianping.com/wenshui',
        cityName: '文水县',
        pinyin: 'wenshui'
    },
    {
        url: 'http://www.dianping.com/zhongyang',
        cityName: '中阳县',
        pinyin: 'zhongyang'
    },
    {
        url: 'http://www.dianping.com/xingxian',
        cityName: '兴县',
        pinyin: 'xingxian'
    },
    {
        url: 'http://www.dianping.com/linxian',
        cityName: '临县',
        pinyin: 'linxian'
    },
    {
        url: 'http://www.dianping.com/fangshan',
        cityName: '方山县',
        pinyin: 'fangshan'
    },
    {
        url: 'http://www.dianping.com/liulin',
        cityName: '柳林县',
        pinyin: 'liulin'
    },
    {
        url: 'http://www.dianping.com/lanxian',
        cityName: '岚县',
        pinyin: 'lanxian'
    },
    {
        url: 'http://www.dianping.com/jiaokou',
        cityName: '交口县',
        pinyin: 'jiaokou'
    },
    {
        url: 'http://www.dianping.com/jiaocheng',
        cityName: '交城县',
        pinyin: 'jiaocheng'
    },
    {
        url: 'http://www.dianping.com/shilou',
        cityName: '石楼县',
        pinyin: 'shilou'
    },
    {
        url: 'http://www.dianping.com/yongji',
        cityName: '永济市',
        pinyin: 'yongji'
    },
    {
        url: 'http://www.dianping.com/hejin',
        cityName: '河津市',
        pinyin: 'hejin'
    },
    {
        url: 'http://www.dianping.com/yclinyixian',
        cityName: '临猗县',
        pinyin: 'yclinyixian'
    },
    {
        url: 'http://www.dianping.com/wanrongxian',
        cityName: '万荣县',
        pinyin: 'wanrongxian'
    },
    {
        url: 'http://www.dianping.com/wenxixian',
        cityName: '闻喜县',
        pinyin: 'wenxixian'
    },
    {
        url: 'http://www.dianping.com/jishanxian',
        cityName: '稷山县',
        pinyin: 'jishanxian'
    },
    {
        url: 'http://www.dianping.com/xinjiangxian',
        cityName: '新绛县',
        pinyin: 'xinjiangxian'
    },
    {
        url: 'http://www.dianping.com/jiangxian',
        cityName: '绛县',
        pinyin: 'jiangxian'
    },
    {
        url: 'http://www.dianping.com/hengquxian',
        cityName: '垣曲县',
        pinyin: 'hengquxian'
    },
    {
        url: 'http://www.dianping.com/xiaxian',
        cityName: '夏县',
        pinyin: 'xiaxian'
    },
    {
        url: 'http://www.dianping.com/pingluxian',
        cityName: '平陆县',
        pinyin: 'pingluxian'
    },
    {
        url: 'http://www.dianping.com/ruichengxian',
        cityName: '芮城县',
        pinyin: 'ruichengxian'
    },
    {
        url: 'http://www.dianping.com/huhehaote',
        cityName: '呼和浩特',
        pinyin: 'huhehaote'
    },
    {
        url: 'http://www.dianping.com/baotou',
        cityName: '包头',
        pinyin: 'baotou'
    },
    {
        url: 'http://www.dianping.com/hulunbeier',
        cityName: '呼伦贝尔',
        pinyin: 'hulunbeier'
    },
    {
        url: 'http://www.dianping.com/chifeng',
        cityName: '赤峰',
        pinyin: 'chifeng'
    },
    {
        url: 'http://www.dianping.com/eerduosi',
        cityName: '鄂尔多斯',
        pinyin: 'eerduosi'
    },
    {
        url: 'http://www.dianping.com/tongliao',
        cityName: '通辽',
        pinyin: 'tongliao'
    },
    {
        url: 'http://www.dianping.com/wuhai',
        cityName: '乌海',
        pinyin: 'wuhai'
    },
    {
        url: 'http://www.dianping.com/xingan',
        cityName: '兴安盟',
        pinyin: 'xingan'
    },
    {
        url: 'http://www.dianping.com/bayannaoer',
        cityName: '巴彦淖尔',
        pinyin: 'bayannaoer'
    },
    {
        url: 'http://www.dianping.com/xilinguole',
        cityName: '锡林郭勒',
        pinyin: 'xilinguole'
    },
    {
        url: 'http://www.dianping.com/alashan',
        cityName: '阿拉善',
        pinyin: 'alashan'
    },
    {
        url: 'http://www.dianping.com/wulanchabu',
        cityName: '乌兰察布',
        pinyin: 'wulanchabu'
    },
    {
        url: 'http://www.dianping.com/xilinhaote',
        cityName: '锡林浩特市',
        pinyin: 'xilinhaote'
    },
    {
        url: 'http://www.dianping.com/wulanhaote',
        cityName: '乌兰浩特市',
        pinyin: 'wulanhaote'
    },
    {
        url: 'http://www.dianping.com/tuoketuo',
        cityName: '托克托县',
        pinyin: 'tuoketuo'
    },
    {
        url: 'http://www.dianping.com/wuchuanxian',
        cityName: '武川县',
        pinyin: 'wuchuanxian'
    },
    {
        url: 'http://www.dianping.com/helingeer',
        cityName: '和林格尔县',
        pinyin: 'helingeer'
    },
    {
        url: 'http://www.dianping.com/qingshuihe',
        cityName: '清水河县',
        pinyin: 'qingshuihe'
    },
    {
        url: 'http://www.dianping.com/guyang',
        cityName: '固阳县',
        pinyin: 'guyang'
    },
    {
        url: 'http://www.dianping.com/ningcheng',
        cityName: '宁城县',
        pinyin: 'ningcheng'
    },
    {
        url: 'http://www.dianping.com/linxixian',
        cityName: '林西县',
        pinyin: 'linxixian'
    },
    {
        url: 'http://www.dianping.com/huolinguole',
        cityName: '霍林郭勒市',
        pinyin: 'huolinguole'
    },
    {
        url: 'http://www.dianping.com/kailu',
        cityName: '开鲁县',
        pinyin: 'kailu'
    },
    {
        url: 'http://www.dianping.com/manzhouli',
        cityName: '满洲里市',
        pinyin: 'manzhouli'
    },
    {
        url: 'http://www.dianping.com/zalantun',
        cityName: '扎兰屯市',
        pinyin: 'zalantun'
    },
    {
        url: 'http://www.dianping.com/yakeshi',
        cityName: '牙克石市',
        pinyin: 'yakeshi'
    },
    {
        url: 'http://www.dianping.com/genhe',
        cityName: '根河市',
        pinyin: 'genhe'
    },
    {
        url: 'http://www.dianping.com/eerguna',
        cityName: '额尔古纳市',
        pinyin: 'eerguna'
    },
    {
        url: 'http://www.dianping.com/fengzhen',
        cityName: '丰镇市',
        pinyin: 'fengzhen'
    },
    {
        url: 'http://www.dianping.com/zhuozi',
        cityName: '卓资县',
        pinyin: 'zhuozi'
    },
    {
        url: 'http://www.dianping.com/huade',
        cityName: '化德县',
        pinyin: 'huade'
    },
    {
        url: 'http://www.dianping.com/shangdu',
        cityName: '商都县',
        pinyin: 'shangdu'
    },
    {
        url: 'http://www.dianping.com/xinghe',
        cityName: '兴和县',
        pinyin: 'xinghe'
    },
    {
        url: 'http://www.dianping.com/liangcheng',
        cityName: '凉城县',
        pinyin: 'liangcheng'
    },
    {
        url: 'http://www.dianping.com/wuyuanxian',
        cityName: '五原县',
        pinyin: 'wuyuanxian'
    },
    {
        url: 'http://www.dianping.com/dengkou',
        cityName: '磴口县',
        pinyin: 'dengkou'
    },
    {
        url: 'http://www.dianping.com/aershan',
        cityName: '阿尔山市',
        pinyin: 'aershan'
    },
    {
        url: 'http://www.dianping.com/tuquan',
        cityName: '突泉县',
        pinyin: 'tuquan'
    },
    {
        url: 'http://www.dianping.com/erlianhaote',
        cityName: '二连浩特市',
        pinyin: 'erlianhaote'
    },
    {
        url: 'http://www.dianping.com/duolun',
        cityName: '多伦县',
        pinyin: 'duolun'
    },
    {
        url: 'http://www.dianping.com/tuzuoqi',
        cityName: '土默特左旗',
        pinyin: 'tuzuoqi'
    },
    {
        url: 'http://www.dianping.com/tuyouqi',
        cityName: '土默特右旗',
        pinyin: 'tuyouqi'
    },
    {
        url: 'http://www.dianping.com/daerhanqi',
        cityName: '达尔罕茂明安联合旗',
        pinyin: 'daerhanqi'
    },
    {
        url: 'http://www.dianping.com/aluqinqi',
        cityName: '阿鲁科尔沁旗',
        pinyin: 'aluqinqi'
    },
    {
        url: 'http://www.dianping.com/bazuoqi',
        cityName: '巴林左旗',
        pinyin: 'bazuoqi'
    },
    {
        url: 'http://www.dianping.com/bayouqi',
        cityName: '巴林右旗',
        pinyin: 'bayouqi'
    },
    {
        url: 'http://www.dianping.com/ketengqi',
        cityName: '克什克腾旗',
        pinyin: 'ketengqi'
    },
    {
        url: 'http://www.dianping.com/wenteqi',
        cityName: '翁牛特旗',
        pinyin: 'wenteqi'
    },
    {
        url: 'http://www.dianping.com/keqinqi',
        cityName: '喀喇沁旗',
        pinyin: 'keqinqi'
    },
    {
        url: 'http://www.dianping.com/aohanqi',
        cityName: '敖汉旗',
        pinyin: 'aohanqi'
    },
    {
        url: 'http://www.dianping.com/kezuozhongqi',
        cityName: '科尔沁左翼中旗',
        pinyin: 'kezuozhongqi'
    },
    {
        url: 'http://www.dianping.com/kezuohouqi',
        cityName: '科尔沁左翼后旗',
        pinyin: 'kezuohouqi'
    },
    {
        url: 'http://www.dianping.com/kulunqi',
        cityName: '库伦旗',
        pinyin: 'kulunqi'
    },
    {
        url: 'http://www.dianping.com/naimanqi',
        cityName: '奈曼旗',
        pinyin: 'naimanqi'
    },
    {
        url: 'http://www.dianping.com/zhaluteqi',
        cityName: '扎鲁特旗',
        pinyin: 'zhaluteqi'
    },
    {
        url: 'http://www.dianping.com/dalateqi',
        cityName: '达拉特旗',
        pinyin: 'dalateqi'
    },
    {
        url: 'http://www.dianping.com/zhungeerqi',
        cityName: '准格尔旗',
        pinyin: 'zhungeerqi'
    },
    {
        url: 'http://www.dianping.com/eqianqi',
        cityName: '鄂托克前旗',
        pinyin: 'eqianqi'
    },
    {
        url: 'http://www.dianping.com/eqi',
        cityName: '鄂托克旗',
        pinyin: 'eqi'
    },
    {
        url: 'http://www.dianping.com/hangjinqi',
        cityName: '杭锦旗',
        pinyin: 'hangjinqi'
    },
    {
        url: 'http://www.dianping.com/wushenqi',
        cityName: '乌审旗',
        pinyin: 'wushenqi'
    },
    {
        url: 'http://www.dianping.com/yijinqi',
        cityName: '伊金霍洛旗',
        pinyin: 'yijinqi'
    },
    {
        url: 'http://www.dianping.com/arongqi',
        cityName: '阿荣旗',
        pinyin: 'arongqi'
    },
    {
        url: 'http://www.dianping.com/molidawaqi',
        cityName: '莫力达瓦达斡尔族自治旗',
        pinyin: 'molidawaqi'
    },
    {
        url: 'http://www.dianping.com/elunchunqi',
        cityName: '鄂伦春自治旗',
        pinyin: 'elunchunqi'
    },
    {
        url: 'http://www.dianping.com/ewenkeqi',
        cityName: '鄂温克族自治旗',
        pinyin: 'ewenkeqi'
    },
    {
        url: 'http://www.dianping.com/chenhuqi',
        cityName: '陈巴尔虎旗',
        pinyin: 'chenhuqi'
    },
    {
        url: 'http://www.dianping.com/chenhuzuoqi',
        cityName: '新巴尔虎左旗',
        pinyin: 'chenhuzuoqi'
    },
    {
        url: 'http://www.dianping.com/chenhuyouqi',
        cityName: '新巴尔虎右旗',
        pinyin: 'chenhuyouqi'
    },
    {
        url: 'http://www.dianping.com/wuqianqi',
        cityName: '乌拉特前旗',
        pinyin: 'wuqianqi'
    },
    {
        url: 'http://www.dianping.com/wuzhongqi',
        cityName: '乌拉特中旗',
        pinyin: 'wuzhongqi'
    },
    {
        url: 'http://www.dianping.com/wuhouqi',
        cityName: '乌拉特后旗',
        pinyin: 'wuhouqi'
    },
    {
        url: 'http://www.dianping.com/hangjinhouqi',
        cityName: '杭锦后旗',
        pinyin: 'hangjinhouqi'
    },
    {
        url: 'http://www.dianping.com/chayouqianqi',
        cityName: '察哈尔右翼前旗',
        pinyin: 'chayouqianqi'
    },
    {
        url: 'http://www.dianping.com/chayouzhongqi',
        cityName: '察哈尔右翼中旗',
        pinyin: 'chayouzhongqi'
    },
    {
        url: 'http://www.dianping.com/chayouhouqi',
        cityName: '察哈尔右翼后旗',
        pinyin: 'chayouhouqi'
    },
    {
        url: 'http://www.dianping.com/siziwangqi',
        cityName: '四子王旗',
        pinyin: 'siziwangqi'
    },
    {
        url: 'http://www.dianping.com/keyouqianqi',
        cityName: '科尔沁右翼前旗',
        pinyin: 'keyouqianqi'
    },
    {
        url: 'http://www.dianping.com/keyouzhongqi',
        cityName: '科尔沁右翼中旗',
        pinyin: 'keyouzhongqi'
    },
    {
        url: 'http://www.dianping.com/zhalaiteqi',
        cityName: '扎赉特旗',
        pinyin: 'zhalaiteqi'
    },
    {
        url: 'http://www.dianping.com/abagaqi',
        cityName: '阿巴嘎旗',
        pinyin: 'abagaqi'
    },
    {
        url: 'http://www.dianping.com/suzuoqi',
        cityName: '苏尼特左旗',
        pinyin: 'suzuoqi'
    },
    {
        url: 'http://www.dianping.com/suyouqi',
        cityName: '苏尼特右旗',
        pinyin: 'suyouqi'
    },
    {
        url: 'http://www.dianping.com/dongwuqinqi',
        cityName: '东乌珠穆沁旗',
        pinyin: 'dongwuqinqi'
    },
    {
        url: 'http://www.dianping.com/xiwuqinqi',
        cityName: '西乌珠穆沁旗',
        pinyin: 'xiwuqinqi'
    },
    {
        url: 'http://www.dianping.com/taipusiqi',
        cityName: '太仆寺旗',
        pinyin: 'taipusiqi'
    },
    {
        url: 'http://www.dianping.com/xianghuangqi',
        cityName: '镶黄旗',
        pinyin: 'xianghuangqi'
    },
    {
        url: 'http://www.dianping.com/zhengbaiqi',
        cityName: '正镶白旗',
        pinyin: 'zhengbaiqi'
    },
    {
        url: 'http://www.dianping.com/zhenglanqi',
        cityName: '正蓝旗',
        pinyin: 'zhenglanqi'
    },
    {
        url: 'http://www.dianping.com/azuoqi',
        cityName: '阿拉善左旗',
        pinyin: 'azuoqi'
    },
    {
        url: 'http://www.dianping.com/ayouqi',
        cityName: '阿拉善右旗',
        pinyin: 'ayouqi'
    },
    {
        url: 'http://www.dianping.com/ejinaqi',
        cityName: '额济纳旗',
        pinyin: 'ejinaqi'
    },
    {
        url: 'http://www.dianping.com/haerbin',
        cityName: '哈尔滨',
        pinyin: 'haerbin'
    },
    {
        url: 'http://www.dianping.com/daqing',
        cityName: '大庆',
        pinyin: 'daqing'
    },
    {
        url: 'http://www.dianping.com/heihe',
        cityName: '黑河',
        pinyin: 'heihe'
    },
    {
        url: 'http://www.dianping.com/mudanjiang',
        cityName: '牡丹江',
        pinyin: 'mudanjiang'
    },
    {
        url: 'http://www.dianping.com/qiqihaer',
        cityName: '齐齐哈尔',
        pinyin: 'qiqihaer'
    },
    {
        url: 'http://www.dianping.com/jiamusi',
        cityName: '佳木斯',
        pinyin: 'jiamusi'
    },
    {
        url: 'http://www.dianping.com/jixi',
        cityName: '鸡西',
        pinyin: 'jixi'
    },
    {
        url: 'http://www.dianping.com/daxinganling',
        cityName: '大兴安岭',
        pinyin: 'daxinganling'
    },
    {
        url: 'http://www.dianping.com/qitaihe',
        cityName: '七台河',
        pinyin: 'qitaihe'
    },
    {
        url: 'http://www.dianping.com/hegang',
        cityName: '鹤岗',
        pinyin: 'hegang'
    },
    {
        url: 'http://www.dianping.com/yichun',
        cityName: '伊春',
        pinyin: 'yichun'
    },
    {
        url: 'http://www.dianping.com/shuangyashan',
        cityName: '双鸭山',
        pinyin: 'shuangyashan'
    },
    {
        url: 'http://www.dianping.com/suihua',
        cityName: '绥化',
        pinyin: 'suihua'
    },
    {
        url: 'http://www.dianping.com/yabuli',
        cityName: '亚布力',
        pinyin: 'yabuli'
    },
    {
        url: 'http://www.dianping.com/binxian',
        cityName: '宾县',
        pinyin: 'binxian'
    },
    {
        url: 'http://www.dianping.com/bayan',
        cityName: '巴彦县',
        pinyin: 'bayan'
    },
    {
        url: 'http://www.dianping.com/boli',
        cityName: '勃利县',
        pinyin: 'boli'
    },
    {
        url: 'http://www.dianping.com/nehe',
        cityName: '讷河市',
        pinyin: 'nehe'
    },
    {
        url: 'http://www.dianping.com/longjiang',
        cityName: '龙江县',
        pinyin: 'longjiang'
    },
    {
        url: 'http://www.dianping.com/yian',
        cityName: '依安县',
        pinyin: 'yian'
    },
    {
        url: 'http://www.dianping.com/tailai',
        cityName: '泰来县',
        pinyin: 'tailai'
    },
    {
        url: 'http://www.dianping.com/gannan',
        cityName: '甘南县',
        pinyin: 'gannan'
    },
    {
        url: 'http://www.dianping.com/fuyuxian',
        cityName: '富裕县',
        pinyin: 'fuyuxian'
    },
    {
        url: 'http://www.dianping.com/keshan',
        cityName: '克山县',
        pinyin: 'keshan'
    },
    {
        url: 'http://www.dianping.com/kedong',
        cityName: '克东县',
        pinyin: 'kedong'
    },
    {
        url: 'http://www.dianping.com/baiquan',
        cityName: '拜泉县',
        pinyin: 'baiquan'
    },
    {
        url: 'http://www.dianping.com/beian',
        cityName: '北安市',
        pinyin: 'beian'
    },
    {
        url: 'http://www.dianping.com/wudalianchi',
        cityName: '五大连池市',
        pinyin: 'wudalianchi'
    },
    {
        url: 'http://www.dianping.com/nengjian',
        cityName: '嫩江县',
        pinyin: 'nengjian'
    },
    {
        url: 'http://www.dianping.com/xunke',
        cityName: '逊克县',
        pinyin: 'xunke'
    },
    {
        url: 'http://www.dianping.com/sunwu',
        cityName: '孙吴县',
        pinyin: 'sunwu'
    },
    {
        url: 'http://www.dianping.com/zhaozhou',
        cityName: '肇州县',
        pinyin: 'zhaozhou'
    },
    {
        url: 'http://www.dianping.com/zhaoyuanxian',
        cityName: '肇源县',
        pinyin: 'zhaoyuanxian'
    },
    {
        url: 'http://www.dianping.com/lindian',
        cityName: '林甸县',
        pinyin: 'lindian'
    },
    {
        url: 'http://www.dianping.com/duerbote',
        cityName: '杜尔伯特蒙古族自治县',
        pinyin: 'duerbote'
    },
    {
        url: 'http://www.dianping.com/luobei',
        cityName: '萝北县',
        pinyin: 'luobei'
    },
    {
        url: 'http://www.dianping.com/suibin',
        cityName: '绥滨县',
        pinyin: 'suibin'
    },
    {
        url: 'http://www.dianping.com/tieli',
        cityName: '铁力市',
        pinyin: 'tieli'
    },
    {
        url: 'http://www.dianping.com/jiayin',
        cityName: '嘉荫县',
        pinyin: 'jiayin'
    },
    {
        url: 'http://www.dianping.com/tongjiang',
        cityName: '同江市',
        pinyin: 'tongjiang'
    },
    {
        url: 'http://www.dianping.com/fujin',
        cityName: '富锦市',
        pinyin: 'fujin'
    },
    {
        url: 'http://www.dianping.com/huanan',
        cityName: '桦南县',
        pinyin: 'huanan'
    },
    {
        url: 'http://www.dianping.com/huachuan',
        cityName: '桦川县',
        pinyin: 'huachuan'
    },
    {
        url: 'http://www.dianping.com/tangyuan',
        cityName: '汤原县',
        pinyin: 'tangyuan'
    },
    {
        url: 'http://www.dianping.com/fuyuan',
        cityName: '抚远县',
        pinyin: 'fuyuan'
    },
    {
        url: 'http://www.dianping.com/sysjixianxian',
        cityName: '集贤县',
        pinyin: 'sysjixianxian'
    },
    {
        url: 'http://www.dianping.com/youyi',
        cityName: '友谊县',
        pinyin: 'youyi'
    },
    {
        url: 'http://www.dianping.com/baoqing',
        cityName: '宝清县',
        pinyin: 'baoqing'
    },
    {
        url: 'http://www.dianping.com/raohe',
        cityName: '饶河县',
        pinyin: 'raohe'
    },
    {
        url: 'http://www.dianping.com/hulin',
        cityName: '虎林市',
        pinyin: 'hulin'
    },
    {
        url: 'http://www.dianping.com/mishan',
        cityName: '密山市',
        pinyin: 'mishan'
    },
    {
        url: 'http://www.dianping.com/jidong',
        cityName: '鸡东县',
        pinyin: 'jidong'
    },
    {
        url: 'http://www.dianping.com/muleng',
        cityName: '穆棱市',
        pinyin: 'muleng'
    },
    {
        url: 'http://www.dianping.com/suifenhe',
        cityName: '绥芬河市',
        pinyin: 'suifenhe'
    },
    {
        url: 'http://www.dianping.com/hailin',
        cityName: '海林市',
        pinyin: 'hailin'
    },
    {
        url: 'http://www.dianping.com/ningan',
        cityName: '宁安市',
        pinyin: 'ningan'
    },
    {
        url: 'http://www.dianping.com/dongning',
        cityName: '东宁县',
        pinyin: 'dongning'
    },
    {
        url: 'http://www.dianping.com/linkou',
        cityName: '林口县',
        pinyin: 'linkou'
    },
    {
        url: 'http://www.dianping.com/anda',
        cityName: '安达市',
        pinyin: 'anda'
    },
    {
        url: 'http://www.dianping.com/zhaodong',
        cityName: '肇东市',
        pinyin: 'zhaodong'
    },
    {
        url: 'http://www.dianping.com/hailun',
        cityName: '海伦市',
        pinyin: 'hailun'
    },
    {
        url: 'http://www.dianping.com/wangkui',
        cityName: '望奎县',
        pinyin: 'wangkui'
    },
    {
        url: 'http://www.dianping.com/lanxixian',
        cityName: '兰西县',
        pinyin: 'lanxixian'
    },
    {
        url: 'http://www.dianping.com/qinggang',
        cityName: '青冈县',
        pinyin: 'qinggang'
    },
    {
        url: 'http://www.dianping.com/qingan',
        cityName: '庆安县',
        pinyin: 'qingan'
    },
    {
        url: 'http://www.dianping.com/mingshui',
        cityName: '明水县',
        pinyin: 'mingshui'
    },
    {
        url: 'http://www.dianping.com/suileng',
        cityName: '绥棱县',
        pinyin: 'suileng'
    },
    {
        url: 'http://www.dianping.com/huma',
        cityName: '呼玛县',
        pinyin: 'huma'
    },
    {
        url: 'http://www.dianping.com/tahe',
        cityName: '塔河县',
        pinyin: 'tahe'
    },
    {
        url: 'http://www.dianping.com/mohe',
        cityName: '漠河县',
        pinyin: 'mohe'
    },
    {
        url: 'http://www.dianping.com/changchun',
        cityName: '长春',
        pinyin: 'changchun'
    },
    {
        url: 'http://www.dianping.com/jilin',
        cityName: '吉林',
        pinyin: 'jilin'
    },
    {
        url: 'http://www.dianping.com/yanbian',
        cityName: '延边',
        pinyin: 'yanbian'
    },
    {
        url: 'http://www.dianping.com/songyuan',
        cityName: '松原',
        pinyin: 'songyuan'
    },
    {
        url: 'http://www.dianping.com/siping',
        cityName: '四平',
        pinyin: 'siping'
    },
    {
        url: 'http://www.dianping.com/tonghua',
        cityName: '通化',
        pinyin: 'tonghua'
    },
    {
        url: 'http://www.dianping.com/baishan',
        cityName: '白山',
        pinyin: 'baishan'
    },
    {
        url: 'http://www.dianping.com/liaoyuan',
        cityName: '辽源',
        pinyin: 'liaoyuan'
    },
    {
        url: 'http://www.dianping.com/baicheng',
        cityName: '白城',
        pinyin: 'baicheng'
    },
    {
        url: 'http://www.dianping.com/yanji',
        cityName: '延吉市',
        pinyin: 'yanji'
    },
    {
        url: 'http://www.dianping.com/changbaishan',
        cityName: '长白山',
        pinyin: 'changbaishan'
    },
    {
        url: 'http://www.dianping.com/huichun',
        cityName: '珲春市',
        pinyin: 'huichun'
    },
    {
        url: 'http://www.dianping.com/meihekou',
        cityName: '梅河口市',
        pinyin: 'meihekou'
    },
    {
        url: 'http://www.dianping.com/dehui',
        cityName: '德惠市',
        pinyin: 'dehui'
    },
    {
        url: 'http://www.dianping.com/jiutai',
        cityName: '九台区',
        pinyin: 'jiutai'
    },
    {
        url: 'http://www.dianping.com/yushushi',
        cityName: '榆树市',
        pinyin: 'yushushi'
    },
    {
        url: 'http://www.dianping.com/nongan',
        cityName: '农安县',
        pinyin: 'nongan'
    },
    {
        url: 'http://www.dianping.com/daan',
        cityName: '大安市',
        pinyin: 'daan'
    },
    {
        url: 'http://www.dianping.com/taonan',
        cityName: '洮南市',
        pinyin: 'taonan'
    },
    {
        url: 'http://www.dianping.com/zhenlai',
        cityName: '镇赉县',
        pinyin: 'zhenlai'
    },
    {
        url: 'http://www.dianping.com/tongyu',
        cityName: '通榆县',
        pinyin: 'tongyu'
    },
    {
        url: 'http://www.dianping.com/fuyu',
        cityName: '扶余市',
        pinyin: 'fuyu'
    },
    {
        url: 'http://www.dianping.com/changling',
        cityName: '长岭县',
        pinyin: 'changling'
    },
    {
        url: 'http://www.dianping.com/qiananxian',
        cityName: '乾安县',
        pinyin: 'qiananxian'
    },
    {
        url: 'http://www.dianping.com/qianguoerluo',
        cityName: '前郭尔罗斯蒙古族自治县',
        pinyin: 'qianguoerluo'
    },
    {
        url: 'http://www.dianping.com/panshi',
        cityName: '磐石市',
        pinyin: 'panshi'
    },
    {
        url: 'http://www.dianping.com/jiaohe',
        cityName: '蛟河市',
        pinyin: 'jiaohe'
    },
    {
        url: 'http://www.dianping.com/huadian',
        cityName: '桦甸市',
        pinyin: 'huadian'
    },
    {
        url: 'http://www.dianping.com/shulan',
        cityName: '舒兰市',
        pinyin: 'shulan'
    },
    {
        url: 'http://www.dianping.com/yongjixian',
        cityName: '永吉县',
        pinyin: 'yongjixian'
    },
    {
        url: 'http://www.dianping.com/shuangliao',
        cityName: '双辽市',
        pinyin: 'shuangliao'
    },
    {
        url: 'http://www.dianping.com/gongzhuling',
        cityName: '公主岭市',
        pinyin: 'gongzhuling'
    },
    {
        url: 'http://www.dianping.com/lishu',
        cityName: '梨树县',
        pinyin: 'lishu'
    },
    {
        url: 'http://www.dianping.com/yitong',
        cityName: '伊通满族自治县',
        pinyin: 'yitong'
    },
    {
        url: 'http://www.dianping.com/dongfeng',
        cityName: '东丰县',
        pinyin: 'dongfeng'
    },
    {
        url: 'http://www.dianping.com/dongliao',
        cityName: '东辽县',
        pinyin: 'dongliao'
    },
    {
        url: 'http://www.dianping.com/jianshi',
        cityName: '集安市',
        pinyin: 'jianshi'
    },
    {
        url: 'http://www.dianping.com/tonghuaxian',
        cityName: '通化县',
        pinyin: 'tonghuaxian'
    },
    {
        url: 'http://www.dianping.com/huinan',
        cityName: '辉南县',
        pinyin: 'huinan'
    },
    {
        url: 'http://www.dianping.com/liuhe',
        cityName: '柳河县',
        pinyin: 'liuhe'
    },
    {
        url: 'http://www.dianping.com/linjian',
        cityName: '临江市',
        pinyin: 'linjian'
    },
    {
        url: 'http://www.dianping.com/fusong',
        cityName: '抚松县',
        pinyin: 'fusong'
    },
    {
        url: 'http://www.dianping.com/jingyu',
        cityName: '靖宇县',
        pinyin: 'jingyu'
    },
    {
        url: 'http://www.dianping.com/chengbai',
        cityName: '长白朝鲜族自治县',
        pinyin: 'chengbai'
    },
    {
        url: 'http://www.dianping.com/tumen',
        cityName: '图们市',
        pinyin: 'tumen'
    },
    {
        url: 'http://www.dianping.com/dunhua',
        cityName: '敦化市',
        pinyin: 'dunhua'
    },
    {
        url: 'http://www.dianping.com/liujing',
        cityName: '龙井市',
        pinyin: 'liujing'
    },
    {
        url: 'http://www.dianping.com/heliu',
        cityName: '和龙市',
        pinyin: 'heliu'
    },
    {
        url: 'http://www.dianping.com/wangqing',
        cityName: '汪清县',
        pinyin: 'wangqing'
    },
    {
        url: 'http://www.dianping.com/antu',
        cityName: '安图县',
        pinyin: 'antu'
    },
    {
        url: 'http://www.dianping.com/shenyang',
        cityName: '沈阳',
        pinyin: 'shenyang'
    },
    {
        url: 'http://www.dianping.com/dalian',
        cityName: '大连',
        pinyin: 'dalian'
    },
    {
        url: 'http://www.dianping.com/anshan',
        cityName: '鞍山',
        pinyin: 'anshan'
    },
    {
        url: 'http://www.dianping.com/jinzhou',
        cityName: '锦州',
        pinyin: 'jinzhou'
    },
    {
        url: 'http://www.dianping.com/fushun',
        cityName: '抚顺',
        pinyin: 'fushun'
    },
    {
        url: 'http://www.dianping.com/yingkou',
        cityName: '营口',
        pinyin: 'yingkou'
    },
    {
        url: 'http://www.dianping.com/dandong',
        cityName: '丹东',
        pinyin: 'dandong'
    },
    {
        url: 'http://www.dianping.com/huludao',
        cityName: '葫芦岛',
        pinyin: 'huludao'
    },
    {
        url: 'http://www.dianping.com/liaoyang',
        cityName: '辽阳',
        pinyin: 'liaoyang'
    },
    {
        url: 'http://www.dianping.com/panjin',
        cityName: '盘锦',
        pinyin: 'panjin'
    },
    {
        url: 'http://www.dianping.com/benxi',
        cityName: '本溪',
        pinyin: 'benxi'
    },
    {
        url: 'http://www.dianping.com/fuxin',
        cityName: '阜新',
        pinyin: 'fuxin'
    },
    {
        url: 'http://www.dianping.com/tieling',
        cityName: '铁岭',
        pinyin: 'tieling'
    },
    {
        url: 'http://www.dianping.com/chaoyang',
        cityName: '朝阳',
        pinyin: 'chaoyang'
    },
    {
        url: 'http://www.dianping.com/wafangdian',
        cityName: '瓦房店市',
        pinyin: 'wafangdian'
    },
    {
        url: 'http://www.dianping.com/pulandian',
        cityName: '普兰店市',
        pinyin: 'pulandian'
    },
    {
        url: 'http://www.dianping.com/zhuanghe',
        cityName: '庄河市',
        pinyin: 'zhuanghe'
    },
    {
        url: 'http://www.dianping.com/changhai',
        cityName: '长海县',
        pinyin: 'changhai'
    },
    {
        url: 'http://www.dianping.com/xinmin',
        cityName: '新民市',
        pinyin: 'xinmin'
    },
    {
        url: 'http://www.dianping.com/liaozhong',
        cityName: '辽中县',
        pinyin: 'liaozhong'
    },
    {
        url: 'http://www.dianping.com/kangping',
        cityName: '康平县',
        pinyin: 'kangping'
    },
    {
        url: 'http://www.dianping.com/fakun',
        cityName: '法库县',
        pinyin: 'fakun'
    },
    {
        url: 'http://www.dianping.com/beipiao',
        cityName: '北票市',
        pinyin: 'beipiao'
    },
    {
        url: 'http://www.dianping.com/lingyuan',
        cityName: '凌源市',
        pinyin: 'lingyuan'
    },
    {
        url: 'http://www.dianping.com/chaoyangxian',
        cityName: '朝阳县',
        pinyin: 'chaoyangxian'
    },
    {
        url: 'http://www.dianping.com/jianping',
        cityName: '建平县',
        pinyin: 'jianping'
    },
    {
        url: 'http://www.dianping.com/kalaqinzuiyi',
        cityName: '喀喇沁左翼蒙古族自治县',
        pinyin: 'kalaqinzuiyi'
    },
    {
        url: 'http://www.dianping.com/zhangwu',
        cityName: '彰武县',
        pinyin: 'zhangwu'
    },
    {
        url: 'http://www.dianping.com/fuxinxian',
        cityName: '阜新蒙古族自治县',
        pinyin: 'fuxinxian'
    },
    {
        url: 'http://www.dianping.com/diaobingshan',
        cityName: '调兵山市',
        pinyin: 'diaobingshan'
    },
    {
        url: 'http://www.dianping.com/kaiyuan',
        cityName: '开原市',
        pinyin: 'kaiyuan'
    },
    {
        url: 'http://www.dianping.com/tielingxian',
        cityName: '铁岭县',
        pinyin: 'tielingxian'
    },
    {
        url: 'http://www.dianping.com/xifeng',
        cityName: '西丰县',
        pinyin: 'xifeng'
    },
    {
        url: 'http://www.dianping.com/cangtu',
        cityName: '昌图县',
        pinyin: 'cangtu'
    },
    {
        url: 'http://www.dianping.com/lnfushunxian',
        cityName: '抚顺县',
        pinyin: 'lnfushunxian'
    },
    {
        url: 'http://www.dianping.com/xinbin',
        cityName: '新宾满族自治县',
        pinyin: 'xinbin'
    },
    {
        url: 'http://www.dianping.com/fsqingyuan',
        cityName: '清原满族自治县',
        pinyin: 'fsqingyuan'
    },
    {
        url: 'http://www.dianping.com/benxixian',
        cityName: '本溪满族自治县',
        pinyin: 'benxixian'
    },
    {
        url: 'http://www.dianping.com/huanren',
        cityName: '桓仁满族自治县',
        pinyin: 'huanren'
    },
    {
        url: 'http://www.dianping.com/dengta',
        cityName: '灯塔市',
        pinyin: 'dengta'
    },
    {
        url: 'http://www.dianping.com/liaoyangxian',
        cityName: '辽阳县',
        pinyin: 'liaoyangxian'
    },
    {
        url: 'http://www.dianping.com/haicheng',
        cityName: '海城市',
        pinyin: 'haicheng'
    },
    {
        url: 'http://www.dianping.com/taianxian',
        cityName: '台安县',
        pinyin: 'taianxian'
    },
    {
        url: 'http://www.dianping.com/xiuyan',
        cityName: '岫岩满族自治县',
        pinyin: 'xiuyan'
    },
    {
        url: 'http://www.dianping.com/fengcheng',
        cityName: '凤城市',
        pinyin: 'fengcheng'
    },
    {
        url: 'http://www.dianping.com/donggang',
        cityName: '东港市',
        pinyin: 'donggang'
    },
    {
        url: 'http://www.dianping.com/kuandian',
        cityName: '宽甸满族自治县',
        pinyin: 'kuandian'
    },
    {
        url: 'http://www.dianping.com/dashiqiao',
        cityName: '大石桥市',
        pinyin: 'dashiqiao'
    },
    {
        url: 'http://www.dianping.com/gaizhou',
        cityName: '盖州市',
        pinyin: 'gaizhou'
    },
    {
        url: 'http://www.dianping.com/dawa',
        cityName: '大洼县',
        pinyin: 'dawa'
    },
    {
        url: 'http://www.dianping.com/panshan',
        cityName: '盘山县',
        pinyin: 'panshan'
    },
    {
        url: 'http://www.dianping.com/linghai',
        cityName: '凌海市',
        pinyin: 'linghai'
    },
    {
        url: 'http://www.dianping.com/beining',
        cityName: '北镇市',
        pinyin: 'beining'
    },
    {
        url: 'http://www.dianping.com/heishan',
        cityName: '黑山县',
        pinyin: 'heishan'
    },
    {
        url: 'http://www.dianping.com/jzyixian',
        cityName: '义县',
        pinyin: 'jzyixian'
    },
    {
        url: 'http://www.dianping.com/xingcheng',
        cityName: '兴城市',
        pinyin: 'xingcheng'
    },
    {
        url: 'http://www.dianping.com/suizhong',
        cityName: '绥中县',
        pinyin: 'suizhong'
    },
    {
        url: 'http://www.dianping.com/jiancang',
        cityName: '建昌县',
        pinyin: 'jiancang'
    },
    {
        url: 'http://www.dianping.com/qingdao',
        cityName: '青岛',
        pinyin: 'qingdao'
    },
    {
        url: 'http://www.dianping.com/jinan',
        cityName: '济南',
        pinyin: 'jinan'
    },
    {
        url: 'http://www.dianping.com/yantai',
        cityName: '烟台',
        pinyin: 'yantai'
    },
    {
        url: 'http://www.dianping.com/weihai',
        cityName: '威海',
        pinyin: 'weihai'
    },
    {
        url: 'http://www.dianping.com/weifang',
        cityName: '潍坊',
        pinyin: 'weifang'
    },
    {
        url: 'http://www.dianping.com/taian',
        cityName: '泰安',
        pinyin: 'taian'
    },
    {
        url: 'http://www.dianping.com/zibo',
        cityName: '淄博',
        pinyin: 'zibo'
    },
    {
        url: 'http://www.dianping.com/linyi',
        cityName: '临沂',
        pinyin: 'linyi'
    },
    {
        url: 'http://www.dianping.com/jining',
        cityName: '济宁',
        pinyin: 'jining'
    },
    {
        url: 'http://www.dianping.com/dongying',
        cityName: '东营',
        pinyin: 'dongying'
    },
    {
        url: 'http://www.dianping.com/rizhao',
        cityName: '日照',
        pinyin: 'rizhao'
    },
    {
        url: 'http://www.dianping.com/zaozhuang',
        cityName: '枣庄',
        pinyin: 'zaozhuang'
    },
    {
        url: 'http://www.dianping.com/dezhou',
        cityName: '德州',
        pinyin: 'dezhou'
    },
    {
        url: 'http://www.dianping.com/binzhou',
        cityName: '滨州',
        pinyin: 'binzhou'
    },
    {
        url: 'http://www.dianping.com/liaocheng',
        cityName: '聊城',
        pinyin: 'liaocheng'
    },
    {
        url: 'http://www.dianping.com/heze',
        cityName: '菏泽',
        pinyin: 'heze'
    },
    {
        url: 'http://www.dianping.com/laiwu',
        cityName: '莱芜',
        pinyin: 'laiwu'
    },
    {
        url: 'http://www.dianping.com/zhangqiu',
        cityName: '章丘',
        pinyin: 'zhangqiu'
    },
    {
        url: 'http://www.dianping.com/rongcheng',
        cityName: '荣成',
        pinyin: 'rongcheng'
    },
    {
        url: 'http://www.dianping.com/wendeng',
        cityName: '文登区',
        pinyin: 'wendeng'
    },
    {
        url: 'http://www.dianping.com/pingyin',
        cityName: '平阴县',
        pinyin: 'pingyin'
    },
    {
        url: 'http://www.dianping.com/jiyang',
        cityName: '济阳县',
        pinyin: 'jiyang'
    },
    {
        url: 'http://www.dianping.com/shanghe',
        cityName: '商河县',
        pinyin: 'shanghe'
    },
    {
        url: 'http://www.dianping.com/linqing',
        cityName: '临清市',
        pinyin: 'linqing'
    },
    {
        url: 'http://www.dianping.com/yanggu',
        cityName: '阳谷县',
        pinyin: 'yanggu'
    },
    {
        url: 'http://www.dianping.com/xinxian',
        cityName: '莘县',
        pinyin: 'xinxian'
    },
    {
        url: 'http://www.dianping.com/chiping',
        cityName: '茌平县',
        pinyin: 'chiping'
    },
    {
        url: 'http://www.dianping.com/donga',
        cityName: '东阿县',
        pinyin: 'donga'
    },
    {
        url: 'http://www.dianping.com/guanxian',
        cityName: '冠县',
        pinyin: 'guanxian'
    },
    {
        url: 'http://www.dianping.com/gaotang',
        cityName: '高唐县',
        pinyin: 'gaotang'
    },
    {
        url: 'http://www.dianping.com/leling',
        cityName: '乐陵市',
        pinyin: 'leling'
    },
    {
        url: 'http://www.dianping.com/yucheng',
        cityName: '禹城市',
        pinyin: 'yucheng'
    },
    {
        url: 'http://www.dianping.com/lingxian',
        cityName: '陵城区',
        pinyin: 'lingxian'
    },
    {
        url: 'http://www.dianping.com/pingyuan',
        cityName: '平原县',
        pinyin: 'pingyuan'
    },
    {
        url: 'http://www.dianping.com/xiajin',
        cityName: '夏津县',
        pinyin: 'xiajin'
    },
    {
        url: 'http://www.dianping.com/wucheng',
        cityName: '武城县',
        pinyin: 'wucheng'
    },
    {
        url: 'http://www.dianping.com/qihe',
        cityName: '齐河县',
        pinyin: 'qihe'
    },
    {
        url: 'http://www.dianping.com/linyixian',
        cityName: '临邑县',
        pinyin: 'linyixian'
    },
    {
        url: 'http://www.dianping.com/ningjin',
        cityName: '宁津县',
        pinyin: 'ningjin'
    },
    {
        url: 'http://www.dianping.com/qingyun',
        cityName: '庆云县',
        pinyin: 'qingyun'
    },
    {
        url: 'http://www.dianping.com/kenli',
        cityName: '垦利县',
        pinyin: 'kenli'
    },
    {
        url: 'http://www.dianping.com/lijin',
        cityName: '利津县',
        pinyin: 'lijin'
    },
    {
        url: 'http://www.dianping.com/guangrao',
        cityName: '广饶县',
        pinyin: 'guangrao'
    },
    {
        url: 'http://www.dianping.com/huantai',
        cityName: '桓台县',
        pinyin: 'huantai'
    },
    {
        url: 'http://www.dianping.com/gaoqing',
        cityName: '高青县',
        pinyin: 'gaoqing'
    },
    {
        url: 'http://www.dianping.com/yiyuan',
        cityName: '沂源县',
        pinyin: 'yiyuan'
    },
    {
        url: 'http://www.dianping.com/anqiu',
        cityName: '安丘市',
        pinyin: 'anqiu'
    },
    {
        url: 'http://www.dianping.com/cangyi',
        cityName: '昌邑市',
        pinyin: 'cangyi'
    },
    {
        url: 'http://www.dianping.com/gaomi',
        cityName: '高密市',
        pinyin: 'gaomi'
    },
    {
        url: 'http://www.dianping.com/qingzhou',
        cityName: '青州市',
        pinyin: 'qingzhou'
    },
    {
        url: 'http://www.dianping.com/zhucheng',
        cityName: '诸城市',
        pinyin: 'zhucheng'
    },
    {
        url: 'http://www.dianping.com/shouguang',
        cityName: '寿光市',
        pinyin: 'shouguang'
    },
    {
        url: 'http://www.dianping.com/linqu',
        cityName: '临朐县',
        pinyin: 'linqu'
    },
    {
        url: 'http://www.dianping.com/cangle',
        cityName: '昌乐县',
        pinyin: 'cangle'
    },
    {
        url: 'http://www.dianping.com/qixia',
        cityName: '栖霞市',
        pinyin: 'qixia'
    },
    {
        url: 'http://www.dianping.com/haiyang',
        cityName: '海阳市',
        pinyin: 'haiyang'
    },
    {
        url: 'http://www.dianping.com/liukou',
        cityName: '龙口市',
        pinyin: 'liukou'
    },
    {
        url: 'http://www.dianping.com/laiyang',
        cityName: '莱阳市',
        pinyin: 'laiyang'
    },
    {
        url: 'http://www.dianping.com/laizhou',
        cityName: '莱州市',
        pinyin: 'laizhou'
    },
    {
        url: 'http://www.dianping.com/penglai',
        cityName: '蓬莱市',
        pinyin: 'penglai'
    },
    {
        url: 'http://www.dianping.com/zhaoyuan',
        cityName: '招远市',
        pinyin: 'zhaoyuan'
    },
    {
        url: 'http://www.dianping.com/changdao',
        cityName: '长岛县',
        pinyin: 'changdao'
    },
    {
        url: 'http://www.dianping.com/rushan',
        cityName: '乳山市',
        pinyin: 'rushan'
    },
    {
        url: 'http://www.dianping.com/wulian',
        cityName: '五莲县',
        pinyin: 'wulian'
    },
    {
        url: 'http://www.dianping.com/juxian',
        cityName: '莒县',
        pinyin: 'juxian'
    },
    {
        url: 'http://www.dianping.com/tancheng',
        cityName: '郯城县',
        pinyin: 'tancheng'
    },
    {
        url: 'http://www.dianping.com/cangshan',
        cityName: '苍山县',
        pinyin: 'cangshan'
    },
    {
        url: 'http://www.dianping.com/junan',
        cityName: '莒南县',
        pinyin: 'junan'
    },
    {
        url: 'http://www.dianping.com/yishui',
        cityName: '沂水县',
        pinyin: 'yishui'
    },
    {
        url: 'http://www.dianping.com/mengyin',
        cityName: '蒙阴县',
        pinyin: 'mengyin'
    },
    {
        url: 'http://www.dianping.com/pingyi',
        cityName: '平邑县',
        pinyin: 'pingyi'
    },
    {
        url: 'http://www.dianping.com/feixian',
        cityName: '费县',
        pinyin: 'feixian'
    },
    {
        url: 'http://www.dianping.com/yinan',
        cityName: '沂南县',
        pinyin: 'yinan'
    },
    {
        url: 'http://www.dianping.com/linshu',
        cityName: '临沭县',
        pinyin: 'linshu'
    },
    {
        url: 'http://www.dianping.com/tengzhou',
        cityName: '滕州市',
        pinyin: 'tengzhou'
    },
    {
        url: 'http://www.dianping.com/qufu',
        cityName: '曲阜市',
        pinyin: 'qufu'
    },
    {
        url: 'http://www.dianping.com/yanzhou',
        cityName: '兖州区',
        pinyin: 'yanzhou'
    },
    {
        url: 'http://www.dianping.com/zoucheng',
        cityName: '邹城市',
        pinyin: 'zoucheng'
    },
    {
        url: 'http://www.dianping.com/weishan',
        cityName: '微山县',
        pinyin: 'weishan'
    },
    {
        url: 'http://www.dianping.com/yutai',
        cityName: '鱼台县',
        pinyin: 'yutai'
    },
    {
        url: 'http://www.dianping.com/jinxiang',
        cityName: '金乡县',
        pinyin: 'jinxiang'
    },
    {
        url: 'http://www.dianping.com/jiaxiang',
        cityName: '嘉祥县',
        pinyin: 'jiaxiang'
    },
    {
        url: 'http://www.dianping.com/wenshang',
        cityName: '汶上县',
        pinyin: 'wenshang'
    },
    {
        url: 'http://www.dianping.com/sishui',
        cityName: '泗水县',
        pinyin: 'sishui'
    },
    {
        url: 'http://www.dianping.com/liangshanxian',
        cityName: '梁山县',
        pinyin: 'liangshanxian'
    },
    {
        url: 'http://www.dianping.com/xintai',
        cityName: '新泰市',
        pinyin: 'xintai'
    },
    {
        url: 'http://www.dianping.com/feicheng',
        cityName: '肥城市',
        pinyin: 'feicheng'
    },
    {
        url: 'http://www.dianping.com/ningyang',
        cityName: '宁阳县',
        pinyin: 'ningyang'
    },
    {
        url: 'http://www.dianping.com/dongping',
        cityName: '东平县',
        pinyin: 'dongping'
    },
    {
        url: 'http://www.dianping.com/huimin',
        cityName: '惠民县',
        pinyin: 'huimin'
    },
    {
        url: 'http://www.dianping.com/yangxin',
        cityName: '阳信县',
        pinyin: 'yangxin'
    },
    {
        url: 'http://www.dianping.com/wudi',
        cityName: '无棣县',
        pinyin: 'wudi'
    },
    {
        url: 'http://www.dianping.com/zhanhua',
        cityName: '沾化区',
        pinyin: 'zhanhua'
    },
    {
        url: 'http://www.dianping.com/boxing',
        cityName: '博兴县',
        pinyin: 'boxing'
    },
    {
        url: 'http://www.dianping.com/zouping',
        cityName: '邹平县',
        pinyin: 'zouping'
    },
    {
        url: 'http://www.dianping.com/caoxian',
        cityName: '曹县',
        pinyin: 'caoxian'
    },
    {
        url: 'http://www.dianping.com/dingtao',
        cityName: '定陶县',
        pinyin: 'dingtao'
    },
    {
        url: 'http://www.dianping.com/chengwu',
        cityName: '成武县',
        pinyin: 'chengwu'
    },
    {
        url: 'http://www.dianping.com/danxian',
        cityName: '单县',
        pinyin: 'danxian'
    },
    {
        url: 'http://www.dianping.com/juye',
        cityName: '巨野县',
        pinyin: 'juye'
    },
    {
        url: 'http://www.dianping.com/yunchengxian',
        cityName: '郓城县',
        pinyin: 'yunchengxian'
    },
    {
        url: 'http://www.dianping.com/juancheng',
        cityName: '鄄城县',
        pinyin: 'juancheng'
    },
    {
        url: 'http://www.dianping.com/dongming',
        cityName: '东明县',
        pinyin: 'dongming'
    },
    {
        url: 'http://www.dianping.com/nanjing',
        cityName: '南京',
        pinyin: 'nanjing'
    },
    {
        url: 'http://www.dianping.com/suzhou',
        cityName: '苏州',
        pinyin: 'suzhou'
    },
    {
        url: 'http://www.dianping.com/yangzhou',
        cityName: '扬州',
        pinyin: 'yangzhou'
    },
    {
        url: 'http://www.dianping.com/wuxi',
        cityName: '无锡',
        pinyin: 'wuxi'
    },
    {
        url: 'http://www.dianping.com/changzhou',
        cityName: '常州',
        pinyin: 'changzhou'
    },
    {
        url: 'http://www.dianping.com/xuzhou',
        cityName: '徐州',
        pinyin: 'xuzhou'
    },
    {
        url: 'http://www.dianping.com/nantong',
        cityName: '南通',
        pinyin: 'nantong'
    },
    {
        url: 'http://www.dianping.com/zhenjiang',
        cityName: '镇江',
        pinyin: 'zhenjiang'
    },
    {
        url: 'http://www.dianping.com/huaian',
        cityName: '淮安',
        pinyin: 'huaian'
    },
    {
        url: 'http://www.dianping.com/lianyuangang',
        cityName: '连云港',
        pinyin: 'lianyuangang'
    },
    {
        url: 'http://www.dianping.com/taizhou',
        cityName: '泰州',
        pinyin: 'taizhou'
    },
    {
        url: 'http://www.dianping.com/yancheng',
        cityName: '盐城',
        pinyin: 'yancheng'
    },
    {
        url: 'http://www.dianping.com/suqian',
        cityName: '宿迁',
        pinyin: 'suqian'
    },
    {
        url: 'http://www.dianping.com/kunshan',
        cityName: '昆山',
        pinyin: 'kunshan'
    },
    {
        url: 'http://www.dianping.com/changshu',
        cityName: '常熟',
        pinyin: 'changshu'
    },
    {
        url: 'http://www.dianping.com/zhangjiagang',
        cityName: '张家港',
        pinyin: 'zhangjiagang'
    },
    {
        url: 'http://www.dianping.com/wujiang',
        cityName: '吴江',
        pinyin: 'wujiang'
    },
    {
        url: 'http://www.dianping.com/taicang',
        cityName: '太仓',
        pinyin: 'taicang'
    },
    {
        url: 'http://www.dianping.com/jiangyin',
        cityName: '江阴',
        pinyin: 'jiangyin'
    },
    {
        url: 'http://www.dianping.com/yixing',
        cityName: '宜兴',
        pinyin: 'yixing'
    },
    {
        url: 'http://www.dianping.com/jingjian',
        cityName: '靖江',
        pinyin: 'jingjian'
    },
    {
        url: 'http://www.dianping.com/jintan',
        cityName: '金坛区',
        pinyin: 'jintan'
    },
    {
        url: 'http://www.dianping.com/liyang',
        cityName: '溧阳',
        pinyin: 'liyang'
    },
    {
        url: 'http://www.dianping.com/zhouzhuang',
        cityName: '周庄',
        pinyin: 'zhouzhuang'
    },
    {
        url: 'http://www.dianping.com/tianmuhu',
        cityName: '天目湖',
        pinyin: 'tianmuhu'
    },
    {
        url: 'http://www.dianping.com/luzhi',
        cityName: '甪直',
        pinyin: 'luzhi'
    },
    {
        url: 'http://www.dianping.com/tongli',
        cityName: '同里',
        pinyin: 'tongli'
    },
    {
        url: 'http://www.dianping.com/yizheng',
        cityName: '仪征市',
        pinyin: 'yizheng'
    },
    {
        url: 'http://www.dianping.com/gaoyou',
        cityName: '高邮市',
        pinyin: 'gaoyou'
    },
    {
        url: 'http://www.dianping.com/pizhou',
        cityName: '邳州市',
        pinyin: 'pizhou'
    },
    {
        url: 'http://www.dianping.com/xinyi',
        cityName: '新沂市',
        pinyin: 'xinyi'
    },
    {
        url: 'http://www.dianping.com/szsuining',
        cityName: '睢宁县',
        pinyin: 'szsuining'
    },
    {
        url: 'http://www.dianping.com/peixian',
        cityName: '沛县',
        pinyin: 'peixian'
    },
    {
        url: 'http://www.dianping.com/fengxian',
        cityName: '丰县',
        pinyin: 'fengxian'
    },
    {
        url: 'http://www.dianping.com/ganyu',
        cityName: '赣榆区',
        pinyin: 'ganyu'
    },
    {
        url: 'http://www.dianping.com/guanyun',
        cityName: '灌云县',
        pinyin: 'guanyun'
    },
    {
        url: 'http://www.dianping.com/donghai',
        cityName: '东海县',
        pinyin: 'donghai'
    },
    {
        url: 'http://www.dianping.com/guannan',
        cityName: '灌南县',
        pinyin: 'guannan'
    },
    {
        url: 'http://www.dianping.com/shuyang',
        cityName: '沭阳县',
        pinyin: 'shuyang'
    },
    {
        url: 'http://www.dianping.com/siyang',
        cityName: '泗阳县',
        pinyin: 'siyang'
    },
    {
        url: 'http://www.dianping.com/sihong',
        cityName: '泗洪县',
        pinyin: 'sihong'
    },
    {
        url: 'http://www.dianping.com/jinhu',
        cityName: '金湖县',
        pinyin: 'jinhu'
    },
    {
        url: 'http://www.dianping.com/xuyi',
        cityName: '盱眙县',
        pinyin: 'xuyi'
    },
    {
        url: 'http://www.dianping.com/hongze',
        cityName: '洪泽县',
        pinyin: 'hongze'
    },
    {
        url: 'http://www.dianping.com/lianshui',
        cityName: '涟水县',
        pinyin: 'lianshui'
    },
    {
        url: 'http://www.dianping.com/dongtai',
        cityName: '东台市',
        pinyin: 'dongtai'
    },
    {
        url: 'http://www.dianping.com/dafeng',
        cityName: '大丰市',
        pinyin: 'dafeng'
    },
    {
        url: 'http://www.dianping.com/sheyang',
        cityName: '射阳县',
        pinyin: 'sheyang'
    },
    {
        url: 'http://www.dianping.com/funing',
        cityName: '阜宁县',
        pinyin: 'funing'
    },
    {
        url: 'http://www.dianping.com/binhai',
        cityName: '滨海县',
        pinyin: 'binhai'
    },
    {
        url: 'http://www.dianping.com/xiangshui',
        cityName: '响水县',
        pinyin: 'xiangshui'
    },
    {
        url: 'http://www.dianping.com/jianhu',
        cityName: '建湖县',
        pinyin: 'jianhu'
    },
    {
        url: 'http://www.dianping.com/baoying',
        cityName: '宝应县',
        pinyin: 'baoying'
    },
    {
        url: 'http://www.dianping.com/taixing',
        cityName: '泰兴市',
        pinyin: 'taixing'
    },
    {
        url: 'http://www.dianping.com/xinghua',
        cityName: '兴化市',
        pinyin: 'xinghua'
    },
    {
        url: 'http://www.dianping.com/haimen',
        cityName: '海门市',
        pinyin: 'haimen'
    },
    {
        url: 'http://www.dianping.com/qidong',
        cityName: '启东市',
        pinyin: 'qidong'
    },
    {
        url: 'http://www.dianping.com/rugao',
        cityName: '如皋市',
        pinyin: 'rugao'
    },
    {
        url: 'http://www.dianping.com/haian',
        cityName: '海安县',
        pinyin: 'haian'
    },
    {
        url: 'http://www.dianping.com/yangzhong',
        cityName: '扬中市',
        pinyin: 'yangzhong'
    },
    {
        url: 'http://www.dianping.com/danyang',
        cityName: '丹阳市',
        pinyin: 'danyang'
    },
    {
        url: 'http://www.dianping.com/jurong',
        cityName: '句容市',
        pinyin: 'jurong'
    },
    {
        url: 'http://www.dianping.com/hangzhou',
        cityName: '杭州',
        pinyin: 'hangzhou'
    },
    {
        url: 'http://www.dianping.com/ningbo',
        cityName: '宁波',
        pinyin: 'ningbo'
    },
    {
        url: 'http://www.dianping.com/jiaxing',
        cityName: '嘉兴',
        pinyin: 'jiaxing'
    },
    {
        url: 'http://www.dianping.com/wenzhou',
        cityName: '温州',
        pinyin: 'wenzhou'
    },
    {
        url: 'http://www.dianping.com/zhejiangtaizhou',
        cityName: '台州',
        pinyin: 'zhejiangtaizhou'
    },
    {
        url: 'http://www.dianping.com/jinhua',
        cityName: '金华',
        pinyin: 'jinhua'
    },
    {
        url: 'http://www.dianping.com/shaoxing',
        cityName: '绍兴',
        pinyin: 'shaoxing'
    },
    {
        url: 'http://www.dianping.com/huzhou',
        cityName: '湖州',
        pinyin: 'huzhou'
    },
    {
        url: 'http://www.dianping.com/zhoushan',
        cityName: '舟山',
        pinyin: 'zhoushan'
    },
    {
        url: 'http://www.dianping.com/quzhou',
        cityName: '衢州',
        pinyin: 'quzhou'
    },
    {
        url: 'http://www.dianping.com/lishui',
        cityName: '丽水',
        pinyin: 'lishui'
    },
    {
        url: 'http://www.dianping.com/yiwu',
        cityName: '义乌',
        pinyin: 'yiwu'
    },
    {
        url: 'http://www.dianping.com/cixi',
        cityName: '慈溪',
        pinyin: 'cixi'
    },
    {
        url: 'http://www.dianping.com/fenghua',
        cityName: '奉化',
        pinyin: 'fenghua'
    },
    {
        url: 'http://www.dianping.com/yuyao',
        cityName: '余姚',
        pinyin: 'yuyao'
    },
    {
        url: 'http://www.dianping.com/linan',
        cityName: '临安',
        pinyin: 'linan'
    },
    {
        url: 'http://www.dianping.com/fuyangfy',
        cityName: '富阳区',
        pinyin: 'fuyangfy'
    },
    {
        url: 'http://www.dianping.com/tonglu',
        cityName: '桐庐县',
        pinyin: 'tonglu'
    },
    {
        url: 'http://www.dianping.com/zhuji',
        cityName: '诸暨',
        pinyin: 'zhuji'
    },
    {
        url: 'http://www.dianping.com/yongkang',
        cityName: '永康',
        pinyin: 'yongkang'
    },
    {
        url: 'http://www.dianping.com/ruian',
        cityName: '瑞安',
        pinyin: 'ruian'
    },
    {
        url: 'http://www.dianping.com/yueqing',
        cityName: '乐清',
        pinyin: 'yueqing'
    },
    {
        url: 'http://www.dianping.com/pingyang',
        cityName: '平阳',
        pinyin: 'pingyang'
    },
    {
        url: 'http://www.dianping.com/cangnan',
        cityName: '苍南',
        pinyin: 'cangnan'
    },
    {
        url: 'http://www.dianping.com/ninghai',
        cityName: '宁海',
        pinyin: 'ninghai'
    },
    {
        url: 'http://www.dianping.com/xiangshan',
        cityName: '象山',
        pinyin: 'xiangshan'
    },
    {
        url: 'http://www.dianping.com/xitang',
        cityName: '西塘',
        pinyin: 'xitang'
    },
    {
        url: 'http://www.dianping.com/wuzhen',
        cityName: '乌镇',
        pinyin: 'wuzhen'
    },
    {
        url: 'http://www.dianping.com/fuchunjiang',
        cityName: '富春江',
        pinyin: 'fuchunjiang'
    },
    {
        url: 'http://www.dianping.com/qiandaohu',
        cityName: '千岛湖',
        pinyin: 'qiandaohu'
    },
    {
        url: 'http://www.dianping.com/tianmushan',
        cityName: '天目山',
        pinyin: 'tianmushan'
    },
    {
        url: 'http://www.dianping.com/yandangshan',
        cityName: '雁荡山',
        pinyin: 'yandangshan'
    },
    {
        url: 'http://www.dianping.com/moganshan',
        cityName: '莫干山',
        pinyin: 'moganshan'
    },
    {
        url: 'http://www.dianping.com/hengdian',
        cityName: '横店',
        pinyin: 'hengdian'
    },
    {
        url: 'http://www.dianping.com/zhujiajian',
        cityName: '朱家尖',
        pinyin: 'zhujiajian'
    },
    {
        url: 'http://www.dianping.com/putuoshan',
        cityName: '普陀山',
        pinyin: 'putuoshan'
    },
    {
        url: 'http://www.dianping.com/xiandu',
        cityName: '仙都',
        pinyin: 'xiandu'
    },
    {
        url: 'http://www.dianping.com/jiande',
        cityName: '建德市',
        pinyin: 'jiande'
    },
    {
        url: 'http://www.dianping.com/chunan',
        cityName: '淳安县',
        pinyin: 'chunan'
    },
    {
        url: 'http://www.dianping.com/changxing',
        cityName: '长兴县',
        pinyin: 'changxing'
    },
    {
        url: 'http://www.dianping.com/deqing',
        cityName: '德清县',
        pinyin: 'deqing'
    },
    {
        url: 'http://www.dianping.com/anji',
        cityName: '安吉县',
        pinyin: 'anji'
    },
    {
        url: 'http://www.dianping.com/pinghu',
        cityName: '平湖市',
        pinyin: 'pinghu'
    },
    {
        url: 'http://www.dianping.com/haining',
        cityName: '海宁市',
        pinyin: 'haining'
    },
    {
        url: 'http://www.dianping.com/tongxiang',
        cityName: '桐乡市',
        pinyin: 'tongxiang'
    },
    {
        url: 'http://www.dianping.com/jiashan',
        cityName: '嘉善县',
        pinyin: 'jiashan'
    },
    {
        url: 'http://www.dianping.com/haiyan',
        cityName: '海盐县',
        pinyin: 'haiyan'
    },
    {
        url: 'http://www.dianping.com/daishan',
        cityName: '岱山县',
        pinyin: 'daishan'
    },
    {
        url: 'http://www.dianping.com/shengsi',
        cityName: '嵊泗县',
        pinyin: 'shengsi'
    },
    {
        url: 'http://www.dianping.com/shangyu',
        cityName: '上虞区',
        pinyin: 'shangyu'
    },
    {
        url: 'http://www.dianping.com/shengzhou',
        cityName: '嵊州市',
        pinyin: 'shengzhou'
    },
    {
        url: 'http://www.dianping.com/shaoxingxian',
        cityName: '柯桥区',
        pinyin: 'shaoxingxian'
    },
    {
        url: 'http://www.dianping.com/jianshan',
        cityName: '江山市',
        pinyin: 'jianshan'
    },
    {
        url: 'http://www.dianping.com/changshan',
        cityName: '常山县',
        pinyin: 'changshan'
    },
    {
        url: 'http://www.dianping.com/kaihua',
        cityName: '开化县',
        pinyin: 'kaihua'
    },
    {
        url: 'http://www.dianping.com/liuyou',
        cityName: '龙游县',
        pinyin: 'liuyou'
    },
    {
        url: 'http://www.dianping.com/lanxi',
        cityName: '兰溪市',
        pinyin: 'lanxi'
    },
    {
        url: 'http://www.dianping.com/dongyang',
        cityName: '东阳',
        pinyin: 'dongyang'
    },
    {
        url: 'http://www.dianping.com/wuyixian',
        cityName: '武义县',
        pinyin: 'wuyixian'
    },
    {
        url: 'http://www.dianping.com/pujiang',
        cityName: '浦江县',
        pinyin: 'pujiang'
    },
    {
        url: 'http://www.dianping.com/panan',
        cityName: '磐安县',
        pinyin: 'panan'
    },
    {
        url: 'http://www.dianping.com/linhai',
        cityName: '临海市',
        pinyin: 'linhai'
    },
    {
        url: 'http://www.dianping.com/wenling',
        cityName: '温岭市',
        pinyin: 'wenling'
    },
    {
        url: 'http://www.dianping.com/sanmen',
        cityName: '三门县',
        pinyin: 'sanmen'
    },
    {
        url: 'http://www.dianping.com/tiantai',
        cityName: '天台县',
        pinyin: 'tiantai'
    },
    {
        url: 'http://www.dianping.com/xianju',
        cityName: '仙居县',
        pinyin: 'xianju'
    },
    {
        url: 'http://www.dianping.com/yuhuan',
        cityName: '玉环县',
        pinyin: 'yuhuan'
    },
    {
        url: 'http://www.dianping.com/liuquan',
        cityName: '龙泉市',
        pinyin: 'liuquan'
    },
    {
        url: 'http://www.dianping.com/jinyun',
        cityName: '缙云县',
        pinyin: 'jinyun'
    },
    {
        url: 'http://www.dianping.com/qingtian',
        cityName: '青田县',
        pinyin: 'qingtian'
    },
    {
        url: 'http://www.dianping.com/yunhe',
        cityName: '云和县',
        pinyin: 'yunhe'
    },
    {
        url: 'http://www.dianping.com/suicang',
        cityName: '遂昌县',
        pinyin: 'suicang'
    },
    {
        url: 'http://www.dianping.com/songyang',
        cityName: '松阳县',
        pinyin: 'songyang'
    },
    {
        url: 'http://www.dianping.com/lsqingyuan',
        cityName: '庆元县',
        pinyin: 'lsqingyuan'
    },
    {
        url: 'http://www.dianping.com/jingning',
        cityName: '景宁畲族自治县',
        pinyin: 'jingning'
    },
    {
        url: 'http://www.dianping.com/hefei',
        cityName: '合肥',
        pinyin: 'hefei'
    },
    {
        url: 'http://www.dianping.com/huangshan',
        cityName: '黄山',
        pinyin: 'huangshan'
    },
    {
        url: 'http://www.dianping.com/bengbu',
        cityName: '蚌埠',
        pinyin: 'bengbu'
    },
    {
        url: 'http://www.dianping.com/wuhu',
        cityName: '芜湖',
        pinyin: 'wuhu'
    },
    {
        url: 'http://www.dianping.com/anhuisuzhou',
        cityName: '宿州',
        pinyin: 'anhuisuzhou'
    },
    {
        url: 'http://www.dianping.com/huainan',
        cityName: '淮南',
        pinyin: 'huainan'
    },
    {
        url: 'http://www.dianping.com/chuzhou',
        cityName: '滁州',
        pinyin: 'chuzhou'
    },
    {
        url: 'http://www.dianping.com/anqing',
        cityName: '安庆',
        pinyin: 'anqing'
    },
    {
        url: 'http://www.dianping.com/maanshan',
        cityName: '马鞍山',
        pinyin: 'maanshan'
    },
    {
        url: 'http://www.dianping.com/huaibei',
        cityName: '淮北',
        pinyin: 'huaibei'
    },
    {
        url: 'http://www.dianping.com/fuyang',
        cityName: '阜阳',
        pinyin: 'fuyang'
    },
    {
        url: 'http://www.dianping.com/chaohu',
        cityName: '巢湖',
        pinyin: 'chaohu'
    },
    {
        url: 'http://www.dianping.com/xuancheng',
        cityName: '宣城',
        pinyin: 'xuancheng'
    },
    {
        url: 'http://www.dianping.com/bozhou',
        cityName: '亳州',
        pinyin: 'bozhou'
    },
    {
        url: 'http://www.dianping.com/tongling',
        cityName: '铜陵',
        pinyin: 'tongling'
    },
    {
        url: 'http://www.dianping.com/chizhou',
        cityName: '池州',
        pinyin: 'chizhou'
    },
    {
        url: 'http://www.dianping.com/liuan',
        cityName: '六安',
        pinyin: 'liuan'
    },
    {
        url: 'http://www.dianping.com/tianzhushan',
        cityName: '天柱山',
        pinyin: 'tianzhushan'
    },
    {
        url: 'http://www.dianping.com/hongcun',
        cityName: '宏村',
        pinyin: 'hongcun'
    },
    {
        url: 'http://www.dianping.com/xidi',
        cityName: '西递',
        pinyin: 'xidi'
    },
    {
        url: 'http://www.dianping.com/jiuhuashan',
        cityName: '九华山',
        pinyin: 'jiuhuashan'
    },
    {
        url: 'http://www.dianping.com/changfeng',
        cityName: '长丰县',
        pinyin: 'changfeng'
    },
    {
        url: 'http://www.dianping.com/feidong',
        cityName: '肥东县',
        pinyin: 'feidong'
    },
    {
        url: 'http://www.dianping.com/feixi',
        cityName: '肥西县',
        pinyin: 'feixi'
    },
    {
        url: 'http://www.dianping.com/dangshan',
        cityName: '砀山县',
        pinyin: 'dangshan'
    },
    {
        url: 'http://www.dianping.com/xiaoxian',
        cityName: '萧县',
        pinyin: 'xiaoxian'
    },
    {
        url: 'http://www.dianping.com/lingbi',
        cityName: '灵璧县',
        pinyin: 'lingbi'
    },
    {
        url: 'http://www.dianping.com/sixian',
        cityName: '泗县',
        pinyin: 'sixian'
    },
    {
        url: 'http://www.dianping.com/suixi',
        cityName: '濉溪县',
        pinyin: 'suixi'
    },
    {
        url: 'http://www.dianping.com/woyang',
        cityName: '涡阳县',
        pinyin: 'woyang'
    },
    {
        url: 'http://www.dianping.com/mengcheng',
        cityName: '蒙城县',
        pinyin: 'mengcheng'
    },
    {
        url: 'http://www.dianping.com/lixin',
        cityName: '利辛县',
        pinyin: 'lixin'
    },
    {
        url: 'http://www.dianping.com/jieshou',
        cityName: '界首市',
        pinyin: 'jieshou'
    },
    {
        url: 'http://www.dianping.com/linquan',
        cityName: '临泉县',
        pinyin: 'linquan'
    },
    {
        url: 'http://www.dianping.com/taihe',
        cityName: '太和县',
        pinyin: 'taihe'
    },
    {
        url: 'http://www.dianping.com/funan',
        cityName: '阜南县',
        pinyin: 'funan'
    },
    {
        url: 'http://www.dianping.com/yingshang',
        cityName: '颍上县',
        pinyin: 'yingshang'
    },
    {
        url: 'http://www.dianping.com/huaiyuan',
        cityName: '怀远县',
        pinyin: 'huaiyuan'
    },
    {
        url: 'http://www.dianping.com/wuhe',
        cityName: '五河县',
        pinyin: 'wuhe'
    },
    {
        url: 'http://www.dianping.com/guzhen',
        cityName: '固镇县',
        pinyin: 'guzhen'
    },
    {
        url: 'http://www.dianping.com/fengtai',
        cityName: '凤台县',
        pinyin: 'fengtai'
    },
    {
        url: 'http://www.dianping.com/mingguang',
        cityName: '明光市',
        pinyin: 'mingguang'
    },
    {
        url: 'http://www.dianping.com/tianchang',
        cityName: '天长市',
        pinyin: 'tianchang'
    },
    {
        url: 'http://www.dianping.com/laian',
        cityName: '来安县',
        pinyin: 'laian'
    },
    {
        url: 'http://www.dianping.com/quanjiao',
        cityName: '全椒县',
        pinyin: 'quanjiao'
    },
    {
        url: 'http://www.dianping.com/dingyuan',
        cityName: '定远县',
        pinyin: 'dingyuan'
    },
    {
        url: 'http://www.dianping.com/fengyangxian',
        cityName: '凤阳县',
        pinyin: 'fengyangxian'
    },
    {
        url: 'http://www.dianping.com/dangtou',
        cityName: '当涂县',
        pinyin: 'dangtou'
    },
    {
        url: 'http://www.dianping.com/wuhuxian',
        cityName: '芜湖县',
        pinyin: 'wuhuxian'
    },
    {
        url: 'http://www.dianping.com/fancang',
        cityName: '繁昌县',
        pinyin: 'fancang'
    },
    {
        url: 'http://www.dianping.com/nanling',
        cityName: '南陵县',
        pinyin: 'nanling'
    },
    {
        url: 'http://www.dianping.com/tonglingxian',
        cityName: '铜陵县',
        pinyin: 'tonglingxian'
    },
    {
        url: 'http://www.dianping.com/tongcheng',
        cityName: '桐城市',
        pinyin: 'tongcheng'
    },
    {
        url: 'http://www.dianping.com/huaining',
        cityName: '怀宁县',
        pinyin: 'huaining'
    },
    {
        url: 'http://www.dianping.com/zongyang',
        cityName: '枞阳县',
        pinyin: 'zongyang'
    },
    {
        url: 'http://www.dianping.com/qianshan',
        cityName: '潜山县',
        pinyin: 'qianshan'
    },
    {
        url: 'http://www.dianping.com/taihu',
        cityName: '太湖县',
        pinyin: 'taihu'
    },
    {
        url: 'http://www.dianping.com/susong',
        cityName: '宿松县',
        pinyin: 'susong'
    },
    {
        url: 'http://www.dianping.com/wangjian',
        cityName: '望江县',
        pinyin: 'wangjian'
    },
    {
        url: 'http://www.dianping.com/yuexi',
        cityName: '岳西县',
        pinyin: 'yuexi'
    },
    {
        url: 'http://www.dianping.com/hsxixian',
        cityName: '歙县',
        pinyin: 'hsxixian'
    },
    {
        url: 'http://www.dianping.com/xiuning',
        cityName: '休宁县',
        pinyin: 'xiuning'
    },
    {
        url: 'http://www.dianping.com/hsyixian',
        cityName: '黟县',
        pinyin: 'hsyixian'
    },
    {
        url: 'http://www.dianping.com/qimen',
        cityName: '祁门县',
        pinyin: 'qimen'
    },
    {
        url: 'http://www.dianping.com/shouxian',
        cityName: '寿县',
        pinyin: 'shouxian'
    },
    {
        url: 'http://www.dianping.com/huoqiu',
        cityName: '霍邱县',
        pinyin: 'huoqiu'
    },
    {
        url: 'http://www.dianping.com/shucheng',
        cityName: '舒城县',
        pinyin: 'shucheng'
    },
    {
        url: 'http://www.dianping.com/jinzhai',
        cityName: '金寨县',
        pinyin: 'jinzhai'
    },
    {
        url: 'http://www.dianping.com/huoshan',
        cityName: '霍山县',
        pinyin: 'huoshan'
    },
    {
        url: 'http://www.dianping.com/lujian',
        cityName: '庐江县',
        pinyin: 'lujian'
    },
    {
        url: 'http://www.dianping.com/wuweixian',
        cityName: '无为县',
        pinyin: 'wuweixian'
    },
    {
        url: 'http://www.dianping.com/hanshan',
        cityName: '含山县',
        pinyin: 'hanshan'
    },
    {
        url: 'http://www.dianping.com/hexian',
        cityName: '和县',
        pinyin: 'hexian'
    },
    {
        url: 'http://www.dianping.com/dongzhi',
        cityName: '东至县',
        pinyin: 'dongzhi'
    },
    {
        url: 'http://www.dianping.com/shitai',
        cityName: '石台县',
        pinyin: 'shitai'
    },
    {
        url: 'http://www.dianping.com/qingyangxian',
        cityName: '青阳县',
        pinyin: 'qingyangxian'
    },
    {
        url: 'http://www.dianping.com/ningguo',
        cityName: '宁国市',
        pinyin: 'ningguo'
    },
    {
        url: 'http://www.dianping.com/langxi',
        cityName: '郎溪县',
        pinyin: 'langxi'
    },
    {
        url: 'http://www.dianping.com/guangde',
        cityName: '广德县',
        pinyin: 'guangde'
    },
    {
        url: 'http://www.dianping.com/jingxianxian',
        cityName: '泾县',
        pinyin: 'jingxianxian'
    },
    {
        url: 'http://www.dianping.com/jingde',
        cityName: '旌德县',
        pinyin: 'jingde'
    },
    {
        url: 'http://www.dianping.com/jixixian',
        cityName: '绩溪县',
        pinyin: 'jixixian'
    },
    {
        url: 'http://www.dianping.com/datongqu',
        cityName: '大通区',
        pinyin: 'datongqu'
    },
    {
        url: 'http://www.dianping.com/fuzhou',
        cityName: '福州',
        pinyin: 'fuzhou'
    },
    {
        url: 'http://www.dianping.com/xiamen',
        cityName: '厦门',
        pinyin: 'xiamen'
    },
    {
        url: 'http://www.dianping.com/quanzhou',
        cityName: '泉州',
        pinyin: 'quanzhou'
    },
    {
        url: 'http://www.dianping.com/zhangzhou',
        cityName: '漳州',
        pinyin: 'zhangzhou'
    },
    {
        url: 'http://www.dianping.com/longyan',
        cityName: '龙岩',
        pinyin: 'longyan'
    },
    {
        url: 'http://www.dianping.com/nanping',
        cityName: '南平',
        pinyin: 'nanping'
    },
    {
        url: 'http://www.dianping.com/ningde',
        cityName: '宁德',
        pinyin: 'ningde'
    },
    {
        url: 'http://www.dianping.com/sanming',
        cityName: '三明',
        pinyin: 'sanming'
    },
    {
        url: 'http://www.dianping.com/putian',
        cityName: '莆田',
        pinyin: 'putian'
    },
    {
        url: 'http://www.dianping.com/fuqing',
        cityName: '福清',
        pinyin: 'fuqing'
    },
    {
        url: 'http://www.dianping.com/changle',
        cityName: '长乐',
        pinyin: 'changle'
    },
    {
        url: 'http://www.dianping.com/wuyishan',
        cityName: '武夷山',
        pinyin: 'wuyishan'
    },
    {
        url: 'http://www.dianping.com/shishi',
        cityName: '石狮',
        pinyin: 'shishi'
    },
    {
        url: 'http://www.dianping.com/jinjiang',
        cityName: '晋江',
        pinyin: 'jinjiang'
    },
    {
        url: 'http://www.dianping.com/nanan',
        cityName: '南安市',
        pinyin: 'nanan'
    },
    {
        url: 'http://www.dianping.com/liuhai',
        cityName: '龙海',
        pinyin: 'liuhai'
    },
    {
        url: 'http://www.dianping.com/fuding',
        cityName: '福鼎',
        pinyin: 'fuding'
    },
    {
        url: 'http://www.dianping.com/gulangyu',
        cityName: '鼓浪屿',
        pinyin: 'gulangyu'
    },
    {
        url: 'http://www.dianping.com/lianjiangxian',
        cityName: '连江县',
        pinyin: 'lianjiangxian'
    },
    {
        url: 'http://www.dianping.com/luoyuan',
        cityName: '罗源县',
        pinyin: 'luoyuan'
    },
    {
        url: 'http://www.dianping.com/yongtai',
        cityName: '永泰县',
        pinyin: 'yongtai'
    },
    {
        url: 'http://www.dianping.com/pingtan',
        cityName: '平潭县',
        pinyin: 'pingtan'
    },
    {
        url: 'http://www.dianping.com/shaowu',
        cityName: '邵武市',
        pinyin: 'shaowu'
    },
    {
        url: 'http://www.dianping.com/jianou',
        cityName: '建瓯市',
        pinyin: 'jianou'
    },
    {
        url: 'http://www.dianping.com/jianyangshi',
        cityName: '建阳市',
        pinyin: 'jianyangshi'
    },
    {
        url: 'http://www.dianping.com/shuncang',
        cityName: '顺昌县',
        pinyin: 'shuncang'
    },
    {
        url: 'http://www.dianping.com/pucheng',
        cityName: '浦城县',
        pinyin: 'pucheng'
    },
    {
        url: 'http://www.dianping.com/guangze',
        cityName: '光泽县',
        pinyin: 'guangze'
    },
    {
        url: 'http://www.dianping.com/songxi',
        cityName: '松溪县',
        pinyin: 'songxi'
    },
    {
        url: 'http://www.dianping.com/zhenghe',
        cityName: '政和县',
        pinyin: 'zhenghe'
    },
    {
        url: 'http://www.dianping.com/yongan',
        cityName: '永安市',
        pinyin: 'yongan'
    },
    {
        url: 'http://www.dianping.com/mingxi',
        cityName: '明溪县',
        pinyin: 'mingxi'
    },
    {
        url: 'http://www.dianping.com/qingliu',
        cityName: '清流县',
        pinyin: 'qingliu'
    },
    {
        url: 'http://www.dianping.com/ninghua',
        cityName: '宁化县',
        pinyin: 'ninghua'
    },
    {
        url: 'http://www.dianping.com/datian',
        cityName: '大田县',
        pinyin: 'datian'
    },
    {
        url: 'http://www.dianping.com/youxi',
        cityName: '尤溪县',
        pinyin: 'youxi'
    },
    {
        url: 'http://www.dianping.com/shaxian',
        cityName: '沙县',
        pinyin: 'shaxian'
    },
    {
        url: 'http://www.dianping.com/jiangle',
        cityName: '将乐县',
        pinyin: 'jiangle'
    },
    {
        url: 'http://www.dianping.com/taining',
        cityName: '泰宁县',
        pinyin: 'taining'
    },
    {
        url: 'http://www.dianping.com/jianning',
        cityName: '建宁县',
        pinyin: 'jianning'
    },
    {
        url: 'http://www.dianping.com/huian',
        cityName: '惠安县',
        pinyin: 'huian'
    },
    {
        url: 'http://www.dianping.com/anxi',
        cityName: '安溪县',
        pinyin: 'anxi'
    },
    {
        url: 'http://www.dianping.com/yongchun',
        cityName: '永春县',
        pinyin: 'yongchun'
    },
    {
        url: 'http://www.dianping.com/dehua',
        cityName: '德化县',
        pinyin: 'dehua'
    },
    {
        url: 'http://www.dianping.com/zhangpu',
        cityName: '漳浦县',
        pinyin: 'zhangpu'
    },
    {
        url: 'http://www.dianping.com/zhangping',
        cityName: '漳平市',
        pinyin: 'zhangping'
    },
    {
        url: 'http://www.dianping.com/changting',
        cityName: '长汀县',
        pinyin: 'changting'
    },
    {
        url: 'http://www.dianping.com/yongding',
        cityName: '永定县',
        pinyin: 'yongding'
    },
    {
        url: 'http://www.dianping.com/shanghang',
        cityName: '上杭县',
        pinyin: 'shanghang'
    },
    {
        url: 'http://www.dianping.com/wuping',
        cityName: '武平县',
        pinyin: 'wuping'
    },
    {
        url: 'http://www.dianping.com/liancheng',
        cityName: '连城县',
        pinyin: 'liancheng'
    },
    {
        url: 'http://www.dianping.com/fuan',
        cityName: '福安市',
        pinyin: 'fuan'
    },
    {
        url: 'http://www.dianping.com/shouning',
        cityName: '寿宁县',
        pinyin: 'shouning'
    },
    {
        url: 'http://www.dianping.com/xiapu',
        cityName: '霞浦县',
        pinyin: 'xiapu'
    },
    {
        url: 'http://www.dianping.com/zherong',
        cityName: '柘荣县',
        pinyin: 'zherong'
    },
    {
        url: 'http://www.dianping.com/pingnan',
        cityName: '屏南县',
        pinyin: 'pingnan'
    },
    {
        url: 'http://www.dianping.com/gutian',
        cityName: '古田县',
        pinyin: 'gutian'
    },
    {
        url: 'http://www.dianping.com/zhouning',
        cityName: '周宁县',
        pinyin: 'zhouning'
    },
    {
        url: 'http://www.dianping.com/jinmenxian',
        cityName: '金门县',
        pinyin: 'jinmenxian'
    },
    {
        url: 'http://www.dianping.com/zhengzhou',
        cityName: '郑州',
        pinyin: 'zhengzhou'
    },
    {
        url: 'http://www.dianping.com/xinxiang',
        cityName: '新乡',
        pinyin: 'xinxiang'
    },
    {
        url: 'http://www.dianping.com/luoyang',
        cityName: '洛阳',
        pinyin: 'luoyang'
    },
    {
        url: 'http://www.dianping.com/kaifeng',
        cityName: '开封',
        pinyin: 'kaifeng'
    },
    {
        url: 'http://www.dianping.com/xuchang',
        cityName: '许昌',
        pinyin: 'xuchang'
    },
    {
        url: 'http://www.dianping.com/anyang',
        cityName: '安阳',
        pinyin: 'anyang'
    },
    {
        url: 'http://www.dianping.com/puyang',
        cityName: '濮阳',
        pinyin: 'puyang'
    },
    {
        url: 'http://www.dianping.com/nanyang',
        cityName: '南阳',
        pinyin: 'nanyang'
    },
    {
        url: 'http://www.dianping.com/jiaozuo',
        cityName: '焦作',
        pinyin: 'jiaozuo'
    },
    {
        url: 'http://www.dianping.com/pingdingshan',
        cityName: '平顶山',
        pinyin: 'pingdingshan'
    },
    {
        url: 'http://www.dianping.com/zhoukou',
        cityName: '周口',
        pinyin: 'zhoukou'
    },
    {
        url: 'http://www.dianping.com/shangqiu',
        cityName: '商丘',
        pinyin: 'shangqiu'
    },
    {
        url: 'http://www.dianping.com/xinyang',
        cityName: '信阳',
        pinyin: 'xinyang'
    },
    {
        url: 'http://www.dianping.com/sanmenxia',
        cityName: '三门峡',
        pinyin: 'sanmenxia'
    },
    {
        url: 'http://www.dianping.com/luohe',
        cityName: '漯河',
        pinyin: 'luohe'
    },
    {
        url: 'http://www.dianping.com/zhumadian',
        cityName: '驻马店',
        pinyin: 'zhumadian'
    },
    {
        url: 'http://www.dianping.com/hebi',
        cityName: '鹤壁',
        pinyin: 'hebi'
    },
    {
        url: 'http://www.dianping.com/jiyuan',
        cityName: '济源',
        pinyin: 'jiyuan'
    },
    {
        url: 'http://www.dianping.com/huangchuan',
        cityName: '潢川县',
        pinyin: 'huangchuan'
    },
    {
        url: 'http://www.dianping.com/xinzheng',
        cityName: '新郑市',
        pinyin: 'xinzheng'
    },
    {
        url: 'http://www.dianping.com/dengfeng',
        cityName: '登封市',
        pinyin: 'dengfeng'
    },
    {
        url: 'http://www.dianping.com/xinmi',
        cityName: '新密市',
        pinyin: 'xinmi'
    },
    {
        url: 'http://www.dianping.com/gongyi',
        cityName: '巩义市',
        pinyin: 'gongyi'
    },
    {
        url: 'http://www.dianping.com/yingyang',
        cityName: '荥阳市',
        pinyin: 'yingyang'
    },
    {
        url: 'http://www.dianping.com/zhongmo',
        cityName: '中牟县',
        pinyin: 'zhongmo'
    },
    {
        url: 'http://www.dianping.com/yima',
        cityName: '义马市',
        pinyin: 'yima'
    },
    {
        url: 'http://www.dianping.com/lingbao',
        cityName: '灵宝市',
        pinyin: 'lingbao'
    },
    {
        url: 'http://www.dianping.com/shenchixian',
        cityName: '渑池县',
        pinyin: 'shenchixian'
    },
    {
        url: 'http://www.dianping.com/shanxian',
        cityName: '陕州区',
        pinyin: 'shanxian'
    },
    {
        url: 'http://www.dianping.com/lushi',
        cityName: '卢氏县',
        pinyin: 'lushi'
    },
    {
        url: 'http://www.dianping.com/yanshi',
        cityName: '偃师市',
        pinyin: 'yanshi'
    },
    {
        url: 'http://www.dianping.com/mengjin',
        cityName: '孟津县',
        pinyin: 'mengjin'
    },
    {
        url: 'http://www.dianping.com/xinan',
        cityName: '新安县',
        pinyin: 'xinan'
    },
    {
        url: 'http://www.dianping.com/luanchuan',
        cityName: '栾川县',
        pinyin: 'luanchuan'
    },
    {
        url: 'http://www.dianping.com/songxian',
        cityName: '嵩县',
        pinyin: 'songxian'
    },
    {
        url: 'http://www.dianping.com/ruyang',
        cityName: '汝阳县',
        pinyin: 'ruyang'
    },
    {
        url: 'http://www.dianping.com/lyyiyang',
        cityName: '宜阳县',
        pinyin: 'lyyiyang'
    },
    {
        url: 'http://www.dianping.com/luoning',
        cityName: '洛宁县',
        pinyin: 'luoning'
    },
    {
        url: 'http://www.dianping.com/yichuan',
        cityName: '伊川县',
        pinyin: 'yichuan'
    },
    {
        url: 'http://www.dianping.com/mengzhou',
        cityName: '孟州市',
        pinyin: 'mengzhou'
    },
    {
        url: 'http://www.dianping.com/qinyang',
        cityName: '沁阳市',
        pinyin: 'qinyang'
    },
    {
        url: 'http://www.dianping.com/xiuwu',
        cityName: '修武县',
        pinyin: 'xiuwu'
    },
    {
        url: 'http://www.dianping.com/boai',
        cityName: '博爱县',
        pinyin: 'boai'
    },
    {
        url: 'http://www.dianping.com/wuzhi',
        cityName: '武陟县',
        pinyin: 'wuzhi'
    },
    {
        url: 'http://www.dianping.com/wenxian',
        cityName: '温县',
        pinyin: 'wenxian'
    },
    {
        url: 'http://www.dianping.com/weihui',
        cityName: '卫辉市',
        pinyin: 'weihui'
    },
    {
        url: 'http://www.dianping.com/huixian',
        cityName: '辉县市',
        pinyin: 'huixian'
    },
    {
        url: 'http://www.dianping.com/xinxiangxian',
        cityName: '新乡县',
        pinyin: 'xinxiangxian'
    },
    {
        url: 'http://www.dianping.com/huojia',
        cityName: '获嘉县',
        pinyin: 'huojia'
    },
    {
        url: 'http://www.dianping.com/yuanyang',
        cityName: '原阳县',
        pinyin: 'yuanyang'
    },
    {
        url: 'http://www.dianping.com/yanjin',
        cityName: '延津县',
        pinyin: 'yanjin'
    },
    {
        url: 'http://www.dianping.com/fengqiu',
        cityName: '封丘县',
        pinyin: 'fengqiu'
    },
    {
        url: 'http://www.dianping.com/changyuan',
        cityName: '长垣县',
        pinyin: 'changyuan'
    },
    {
        url: 'http://www.dianping.com/xunxian',
        cityName: '浚县',
        pinyin: 'xunxian'
    },
    {
        url: 'http://www.dianping.com/hbqixian',
        cityName: '淇县',
        pinyin: 'hbqixian'
    },
    {
        url: 'http://www.dianping.com/linzhou',
        cityName: '林州市',
        pinyin: 'linzhou'
    },
    {
        url: 'http://www.dianping.com/anyangxian',
        cityName: '安阳县',
        pinyin: 'anyangxian'
    },
    {
        url: 'http://www.dianping.com/tangyin',
        cityName: '汤阴县',
        pinyin: 'tangyin'
    },
    {
        url: 'http://www.dianping.com/huaxian',
        cityName: '滑县',
        pinyin: 'huaxian'
    },
    {
        url: 'http://www.dianping.com/neihuang',
        cityName: '内黄县',
        pinyin: 'neihuang'
    },
    {
        url: 'http://www.dianping.com/qingfeng',
        cityName: '清丰县',
        pinyin: 'qingfeng'
    },
    {
        url: 'http://www.dianping.com/nanle',
        cityName: '南乐县',
        pinyin: 'nanle'
    },
    {
        url: 'http://www.dianping.com/fanxian',
        cityName: '范县',
        pinyin: 'fanxian'
    },
    {
        url: 'http://www.dianping.com/taiqian',
        cityName: '台前县',
        pinyin: 'taiqian'
    },
    {
        url: 'http://www.dianping.com/puyangxian',
        cityName: '濮阳县',
        pinyin: 'puyangxian'
    },
    {
        url: 'http://www.dianping.com/kfqixian',
        cityName: '杞县',
        pinyin: 'kfqixian'
    },
    {
        url: 'http://www.dianping.com/tongxu',
        cityName: '通许县',
        pinyin: 'tongxu'
    },
    {
        url: 'http://www.dianping.com/weishi',
        cityName: '尉氏县',
        pinyin: 'weishi'
    },
    {
        url: 'http://www.dianping.com/kaifengxian',
        cityName: '开封县',
        pinyin: 'kaifengxian'
    },
    {
        url: 'http://www.dianping.com/lankao',
        cityName: '兰考县',
        pinyin: 'lankao'
    },
    {
        url: 'http://www.dianping.com/yongcheng',
        cityName: '永城市',
        pinyin: 'yongcheng'
    },
    {
        url: 'http://www.dianping.com/yuchengxian',
        cityName: '虞城县',
        pinyin: 'yuchengxian'
    },
    {
        url: 'http://www.dianping.com/minquan',
        cityName: '民权县',
        pinyin: 'minquan'
    },
    {
        url: 'http://www.dianping.com/ningling',
        cityName: '宁陵县',
        pinyin: 'ningling'
    },
    {
        url: 'http://www.dianping.com/suixian',
        cityName: '睢县',
        pinyin: 'suixian'
    },
    {
        url: 'http://www.dianping.com/xiayi',
        cityName: '夏邑县',
        pinyin: 'xiayi'
    },
    {
        url: 'http://www.dianping.com/zhecheng',
        cityName: '柘城县',
        pinyin: 'zhecheng'
    },
    {
        url: 'http://www.dianping.com/yuzhou',
        cityName: '禹州市',
        pinyin: 'yuzhou'
    },
    {
        url: 'http://www.dianping.com/changge',
        cityName: '长葛市',
        pinyin: 'changge'
    },
    {
        url: 'http://www.dianping.com/xuchangxian',
        cityName: '许昌县',
        pinyin: 'xuchangxian'
    },
    {
        url: 'http://www.dianping.com/yanling',
        cityName: '鄢陵县',
        pinyin: 'yanling'
    },
    {
        url: 'http://www.dianping.com/xcxiangcheng',
        cityName: '襄城县',
        pinyin: 'xcxiangcheng'
    },
    {
        url: 'http://www.dianping.com/wuyang',
        cityName: '舞阳县',
        pinyin: 'wuyang'
    },
    {
        url: 'http://www.dianping.com/linying',
        cityName: '临颍县',
        pinyin: 'linying'
    },
    {
        url: 'http://www.dianping.com/wugang',
        cityName: '舞钢市',
        pinyin: 'wugang'
    },
    {
        url: 'http://www.dianping.com/ruzhou',
        cityName: '汝州市',
        pinyin: 'ruzhou'
    },
    {
        url: 'http://www.dianping.com/baofeng',
        cityName: '宝丰县',
        pinyin: 'baofeng'
    },
    {
        url: 'http://www.dianping.com/yexian',
        cityName: '叶县',
        pinyin: 'yexian'
    },
    {
        url: 'http://www.dianping.com/pdslushan',
        cityName: '鲁山县',
        pinyin: 'pdslushan'
    },
    {
        url: 'http://www.dianping.com/jiaxian',
        cityName: '郏县',
        pinyin: 'jiaxian'
    },
    {
        url: 'http://www.dianping.com/dengzhou',
        cityName: '邓州市',
        pinyin: 'dengzhou'
    },
    {
        url: 'http://www.dianping.com/nanzhao',
        cityName: '南召县',
        pinyin: 'nanzhao'
    },
    {
        url: 'http://www.dianping.com/fangcheng',
        cityName: '方城县',
        pinyin: 'fangcheng'
    },
    {
        url: 'http://www.dianping.com/xixia',
        cityName: '西峡县',
        pinyin: 'xixia'
    },
    {
        url: 'http://www.dianping.com/zhenping',
        cityName: '镇平县',
        pinyin: 'zhenping'
    },
    {
        url: 'http://www.dianping.com/neixiang',
        cityName: '内乡县',
        pinyin: 'neixiang'
    },
    {
        url: 'http://www.dianping.com/xichuan',
        cityName: '淅川县',
        pinyin: 'xichuan'
    },
    {
        url: 'http://www.dianping.com/sheqi',
        cityName: '社旗县',
        pinyin: 'sheqi'
    },
    {
        url: 'http://www.dianping.com/tanghe',
        cityName: '唐河县',
        pinyin: 'tanghe'
    },
    {
        url: 'http://www.dianping.com/xinye',
        cityName: '新野县',
        pinyin: 'xinye'
    },
    {
        url: 'http://www.dianping.com/tongbo',
        cityName: '桐柏县',
        pinyin: 'tongbo'
    },
    {
        url: 'http://www.dianping.com/xyxixian',
        cityName: '息县',
        pinyin: 'xyxixian'
    },
    {
        url: 'http://www.dianping.com/huaibin',
        cityName: '淮滨县',
        pinyin: 'huaibin'
    },
    {
        url: 'http://www.dianping.com/guangshan',
        cityName: '光山县',
        pinyin: 'guangshan'
    },
    {
        url: 'http://www.dianping.com/gushi',
        cityName: '固始县',
        pinyin: 'gushi'
    },
    {
        url: 'http://www.dianping.com/shangcheng',
        cityName: '商城县',
        pinyin: 'shangcheng'
    },
    {
        url: 'http://www.dianping.com/luoshan',
        cityName: '罗山县',
        pinyin: 'luoshan'
    },
    {
        url: 'http://www.dianping.com/xinxianxian',
        cityName: '新县',
        pinyin: 'xinxianxian'
    },
    {
        url: 'http://www.dianping.com/xiangcheng',
        cityName: '项城市',
        pinyin: 'xiangcheng'
    },
    {
        url: 'http://www.dianping.com/fugou',
        cityName: '扶沟县',
        pinyin: 'fugou'
    },
    {
        url: 'http://www.dianping.com/xihua',
        cityName: '西华县',
        pinyin: 'xihua'
    },
    {
        url: 'http://www.dianping.com/shangshui',
        cityName: '商水县',
        pinyin: 'shangshui'
    },
    {
        url: 'http://www.dianping.com/taikang',
        cityName: '太康县',
        pinyin: 'taikang'
    },
    {
        url: 'http://www.dianping.com/luyi',
        cityName: '鹿邑县',
        pinyin: 'luyi'
    },
    {
        url: 'http://www.dianping.com/dancheng',
        cityName: '郸城县',
        pinyin: 'dancheng'
    },
    {
        url: 'http://www.dianping.com/huaiyang',
        cityName: '淮阳县',
        pinyin: 'huaiyang'
    },
    {
        url: 'http://www.dianping.com/shenqiu',
        cityName: '沈丘县',
        pinyin: 'shenqiu'
    },
    {
        url: 'http://www.dianping.com/queshan',
        cityName: '确山县',
        pinyin: 'queshan'
    },
    {
        url: 'http://www.dianping.com/miyang',
        cityName: '泌阳县',
        pinyin: 'miyang'
    },
    {
        url: 'http://www.dianping.com/suiping',
        cityName: '遂平县',
        pinyin: 'suiping'
    },
    {
        url: 'http://www.dianping.com/xiping',
        cityName: '西平县',
        pinyin: 'xiping'
    },
    {
        url: 'http://www.dianping.com/shangcha',
        cityName: '上蔡县',
        pinyin: 'shangcha'
    },
    {
        url: 'http://www.dianping.com/runan',
        cityName: '汝南县',
        pinyin: 'runan'
    },
    {
        url: 'http://www.dianping.com/pingyu',
        cityName: '平舆县',
        pinyin: 'pingyu'
    },
    {
        url: 'http://www.dianping.com/xincha',
        cityName: '新蔡县',
        pinyin: 'xincha'
    },
    {
        url: 'http://www.dianping.com/zhengyang',
        cityName: '正阳县',
        pinyin: 'zhengyang'
    },
    {
        url: 'http://www.dianping.com/wuhan',
        cityName: '武汉',
        pinyin: 'wuhan'
    },
    {
        url: 'http://www.dianping.com/yichang',
        cityName: '宜昌',
        pinyin: 'yichang'
    },
    {
        url: 'http://www.dianping.com/jingzhou',
        cityName: '荆州',
        pinyin: 'jingzhou'
    },
    {
        url: 'http://www.dianping.com/huanggang',
        cityName: '黄冈',
        pinyin: 'huanggang'
    },
    {
        url: 'http://www.dianping.com/shiyan',
        cityName: '十堰',
        pinyin: 'shiyan'
    },
    {
        url: 'http://www.dianping.com/huangshi',
        cityName: '黄石',
        pinyin: 'huangshi'
    },
    {
        url: 'http://www.dianping.com/xiangyang',
        cityName: '襄阳',
        pinyin: 'xiangyang'
    },
    {
        url: 'http://www.dianping.com/jinmen',
        cityName: '荆门',
        pinyin: 'jinmen'
    },
    {
        url: 'http://www.dianping.com/xianning',
        cityName: '咸宁',
        pinyin: 'xianning'
    },
    {
        url: 'http://www.dianping.com/qianjiang',
        cityName: '潜江',
        pinyin: 'qianjiang'
    },
    {
        url: 'http://www.dianping.com/suizhou',
        cityName: '随州',
        pinyin: 'suizhou'
    },
    {
        url: 'http://www.dianping.com/xiaogan',
        cityName: '孝感',
        pinyin: 'xiaogan'
    },
    {
        url: 'http://www.dianping.com/enshizhou',
        cityName: '恩施',
        pinyin: 'enshizhou'
    },
    {
        url: 'http://www.dianping.com/ezhou',
        cityName: '鄂州',
        pinyin: 'ezhou'
    },
    {
        url: 'http://www.dianping.com/tianmen',
        cityName: '天门',
        pinyin: 'tianmen'
    },
    {
        url: 'http://www.dianping.com/xiantao',
        cityName: '仙桃',
        pinyin: 'xiantao'
    },
    {
        url: 'http://www.dianping.com/wudangshan',
        cityName: '武当山',
        pinyin: 'wudangshan'
    },
    {
        url: 'http://www.dianping.com/sanxia',
        cityName: '三峡',
        pinyin: 'sanxia'
    },
    {
        url: 'http://www.dianping.com/shennongjia',
        cityName: '神农架林区',
        pinyin: 'shennongjia'
    },
    {
        url: 'http://www.dianping.com/danjiangkou',
        cityName: '丹江口市',
        pinyin: 'danjiangkou'
    },
    {
        url: 'http://www.dianping.com/yunxian',
        cityName: '郧县',
        pinyin: 'yunxian'
    },
    {
        url: 'http://www.dianping.com/zhushan',
        cityName: '竹山县',
        pinyin: 'zhushan'
    },
    {
        url: 'http://www.dianping.com/fangxian',
        cityName: '房县',
        pinyin: 'fangxian'
    },
    {
        url: 'http://www.dianping.com/yunxi',
        cityName: '郧西县',
        pinyin: 'yunxi'
    },
    {
        url: 'http://www.dianping.com/zhuxi',
        cityName: '竹溪县',
        pinyin: 'zhuxi'
    },
    {
        url: 'http://www.dianping.com/laohekou',
        cityName: '老河口市',
        pinyin: 'laohekou'
    },
    {
        url: 'http://www.dianping.com/zaoyang',
        cityName: '枣阳市',
        pinyin: 'zaoyang'
    },
    {
        url: 'http://www.dianping.com/yicheng',
        cityName: '宜城市',
        pinyin: 'yicheng'
    },
    {
        url: 'http://www.dianping.com/nanzhang',
        cityName: '南漳县',
        pinyin: 'nanzhang'
    },
    {
        url: 'http://www.dianping.com/guchengxian',
        cityName: '谷城县',
        pinyin: 'guchengxian'
    },
    {
        url: 'http://www.dianping.com/baokang',
        cityName: '保康县',
        pinyin: 'baokang'
    },
    {
        url: 'http://www.dianping.com/zhongxiang',
        cityName: '钟祥市',
        pinyin: 'zhongxiang'
    },
    {
        url: 'http://www.dianping.com/shayang',
        cityName: '沙洋县',
        pinyin: 'shayang'
    },
    {
        url: 'http://www.dianping.com/jingshan',
        cityName: '京山县',
        pinyin: 'jingshan'
    },
    {
        url: 'http://www.dianping.com/yingcheng',
        cityName: '应城市',
        pinyin: 'yingcheng'
    },
    {
        url: 'http://www.dianping.com/anlu',
        cityName: '安陆市',
        pinyin: 'anlu'
    },
    {
        url: 'http://www.dianping.com/hanchuan',
        cityName: '汉川市',
        pinyin: 'hanchuan'
    },
    {
        url: 'http://www.dianping.com/xiaocang',
        cityName: '孝昌县',
        pinyin: 'xiaocang'
    },
    {
        url: 'http://www.dianping.com/dawu',
        cityName: '大悟县',
        pinyin: 'dawu'
    },
    {
        url: 'http://www.dianping.com/yunmeng',
        cityName: '云梦县',
        pinyin: 'yunmeng'
    },
    {
        url: 'http://www.dianping.com/macheng',
        cityName: '麻城市',
        pinyin: 'macheng'
    },
    {
        url: 'http://www.dianping.com/wuxue',
        cityName: '武穴市',
        pinyin: 'wuxue'
    },
    {
        url: 'http://www.dianping.com/hongan',
        cityName: '红安县',
        pinyin: 'hongan'
    },
    {
        url: 'http://www.dianping.com/luotian',
        cityName: '罗田县',
        pinyin: 'luotian'
    },
    {
        url: 'http://www.dianping.com/yingshan',
        cityName: '英山县',
        pinyin: 'yingshan'
    },
    {
        url: 'http://www.dianping.com/xishui',
        cityName: '浠水县',
        pinyin: 'xishui'
    },
    {
        url: 'http://www.dianping.com/qichun',
        cityName: '蕲春县',
        pinyin: 'qichun'
    },
    {
        url: 'http://www.dianping.com/huangmei',
        cityName: '黄梅县',
        pinyin: 'huangmei'
    },
    {
        url: 'http://www.dianping.com/tuanfeng',
        cityName: '团风县',
        pinyin: 'tuanfeng'
    },
    {
        url: 'http://www.dianping.com/daye',
        cityName: '大冶市',
        pinyin: 'daye'
    },
    {
        url: 'http://www.dianping.com/yangxinxian',
        cityName: '阳新县',
        pinyin: 'yangxinxian'
    },
    {
        url: 'http://www.dianping.com/chibi',
        cityName: '赤壁市',
        pinyin: 'chibi'
    },
    {
        url: 'http://www.dianping.com/jiayu',
        cityName: '嘉鱼县',
        pinyin: 'jiayu'
    },
    {
        url: 'http://www.dianping.com/tongchengxian',
        cityName: '通城县',
        pinyin: 'tongchengxian'
    },
    {
        url: 'http://www.dianping.com/chongyang',
        cityName: '崇阳县',
        pinyin: 'chongyang'
    },
    {
        url: 'http://www.dianping.com/tongshanxian',
        cityName: '通山县',
        pinyin: 'tongshanxian'
    },
    {
        url: 'http://www.dianping.com/shishou',
        cityName: '石首市',
        pinyin: 'shishou'
    },
    {
        url: 'http://www.dianping.com/honghu',
        cityName: '洪湖市',
        pinyin: 'honghu'
    },
    {
        url: 'http://www.dianping.com/songzi',
        cityName: '松滋市',
        pinyin: 'songzi'
    },
    {
        url: 'http://www.dianping.com/jianling',
        cityName: '江陵县',
        pinyin: 'jianling'
    },
    {
        url: 'http://www.dianping.com/gongan',
        cityName: '公安县',
        pinyin: 'gongan'
    },
    {
        url: 'http://www.dianping.com/jianli',
        cityName: '监利县',
        pinyin: 'jianli'
    },
    {
        url: 'http://www.dianping.com/zhijian',
        cityName: '枝江市',
        pinyin: 'zhijian'
    },
    {
        url: 'http://www.dianping.com/yidu',
        cityName: '宜都市',
        pinyin: 'yidu'
    },
    {
        url: 'http://www.dianping.com/dangyang',
        cityName: '当阳市',
        pinyin: 'dangyang'
    },
    {
        url: 'http://www.dianping.com/yuanan',
        cityName: '远安县',
        pinyin: 'yuanan'
    },
    {
        url: 'http://www.dianping.com/xingshan',
        cityName: '兴山县',
        pinyin: 'xingshan'
    },
    {
        url: 'http://www.dianping.com/zigui',
        cityName: '秭归县',
        pinyin: 'zigui'
    },
    {
        url: 'http://www.dianping.com/changyang',
        cityName: '长阳土家族自治县',
        pinyin: 'changyang'
    },
    {
        url: 'http://www.dianping.com/wufeng',
        cityName: '五峰土家族自治县',
        pinyin: 'wufeng'
    },
    {
        url: 'http://www.dianping.com/guangshui',
        cityName: '广水市',
        pinyin: 'guangshui'
    },
    {
        url: 'http://www.dianping.com/enshi',
        cityName: '恩施市',
        pinyin: 'enshi'
    },
    {
        url: 'http://www.dianping.com/lichuan',
        cityName: '利川市',
        pinyin: 'lichuan'
    },
    {
        url: 'http://www.dianping.com/jianshixian',
        cityName: '建始县',
        pinyin: 'jianshixian'
    },
    {
        url: 'http://www.dianping.com/badong',
        cityName: '巴东县',
        pinyin: 'badong'
    },
    {
        url: 'http://www.dianping.com/xuanen',
        cityName: '宣恩县',
        pinyin: 'xuanen'
    },
    {
        url: 'http://www.dianping.com/xianfeng',
        cityName: '咸丰县',
        pinyin: 'xianfeng'
    },
    {
        url: 'http://www.dianping.com/laifeng',
        cityName: '来凤县',
        pinyin: 'laifeng'
    },
    {
        url: 'http://www.dianping.com/hefeng',
        cityName: '鹤峰县',
        pinyin: 'hefeng'
    },
    {
        url: 'http://www.dianping.com/yiling',
        cityName: '夷陵区',
        pinyin: 'yiling'
    },
    {
        url: 'http://www.dianping.com/szsuixian',
        cityName: '随县',
        pinyin: 'szsuixian'
    },
    {
        url: 'http://www.dianping.com/changsha',
        cityName: '长沙',
        pinyin: 'changsha'
    },
    {
        url: 'http://www.dianping.com/xiangxi',
        cityName: '湘西',
        pinyin: 'xiangxi'
    },
    {
        url: 'http://www.dianping.com/zhangjiajie',
        cityName: '张家界',
        pinyin: 'zhangjiajie'
    },
    {
        url: 'http://www.dianping.com/hengyang',
        cityName: '衡阳',
        pinyin: 'hengyang'
    },
    {
        url: 'http://www.dianping.com/zhuzhou',
        cityName: '株洲',
        pinyin: 'zhuzhou'
    },
    {
        url: 'http://www.dianping.com/xiangtan',
        cityName: '湘潭',
        pinyin: 'xiangtan'
    },
    {
        url: 'http://www.dianping.com/shaoyang',
        cityName: '邵阳',
        pinyin: 'shaoyang'
    },
    {
        url: 'http://www.dianping.com/yueyang',
        cityName: '岳阳',
        pinyin: 'yueyang'
    },
    {
        url: 'http://www.dianping.com/changde',
        cityName: '常德',
        pinyin: 'changde'
    },
    {
        url: 'http://www.dianping.com/yiyang',
        cityName: '益阳',
        pinyin: 'yiyang'
    },
    {
        url: 'http://www.dianping.com/huaihua',
        cityName: '怀化',
        pinyin: 'huaihua'
    },
    {
        url: 'http://www.dianping.com/chenzhou',
        cityName: '郴州',
        pinyin: 'chenzhou'
    },
    {
        url: 'http://www.dianping.com/loudi',
        cityName: '娄底',
        pinyin: 'loudi'
    },
    {
        url: 'http://www.dianping.com/yongzhou',
        cityName: '永州',
        pinyin: 'yongzhou'
    },
    {
        url: 'http://www.dianping.com/liuyang',
        cityName: '浏阳',
        pinyin: 'liuyang'
    },
    {
        url: 'http://www.dianping.com/ningxiang',
        cityName: '宁乡县',
        pinyin: 'ningxiang'
    },
    {
        url: 'http://www.dianping.com/cili',
        cityName: '慈利县',
        pinyin: 'cili'
    },
    {
        url: 'http://www.dianping.com/sangzhi',
        cityName: '桑植县',
        pinyin: 'sangzhi'
    },
    {
        url: 'http://www.dianping.com/jinshi',
        cityName: '津市市',
        pinyin: 'jinshi'
    },
    {
        url: 'http://www.dianping.com/anxiang',
        cityName: '安乡县',
        pinyin: 'anxiang'
    },
    {
        url: 'http://www.dianping.com/hanshou',
        cityName: '汉寿县',
        pinyin: 'hanshou'
    },
    {
        url: 'http://www.dianping.com/cdlixian',
        cityName: '澧县',
        pinyin: 'cdlixian'
    },
    {
        url: 'http://www.dianping.com/linli',
        cityName: '临澧县',
        pinyin: 'linli'
    },
    {
        url: 'http://www.dianping.com/taoyuanxian',
        cityName: '桃源县',
        pinyin: 'taoyuanxian'
    },
    {
        url: 'http://www.dianping.com/shimen',
        cityName: '石门县',
        pinyin: 'shimen'
    },
    {
        url: 'http://www.dianping.com/yuanjian',
        cityName: '沅江市',
        pinyin: 'yuanjian'
    },
    {
        url: 'http://www.dianping.com/nanxian',
        cityName: '南县',
        pinyin: 'nanxian'
    },
    {
        url: 'http://www.dianping.com/taojian',
        cityName: '桃江县',
        pinyin: 'taojian'
    },
    {
        url: 'http://www.dianping.com/anhua',
        cityName: '安化县',
        pinyin: 'anhua'
    },
    {
        url: 'http://www.dianping.com/miluo',
        cityName: '汨罗市',
        pinyin: 'miluo'
    },
    {
        url: 'http://www.dianping.com/linxiang',
        cityName: '临湘市',
        pinyin: 'linxiang'
    },
    {
        url: 'http://www.dianping.com/yueyangxian',
        cityName: '岳阳县',
        pinyin: 'yueyangxian'
    },
    {
        url: 'http://www.dianping.com/huarong',
        cityName: '华容县',
        pinyin: 'huarong'
    },
    {
        url: 'http://www.dianping.com/xiangyin',
        cityName: '湘阴县',
        pinyin: 'xiangyin'
    },
    {
        url: 'http://www.dianping.com/pingjian',
        cityName: '平江县',
        pinyin: 'pingjian'
    },
    {
        url: 'http://www.dianping.com/liling',
        cityName: '醴陵市',
        pinyin: 'liling'
    },
    {
        url: 'http://www.dianping.com/zhuzhouxian',
        cityName: '株洲县',
        pinyin: 'zhuzhouxian'
    },
    {
        url: 'http://www.dianping.com/youxian',
        cityName: '攸县',
        pinyin: 'youxian'
    },
    {
        url: 'http://www.dianping.com/chaling',
        cityName: '茶陵县',
        pinyin: 'chaling'
    },
    {
        url: 'http://www.dianping.com/yanlingxian',
        cityName: '炎陵县',
        pinyin: 'yanlingxian'
    },
    {
        url: 'http://www.dianping.com/xiangxiang',
        cityName: '湘乡市',
        pinyin: 'xiangxiang'
    },
    {
        url: 'http://www.dianping.com/shaoshan',
        cityName: '韶山市',
        pinyin: 'shaoshan'
    },
    {
        url: 'http://www.dianping.com/xiangtanxian',
        cityName: '湘潭县',
        pinyin: 'xiangtanxian'
    },
    {
        url: 'http://www.dianping.com/changning',
        cityName: '常宁市',
        pinyin: 'changning'
    },
    {
        url: 'http://www.dianping.com/leiyang',
        cityName: '耒阳市',
        pinyin: 'leiyang'
    },
    {
        url: 'http://www.dianping.com/hengyangxian',
        cityName: '衡阳县',
        pinyin: 'hengyangxian'
    },
    {
        url: 'http://www.dianping.com/hengnan',
        cityName: '衡南县',
        pinyin: 'hengnan'
    },
    {
        url: 'http://www.dianping.com/hengshan',
        cityName: '衡山县',
        pinyin: 'hengshan'
    },
    {
        url: 'http://www.dianping.com/hengdong',
        cityName: '衡东县',
        pinyin: 'hengdong'
    },
    {
        url: 'http://www.dianping.com/qidongxian',
        cityName: '祁东县',
        pinyin: 'qidongxian'
    },
    {
        url: 'http://www.dianping.com/zixing',
        cityName: '资兴市',
        pinyin: 'zixing'
    },
    {
        url: 'http://www.dianping.com/guiyangxian',
        cityName: '桂阳县',
        pinyin: 'guiyangxian'
    },
    {
        url: 'http://www.dianping.com/yongxing',
        cityName: '永兴县',
        pinyin: 'yongxing'
    },
    {
        url: 'http://www.dianping.com/yizhang',
        cityName: '宜章县',
        pinyin: 'yizhang'
    },
    {
        url: 'http://www.dianping.com/jiahe',
        cityName: '嘉禾县',
        pinyin: 'jiahe'
    },
    {
        url: 'http://www.dianping.com/linwu',
        cityName: '临武县',
        pinyin: 'linwu'
    },
    {
        url: 'http://www.dianping.com/rucheng',
        cityName: '汝城县',
        pinyin: 'rucheng'
    },
    {
        url: 'http://www.dianping.com/guidong',
        cityName: '桂东县',
        pinyin: 'guidong'
    },
    {
        url: 'http://www.dianping.com/anren',
        cityName: '安仁县',
        pinyin: 'anren'
    },
    {
        url: 'http://www.dianping.com/dongan',
        cityName: '东安县',
        pinyin: 'dongan'
    },
    {
        url: 'http://www.dianping.com/daoxian',
        cityName: '道县',
        pinyin: 'daoxian'
    },
    {
        url: 'http://www.dianping.com/ningyuan',
        cityName: '宁远县',
        pinyin: 'ningyuan'
    },
    {
        url: 'http://www.dianping.com/jianyong',
        cityName: '江永县',
        pinyin: 'jianyong'
    },
    {
        url: 'http://www.dianping.com/lanshan',
        cityName: '蓝山县',
        pinyin: 'lanshan'
    },
    {
        url: 'http://www.dianping.com/xintian',
        cityName: '新田县',
        pinyin: 'xintian'
    },
    {
        url: 'http://www.dianping.com/shuangpai',
        cityName: '双牌县',
        pinyin: 'shuangpai'
    },
    {
        url: 'http://www.dianping.com/qiyang',
        cityName: '祁阳县',
        pinyin: 'qiyang'
    },
    {
        url: 'http://www.dianping.com/jianghua',
        cityName: '江华瑶族自治县',
        pinyin: 'jianghua'
    },
    {
        url: 'http://www.dianping.com/wugangshi',
        cityName: '武冈市',
        pinyin: 'wugangshi'
    },
    {
        url: 'http://www.dianping.com/shaodong',
        cityName: '邵东县',
        pinyin: 'shaodong'
    },
    {
        url: 'http://www.dianping.com/shaoyangxian',
        cityName: '邵阳县',
        pinyin: 'shaoyangxian'
    },
    {
        url: 'http://www.dianping.com/xinshao',
        cityName: '新邵县',
        pinyin: 'xinshao'
    },
    {
        url: 'http://www.dianping.com/longhui',
        cityName: '隆回县',
        pinyin: 'longhui'
    },
    {
        url: 'http://www.dianping.com/dongkou',
        cityName: '洞口县',
        pinyin: 'dongkou'
    },
    {
        url: 'http://www.dianping.com/zysuining',
        cityName: '绥宁县',
        pinyin: 'zysuining'
    },
    {
        url: 'http://www.dianping.com/xinning',
        cityName: '新宁县',
        pinyin: 'xinning'
    },
    {
        url: 'http://www.dianping.com/chengbu',
        cityName: '城步苗族自治县',
        pinyin: 'chengbu'
    },
    {
        url: 'http://www.dianping.com/hongjian',
        cityName: '洪江市',
        pinyin: 'hongjian'
    },
    {
        url: 'http://www.dianping.com/yuanling',
        cityName: '沅陵县',
        pinyin: 'yuanling'
    },
    {
        url: 'http://www.dianping.com/chenxi',
        cityName: '辰溪县',
        pinyin: 'chenxi'
    },
    {
        url: 'http://www.dianping.com/xupu',
        cityName: '溆浦县',
        pinyin: 'xupu'
    },
    {
        url: 'http://www.dianping.com/zhongfang',
        cityName: '中方县',
        pinyin: 'zhongfang'
    },
    {
        url: 'http://www.dianping.com/huitong',
        cityName: '会同县',
        pinyin: 'huitong'
    },
    {
        url: 'http://www.dianping.com/mayang',
        cityName: '麻阳苗族自治县',
        pinyin: 'mayang'
    },
    {
        url: 'http://www.dianping.com/xinhuang',
        cityName: '新晃侗族自治县',
        pinyin: 'xinhuang'
    },
    {
        url: 'http://www.dianping.com/zhijiang',
        cityName: '芷江侗族自治县',
        pinyin: 'zhijiang'
    },
    {
        url: 'http://www.dianping.com/jingzhouxian',
        cityName: '靖州苗族侗族自治县',
        pinyin: 'jingzhouxian'
    },
    {
        url: 'http://www.dianping.com/tongdao',
        cityName: '通道侗族自治县',
        pinyin: 'tongdao'
    },
    {
        url: 'http://www.dianping.com/lengshuijiang',
        cityName: '冷水江市',
        pinyin: 'lengshuijiang'
    },
    {
        url: 'http://www.dianping.com/lianyuan',
        cityName: '涟源市',
        pinyin: 'lianyuan'
    },
    {
        url: 'http://www.dianping.com/shuangfeng',
        cityName: '双峰县',
        pinyin: 'shuangfeng'
    },
    {
        url: 'http://www.dianping.com/xinhua',
        cityName: '新化县',
        pinyin: 'xinhua'
    },
    {
        url: 'http://www.dianping.com/jishou',
        cityName: '吉首市',
        pinyin: 'jishou'
    },
    {
        url: 'http://www.dianping.com/xxluxi',
        cityName: '泸溪县',
        pinyin: 'xxluxi'
    },
    {
        url: 'http://www.dianping.com/fenghuang',
        cityName: '凤凰县',
        pinyin: 'fenghuang'
    },
    {
        url: 'http://www.dianping.com/huayuan',
        cityName: '花垣县',
        pinyin: 'huayuan'
    },
    {
        url: 'http://www.dianping.com/baojing',
        cityName: '保靖县',
        pinyin: 'baojing'
    },
    {
        url: 'http://www.dianping.com/guzhang',
        cityName: '古丈县',
        pinyin: 'guzhang'
    },
    {
        url: 'http://www.dianping.com/yongshun',
        cityName: '永顺县',
        pinyin: 'yongshun'
    },
    {
        url: 'http://www.dianping.com/liushan',
        cityName: '龙山县',
        pinyin: 'liushan'
    },
    {
        url: 'http://www.dianping.com/nanchang',
        cityName: '南昌',
        pinyin: 'nanchang'
    },
    {
        url: 'http://www.dianping.com/ganzhou',
        cityName: '赣州',
        pinyin: 'ganzhou'
    },
    {
        url: 'http://www.dianping.com/jiujiang',
        cityName: '九江',
        pinyin: 'jiujiang'
    },
    {
        url: 'http://www.dianping.com/shangrao',
        cityName: '上饶',
        pinyin: 'shangrao'
    },
    {
        url: 'http://www.dianping.com/jingdezhen',
        cityName: '景德镇',
        pinyin: 'jingdezhen'
    },
    {
        url: 'http://www.dianping.com/jian',
        cityName: '吉安',
        pinyin: 'jian'
    },
    {
        url: 'http://www.dianping.com/xinyu',
        cityName: '新余',
        pinyin: 'xinyu'
    },
    {
        url: 'http://www.dianping.com/jiangxiyichun',
        cityName: '宜春',
        pinyin: 'jiangxiyichun'
    },
    {
        url: 'http://www.dianping.com/pingxiang',
        cityName: '萍乡',
        pinyin: 'pingxiang'
    },
    {
        url: 'http://www.dianping.com/yingtan',
        cityName: '鹰潭',
        pinyin: 'yingtan'
    },
    {
        url: 'http://www.dianping.com/jiangxifuzhou',
        cityName: '抚州',
        pinyin: 'jiangxifuzhou'
    },
    {
        url: 'http://www.dianping.com/sanqingshan',
        cityName: '三清山',
        pinyin: 'sanqingshan'
    },
    {
        url: 'http://www.dianping.com/longhushan',
        cityName: '龙虎山',
        pinyin: 'longhushan'
    },
    {
        url: 'http://www.dianping.com/mingyueshan',
        cityName: '明月山',
        pinyin: 'mingyueshan'
    },
    {
        url: 'http://www.dianping.com/anyi',
        cityName: '安义县',
        pinyin: 'anyi'
    },
    {
        url: 'http://www.dianping.com/ruicang',
        cityName: '瑞昌市',
        pinyin: 'ruicang'
    },
    {
        url: 'http://www.dianping.com/jiujiangxian',
        cityName: '九江县',
        pinyin: 'jiujiangxian'
    },
    {
        url: 'http://www.dianping.com/wuning',
        cityName: '武宁县',
        pinyin: 'wuning'
    },
    {
        url: 'http://www.dianping.com/xiushui',
        cityName: '修水县',
        pinyin: 'xiushui'
    },
    {
        url: 'http://www.dianping.com/yongxiu',
        cityName: '永修县',
        pinyin: 'yongxiu'
    },
    {
        url: 'http://www.dianping.com/dean',
        cityName: '德安县',
        pinyin: 'dean'
    },
    {
        url: 'http://www.dianping.com/xingzi',
        cityName: '星子县',
        pinyin: 'xingzi'
    },
    {
        url: 'http://www.dianping.com/ducang',
        cityName: '都昌县',
        pinyin: 'ducang'
    },
    {
        url: 'http://www.dianping.com/hukou',
        cityName: '湖口县',
        pinyin: 'hukou'
    },
    {
        url: 'http://www.dianping.com/pengze',
        cityName: '彭泽县',
        pinyin: 'pengze'
    },
    {
        url: 'http://www.dianping.com/leping',
        cityName: '乐平市',
        pinyin: 'leping'
    },
    {
        url: 'http://www.dianping.com/fuliang',
        cityName: '浮梁县',
        pinyin: 'fuliang'
    },
    {
        url: 'http://www.dianping.com/guixi',
        cityName: '贵溪市',
        pinyin: 'guixi'
    },
    {
        url: 'http://www.dianping.com/yujian',
        cityName: '余江县',
        pinyin: 'yujian'
    },
    {
        url: 'http://www.dianping.com/fenyi',
        cityName: '分宜县',
        pinyin: 'fenyi'
    },
    {
        url: 'http://www.dianping.com/lianhua',
        cityName: '莲花县',
        pinyin: 'lianhua'
    },
    {
        url: 'http://www.dianping.com/shangli',
        cityName: '上栗县',
        pinyin: 'shangli'
    },
    {
        url: 'http://www.dianping.com/luxi',
        cityName: '芦溪县',
        pinyin: 'luxi'
    },
    {
        url: 'http://www.dianping.com/ruijin',
        cityName: '瑞金市',
        pinyin: 'ruijin'
    },
    {
        url: 'http://www.dianping.com/nankang',
        cityName: '南康市',
        pinyin: 'nankang'
    },
    {
        url: 'http://www.dianping.com/ganxian',
        cityName: '赣县',
        pinyin: 'ganxian'
    },
    {
        url: 'http://www.dianping.com/xinfeng',
        cityName: '信丰县',
        pinyin: 'xinfeng'
    },
    {
        url: 'http://www.dianping.com/dayu',
        cityName: '大余县',
        pinyin: 'dayu'
    },
    {
        url: 'http://www.dianping.com/shangyou',
        cityName: '上犹县',
        pinyin: 'shangyou'
    },
    {
        url: 'http://www.dianping.com/chongyi',
        cityName: '崇义县',
        pinyin: 'chongyi'
    },
    {
        url: 'http://www.dianping.com/anyuan',
        cityName: '安远县',
        pinyin: 'anyuan'
    },
    {
        url: 'http://www.dianping.com/liunan',
        cityName: '龙南县',
        pinyin: 'liunan'
    },
    {
        url: 'http://www.dianping.com/dingnan',
        cityName: '定南县',
        pinyin: 'dingnan'
    },
    {
        url: 'http://www.dianping.com/quannan',
        cityName: '全南县',
        pinyin: 'quannan'
    },
    {
        url: 'http://www.dianping.com/ningdu',
        cityName: '宁都县',
        pinyin: 'ningdu'
    },
    {
        url: 'http://www.dianping.com/yudu',
        cityName: '于都县',
        pinyin: 'yudu'
    },
    {
        url: 'http://www.dianping.com/xingguo',
        cityName: '兴国县',
        pinyin: 'xingguo'
    },
    {
        url: 'http://www.dianping.com/huicang',
        cityName: '会昌县',
        pinyin: 'huicang'
    },
    {
        url: 'http://www.dianping.com/xunwu',
        cityName: '寻乌县',
        pinyin: 'xunwu'
    },
    {
        url: 'http://www.dianping.com/shicheng',
        cityName: '石城县',
        pinyin: 'shicheng'
    },
    {
        url: 'http://www.dianping.com/dexing',
        cityName: '德兴市',
        pinyin: 'dexing'
    },
    {
        url: 'http://www.dianping.com/shangraoxian',
        cityName: '上饶县',
        pinyin: 'shangraoxian'
    },
    {
        url: 'http://www.dianping.com/guangfeng',
        cityName: '广丰县',
        pinyin: 'guangfeng'
    },
    {
        url: 'http://www.dianping.com/yushan',
        cityName: '玉山县',
        pinyin: 'yushan'
    },
    {
        url: 'http://www.dianping.com/qianshanxian',
        cityName: '铅山县',
        pinyin: 'qianshanxian'
    },
    {
        url: 'http://www.dianping.com/hengfeng',
        cityName: '横峰县',
        pinyin: 'hengfeng'
    },
    {
        url: 'http://www.dianping.com/sryiyang',
        cityName: '弋阳县',
        pinyin: 'sryiyang'
    },
    {
        url: 'http://www.dianping.com/yugan',
        cityName: '余干县',
        pinyin: 'yugan'
    },
    {
        url: 'http://www.dianping.com/poyang',
        cityName: '鄱阳县',
        pinyin: 'poyang'
    },
    {
        url: 'http://www.dianping.com/wannian',
        cityName: '万年县',
        pinyin: 'wannian'
    },
    {
        url: 'http://www.dianping.com/wuyuan',
        cityName: '婺源县',
        pinyin: 'wuyuan'
    },
    {
        url: 'http://www.dianping.com/nancheng',
        cityName: '南城县',
        pinyin: 'nancheng'
    },
    {
        url: 'http://www.dianping.com/lichuanxian',
        cityName: '黎川县',
        pinyin: 'lichuanxian'
    },
    {
        url: 'http://www.dianping.com/nanfeng',
        cityName: '南丰县',
        pinyin: 'nanfeng'
    },
    {
        url: 'http://www.dianping.com/chongren',
        cityName: '崇仁县',
        pinyin: 'chongren'
    },
    {
        url: 'http://www.dianping.com/lean',
        cityName: '乐安县',
        pinyin: 'lean'
    },
    {
        url: 'http://www.dianping.com/yihuang',
        cityName: '宜黄县',
        pinyin: 'yihuang'
    },
    {
        url: 'http://www.dianping.com/jinxi',
        cityName: '金溪县',
        pinyin: 'jinxi'
    },
    {
        url: 'http://www.dianping.com/zixi',
        cityName: '资溪县',
        pinyin: 'zixi'
    },
    {
        url: 'http://www.dianping.com/dongxiang',
        cityName: '东乡县',
        pinyin: 'dongxiang'
    },
    {
        url: 'http://www.dianping.com/guangcang',
        cityName: '广昌县',
        pinyin: 'guangcang'
    },
    {
        url: 'http://www.dianping.com/fengchengshi',
        cityName: '丰城市',
        pinyin: 'fengchengshi'
    },
    {
        url: 'http://www.dianping.com/zhangshu',
        cityName: '樟树市',
        pinyin: 'zhangshu'
    },
    {
        url: 'http://www.dianping.com/gaoan',
        cityName: '高安市',
        pinyin: 'gaoan'
    },
    {
        url: 'http://www.dianping.com/fengxin',
        cityName: '奉新县',
        pinyin: 'fengxin'
    },
    {
        url: 'http://www.dianping.com/wanzai',
        cityName: '万载县',
        pinyin: 'wanzai'
    },
    {
        url: 'http://www.dianping.com/shanggao',
        cityName: '上高县',
        pinyin: 'shanggao'
    },
    {
        url: 'http://www.dianping.com/yifeng',
        cityName: '宜丰县',
        pinyin: 'yifeng'
    },
    {
        url: 'http://www.dianping.com/jingan',
        cityName: '靖安县',
        pinyin: 'jingan'
    },
    {
        url: 'http://www.dianping.com/tonggu',
        cityName: '铜鼓县',
        pinyin: 'tonggu'
    },
    {
        url: 'http://www.dianping.com/jinggangshan',
        cityName: '井冈山市',
        pinyin: 'jinggangshan'
    },
    {
        url: 'http://www.dianping.com/jianxian',
        cityName: '吉安县',
        pinyin: 'jianxian'
    },
    {
        url: 'http://www.dianping.com/jishui',
        cityName: '吉水县',
        pinyin: 'jishui'
    },
    {
        url: 'http://www.dianping.com/xiajian',
        cityName: '峡江县',
        pinyin: 'xiajian'
    },
    {
        url: 'http://www.dianping.com/jaxinganxian',
        cityName: '新干县',
        pinyin: 'jaxinganxian'
    },
    {
        url: 'http://www.dianping.com/yongfeng',
        cityName: '永丰县',
        pinyin: 'yongfeng'
    },
    {
        url: 'http://www.dianping.com/taihexian',
        cityName: '泰和县',
        pinyin: 'taihexian'
    },
    {
        url: 'http://www.dianping.com/suichuan',
        cityName: '遂川县',
        pinyin: 'suichuan'
    },
    {
        url: 'http://www.dianping.com/wanan',
        cityName: '万安县',
        pinyin: 'wanan'
    },
    {
        url: 'http://www.dianping.com/anfu',
        cityName: '安福县',
        pinyin: 'anfu'
    },
    {
        url: 'http://www.dianping.com/yongxin',
        cityName: '永新县',
        pinyin: 'yongxin'
    },
    {
        url: 'http://www.dianping.com/lushan',
        cityName: '庐山区',
        pinyin: 'lushan'
    },
    {
        url: 'http://www.dianping.com/gongqingcheng',
        cityName: '共青城市',
        pinyin: 'gongqingcheng'
    },
    {
        url: 'http://www.dianping.com/chengdu',
        cityName: '成都',
        pinyin: 'chengdu'
    },
    {
        url: 'http://www.dianping.com/zigong',
        cityName: '自贡',
        pinyin: 'zigong'
    },
    {
        url: 'http://www.dianping.com/leshan',
        cityName: '乐山',
        pinyin: 'leshan'
    },
    {
        url: 'http://www.dianping.com/mianyang',
        cityName: '绵阳',
        pinyin: 'mianyang'
    },
    {
        url: 'http://www.dianping.com/nanchong',
        cityName: '南充',
        pinyin: 'nanchong'
    },
    {
        url: 'http://www.dianping.com/aba',
        cityName: '阿坝',
        pinyin: 'aba'
    },
    {
        url: 'http://www.dianping.com/yibin',
        cityName: '宜宾',
        pinyin: 'yibin'
    },
    {
        url: 'http://www.dianping.com/deyang',
        cityName: '德阳',
        pinyin: 'deyang'
    },
    {
        url: 'http://www.dianping.com/yaan',
        cityName: '雅安',
        pinyin: 'yaan'
    },
    {
        url: 'http://www.dianping.com/liangshan',
        cityName: '凉山',
        pinyin: 'liangshan'
    },
    {
        url: 'http://www.dianping.com/suining',
        cityName: '遂宁',
        pinyin: 'suining'
    },
    {
        url: 'http://www.dianping.com/neijiang',
        cityName: '内江',
        pinyin: 'neijiang'
    },
    {
        url: 'http://www.dianping.com/luzhou',
        cityName: '泸州',
        pinyin: 'luzhou'
    },
    {
        url: 'http://www.dianping.com/dazhou',
        cityName: '达州',
        pinyin: 'dazhou'
    },
    {
        url: 'http://www.dianping.com/ganzi',
        cityName: '甘孜州',
        pinyin: 'ganzi'
    },
    {
        url: 'http://www.dianping.com/guangyuan',
        cityName: '广元',
        pinyin: 'guangyuan'
    },
    {
        url: 'http://www.dianping.com/guangan',
        cityName: '广安',
        pinyin: 'guangan'
    },
    {
        url: 'http://www.dianping.com/meishan',
        cityName: '眉山',
        pinyin: 'meishan'
    },
    {
        url: 'http://www.dianping.com/panzhihua',
        cityName: '攀枝花',
        pinyin: 'panzhihua'
    },
    {
        url: 'http://www.dianping.com/ziyang',
        cityName: '资阳',
        pinyin: 'ziyang'
    },
    {
        url: 'http://www.dianping.com/bazhong',
        cityName: '巴中',
        pinyin: 'bazhong'
    },
    {
        url: 'http://www.dianping.com/huashuiwan',
        cityName: '花水湾',
        pinyin: 'huashuiwan'
    },
    {
        url: 'http://www.dianping.com/xilingxueshan',
        cityName: '西岭雪山',
        pinyin: 'xilingxueshan'
    },
    {
        url: 'http://www.dianping.com/qingchengshan',
        cityName: '青城山',
        pinyin: 'qingchengshan'
    },
    {
        url: 'http://www.dianping.com/tiantaishan',
        cityName: '天台山',
        pinyin: 'tiantaishan'
    },
    {
        url: 'http://www.dianping.com/luguhu',
        cityName: '泸沽湖',
        pinyin: 'luguhu'
    },
    {
        url: 'http://www.dianping.com/xichang',
        cityName: '西昌市',
        pinyin: 'xichang'
    },
    {
        url: 'http://www.dianping.com/kangding',
        cityName: '康定县',
        pinyin: 'kangding'
    },
    {
        url: 'http://www.dianping.com/dujiangyan',
        cityName: '都江堰市',
        pinyin: 'dujiangyan'
    },
    {
        url: 'http://www.dianping.com/pengzhou',
        cityName: '彭州市',
        pinyin: 'pengzhou'
    },
    {
        url: 'http://www.dianping.com/jintang',
        cityName: '金堂县',
        pinyin: 'jintang'
    },
    {
        url: 'http://www.dianping.com/shuangliu',
        cityName: '双流县',
        pinyin: 'shuangliu'
    },
    {
        url: 'http://www.dianping.com/pixian',
        cityName: '郫县',
        pinyin: 'pixian'
    },
    {
        url: 'http://www.dianping.com/dayi',
        cityName: '大邑县',
        pinyin: 'dayi'
    },
    {
        url: 'http://www.dianping.com/pujiangxian',
        cityName: '蒲江县',
        pinyin: 'pujiangxian'
    },
    {
        url: 'http://www.dianping.com/xinjin',
        cityName: '新津县',
        pinyin: 'xinjin'
    },
    {
        url: 'http://www.dianping.com/wangcang',
        cityName: '旺苍县',
        pinyin: 'wangcang'
    },
    {
        url: 'http://www.dianping.com/qingchuan',
        cityName: '青川县',
        pinyin: 'qingchuan'
    },
    {
        url: 'http://www.dianping.com/jiange',
        cityName: '剑阁县',
        pinyin: 'jiange'
    },
    {
        url: 'http://www.dianping.com/cangxi',
        cityName: '苍溪县',
        pinyin: 'cangxi'
    },
    {
        url: 'http://www.dianping.com/jianyou',
        cityName: '江油市',
        pinyin: 'jianyou'
    },
    {
        url: 'http://www.dianping.com/santai',
        cityName: '三台县',
        pinyin: 'santai'
    },
    {
        url: 'http://www.dianping.com/yanting',
        cityName: '盐亭县',
        pinyin: 'yanting'
    },
    {
        url: 'http://www.dianping.com/anxian',
        cityName: '安县',
        pinyin: 'anxian'
    },
    {
        url: 'http://www.dianping.com/zitong',
        cityName: '梓潼县',
        pinyin: 'zitong'
    },
    {
        url: 'http://www.dianping.com/beichuan',
        cityName: '北川羌族自治县',
        pinyin: 'beichuan'
    },
    {
        url: 'http://www.dianping.com/pingwu',
        cityName: '平武县',
        pinyin: 'pingwu'
    },
    {
        url: 'http://www.dianping.com/shifang',
        cityName: '什邡市',
        pinyin: 'shifang'
    },
    {
        url: 'http://www.dianping.com/guanghan',
        cityName: '广汉市',
        pinyin: 'guanghan'
    },
    {
        url: 'http://www.dianping.com/mianzhu',
        cityName: '绵竹市',
        pinyin: 'mianzhu'
    },
    {
        url: 'http://www.dianping.com/luojian',
        cityName: '罗江县',
        pinyin: 'luojian'
    },
    {
        url: 'http://www.dianping.com/zhongjian',
        cityName: '中江县',
        pinyin: 'zhongjian'
    },
    {
        url: 'http://www.dianping.com/langzhong',
        cityName: '阆中市',
        pinyin: 'langzhong'
    },
    {
        url: 'http://www.dianping.com/nanbu',
        cityName: '南部县',
        pinyin: 'nanbu'
    },
    {
        url: 'http://www.dianping.com/yingshanxian',
        cityName: '营山县',
        pinyin: 'yingshanxian'
    },
    {
        url: 'http://www.dianping.com/pengan',
        cityName: '蓬安县',
        pinyin: 'pengan'
    },
    {
        url: 'http://www.dianping.com/yilong',
        cityName: '仪陇县',
        pinyin: 'yilong'
    },
    {
        url: 'http://www.dianping.com/xichong',
        cityName: '西充县',
        pinyin: 'xichong'
    },
    {
        url: 'http://www.dianping.com/huayinshi',
        cityName: '华蓥市',
        pinyin: 'huayinshi'
    },
    {
        url: 'http://www.dianping.com/yuechi',
        cityName: '岳池县',
        pinyin: 'yuechi'
    },
    {
        url: 'http://www.dianping.com/wusheng',
        cityName: '武胜县',
        pinyin: 'wusheng'
    },
    {
        url: 'http://www.dianping.com/linshui',
        cityName: '邻水县',
        pinyin: 'linshui'
    },
    {
        url: 'http://www.dianping.com/pengxi',
        cityName: '蓬溪县',
        pinyin: 'pengxi'
    },
    {
        url: 'http://www.dianping.com/shehong',
        cityName: '射洪县',
        pinyin: 'shehong'
    },
    {
        url: 'http://www.dianping.com/daying',
        cityName: '大英县',
        pinyin: 'daying'
    },
    {
        url: 'http://www.dianping.com/weiyuan',
        cityName: '威远县',
        pinyin: 'weiyuan'
    },
    {
        url: 'http://www.dianping.com/zizhong',
        cityName: '资中县',
        pinyin: 'zizhong'
    },
    {
        url: 'http://www.dianping.com/longcang',
        cityName: '隆昌县',
        pinyin: 'longcang'
    },
    {
        url: 'http://www.dianping.com/emeishan',
        cityName: '峨眉山市',
        pinyin: 'emeishan'
    },
    {
        url: 'http://www.dianping.com/jianwei',
        cityName: '犍为县',
        pinyin: 'jianwei'
    },
    {
        url: 'http://www.dianping.com/jingyan',
        cityName: '井研县',
        pinyin: 'jingyan'
    },
    {
        url: 'http://www.dianping.com/jiajian',
        cityName: '夹江县',
        pinyin: 'jiajian'
    },
    {
        url: 'http://www.dianping.com/muchuan',
        cityName: '沐川县',
        pinyin: 'muchuan'
    },
    {
        url: 'http://www.dianping.com/ebian',
        cityName: '峨边彝族自治县',
        pinyin: 'ebian'
    },
    {
        url: 'http://www.dianping.com/mabian',
        cityName: '马边彝族自治县',
        pinyin: 'mabian'
    },
    {
        url: 'http://www.dianping.com/rongxianxian',
        cityName: '荣县',
        pinyin: 'rongxianxian'
    },
    {
        url: 'http://www.dianping.com/fushunxian',
        cityName: '富顺县',
        pinyin: 'fushunxian'
    },
    {
        url: 'http://www.dianping.com/luxian',
        cityName: '泸县',
        pinyin: 'luxian'
    },
    {
        url: 'http://www.dianping.com/hejianxian',
        cityName: '合江县',
        pinyin: 'hejianxian'
    },
    {
        url: 'http://www.dianping.com/xuyong',
        cityName: '叙永县',
        pinyin: 'xuyong'
    },
    {
        url: 'http://www.dianping.com/gulin',
        cityName: '古蔺县',
        pinyin: 'gulin'
    },
    {
        url: 'http://www.dianping.com/yibinxian',
        cityName: '宜宾县',
        pinyin: 'yibinxian'
    },
    {
        url: 'http://www.dianping.com/jianan',
        cityName: '江安县',
        pinyin: 'jianan'
    },
    {
        url: 'http://www.dianping.com/changningxian',
        cityName: '长宁县',
        pinyin: 'changningxian'
    },
    {
        url: 'http://www.dianping.com/gaoxian',
        cityName: '高县',
        pinyin: 'gaoxian'
    },
    {
        url: 'http://www.dianping.com/junlian',
        cityName: '筠连县',
        pinyin: 'junlian'
    },
    {
        url: 'http://www.dianping.com/gongxian',
        cityName: '珙县',
        pinyin: 'gongxian'
    },
    {
        url: 'http://www.dianping.com/xingwen',
        cityName: '兴文县',
        pinyin: 'xingwen'
    },
    {
        url: 'http://www.dianping.com/pingshanxian',
        cityName: '屏山县',
        pinyin: 'pingshanxian'
    },
    {
        url: 'http://www.dianping.com/miyi',
        cityName: '米易县',
        pinyin: 'miyi'
    },
    {
        url: 'http://www.dianping.com/yanbianxian',
        cityName: '盐边县',
        pinyin: 'yanbianxian'
    },
    {
        url: 'http://www.dianping.com/tongjiangxian',
        cityName: '通江县',
        pinyin: 'tongjiangxian'
    },
    {
        url: 'http://www.dianping.com/nanjiang',
        cityName: '南江县',
        pinyin: 'nanjiang'
    },
    {
        url: 'http://www.dianping.com/pingcang',
        cityName: '平昌县',
        pinyin: 'pingcang'
    },
    {
        url: 'http://www.dianping.com/wanyuan',
        cityName: '万源市',
        pinyin: 'wanyuan'
    },
    {
        url: 'http://www.dianping.com/xuanhan',
        cityName: '宣汉县',
        pinyin: 'xuanhan'
    },
    {
        url: 'http://www.dianping.com/kaijian',
        cityName: '开江县',
        pinyin: 'kaijian'
    },
    {
        url: 'http://www.dianping.com/dazhu',
        cityName: '大竹县',
        pinyin: 'dazhu'
    },
    {
        url: 'http://www.dianping.com/quxian',
        cityName: '渠县',
        pinyin: 'quxian'
    },
    {
        url: 'http://www.dianping.com/jianyang',
        cityName: '简阳市',
        pinyin: 'jianyang'
    },
    {
        url: 'http://www.dianping.com/lezhi',
        cityName: '乐至县',
        pinyin: 'lezhi'
    },
    {
        url: 'http://www.dianping.com/anyue',
        cityName: '安岳县',
        pinyin: 'anyue'
    },
    {
        url: 'http://www.dianping.com/renshou',
        cityName: '仁寿县',
        pinyin: 'renshou'
    },
    {
        url: 'http://www.dianping.com/pengshan',
        cityName: '彭山县',
        pinyin: 'pengshan'
    },
    {
        url: 'http://www.dianping.com/hongya',
        cityName: '洪雅县',
        pinyin: 'hongya'
    },
    {
        url: 'http://www.dianping.com/danleng',
        cityName: '丹棱县',
        pinyin: 'danleng'
    },
    {
        url: 'http://www.dianping.com/qingshen',
        cityName: '青神县',
        pinyin: 'qingshen'
    },
    {
        url: 'http://www.dianping.com/yingjing',
        cityName: '荥经县',
        pinyin: 'yingjing'
    },
    {
        url: 'http://www.dianping.com/hanyuan',
        cityName: '汉源县',
        pinyin: 'hanyuan'
    },
    {
        url: 'http://www.dianping.com/shimian',
        cityName: '石棉县',
        pinyin: 'shimian'
    },
    {
        url: 'http://www.dianping.com/tianquan',
        cityName: '天全县',
        pinyin: 'tianquan'
    },
    {
        url: 'http://www.dianping.com/yalushan',
        cityName: '芦山县',
        pinyin: 'yalushan'
    },
    {
        url: 'http://www.dianping.com/baoxing',
        cityName: '宝兴县',
        pinyin: 'baoxing'
    },
    {
        url: 'http://www.dianping.com/maerkang',
        cityName: '马尔康县',
        pinyin: 'maerkang'
    },
    {
        url: 'http://www.dianping.com/wenchuan',
        cityName: '汶川县',
        pinyin: 'wenchuan'
    },
    {
        url: 'http://www.dianping.com/ablixian',
        cityName: '理县',
        pinyin: 'ablixian'
    },
    {
        url: 'http://www.dianping.com/maoxian',
        cityName: '茂县',
        pinyin: 'maoxian'
    },
    {
        url: 'http://www.dianping.com/songpan',
        cityName: '松潘县',
        pinyin: 'songpan'
    },
    {
        url: 'http://www.dianping.com/jiuzhaigou',
        cityName: '九寨沟县',
        pinyin: 'jiuzhaigou'
    },
    {
        url: 'http://www.dianping.com/jinchuan',
        cityName: '金川县',
        pinyin: 'jinchuan'
    },
    {
        url: 'http://www.dianping.com/xiaojin',
        cityName: '小金县',
        pinyin: 'xiaojin'
    },
    {
        url: 'http://www.dianping.com/heishui',
        cityName: '黑水县',
        pinyin: 'heishui'
    },
    {
        url: 'http://www.dianping.com/rangtang',
        cityName: '壤塘县',
        pinyin: 'rangtang'
    },
    {
        url: 'http://www.dianping.com/abaxian',
        cityName: '阿坝县',
        pinyin: 'abaxian'
    },
    {
        url: 'http://www.dianping.com/nuoergai',
        cityName: '若尔盖县',
        pinyin: 'nuoergai'
    },
    {
        url: 'http://www.dianping.com/hongyuan',
        cityName: '红原县',
        pinyin: 'hongyuan'
    },
    {
        url: 'http://www.dianping.com/luding',
        cityName: '泸定县',
        pinyin: 'luding'
    },
    {
        url: 'http://www.dianping.com/danba',
        cityName: '丹巴县',
        pinyin: 'danba'
    },
    {
        url: 'http://www.dianping.com/jiuliu',
        cityName: '九龙县',
        pinyin: 'jiuliu'
    },
    {
        url: 'http://www.dianping.com/yajian',
        cityName: '雅江县',
        pinyin: 'yajian'
    },
    {
        url: 'http://www.dianping.com/daofu',
        cityName: '道孚县',
        pinyin: 'daofu'
    },
    {
        url: 'http://www.dianping.com/luhuo',
        cityName: '炉霍县',
        pinyin: 'luhuo'
    },
    {
        url: 'http://www.dianping.com/ganzixian',
        cityName: '甘孜县',
        pinyin: 'ganzixian'
    },
    {
        url: 'http://www.dianping.com/xinliu',
        cityName: '新龙县',
        pinyin: 'xinliu'
    },
    {
        url: 'http://www.dianping.com/dege',
        cityName: '德格县',
        pinyin: 'dege'
    },
    {
        url: 'http://www.dianping.com/baiyu',
        cityName: '白玉县',
        pinyin: 'baiyu'
    },
    {
        url: 'http://www.dianping.com/shiqu',
        cityName: '石渠县',
        pinyin: 'shiqu'
    },
    {
        url: 'http://www.dianping.com/seda',
        cityName: '色达县',
        pinyin: 'seda'
    },
    {
        url: 'http://www.dianping.com/litang',
        cityName: '理塘县',
        pinyin: 'litang'
    },
    {
        url: 'http://www.dianping.com/batang',
        cityName: '巴塘县',
        pinyin: 'batang'
    },
    {
        url: 'http://www.dianping.com/gzzxiangcheng',
        cityName: '乡城县',
        pinyin: 'gzzxiangcheng'
    },
    {
        url: 'http://www.dianping.com/daocheng',
        cityName: '稻城县',
        pinyin: 'daocheng'
    },
    {
        url: 'http://www.dianping.com/derong',
        cityName: '得荣县',
        pinyin: 'derong'
    },
    {
        url: 'http://www.dianping.com/yanyuan',
        cityName: '盐源县',
        pinyin: 'yanyuan'
    },
    {
        url: 'http://www.dianping.com/decang',
        cityName: '德昌县',
        pinyin: 'decang'
    },
    {
        url: 'http://www.dianping.com/huili',
        cityName: '会理县',
        pinyin: 'huili'
    },
    {
        url: 'http://www.dianping.com/huidongxian',
        cityName: '会东县',
        pinyin: 'huidongxian'
    },
    {
        url: 'http://www.dianping.com/ningnan',
        cityName: '宁南县',
        pinyin: 'ningnan'
    },
    {
        url: 'http://www.dianping.com/puge',
        cityName: '普格县',
        pinyin: 'puge'
    },
    {
        url: 'http://www.dianping.com/butuo',
        cityName: '布拖县',
        pinyin: 'butuo'
    },
    {
        url: 'http://www.dianping.com/jinyang',
        cityName: '金阳县',
        pinyin: 'jinyang'
    },
    {
        url: 'http://www.dianping.com/zhaojue',
        cityName: '昭觉县',
        pinyin: 'zhaojue'
    },
    {
        url: 'http://www.dianping.com/xide',
        cityName: '喜德县',
        pinyin: 'xide'
    },
    {
        url: 'http://www.dianping.com/mianning',
        cityName: '冕宁县',
        pinyin: 'mianning'
    },
    {
        url: 'http://www.dianping.com/yuexixian',
        cityName: '越西县',
        pinyin: 'yuexixian'
    },
    {
        url: 'http://www.dianping.com/ganluo',
        cityName: '甘洛县',
        pinyin: 'ganluo'
    },
    {
        url: 'http://www.dianping.com/meigu',
        cityName: '美姑县',
        pinyin: 'meigu'
    },
    {
        url: 'http://www.dianping.com/leibo',
        cityName: '雷波县',
        pinyin: 'leibo'
    },
    {
        url: 'http://www.dianping.com/muli',
        cityName: '木里藏族自治县',
        pinyin: 'muli'
    },
    {
        url: 'http://www.dianping.com/bazhouqu',
        cityName: '巴州区',
        pinyin: 'bazhouqu'
    },
    {
        url: 'http://www.dianping.com/xindu',
        cityName: '新都区',
        pinyin: 'xindu'
    },
    {
        url: 'http://www.dianping.com/wenjiang',
        cityName: '温江区',
        pinyin: 'wenjiang'
    },
    {
        url: 'http://www.dianping.com/kunming',
        cityName: '昆明',
        pinyin: 'kunming'
    },
    {
        url: 'http://www.dianping.com/lijiang',
        cityName: '丽江',
        pinyin: 'lijiang'
    },
    {
        url: 'http://www.dianping.com/dali',
        cityName: '大理州',
        pinyin: 'dali'
    },
    {
        url: 'http://www.dianping.com/diqing',
        cityName: '迪庆',
        pinyin: 'diqing'
    },
    {
        url: 'http://www.dianping.com/xishuangbanna',
        cityName: '西双版纳',
        pinyin: 'xishuangbanna'
    },
    {
        url: 'http://www.dianping.com/yuxi',
        cityName: '玉溪',
        pinyin: 'yuxi'
    },
    {
        url: 'http://www.dianping.com/baoshan',
        cityName: '保山',
        pinyin: 'baoshan'
    },
    {
        url: 'http://www.dianping.com/qujing',
        cityName: '曲靖',
        pinyin: 'qujing'
    },
    {
        url: 'http://www.dianping.com/dehong',
        cityName: '德宏',
        pinyin: 'dehong'
    },
    {
        url: 'http://www.dianping.com/honghe',
        cityName: '红河',
        pinyin: 'honghe'
    },
    {
        url: 'http://www.dianping.com/chuxiongzhou',
        cityName: '楚雄州',
        pinyin: 'chuxiongzhou'
    },
    {
        url: 'http://www.dianping.com/puer',
        cityName: '普洱',
        pinyin: 'puer'
    },
    {
        url: 'http://www.dianping.com/nujiang',
        cityName: '怒江',
        pinyin: 'nujiang'
    },
    {
        url: 'http://www.dianping.com/zhaotong',
        cityName: '昭通',
        pinyin: 'zhaotong'
    },
    {
        url: 'http://www.dianping.com/wenshan',
        cityName: '文山州',
        pinyin: 'wenshan'
    },
    {
        url: 'http://www.dianping.com/linchang',
        cityName: '临沧',
        pinyin: 'linchang'
    },
    {
        url: 'http://www.dianping.com/xizhou',
        cityName: '喜洲',
        pinyin: 'xizhou'
    },
    {
        url: 'http://www.dianping.com/shuanglang',
        cityName: '双廊',
        pinyin: 'shuanglang'
    },
    {
        url: 'http://www.dianping.com/anning',
        cityName: '安宁市',
        pinyin: 'anning'
    },
    {
        url: 'http://www.dianping.com/jinning',
        cityName: '晋宁县',
        pinyin: 'jinning'
    },
    {
        url: 'http://www.dianping.com/fumin',
        cityName: '富民县',
        pinyin: 'fumin'
    },
    {
        url: 'http://www.dianping.com/yiliang',
        cityName: '宜良县',
        pinyin: 'yiliang'
    },
    {
        url: 'http://www.dianping.com/songming',
        cityName: '嵩明县',
        pinyin: 'songming'
    },
    {
        url: 'http://www.dianping.com/shilin',
        cityName: '石林彝族自治县',
        pinyin: 'shilin'
    },
    {
        url: 'http://www.dianping.com/luquanxian',
        cityName: '禄劝彝族苗族自治县',
        pinyin: 'luquanxian'
    },
    {
        url: 'http://www.dianping.com/xundian',
        cityName: '寻甸回族彝族自治县',
        pinyin: 'xundian'
    },
    {
        url: 'http://www.dianping.com/xuanwei',
        cityName: '宣威市',
        pinyin: 'xuanwei'
    },
    {
        url: 'http://www.dianping.com/maliu',
        cityName: '马龙县',
        pinyin: 'maliu'
    },
    {
        url: 'http://www.dianping.com/zhanyi',
        cityName: '沾益县',
        pinyin: 'zhanyi'
    },
    {
        url: 'http://www.dianping.com/fuyuanxian',
        cityName: '富源县',
        pinyin: 'fuyuanxian'
    },
    {
        url: 'http://www.dianping.com/luoping',
        cityName: '罗平县',
        pinyin: 'luoping'
    },
    {
        url: 'http://www.dianping.com/shizong',
        cityName: '师宗县',
        pinyin: 'shizong'
    },
    {
        url: 'http://www.dianping.com/luliang',
        cityName: '陆良县',
        pinyin: 'luliang'
    },
    {
        url: 'http://www.dianping.com/huize',
        cityName: '会泽县',
        pinyin: 'huize'
    },
    {
        url: 'http://www.dianping.com/jiangchuan',
        cityName: '江川县',
        pinyin: 'jiangchuan'
    },
    {
        url: 'http://www.dianping.com/chengjian',
        cityName: '澄江县',
        pinyin: 'chengjian'
    },
    {
        url: 'http://www.dianping.com/tonghai',
        cityName: '通海县',
        pinyin: 'tonghai'
    },
    {
        url: 'http://www.dianping.com/huaning',
        cityName: '华宁县',
        pinyin: 'huaning'
    },
    {
        url: 'http://www.dianping.com/yimen',
        cityName: '易门县',
        pinyin: 'yimen'
    },
    {
        url: 'http://www.dianping.com/eshan',
        cityName: '峨山彝族自治县',
        pinyin: 'eshan'
    },
    {
        url: 'http://www.dianping.com/xinping',
        cityName: '新平彝族傣族自治县',
        pinyin: 'xinping'
    },
    {
        url: 'http://www.dianping.com/yuanjiang',
        cityName: '元江哈尼族彝族傣族自治县',
        pinyin: 'yuanjiang'
    },
    {
        url: 'http://www.dianping.com/shidian',
        cityName: '施甸县',
        pinyin: 'shidian'
    },
    {
        url: 'http://www.dianping.com/tengchong',
        cityName: '腾冲县',
        pinyin: 'tengchong'
    },
    {
        url: 'http://www.dianping.com/liuling',
        cityName: '龙陵县',
        pinyin: 'liuling'
    },
    {
        url: 'http://www.dianping.com/cangning',
        cityName: '昌宁县',
        pinyin: 'cangning'
    },
    {
        url: 'http://www.dianping.com/ludian',
        cityName: '鲁甸县',
        pinyin: 'ludian'
    },
    {
        url: 'http://www.dianping.com/qiaojia',
        cityName: '巧家县',
        pinyin: 'qiaojia'
    },
    {
        url: 'http://www.dianping.com/yanjinxian',
        cityName: '盐津县',
        pinyin: 'yanjinxian'
    },
    {
        url: 'http://www.dianping.com/daguan',
        cityName: '大关县',
        pinyin: 'daguan'
    },
    {
        url: 'http://www.dianping.com/yongshan',
        cityName: '永善县',
        pinyin: 'yongshan'
    },
    {
        url: 'http://www.dianping.com/suijian',
        cityName: '绥江县',
        pinyin: 'suijian'
    },
    {
        url: 'http://www.dianping.com/zhenxiong',
        cityName: '镇雄县',
        pinyin: 'zhenxiong'
    },
    {
        url: 'http://www.dianping.com/yiliangxian',
        cityName: '彝良县',
        pinyin: 'yiliangxian'
    },
    {
        url: 'http://www.dianping.com/weixin',
        cityName: '威信县',
        pinyin: 'weixin'
    },
    {
        url: 'http://www.dianping.com/shuifu',
        cityName: '水富县',
        pinyin: 'shuifu'
    },
    {
        url: 'http://www.dianping.com/yongsheng',
        cityName: '永胜县',
        pinyin: 'yongsheng'
    },
    {
        url: 'http://www.dianping.com/huapin',
        cityName: '华坪县',
        pinyin: 'huapin'
    },
    {
        url: 'http://www.dianping.com/yulong',
        cityName: '玉龙纳西族自治县',
        pinyin: 'yulong'
    },
    {
        url: 'http://www.dianping.com/ninglang',
        cityName: '宁蒗彝族自治县',
        pinyin: 'ninglang'
    },
    {
        url: 'http://www.dianping.com/puerxian',
        cityName: '普洱哈尼族彝族自治县',
        pinyin: 'puerxian'
    },
    {
        url: 'http://www.dianping.com/mojiang',
        cityName: '墨江哈尼族自治县',
        pinyin: 'mojiang'
    },
    {
        url: 'http://www.dianping.com/jingdong',
        cityName: '景东彝族自治县',
        pinyin: 'jingdong'
    },
    {
        url: 'http://www.dianping.com/jinggu',
        cityName: '景谷傣族彝族自治县',
        pinyin: 'jinggu'
    },
    {
        url: 'http://www.dianping.com/zhenyuanzzxian',
        cityName: '镇沅彝族哈尼族拉祜族自治县',
        pinyin: 'zhenyuanzzxian'
    },
    {
        url: 'http://www.dianping.com/jiangcheng',
        cityName: '江城哈尼族彝族自治县',
        pinyin: 'jiangcheng'
    },
    {
        url: 'http://www.dianping.com/menglian',
        cityName: '孟连傣族拉祜族佤族自治县',
        pinyin: 'menglian'
    },
    {
        url: 'http://www.dianping.com/lancang',
        cityName: '澜沧拉祜族自治县',
        pinyin: 'lancang'
    },
    {
        url: 'http://www.dianping.com/ximeng',
        cityName: '西盟佤族自治县',
        pinyin: 'ximeng'
    },
    {
        url: 'http://www.dianping.com/fengqing',
        cityName: '凤庆县',
        pinyin: 'fengqing'
    },
    {
        url: 'http://www.dianping.com/yunxianxian',
        cityName: '云县',
        pinyin: 'yunxianxian'
    },
    {
        url: 'http://www.dianping.com/yongde',
        cityName: '永德县',
        pinyin: 'yongde'
    },
    {
        url: 'http://www.dianping.com/zhenkang',
        cityName: '镇康县',
        pinyin: 'zhenkang'
    },
    {
        url: 'http://www.dianping.com/shuangjiang',
        cityName: '双江拉祜族佤族布朗族傣族自治县',
        pinyin: 'shuangjiang'
    },
    {
        url: 'http://www.dianping.com/genma',
        cityName: '耿马傣族佤族自治县',
        pinyin: 'genma'
    },
    {
        url: 'http://www.dianping.com/changyuanxian',
        cityName: '沧源佤族自治县',
        pinyin: 'changyuanxian'
    },
    {
        url: 'http://www.dianping.com/luxishi',
        cityName: '芒市',
        pinyin: 'luxishi'
    },
    {
        url: 'http://www.dianping.com/ruili',
        cityName: '瑞丽市',
        pinyin: 'ruili'
    },
    {
        url: 'http://www.dianping.com/lianghe',
        cityName: '梁河县',
        pinyin: 'lianghe'
    },
    {
        url: 'http://www.dianping.com/yingjian',
        cityName: '盈江县',
        pinyin: 'yingjian'
    },
    {
        url: 'http://www.dianping.com/longchuan',
        cityName: '陇川县',
        pinyin: 'longchuan'
    },
    {
        url: 'http://www.dianping.com/lushui',
        cityName: '泸水县',
        pinyin: 'lushui'
    },
    {
        url: 'http://www.dianping.com/fugong',
        cityName: '福贡县',
        pinyin: 'fugong'
    },
    {
        url: 'http://www.dianping.com/gongshan',
        cityName: '贡山独龙族怒族自治县',
        pinyin: 'gongshan'
    },
    {
        url: 'http://www.dianping.com/lanping',
        cityName: '兰坪白族普米族自治县',
        pinyin: 'lanping'
    },
    {
        url: 'http://www.dianping.com/xianggelila',
        cityName: '香格里拉县',
        pinyin: 'xianggelila'
    },
    {
        url: 'http://www.dianping.com/deqin',
        cityName: '德钦县',
        pinyin: 'deqin'
    },
    {
        url: 'http://www.dianping.com/weixi',
        cityName: '维西傈僳族自治县',
        pinyin: 'weixi'
    },
    {
        url: 'http://www.dianping.com/xiangyun',
        cityName: '祥云县',
        pinyin: 'xiangyun'
    },
    {
        url: 'http://www.dianping.com/binchuan',
        cityName: '宾川县',
        pinyin: 'binchuan'
    },
    {
        url: 'http://www.dianping.com/midu',
        cityName: '弥渡县',
        pinyin: 'midu'
    },
    {
        url: 'http://www.dianping.com/yongping',
        cityName: '永平县',
        pinyin: 'yongping'
    },
    {
        url: 'http://www.dianping.com/yunliu',
        cityName: '云龙县',
        pinyin: 'yunliu'
    },
    {
        url: 'http://www.dianping.com/eryuan',
        cityName: '洱源县',
        pinyin: 'eryuan'
    },
    {
        url: 'http://www.dianping.com/jianchuan',
        cityName: '剑川县',
        pinyin: 'jianchuan'
    },
    {
        url: 'http://www.dianping.com/heqing',
        cityName: '鹤庆县',
        pinyin: 'heqing'
    },
    {
        url: 'http://www.dianping.com/yangbi',
        cityName: '漾濞彝族自治县',
        pinyin: 'yangbi'
    },
    {
        url: 'http://www.dianping.com/nanjian',
        cityName: '南涧彝族自治县',
        pinyin: 'nanjian'
    },
    {
        url: 'http://www.dianping.com/weishanxian',
        cityName: '巍山彝族回族自治县',
        pinyin: 'weishanxian'
    },
    {
        url: 'http://www.dianping.com/chuxiong',
        cityName: '楚雄市',
        pinyin: 'chuxiong'
    },
    {
        url: 'http://www.dianping.com/shuangbo',
        cityName: '双柏县',
        pinyin: 'shuangbo'
    },
    {
        url: 'http://www.dianping.com/moding',
        cityName: '牟定县',
        pinyin: 'moding'
    },
    {
        url: 'http://www.dianping.com/nanhua',
        cityName: '南华县',
        pinyin: 'nanhua'
    },
    {
        url: 'http://www.dianping.com/yaoan',
        cityName: '姚安县',
        pinyin: 'yaoan'
    },
    {
        url: 'http://www.dianping.com/dayao',
        cityName: '大姚县',
        pinyin: 'dayao'
    },
    {
        url: 'http://www.dianping.com/yongren',
        cityName: '永仁县',
        pinyin: 'yongren'
    },
    {
        url: 'http://www.dianping.com/yuanmou',
        cityName: '元谋县',
        pinyin: 'yuanmou'
    },
    {
        url: 'http://www.dianping.com/wuding',
        cityName: '武定县',
        pinyin: 'wuding'
    },
    {
        url: 'http://www.dianping.com/lufengxian',
        cityName: '禄丰县',
        pinyin: 'lufengxian'
    },
    {
        url: 'http://www.dianping.com/jinghong',
        cityName: '景洪市',
        pinyin: 'jinghong'
    },
    {
        url: 'http://www.dianping.com/menghai',
        cityName: '勐海县',
        pinyin: 'menghai'
    },
    {
        url: 'http://www.dianping.com/mengla',
        cityName: '勐腊县',
        pinyin: 'mengla'
    },
    {
        url: 'http://www.dianping.com/mengzi',
        cityName: '蒙自县',
        pinyin: 'mengzi'
    },
    {
        url: 'http://www.dianping.com/gejiu',
        cityName: '个旧市',
        pinyin: 'gejiu'
    },
    {
        url: 'http://www.dianping.com/kaiyuanshi',
        cityName: '开远市',
        pinyin: 'kaiyuanshi'
    },
    {
        url: 'http://www.dianping.com/lvchun',
        cityName: '绿春县',
        pinyin: 'lvchun'
    },
    {
        url: 'http://www.dianping.com/jianshui',
        cityName: '建水县',
        pinyin: 'jianshui'
    },
    {
        url: 'http://www.dianping.com/shiping',
        cityName: '石屏县',
        pinyin: 'shiping'
    },
    {
        url: 'http://www.dianping.com/mile',
        cityName: '弥勒市',
        pinyin: 'mile'
    },
    {
        url: 'http://www.dianping.com/hhluxi',
        cityName: '泸西县',
        pinyin: 'hhluxi'
    },
    {
        url: 'http://www.dianping.com/yuanyangxian',
        cityName: '元阳县',
        pinyin: 'yuanyangxian'
    },
    {
        url: 'http://www.dianping.com/honghexian',
        cityName: '红河县',
        pinyin: 'honghexian'
    },
    {
        url: 'http://www.dianping.com/jinpingxian',
        cityName: '金平苗族瑶族傣族自治县',
        pinyin: 'jinpingxian'
    },
    {
        url: 'http://www.dianping.com/helou',
        cityName: '河口瑶族自治县',
        pinyin: 'helou'
    },
    {
        url: 'http://www.dianping.com/pingbian',
        cityName: '屏边苗族自治县',
        pinyin: 'pingbian'
    },
    {
        url: 'http://www.dianping.com/wenshanxian',
        cityName: '文山县',
        pinyin: 'wenshanxian'
    },
    {
        url: 'http://www.dianping.com/yanshanxian',
        cityName: '砚山县',
        pinyin: 'yanshanxian'
    },
    {
        url: 'http://www.dianping.com/xichou',
        cityName: '西畴县',
        pinyin: 'xichou'
    },
    {
        url: 'http://www.dianping.com/malipo',
        cityName: '麻栗坡县',
        pinyin: 'malipo'
    },
    {
        url: 'http://www.dianping.com/maguan',
        cityName: '马关县',
        pinyin: 'maguan'
    },
    {
        url: 'http://www.dianping.com/qiubei',
        cityName: '丘北县',
        pinyin: 'qiubei'
    },
    {
        url: 'http://www.dianping.com/guangnan',
        cityName: '广南县',
        pinyin: 'guangnan'
    },
    {
        url: 'http://www.dianping.com/wszfuning',
        cityName: '富宁县',
        pinyin: 'wszfuning'
    },
    {
        url: 'http://www.dianping.com/dalishi',
        cityName: '大理市',
        pinyin: 'dalishi'
    },
    {
        url: 'http://www.dianping.com/guiyang',
        cityName: '贵阳',
        pinyin: 'guiyang'
    },
    {
        url: 'http://www.dianping.com/zunyi',
        cityName: '遵义',
        pinyin: 'zunyi'
    },
    {
        url: 'http://www.dianping.com/qiandongnan',
        cityName: '黔东南',
        pinyin: 'qiandongnan'
    },
    {
        url: 'http://www.dianping.com/anshun',
        cityName: '安顺',
        pinyin: 'anshun'
    },
    {
        url: 'http://www.dianping.com/liupanshui',
        cityName: '六盘水',
        pinyin: 'liupanshui'
    },
    {
        url: 'http://www.dianping.com/tongrendiqu',
        cityName: '铜仁',
        pinyin: 'tongrendiqu'
    },
    {
        url: 'http://www.dianping.com/qiannan',
        cityName: '黔南',
        pinyin: 'qiannan'
    },
    {
        url: 'http://www.dianping.com/bijiediqu',
        cityName: '毕节地区',
        pinyin: 'bijiediqu'
    },
    {
        url: 'http://www.dianping.com/qianxinan',
        cityName: '黔西南',
        pinyin: 'qianxinan'
    },
    {
        url: 'http://www.dianping.com/huangguoshu',
        cityName: '黄果树',
        pinyin: 'huangguoshu'
    },
    {
        url: 'http://www.dianping.com/xijiangqianhu',
        cityName: '西江千户苗寨',
        pinyin: 'xijiangqianhu'
    },
    {
        url: 'http://www.dianping.com/baiyunshan',
        cityName: '白云山',
        pinyin: 'baiyunshan'
    },
    {
        url: 'http://www.dianping.com/qingzhen',
        cityName: '清镇市',
        pinyin: 'qingzhen'
    },
    {
        url: 'http://www.dianping.com/kaiyang',
        cityName: '开阳县',
        pinyin: 'kaiyang'
    },
    {
        url: 'http://www.dianping.com/xiuwen',
        cityName: '修文县',
        pinyin: 'xiuwen'
    },
    {
        url: 'http://www.dianping.com/xifengxian',
        cityName: '息烽县',
        pinyin: 'xifengxian'
    },
    {
        url: 'http://www.dianping.com/panxian',
        cityName: '盘县',
        pinyin: 'panxian'
    },
    {
        url: 'http://www.dianping.com/chishui',
        cityName: '赤水市',
        pinyin: 'chishui'
    },
    {
        url: 'http://www.dianping.com/renhuai',
        cityName: '仁怀市',
        pinyin: 'renhuai'
    },
    {
        url: 'http://www.dianping.com/zunyixian',
        cityName: '遵义县',
        pinyin: 'zunyixian'
    },
    {
        url: 'http://www.dianping.com/tongzi',
        cityName: '桐梓县',
        pinyin: 'tongzi'
    },
    {
        url: 'http://www.dianping.com/suiyang',
        cityName: '绥阳县',
        pinyin: 'suiyang'
    },
    {
        url: 'http://www.dianping.com/zhengan',
        cityName: '正安县',
        pinyin: 'zhengan'
    },
    {
        url: 'http://www.dianping.com/fenggang',
        cityName: '凤冈县',
        pinyin: 'fenggang'
    },
    {
        url: 'http://www.dianping.com/meitan',
        cityName: '湄潭县',
        pinyin: 'meitan'
    },
    {
        url: 'http://www.dianping.com/yuqing',
        cityName: '余庆县',
        pinyin: 'yuqing'
    },
    {
        url: 'http://www.dianping.com/xishuixian',
        cityName: '习水县',
        pinyin: 'xishuixian'
    },
    {
        url: 'http://www.dianping.com/daozhen',
        cityName: '道真仡佬族苗族自治县',
        pinyin: 'daozhen'
    },
    {
        url: 'http://www.dianping.com/wuchuanzzxian',
        cityName: '务川仡佬族苗族自治县',
        pinyin: 'wuchuanzzxian'
    },
    {
        url: 'http://www.dianping.com/pingba',
        cityName: '平坝区',
        pinyin: 'pingba'
    },
    {
        url: 'http://www.dianping.com/puding',
        cityName: '普定县',
        pinyin: 'puding'
    },
    {
        url: 'http://www.dianping.com/guanling',
        cityName: '关岭布依族苗族自治县',
        pinyin: 'guanling'
    },
    {
        url: 'http://www.dianping.com/zhenning',
        cityName: '镇宁布依族苗族自治县',
        pinyin: 'zhenning'
    },
    {
        url: 'http://www.dianping.com/ziyun',
        cityName: '紫云苗族布依族自治县',
        pinyin: 'ziyun'
    },
    {
        url: 'http://www.dianping.com/dafang',
        cityName: '大方县',
        pinyin: 'dafang'
    },
    {
        url: 'http://www.dianping.com/qianxixian',
        cityName: '黔西县',
        pinyin: 'qianxixian'
    },
    {
        url: 'http://www.dianping.com/jinsha',
        cityName: '金沙县',
        pinyin: 'jinsha'
    },
    {
        url: 'http://www.dianping.com/zhijin',
        cityName: '织金县',
        pinyin: 'zhijin'
    },
    {
        url: 'http://www.dianping.com/nayong',
        cityName: '纳雍县',
        pinyin: 'nayong'
    },
    {
        url: 'http://www.dianping.com/hezhang',
        cityName: '赫章县',
        pinyin: 'hezhang'
    },
    {
        url: 'http://www.dianping.com/weining',
        cityName: '威宁彝族回族苗族自治县',
        pinyin: 'weining'
    },
    {
        url: 'http://www.dianping.com/tongren',
        cityName: '碧江区',
        pinyin: 'tongren'
    },
    {
        url: 'http://www.dianping.com/jiankou',
        cityName: '江口县',
        pinyin: 'jiankou'
    },
    {
        url: 'http://www.dianping.com/shiqian',
        cityName: '石阡县',
        pinyin: 'shiqian'
    },
    {
        url: 'http://www.dianping.com/sinan',
        cityName: '思南县',
        pinyin: 'sinan'
    },
    {
        url: 'http://www.dianping.com/dejian',
        cityName: '德江县',
        pinyin: 'dejian'
    },
    {
        url: 'http://www.dianping.com/yuping',
        cityName: '玉屏侗族自治县',
        pinyin: 'yuping'
    },
    {
        url: 'http://www.dianping.com/yinjiang',
        cityName: '印江土家族苗族自治县',
        pinyin: 'yinjiang'
    },
    {
        url: 'http://www.dianping.com/yanhe',
        cityName: '沿河土家族自治县',
        pinyin: 'yanhe'
    },
    {
        url: 'http://www.dianping.com/songtao',
        cityName: '松桃苗族自治县',
        pinyin: 'songtao'
    },
    {
        url: 'http://www.dianping.com/kaili',
        cityName: '凯里市',
        pinyin: 'kaili'
    },
    {
        url: 'http://www.dianping.com/huangping',
        cityName: '黄平县',
        pinyin: 'huangping'
    },
    {
        url: 'http://www.dianping.com/shibing',
        cityName: '施秉县',
        pinyin: 'shibing'
    },
    {
        url: 'http://www.dianping.com/sansui',
        cityName: '三穗县',
        pinyin: 'sansui'
    },
    {
        url: 'http://www.dianping.com/zhenyuan',
        cityName: '镇远县',
        pinyin: 'zhenyuan'
    },
    {
        url: 'http://www.dianping.com/cengong',
        cityName: '岑巩县',
        pinyin: 'cengong'
    },
    {
        url: 'http://www.dianping.com/tianzhu',
        cityName: '天柱县',
        pinyin: 'tianzhu'
    },
    {
        url: 'http://www.dianping.com/jinping',
        cityName: '锦屏县',
        pinyin: 'jinping'
    },
    {
        url: 'http://www.dianping.com/jianhe',
        cityName: '剑河县',
        pinyin: 'jianhe'
    },
    {
        url: 'http://www.dianping.com/taijian',
        cityName: '台江县',
        pinyin: 'taijian'
    },
    {
        url: 'http://www.dianping.com/liping',
        cityName: '黎平县',
        pinyin: 'liping'
    },
    {
        url: 'http://www.dianping.com/rongjian',
        cityName: '榕江县',
        pinyin: 'rongjian'
    },
    {
        url: 'http://www.dianping.com/congjian',
        cityName: '从江县',
        pinyin: 'congjian'
    },
    {
        url: 'http://www.dianping.com/leishan',
        cityName: '雷山县',
        pinyin: 'leishan'
    },
    {
        url: 'http://www.dianping.com/majian',
        cityName: '麻江县',
        pinyin: 'majian'
    },
    {
        url: 'http://www.dianping.com/danzhai',
        cityName: '丹寨县',
        pinyin: 'danzhai'
    },
    {
        url: 'http://www.dianping.com/duyun',
        cityName: '都匀市',
        pinyin: 'duyun'
    },
    {
        url: 'http://www.dianping.com/fuquan',
        cityName: '福泉市',
        pinyin: 'fuquan'
    },
    {
        url: 'http://www.dianping.com/libo',
        cityName: '荔波县',
        pinyin: 'libo'
    },
    {
        url: 'http://www.dianping.com/guiding',
        cityName: '贵定县',
        pinyin: 'guiding'
    },
    {
        url: 'http://www.dianping.com/wengan',
        cityName: '瓮安县',
        pinyin: 'wengan'
    },
    {
        url: 'http://www.dianping.com/dushan',
        cityName: '独山县',
        pinyin: 'dushan'
    },
    {
        url: 'http://www.dianping.com/pingtang',
        cityName: '平塘县',
        pinyin: 'pingtang'
    },
    {
        url: 'http://www.dianping.com/luodian',
        cityName: '罗甸县',
        pinyin: 'luodian'
    },
    {
        url: 'http://www.dianping.com/changshun',
        cityName: '长顺县',
        pinyin: 'changshun'
    },
    {
        url: 'http://www.dianping.com/liuli',
        cityName: '龙里县',
        pinyin: 'liuli'
    },
    {
        url: 'http://www.dianping.com/huishui',
        cityName: '惠水县',
        pinyin: 'huishui'
    },
    {
        url: 'http://www.dianping.com/sandu',
        cityName: '三都水族自治县',
        pinyin: 'sandu'
    },
    {
        url: 'http://www.dianping.com/xingyi',
        cityName: '兴义市',
        pinyin: 'xingyi'
    },
    {
        url: 'http://www.dianping.com/xingren',
        cityName: '兴仁县',
        pinyin: 'xingren'
    },
    {
        url: 'http://www.dianping.com/puan',
        cityName: '普安县',
        pinyin: 'puan'
    },
    {
        url: 'http://www.dianping.com/qinglongxian',
        cityName: '晴隆县',
        pinyin: 'qinglongxian'
    },
    {
        url: 'http://www.dianping.com/zhenfeng',
        cityName: '贞丰县',
        pinyin: 'zhenfeng'
    },
    {
        url: 'http://www.dianping.com/wangmo',
        cityName: '望谟县',
        pinyin: 'wangmo'
    },
    {
        url: 'http://www.dianping.com/ceheng',
        cityName: '册亨县',
        pinyin: 'ceheng'
    },
    {
        url: 'http://www.dianping.com/anliu',
        cityName: '安龙县',
        pinyin: 'anliu'
    },
    {
        url: 'http://www.dianping.com/shuichengxian',
        cityName: '水城县',
        pinyin: 'shuichengxian'
    },
    {
        url: 'http://www.dianping.com/lasa',
        cityName: '拉萨',
        pinyin: 'lasa'
    },
    {
        url: 'http://www.dianping.com/linzhi',
        cityName: '林芝县',
        pinyin: 'linzhi'
    },
    {
        url: 'http://www.dianping.com/rikazediqu',
        cityName: '日喀则',
        pinyin: 'rikazediqu'
    },
    {
        url: 'http://www.dianping.com/ali',
        cityName: '阿里',
        pinyin: 'ali'
    },
    {
        url: 'http://www.dianping.com/shannan',
        cityName: '山南',
        pinyin: 'shannan'
    },
    {
        url: 'http://www.dianping.com/changdudiqu',
        cityName: '昌都地区',
        pinyin: 'changdudiqu'
    },
    {
        url: 'http://www.dianping.com/naqu',
        cityName: '那曲',
        pinyin: 'naqu'
    },
    {
        url: 'http://www.dianping.com/linzhouxian',
        cityName: '林周县',
        pinyin: 'linzhouxian'
    },
    {
        url: 'http://www.dianping.com/dangxiong',
        cityName: '当雄县',
        pinyin: 'dangxiong'
    },
    {
        url: 'http://www.dianping.com/nimu',
        cityName: '尼木县',
        pinyin: 'nimu'
    },
    {
        url: 'http://www.dianping.com/qushui',
        cityName: '曲水县',
        pinyin: 'qushui'
    },
    {
        url: 'http://www.dianping.com/duilongdeqing',
        cityName: '堆龙德庆县',
        pinyin: 'duilongdeqing'
    },
    {
        url: 'http://www.dianping.com/dazi',
        cityName: '达孜县',
        pinyin: 'dazi'
    },
    {
        url: 'http://www.dianping.com/muzhugongka',
        cityName: '墨竹工卡县',
        pinyin: 'muzhugongka'
    },
    {
        url: 'http://www.dianping.com/naquxian',
        cityName: '那曲县',
        pinyin: 'naquxian'
    },
    {
        url: 'http://www.dianping.com/jiali',
        cityName: '嘉黎县',
        pinyin: 'jiali'
    },
    {
        url: 'http://www.dianping.com/biru',
        cityName: '比如县',
        pinyin: 'biru'
    },
    {
        url: 'http://www.dianping.com/nierong',
        cityName: '聂荣县',
        pinyin: 'nierong'
    },
    {
        url: 'http://www.dianping.com/anduo',
        cityName: '安多县',
        pinyin: 'anduo'
    },
    {
        url: 'http://www.dianping.com/shenzha',
        cityName: '申扎县',
        pinyin: 'shenzha'
    },
    {
        url: 'http://www.dianping.com/suoxian',
        cityName: '索县',
        pinyin: 'suoxian'
    },
    {
        url: 'http://www.dianping.com/bange',
        cityName: '班戈县',
        pinyin: 'bange'
    },
    {
        url: 'http://www.dianping.com/baqing',
        cityName: '巴青县',
        pinyin: 'baqing'
    },
    {
        url: 'http://www.dianping.com/nima',
        cityName: '尼玛县',
        pinyin: 'nima'
    },
    {
        url: 'http://www.dianping.com/changdu',
        cityName: '昌都市',
        pinyin: 'changdu'
    },
    {
        url: 'http://www.dianping.com/jianda',
        cityName: '江达县',
        pinyin: 'jianda'
    },
    {
        url: 'http://www.dianping.com/gongjue',
        cityName: '贡觉县',
        pinyin: 'gongjue'
    },
    {
        url: 'http://www.dianping.com/leiwuqi',
        cityName: '类乌齐县',
        pinyin: 'leiwuqi'
    },
    {
        url: 'http://www.dianping.com/dingqing',
        cityName: '丁青县',
        pinyin: 'dingqing'
    },
    {
        url: 'http://www.dianping.com/chaya',
        cityName: '察雅县',
        pinyin: 'chaya'
    },
    {
        url: 'http://www.dianping.com/basu',
        cityName: '八宿县',
        pinyin: 'basu'
    },
    {
        url: 'http://www.dianping.com/zuogong',
        cityName: '左贡县',
        pinyin: 'zuogong'
    },
    {
        url: 'http://www.dianping.com/mangkang',
        cityName: '芒康县',
        pinyin: 'mangkang'
    },
    {
        url: 'http://www.dianping.com/luolong',
        cityName: '洛隆县',
        pinyin: 'luolong'
    },
    {
        url: 'http://www.dianping.com/bianba',
        cityName: '边坝县',
        pinyin: 'bianba'
    },
    {
        url: 'http://www.dianping.com/linzhixian',
        cityName: '巴宜区',
        pinyin: 'linzhixian'
    },
    {
        url: 'http://www.dianping.com/gongbujiangda',
        cityName: '工布江达县',
        pinyin: 'gongbujiangda'
    },
    {
        url: 'http://www.dianping.com/milin',
        cityName: '米林县',
        pinyin: 'milin'
    },
    {
        url: 'http://www.dianping.com/motuo',
        cityName: '墨脱县',
        pinyin: 'motuo'
    },
    {
        url: 'http://www.dianping.com/bomi',
        cityName: '波密县',
        pinyin: 'bomi'
    },
    {
        url: 'http://www.dianping.com/chayu',
        cityName: '察隅县',
        pinyin: 'chayu'
    },
    {
        url: 'http://www.dianping.com/langxian',
        cityName: '朗县',
        pinyin: 'langxian'
    },
    {
        url: 'http://www.dianping.com/naidong',
        cityName: '乃东县',
        pinyin: 'naidong'
    },
    {
        url: 'http://www.dianping.com/zhanang',
        cityName: '扎囊县',
        pinyin: 'zhanang'
    },
    {
        url: 'http://www.dianping.com/gongga',
        cityName: '贡嘎县',
        pinyin: 'gongga'
    },
    {
        url: 'http://www.dianping.com/sangri',
        cityName: '桑日县',
        pinyin: 'sangri'
    },
    {
        url: 'http://www.dianping.com/qiongjie',
        cityName: '琼结县',
        pinyin: 'qiongjie'
    },
    {
        url: 'http://www.dianping.com/qusong',
        cityName: '曲松县',
        pinyin: 'qusong'
    },
    {
        url: 'http://www.dianping.com/cuomei',
        cityName: '措美县',
        pinyin: 'cuomei'
    },
    {
        url: 'http://www.dianping.com/luozha',
        cityName: '洛扎县',
        pinyin: 'luozha'
    },
    {
        url: 'http://www.dianping.com/jiacha',
        cityName: '加查县',
        pinyin: 'jiacha'
    },
    {
        url: 'http://www.dianping.com/longzi',
        cityName: '隆子县',
        pinyin: 'longzi'
    },
    {
        url: 'http://www.dianping.com/cuona',
        cityName: '错那县',
        pinyin: 'cuona'
    },
    {
        url: 'http://www.dianping.com/kalangzi',
        cityName: '浪卡子县',
        pinyin: 'kalangzi'
    },
    {
        url: 'http://www.dianping.com/rikaze',
        cityName: '桑珠孜区',
        pinyin: 'rikaze'
    },
    {
        url: 'http://www.dianping.com/nanmulin',
        cityName: '南木林县',
        pinyin: 'nanmulin'
    },
    {
        url: 'http://www.dianping.com/jianzi',
        cityName: '江孜县',
        pinyin: 'jianzi'
    },
    {
        url: 'http://www.dianping.com/dingri',
        cityName: '定日县',
        pinyin: 'dingri'
    },
    {
        url: 'http://www.dianping.com/sajia',
        cityName: '萨迦县',
        pinyin: 'sajia'
    },
    {
        url: 'http://www.dianping.com/lazi',
        cityName: '拉孜县',
        pinyin: 'lazi'
    },
    {
        url: 'http://www.dianping.com/angren',
        cityName: '昂仁县',
        pinyin: 'angren'
    },
    {
        url: 'http://www.dianping.com/xietongmen',
        cityName: '谢通门县',
        pinyin: 'xietongmen'
    },
    {
        url: 'http://www.dianping.com/bailang',
        cityName: '白朗县',
        pinyin: 'bailang'
    },
    {
        url: 'http://www.dianping.com/renbu',
        cityName: '仁布县',
        pinyin: 'renbu'
    },
    {
        url: 'http://www.dianping.com/kangma',
        cityName: '康马县',
        pinyin: 'kangma'
    },
    {
        url: 'http://www.dianping.com/dingjie',
        cityName: '定结县',
        pinyin: 'dingjie'
    },
    {
        url: 'http://www.dianping.com/zhongba',
        cityName: '仲巴县',
        pinyin: 'zhongba'
    },
    {
        url: 'http://www.dianping.com/yadong',
        cityName: '亚东县',
        pinyin: 'yadong'
    },
    {
        url: 'http://www.dianping.com/jilong',
        cityName: '吉隆县',
        pinyin: 'jilong'
    },
    {
        url: 'http://www.dianping.com/nielamu',
        cityName: '聂拉木县',
        pinyin: 'nielamu'
    },
    {
        url: 'http://www.dianping.com/saga',
        cityName: '萨嘎县',
        pinyin: 'saga'
    },
    {
        url: 'http://www.dianping.com/gangba',
        cityName: '岗巴县',
        pinyin: 'gangba'
    },
    {
        url: 'http://www.dianping.com/geer',
        cityName: '噶尔县',
        pinyin: 'geer'
    },
    {
        url: 'http://www.dianping.com/pulan',
        cityName: '普兰县',
        pinyin: 'pulan'
    },
    {
        url: 'http://www.dianping.com/zhada',
        cityName: '札达县',
        pinyin: 'zhada'
    },
    {
        url: 'http://www.dianping.com/ritou',
        cityName: '日土县',
        pinyin: 'ritou'
    },
    {
        url: 'http://www.dianping.com/geji',
        cityName: '革吉县',
        pinyin: 'geji'
    },
    {
        url: 'http://www.dianping.com/gaize',
        cityName: '改则县',
        pinyin: 'gaize'
    },
    {
        url: 'http://www.dianping.com/cuoqin',
        cityName: '措勤县',
        pinyin: 'cuoqin'
    },
    {
        url: 'http://www.dianping.com/shuanghuxian',
        cityName: '双湖县',
        pinyin: 'shuanghuxian'
    },
    {
        url: 'http://www.dianping.com/yinchuan',
        cityName: '银川',
        pinyin: 'yinchuan'
    },
    {
        url: 'http://www.dianping.com/shizuishan',
        cityName: '石嘴山',
        pinyin: 'shizuishan'
    },
    {
        url: 'http://www.dianping.com/zhongwei',
        cityName: '中卫',
        pinyin: 'zhongwei'
    },
    {
        url: 'http://www.dianping.com/wuzhong',
        cityName: '吴忠',
        pinyin: 'wuzhong'
    },
    {
        url: 'http://www.dianping.com/guyuan',
        cityName: '固原',
        pinyin: 'guyuan'
    },
    {
        url: 'http://www.dianping.com/lingwu',
        cityName: '灵武市',
        pinyin: 'lingwu'
    },
    {
        url: 'http://www.dianping.com/yongning',
        cityName: '永宁县',
        pinyin: 'yongning'
    },
    {
        url: 'http://www.dianping.com/helan',
        cityName: '贺兰县',
        pinyin: 'helan'
    },
    {
        url: 'http://www.dianping.com/pingluo',
        cityName: '平罗县',
        pinyin: 'pingluo'
    },
    {
        url: 'http://www.dianping.com/qingtongxia',
        cityName: '青铜峡市',
        pinyin: 'qingtongxia'
    },
    {
        url: 'http://www.dianping.com/yanchi',
        cityName: '盐池县',
        pinyin: 'yanchi'
    },
    {
        url: 'http://www.dianping.com/tongxin',
        cityName: '同心县',
        pinyin: 'tongxin'
    },
    {
        url: 'http://www.dianping.com/xiji',
        cityName: '西吉县',
        pinyin: 'xiji'
    },
    {
        url: 'http://www.dianping.com/longde',
        cityName: '隆德县',
        pinyin: 'longde'
    },
    {
        url: 'http://www.dianping.com/jingyuanxian',
        cityName: '泾源县',
        pinyin: 'jingyuanxian'
    },
    {
        url: 'http://www.dianping.com/pengyang',
        cityName: '彭阳县',
        pinyin: 'pengyang'
    },
    {
        url: 'http://www.dianping.com/zhongningxian',
        cityName: '中宁县',
        pinyin: 'zhongningxian'
    },
    {
        url: 'http://www.dianping.com/haiyuanxian',
        cityName: '海原县',
        pinyin: 'haiyuanxian'
    },
    {
        url: 'http://www.dianping.com/wulumuqi',
        cityName: '乌鲁木齐',
        pinyin: 'wulumuqi'
    },
    {
        url: 'http://www.dianping.com/bayinguoleng',
        cityName: '巴音郭楞',
        pinyin: 'bayinguoleng'
    },
    {
        url: 'http://www.dianping.com/yili',
        cityName: '伊犁',
        pinyin: 'yili'
    },
    {
        url: 'http://www.dianping.com/shihezi',
        cityName: '石河子',
        pinyin: 'shihezi'
    },
    {
        url: 'http://www.dianping.com/aletaidiqu',
        cityName: '阿勒泰地区',
        pinyin: 'aletaidiqu'
    },
    {
        url: 'http://www.dianping.com/tulufandiqu',
        cityName: '吐鲁番地区',
        pinyin: 'tulufandiqu'
    },
    {
        url: 'http://www.dianping.com/kashidiqu',
        cityName: '喀什地区',
        pinyin: 'kashidiqu'
    },
    {
        url: 'http://www.dianping.com/hamidiqu',
        cityName: '哈密地区',
        pinyin: 'hamidiqu'
    },
    {
        url: 'http://www.dianping.com/kelamayi',
        cityName: '克拉玛依',
        pinyin: 'kelamayi'
    },
    {
        url: 'http://www.dianping.com/changjizhou',
        cityName: '昌吉州',
        pinyin: 'changjizhou'
    },
    {
        url: 'http://www.dianping.com/tachengdiqu',
        cityName: '塔城地区',
        pinyin: 'tachengdiqu'
    },
    {
        url: 'http://www.dianping.com/akesudiqu',
        cityName: '阿克苏地区',
        pinyin: 'akesudiqu'
    },
    {
        url: 'http://www.dianping.com/hetiandiqu',
        cityName: '和田地区',
        pinyin: 'hetiandiqu'
    },
    {
        url: 'http://www.dianping.com/boertala',
        cityName: '博尔塔拉',
        pinyin: 'boertala'
    },
    {
        url: 'http://www.dianping.com/kezilesu',
        cityName: '克孜勒苏',
        pinyin: 'kezilesu'
    },
    {
        url: 'http://www.dianping.com/alaer',
        cityName: '阿拉尔',
        pinyin: 'alaer'
    },
    {
        url: 'http://www.dianping.com/beitun',
        cityName: '北屯',
        pinyin: 'beitun'
    },
    {
        url: 'http://www.dianping.com/kuitun',
        cityName: '奎屯市',
        pinyin: 'kuitun'
    },
    {
        url: 'http://www.dianping.com/kuerle',
        cityName: '库尔勒市',
        pinyin: 'kuerle'
    },
    {
        url: 'http://www.dianping.com/tumushuke',
        cityName: '图木舒克',
        pinyin: 'tumushuke'
    },
    {
        url: 'http://www.dianping.com/wujiaqu',
        cityName: '五家渠',
        pinyin: 'wujiaqu'
    },
    {
        url: 'http://www.dianping.com/wulumuqixian',
        cityName: '乌鲁木齐县',
        pinyin: 'wulumuqixian'
    },
    {
        url: 'http://www.dianping.com/kashi',
        cityName: '喀什市',
        pinyin: 'kashi'
    },
    {
        url: 'http://www.dianping.com/shufu',
        cityName: '疏附县',
        pinyin: 'shufu'
    },
    {
        url: 'http://www.dianping.com/shule',
        cityName: '疏勒县',
        pinyin: 'shule'
    },
    {
        url: 'http://www.dianping.com/yingjisha',
        cityName: '英吉沙县',
        pinyin: 'yingjisha'
    },
    {
        url: 'http://www.dianping.com/zepu',
        cityName: '泽普县',
        pinyin: 'zepu'
    },
    {
        url: 'http://www.dianping.com/shache',
        cityName: '莎车县',
        pinyin: 'shache'
    },
    {
        url: 'http://www.dianping.com/yecheng',
        cityName: '叶城县',
        pinyin: 'yecheng'
    },
    {
        url: 'http://www.dianping.com/maigaiti',
        cityName: '麦盖提县',
        pinyin: 'maigaiti'
    },
    {
        url: 'http://www.dianping.com/yuepuhu',
        cityName: '岳普湖县',
        pinyin: 'yuepuhu'
    },
    {
        url: 'http://www.dianping.com/jiashi',
        cityName: '伽师县',
        pinyin: 'jiashi'
    },
    {
        url: 'http://www.dianping.com/bachu',
        cityName: '巴楚县',
        pinyin: 'bachu'
    },
    {
        url: 'http://www.dianping.com/tashikuergan',
        cityName: '塔什库尔干塔吉克自治县',
        pinyin: 'tashikuergan'
    },
    {
        url: 'http://www.dianping.com/akesu',
        cityName: '阿克苏市',
        pinyin: 'akesu'
    },
    {
        url: 'http://www.dianping.com/wensu',
        cityName: '温宿县',
        pinyin: 'wensu'
    },
    {
        url: 'http://www.dianping.com/kunche',
        cityName: '库车县',
        pinyin: 'kunche'
    },
    {
        url: 'http://www.dianping.com/shaya',
        cityName: '沙雅县',
        pinyin: 'shaya'
    },
    {
        url: 'http://www.dianping.com/xinhexian',
        cityName: '新和县',
        pinyin: 'xinhexian'
    },
    {
        url: 'http://www.dianping.com/baichengxian',
        cityName: '拜城县',
        pinyin: 'baichengxian'
    },
    {
        url: 'http://www.dianping.com/wushi',
        cityName: '乌什县',
        pinyin: 'wushi'
    },
    {
        url: 'http://www.dianping.com/awati',
        cityName: '阿瓦提县',
        pinyin: 'awati'
    },
    {
        url: 'http://www.dianping.com/kepin',
        cityName: '柯坪县',
        pinyin: 'kepin'
    },
    {
        url: 'http://www.dianping.com/hetian',
        cityName: '和田市',
        pinyin: 'hetian'
    },
    {
        url: 'http://www.dianping.com/hetianxian',
        cityName: '和田县',
        pinyin: 'hetianxian'
    },
    {
        url: 'http://www.dianping.com/moyu',
        cityName: '墨玉县',
        pinyin: 'moyu'
    },
    {
        url: 'http://www.dianping.com/pishan',
        cityName: '皮山县',
        pinyin: 'pishan'
    },
    {
        url: 'http://www.dianping.com/luopu',
        cityName: '洛浦县',
        pinyin: 'luopu'
    },
    {
        url: 'http://www.dianping.com/cele',
        cityName: '策勒县',
        pinyin: 'cele'
    },
    {
        url: 'http://www.dianping.com/yutianxian',
        cityName: '于田县',
        pinyin: 'yutianxian'
    },
    {
        url: 'http://www.dianping.com/minfeng',
        cityName: '民丰县',
        pinyin: 'minfeng'
    },
    {
        url: 'http://www.dianping.com/tulufan',
        cityName: '吐鲁番市',
        pinyin: 'tulufan'
    },
    {
        url: 'http://www.dianping.com/shanshan',
        cityName: '鄯善县',
        pinyin: 'shanshan'
    },
    {
        url: 'http://www.dianping.com/tuokexun',
        cityName: '托克逊县',
        pinyin: 'tuokexun'
    },
    {
        url: 'http://www.dianping.com/hami',
        cityName: '哈密市',
        pinyin: 'hami'
    },
    {
        url: 'http://www.dianping.com/yiwuxian',
        cityName: '伊吾县',
        pinyin: 'yiwuxian'
    },
    {
        url: 'http://www.dianping.com/balikun',
        cityName: '巴里坤哈萨克自治县',
        pinyin: 'balikun'
    },
    {
        url: 'http://www.dianping.com/atushi',
        cityName: '阿图什市',
        pinyin: 'atushi'
    },
    {
        url: 'http://www.dianping.com/aketao',
        cityName: '阿克陶县',
        pinyin: 'aketao'
    },
    {
        url: 'http://www.dianping.com/aheqi',
        cityName: '阿合奇县',
        pinyin: 'aheqi'
    },
    {
        url: 'http://www.dianping.com/wuqia',
        cityName: '乌恰县',
        pinyin: 'wuqia'
    },
    {
        url: 'http://www.dianping.com/bole',
        cityName: '博乐市',
        pinyin: 'bole'
    },
    {
        url: 'http://www.dianping.com/jinghe',
        cityName: '精河县',
        pinyin: 'jinghe'
    },
    {
        url: 'http://www.dianping.com/wenquan',
        cityName: '温泉县',
        pinyin: 'wenquan'
    },
    {
        url: 'http://www.dianping.com/changji',
        cityName: '昌吉市',
        pinyin: 'changji'
    },
    {
        url: 'http://www.dianping.com/fukang',
        cityName: '阜康市',
        pinyin: 'fukang'
    },
    {
        url: 'http://www.dianping.com/miquan',
        cityName: '米泉市',
        pinyin: 'miquan'
    },
    {
        url: 'http://www.dianping.com/hutubi',
        cityName: '呼图壁县',
        pinyin: 'hutubi'
    },
    {
        url: 'http://www.dianping.com/manasi',
        cityName: '玛纳斯县',
        pinyin: 'manasi'
    },
    {
        url: 'http://www.dianping.com/qitai',
        cityName: '奇台县',
        pinyin: 'qitai'
    },
    {
        url: 'http://www.dianping.com/jimusaer',
        cityName: '吉木萨尔县',
        pinyin: 'jimusaer'
    },
    {
        url: 'http://www.dianping.com/mulei',
        cityName: '木垒哈萨克自治县',
        pinyin: 'mulei'
    },
    {
        url: 'http://www.dianping.com/luntai',
        cityName: '轮台县',
        pinyin: 'luntai'
    },
    {
        url: 'http://www.dianping.com/weili',
        cityName: '尉犁县',
        pinyin: 'weili'
    },
    {
        url: 'http://www.dianping.com/ruoqiang',
        cityName: '若羌县',
        pinyin: 'ruoqiang'
    },
    {
        url: 'http://www.dianping.com/qiemo',
        cityName: '且末县',
        pinyin: 'qiemo'
    },
    {
        url: 'http://www.dianping.com/hejing',
        cityName: '和静县',
        pinyin: 'hejing'
    },
    {
        url: 'http://www.dianping.com/heshuo',
        cityName: '和硕县',
        pinyin: 'heshuo'
    },
    {
        url: 'http://www.dianping.com/bohu',
        cityName: '博湖县',
        pinyin: 'bohu'
    },
    {
        url: 'http://www.dianping.com/yanqi',
        cityName: '焉耆回族自治县',
        pinyin: 'yanqi'
    },
    {
        url: 'http://www.dianping.com/yining',
        cityName: '伊宁市',
        pinyin: 'yining'
    },
    {
        url: 'http://www.dianping.com/yiningxian',
        cityName: '伊宁县',
        pinyin: 'yiningxian'
    },
    {
        url: 'http://www.dianping.com/huocheng',
        cityName: '霍城县',
        pinyin: 'huocheng'
    },
    {
        url: 'http://www.dianping.com/gongliu',
        cityName: '巩留县',
        pinyin: 'gongliu'
    },
    {
        url: 'http://www.dianping.com/xinyuan',
        cityName: '新源县',
        pinyin: 'xinyuan'
    },
    {
        url: 'http://www.dianping.com/zhaosu',
        cityName: '昭苏县',
        pinyin: 'zhaosu'
    },
    {
        url: 'http://www.dianping.com/tekesi',
        cityName: '特克斯县',
        pinyin: 'tekesi'
    },
    {
        url: 'http://www.dianping.com/nileke',
        cityName: '尼勒克县',
        pinyin: 'nileke'
    },
    {
        url: 'http://www.dianping.com/chabuchaer',
        cityName: '察布查尔锡伯自治县',
        pinyin: 'chabuchaer'
    },
    {
        url: 'http://www.dianping.com/tacheng',
        cityName: '塔城市',
        pinyin: 'tacheng'
    },
    {
        url: 'http://www.dianping.com/wusu',
        cityName: '乌苏市',
        pinyin: 'wusu'
    },
    {
        url: 'http://www.dianping.com/emin',
        cityName: '额敏县',
        pinyin: 'emin'
    },
    {
        url: 'http://www.dianping.com/shawan',
        cityName: '沙湾县',
        pinyin: 'shawan'
    },
    {
        url: 'http://www.dianping.com/tuoli',
        cityName: '托里县',
        pinyin: 'tuoli'
    },
    {
        url: 'http://www.dianping.com/yumin',
        cityName: '裕民县',
        pinyin: 'yumin'
    },
    {
        url: 'http://www.dianping.com/hebukesaier',
        cityName: '和布克赛尔蒙古自治县',
        pinyin: 'hebukesaier'
    },
    {
        url: 'http://www.dianping.com/aletai',
        cityName: '阿勒泰市',
        pinyin: 'aletai'
    },
    {
        url: 'http://www.dianping.com/buerjin',
        cityName: '布尔津县',
        pinyin: 'buerjin'
    },
    {
        url: 'http://www.dianping.com/fuyun',
        cityName: '富蕴县',
        pinyin: 'fuyun'
    },
    {
        url: 'http://www.dianping.com/fuhai',
        cityName: '福海县',
        pinyin: 'fuhai'
    },
    {
        url: 'http://www.dianping.com/habahe',
        cityName: '哈巴河县',
        pinyin: 'habahe'
    },
    {
        url: 'http://www.dianping.com/qinghexian',
        cityName: '青河县',
        pinyin: 'qinghexian'
    },
    {
        url: 'http://www.dianping.com/jimumai',
        cityName: '吉木乃县',
        pinyin: 'jimumai'
    },
    {
        url: 'http://www.dianping.com/alashankoushi',
        cityName: '阿拉山口市',
        pinyin: 'alashankoushi'
    },
    {
        url: 'http://www.dianping.com/xining',
        cityName: '西宁',
        pinyin: 'xining'
    },
    {
        url: 'http://www.dianping.com/haixi',
        cityName: '海西',
        pinyin: 'haixi'
    },
    {
        url: 'http://www.dianping.com/haidong',
        cityName: '海东',
        pinyin: 'haidong'
    },
    {
        url: 'http://www.dianping.com/haibei',
        cityName: '海北',
        pinyin: 'haibei'
    },
    {
        url: 'http://www.dianping.com/huangnan',
        cityName: '黄南',
        pinyin: 'huangnan'
    },
    {
        url: 'http://www.dianping.com/yushu',
        cityName: '玉树',
        pinyin: 'yushu'
    },
    {
        url: 'http://www.dianping.com/guoluo',
        cityName: '果洛',
        pinyin: 'guoluo'
    },
    {
        url: 'http://www.dianping.com/hainanzhou',
        cityName: '海南州',
        pinyin: 'hainanzhou'
    },
    {
        url: 'http://www.dianping.com/qinghaihu',
        cityName: '青海湖',
        pinyin: 'qinghaihu'
    },
    {
        url: 'http://www.dianping.com/geermu',
        cityName: '格尔木市',
        pinyin: 'geermu'
    },
    {
        url: 'http://www.dianping.com/datongzzxian',
        cityName: '大通回族土族自治县',
        pinyin: 'datongzzxian'
    },
    {
        url: 'http://www.dianping.com/huangyuan',
        cityName: '湟源县',
        pinyin: 'huangyuan'
    },
    {
        url: 'http://www.dianping.com/huangzhong',
        cityName: '湟中县',
        pinyin: 'huangzhong'
    },
    {
        url: 'http://www.dianping.com/pingan',
        cityName: '平安区',
        pinyin: 'pingan'
    },
    {
        url: 'http://www.dianping.com/minhe',
        cityName: '民和回族土族自治县',
        pinyin: 'minhe'
    },
    {
        url: 'http://www.dianping.com/huzhu',
        cityName: '互助土族自治县',
        pinyin: 'huzhu'
    },
    {
        url: 'http://www.dianping.com/hualong',
        cityName: '化隆回族自治县',
        pinyin: 'hualong'
    },
    {
        url: 'http://www.dianping.com/xunhua',
        cityName: '循化撒拉族自治县',
        pinyin: 'xunhua'
    },
    {
        url: 'http://www.dianping.com/haiyanxian',
        cityName: '海晏县',
        pinyin: 'haiyanxian'
    },
    {
        url: 'http://www.dianping.com/qilian',
        cityName: '祁连县',
        pinyin: 'qilian'
    },
    {
        url: 'http://www.dianping.com/gangcha',
        cityName: '刚察县',
        pinyin: 'gangcha'
    },
    {
        url: 'http://www.dianping.com/menyuan',
        cityName: '门源回族自治县',
        pinyin: 'menyuan'
    },
    {
        url: 'http://www.dianping.com/tongrenxian',
        cityName: '同仁县',
        pinyin: 'tongrenxian'
    },
    {
        url: 'http://www.dianping.com/jianzha',
        cityName: '尖扎县',
        pinyin: 'jianzha'
    },
    {
        url: 'http://www.dianping.com/zekun',
        cityName: '泽库县',
        pinyin: 'zekun'
    },
    {
        url: 'http://www.dianping.com/henanxian',
        cityName: '河南蒙古族自治县',
        pinyin: 'henanxian'
    },
    {
        url: 'http://www.dianping.com/maqin',
        cityName: '玛沁县',
        pinyin: 'maqin'
    },
    {
        url: 'http://www.dianping.com/banma',
        cityName: '班玛县',
        pinyin: 'banma'
    },
    {
        url: 'http://www.dianping.com/gande',
        cityName: '甘德县',
        pinyin: 'gande'
    },
    {
        url: 'http://www.dianping.com/dari',
        cityName: '达日县',
        pinyin: 'dari'
    },
    {
        url: 'http://www.dianping.com/jiuzhi',
        cityName: '久治县',
        pinyin: 'jiuzhi'
    },
    {
        url: 'http://www.dianping.com/maduo',
        cityName: '玛多县',
        pinyin: 'maduo'
    },
    {
        url: 'http://www.dianping.com/yushuxian',
        cityName: '玉树县',
        pinyin: 'yushuxian'
    },
    {
        url: 'http://www.dianping.com/zaduo',
        cityName: '杂多县',
        pinyin: 'zaduo'
    },
    {
        url: 'http://www.dianping.com/chenduo',
        cityName: '称多县',
        pinyin: 'chenduo'
    },
    {
        url: 'http://www.dianping.com/zhiduo',
        cityName: '治多县',
        pinyin: 'zhiduo'
    },
    {
        url: 'http://www.dianping.com/nangqian',
        cityName: '囊谦县',
        pinyin: 'nangqian'
    },
    {
        url: 'http://www.dianping.com/qumalai',
        cityName: '曲麻莱县',
        pinyin: 'qumalai'
    },
    {
        url: 'http://www.dianping.com/delingha',
        cityName: '德令哈市',
        pinyin: 'delingha'
    },
    {
        url: 'http://www.dianping.com/wulan',
        cityName: '乌兰县',
        pinyin: 'wulan'
    },
    {
        url: 'http://www.dianping.com/dulan',
        cityName: '都兰县',
        pinyin: 'dulan'
    },
    {
        url: 'http://www.dianping.com/tianjun',
        cityName: '天峻县',
        pinyin: 'tianjun'
    },
    {
        url: 'http://www.dianping.com/gonghe',
        cityName: '共和县',
        pinyin: 'gonghe'
    },
    {
        url: 'http://www.dianping.com/tongde',
        cityName: '同德县',
        pinyin: 'tongde'
    },
    {
        url: 'http://www.dianping.com/guide',
        cityName: '贵德县',
        pinyin: 'guide'
    },
    {
        url: 'http://www.dianping.com/xinghai',
        cityName: '兴海县',
        pinyin: 'xinghai'
    },
    {
        url: 'http://www.dianping.com/guinan',
        cityName: '贵南县',
        pinyin: 'guinan'
    },
    {
        url: 'http://www.dianping.com/xian',
        cityName: '西安',
        pinyin: 'xian'
    },
    {
        url: 'http://www.dianping.com/baoji',
        cityName: '宝鸡',
        pinyin: 'baoji'
    },
    {
        url: 'http://www.dianping.com/xianyang',
        cityName: '咸阳',
        pinyin: 'xianyang'
    },
    {
        url: 'http://www.dianping.com/yanan',
        cityName: '延安',
        pinyin: 'yanan'
    },
    {
        url: 'http://www.dianping.com/weinan',
        cityName: '渭南',
        pinyin: 'weinan'
    },
    {
        url: 'http://www.dianping.com/yulin',
        cityName: '榆林',
        pinyin: 'yulin'
    },
    {
        url: 'http://www.dianping.com/hanzhong',
        cityName: '汉中',
        pinyin: 'hanzhong'
    },
    {
        url: 'http://www.dianping.com/ankang',
        cityName: '安康',
        pinyin: 'ankang'
    },
    {
        url: 'http://www.dianping.com/tongchuan',
        cityName: '铜川',
        pinyin: 'tongchuan'
    },
    {
        url: 'http://www.dianping.com/shangluo',
        cityName: '商洛',
        pinyin: 'shangluo'
    },
    {
        url: 'http://www.dianping.com/huashan',
        cityName: '华山',
        pinyin: 'huashan'
    },
    {
        url: 'http://www.dianping.com/lantian',
        cityName: '蓝田县',
        pinyin: 'lantian'
    },
    {
        url: 'http://www.dianping.com/zhouzhi',
        cityName: '周至县',
        pinyin: 'zhouzhi'
    },
    {
        url: 'http://www.dianping.com/huxian',
        cityName: '户县',
        pinyin: 'huxian'
    },
    {
        url: 'http://www.dianping.com/gaoling',
        cityName: '高陵区',
        pinyin: 'gaoling'
    },
    {
        url: 'http://www.dianping.com/yanchang',
        cityName: '延长县',
        pinyin: 'yanchang'
    },
    {
        url: 'http://www.dianping.com/yanchuan',
        cityName: '延川县',
        pinyin: 'yanchuan'
    },
    {
        url: 'http://www.dianping.com/zichang',
        cityName: '子长县',
        pinyin: 'zichang'
    },
    {
        url: 'http://www.dianping.com/ansai',
        cityName: '安塞县',
        pinyin: 'ansai'
    },
    {
        url: 'http://www.dianping.com/zhidan',
        cityName: '志丹县',
        pinyin: 'zhidan'
    },
    {
        url: 'http://www.dianping.com/wuqi',
        cityName: '吴起县',
        pinyin: 'wuqi'
    },
    {
        url: 'http://www.dianping.com/ganquan',
        cityName: '甘泉县',
        pinyin: 'ganquan'
    },
    {
        url: 'http://www.dianping.com/fuxian',
        cityName: '富县',
        pinyin: 'fuxian'
    },
    {
        url: 'http://www.dianping.com/luochuan',
        cityName: '洛川县',
        pinyin: 'luochuan'
    },
    {
        url: 'http://www.dianping.com/yichuanxian',
        cityName: '宜川县',
        pinyin: 'yichuanxian'
    },
    {
        url: 'http://www.dianping.com/huangliu',
        cityName: '黄龙县',
        pinyin: 'huangliu'
    },
    {
        url: 'http://www.dianping.com/huangling',
        cityName: '黄陵县',
        pinyin: 'huangling'
    },
    {
        url: 'http://www.dianping.com/yijun',
        cityName: '宜君县',
        pinyin: 'yijun'
    },
    {
        url: 'http://www.dianping.com/huayin',
        cityName: '华阴市',
        pinyin: 'huayin'
    },
    {
        url: 'http://www.dianping.com/hancheng',
        cityName: '韩城市',
        pinyin: 'hancheng'
    },
    {
        url: 'http://www.dianping.com/huaxianxian',
        cityName: '华县',
        pinyin: 'huaxianxian'
    },
    {
        url: 'http://www.dianping.com/tongguan',
        cityName: '潼关县',
        pinyin: 'tongguan'
    },
    {
        url: 'http://www.dianping.com/dalixian',
        cityName: '大荔县',
        pinyin: 'dalixian'
    },
    {
        url: 'http://www.dianping.com/puchengxian',
        cityName: '蒲城县',
        pinyin: 'puchengxian'
    },
    {
        url: 'http://www.dianping.com/chengcheng',
        cityName: '澄城县',
        pinyin: 'chengcheng'
    },
    {
        url: 'http://www.dianping.com/baishui',
        cityName: '白水县',
        pinyin: 'baishui'
    },
    {
        url: 'http://www.dianping.com/heyang',
        cityName: '合阳县',
        pinyin: 'heyang'
    },
    {
        url: 'http://www.dianping.com/fupingxian',
        cityName: '富平县',
        pinyin: 'fupingxian'
    },
    {
        url: 'http://www.dianping.com/xingping',
        cityName: '兴平市',
        pinyin: 'xingping'
    },
    {
        url: 'http://www.dianping.com/sanyuan',
        cityName: '三原县',
        pinyin: 'sanyuan'
    },
    {
        url: 'http://www.dianping.com/jingyang',
        cityName: '泾阳县',
        pinyin: 'jingyang'
    },
    {
        url: 'http://www.dianping.com/qianxian',
        cityName: '乾县',
        pinyin: 'qianxian'
    },
    {
        url: 'http://www.dianping.com/liquan',
        cityName: '礼泉县',
        pinyin: 'liquan'
    },
    {
        url: 'http://www.dianping.com/yongshou',
        cityName: '永寿县',
        pinyin: 'yongshou'
    },
    {
        url: 'http://www.dianping.com/binxianshi',
        cityName: '彬县',
        pinyin: 'binxianshi'
    },
    {
        url: 'http://www.dianping.com/changwu',
        cityName: '长武县',
        pinyin: 'changwu'
    },
    {
        url: 'http://www.dianping.com/xunyi',
        cityName: '旬邑县',
        pinyin: 'xunyi'
    },
    {
        url: 'http://www.dianping.com/chunhua',
        cityName: '淳化县',
        pinyin: 'chunhua'
    },
    {
        url: 'http://www.dianping.com/wugong',
        cityName: '武功县',
        pinyin: 'wugong'
    },
    {
        url: 'http://www.dianping.com/fengxiang',
        cityName: '凤翔县',
        pinyin: 'fengxiang'
    },
    {
        url: 'http://www.dianping.com/qishan',
        cityName: '岐山县',
        pinyin: 'qishan'
    },
    {
        url: 'http://www.dianping.com/fufeng',
        cityName: '扶风县',
        pinyin: 'fufeng'
    },
    {
        url: 'http://www.dianping.com/bjmeixian',
        cityName: '眉县',
        pinyin: 'bjmeixian'
    },
    {
        url: 'http://www.dianping.com/longxian',
        cityName: '陇县',
        pinyin: 'longxian'
    },
    {
        url: 'http://www.dianping.com/qianyang',
        cityName: '千阳县',
        pinyin: 'qianyang'
    },
    {
        url: 'http://www.dianping.com/linyou',
        cityName: '麟游县',
        pinyin: 'linyou'
    },
    {
        url: 'http://www.dianping.com/fengxianxian',
        cityName: '凤县',
        pinyin: 'fengxianxian'
    },
    {
        url: 'http://www.dianping.com/taibai',
        cityName: '太白县',
        pinyin: 'taibai'
    },
    {
        url: 'http://www.dianping.com/nanzheng',
        cityName: '南郑县',
        pinyin: 'nanzheng'
    },
    {
        url: 'http://www.dianping.com/chenggu',
        cityName: '城固县',
        pinyin: 'chenggu'
    },
    {
        url: 'http://www.dianping.com/yangxian',
        cityName: '洋县',
        pinyin: 'yangxian'
    },
    {
        url: 'http://www.dianping.com/xixiang',
        cityName: '西乡县',
        pinyin: 'xixiang'
    },
    {
        url: 'http://www.dianping.com/mianxian',
        cityName: '勉县',
        pinyin: 'mianxian'
    },
    {
        url: 'http://www.dianping.com/ningqiang',
        cityName: '宁强县',
        pinyin: 'ningqiang'
    },
    {
        url: 'http://www.dianping.com/lueyang',
        cityName: '略阳县',
        pinyin: 'lueyang'
    },
    {
        url: 'http://www.dianping.com/zhenba',
        cityName: '镇巴县',
        pinyin: 'zhenba'
    },
    {
        url: 'http://www.dianping.com/liuba',
        cityName: '留坝县',
        pinyin: 'liuba'
    },
    {
        url: 'http://www.dianping.com/fopin',
        cityName: '佛坪县',
        pinyin: 'fopin'
    },
    {
        url: 'http://www.dianping.com/shenmu',
        cityName: '神木县',
        pinyin: 'shenmu'
    },
    {
        url: 'http://www.dianping.com/fugu',
        cityName: '府谷县',
        pinyin: 'fugu'
    },
    {
        url: 'http://www.dianping.com/hengshanxian',
        cityName: '横山县',
        pinyin: 'hengshanxian'
    },
    {
        url: 'http://www.dianping.com/jingbian',
        cityName: '靖边县',
        pinyin: 'jingbian'
    },
    {
        url: 'http://www.dianping.com/dingbian',
        cityName: '定边县',
        pinyin: 'dingbian'
    },
    {
        url: 'http://www.dianping.com/suide',
        cityName: '绥德县',
        pinyin: 'suide'
    },
    {
        url: 'http://www.dianping.com/mizhi',
        cityName: '米脂县',
        pinyin: 'mizhi'
    },
    {
        url: 'http://www.dianping.com/jiaxianxian',
        cityName: '佳县',
        pinyin: 'jiaxianxian'
    },
    {
        url: 'http://www.dianping.com/wubao',
        cityName: '吴堡县',
        pinyin: 'wubao'
    },
    {
        url: 'http://www.dianping.com/qingjian',
        cityName: '清涧县',
        pinyin: 'qingjian'
    },
    {
        url: 'http://www.dianping.com/zizhou',
        cityName: '子洲县',
        pinyin: 'zizhou'
    },
    {
        url: 'http://www.dianping.com/hanyin',
        cityName: '汉阴县',
        pinyin: 'hanyin'
    },
    {
        url: 'http://www.dianping.com/shiquan',
        cityName: '石泉县',
        pinyin: 'shiquan'
    },
    {
        url: 'http://www.dianping.com/ningshan',
        cityName: '宁陕县',
        pinyin: 'ningshan'
    },
    {
        url: 'http://www.dianping.com/ziyangxian',
        cityName: '紫阳县',
        pinyin: 'ziyangxian'
    },
    {
        url: 'http://www.dianping.com/langao',
        cityName: '岚皋县',
        pinyin: 'langao'
    },
    {
        url: 'http://www.dianping.com/pingli',
        cityName: '平利县',
        pinyin: 'pingli'
    },
    {
        url: 'http://www.dianping.com/zhenpin',
        cityName: '镇坪县',
        pinyin: 'zhenpin'
    },
    {
        url: 'http://www.dianping.com/xunyang',
        cityName: '旬阳县',
        pinyin: 'xunyang'
    },
    {
        url: 'http://www.dianping.com/baihe',
        cityName: '白河县',
        pinyin: 'baihe'
    },
    {
        url: 'http://www.dianping.com/luonan',
        cityName: '洛南县',
        pinyin: 'luonan'
    },
    {
        url: 'http://www.dianping.com/danfeng',
        cityName: '丹凤县',
        pinyin: 'danfeng'
    },
    {
        url: 'http://www.dianping.com/shangnan',
        cityName: '商南县',
        pinyin: 'shangnan'
    },
    {
        url: 'http://www.dianping.com/shanyang',
        cityName: '山阳县',
        pinyin: 'shanyang'
    },
    {
        url: 'http://www.dianping.com/zhenan',
        cityName: '镇安县',
        pinyin: 'zhenan'
    },
    {
        url: 'http://www.dianping.com/zuoshui',
        cityName: '柞水县',
        pinyin: 'zuoshui'
    },
    {
        url: 'http://www.dianping.com/lanzhou',
        cityName: '兰州',
        pinyin: 'lanzhou'
    },
    {
        url: 'http://www.dianping.com/jiuquan',
        cityName: '酒泉',
        pinyin: 'jiuquan'
    },
    {
        url: 'http://www.dianping.com/tianshui',
        cityName: '天水',
        pinyin: 'tianshui'
    },
    {
        url: 'http://www.dianping.com/qingyang',
        cityName: '庆阳',
        pinyin: 'qingyang'
    },
    {
        url: 'http://www.dianping.com/zhangye',
        cityName: '张掖',
        pinyin: 'zhangye'
    },
    {
        url: 'http://www.dianping.com/jiayuguan',
        cityName: '嘉峪关',
        pinyin: 'jiayuguan'
    },
    {
        url: 'http://www.dianping.com/gannanzhou',
        cityName: '甘南',
        pinyin: 'gannanzhou'
    },
    {
        url: 'http://www.dianping.com/wuwei',
        cityName: '武威',
        pinyin: 'wuwei'
    },
    {
        url: 'http://www.dianping.com/pingliang',
        cityName: '平凉',
        pinyin: 'pingliang'
    },
    {
        url: 'http://www.dianping.com/longnan',
        cityName: '陇南',
        pinyin: 'longnan'
    },
    {
        url: 'http://www.dianping.com/baiyin',
        cityName: '白银',
        pinyin: 'baiyin'
    },
    {
        url: 'http://www.dianping.com/linxiazhou',
        cityName: '临夏州',
        pinyin: 'linxiazhou'
    },
    {
        url: 'http://www.dianping.com/jinchang',
        cityName: '金昌',
        pinyin: 'jinchang'
    },
    {
        url: 'http://www.dianping.com/dingxi',
        cityName: '定西',
        pinyin: 'dingxi'
    },
    {
        url: 'http://www.dianping.com/yongdeng',
        cityName: '永登县',
        pinyin: 'yongdeng'
    },
    {
        url: 'http://www.dianping.com/gaolan',
        cityName: '皋兰县',
        pinyin: 'gaolan'
    },
    {
        url: 'http://www.dianping.com/yuzhong',
        cityName: '榆中县',
        pinyin: 'yuzhong'
    },
    {
        url: 'http://www.dianping.com/yongcang',
        cityName: '永昌县',
        pinyin: 'yongcang'
    },
    {
        url: 'http://www.dianping.com/jingyuan',
        cityName: '靖远县',
        pinyin: 'jingyuan'
    },
    {
        url: 'http://www.dianping.com/huining',
        cityName: '会宁县',
        pinyin: 'huining'
    },
    {
        url: 'http://www.dianping.com/jingtai',
        cityName: '景泰县',
        pinyin: 'jingtai'
    },
    {
        url: 'http://www.dianping.com/qingshui',
        cityName: '清水县',
        pinyin: 'qingshui'
    },
    {
        url: 'http://www.dianping.com/qinan',
        cityName: '秦安县',
        pinyin: 'qinan'
    },
    {
        url: 'http://www.dianping.com/gangu',
        cityName: '甘谷县',
        pinyin: 'gangu'
    },
    {
        url: 'http://www.dianping.com/wushan',
        cityName: '武山县',
        pinyin: 'wushan'
    },
    {
        url: 'http://www.dianping.com/zhangjiachuan',
        cityName: '张家川回族自治县',
        pinyin: 'zhangjiachuan'
    },
    {
        url: 'http://www.dianping.com/minqin',
        cityName: '民勤县',
        pinyin: 'minqin'
    },
    {
        url: 'http://www.dianping.com/gulang',
        cityName: '古浪县',
        pinyin: 'gulang'
    },
    {
        url: 'http://www.dianping.com/tianzhuxian',
        cityName: '天祝藏族自治县',
        pinyin: 'tianzhuxian'
    },
    {
        url: 'http://www.dianping.com/yumen',
        cityName: '玉门市',
        pinyin: 'yumen'
    },
    {
        url: 'http://www.dianping.com/dunhuang',
        cityName: '敦煌市',
        pinyin: 'dunhuang'
    },
    {
        url: 'http://www.dianping.com/jinta',
        cityName: '金塔县',
        pinyin: 'jinta'
    },
    {
        url: 'http://www.dianping.com/anxixian',
        cityName: '瓜州县',
        pinyin: 'anxixian'
    },
    {
        url: 'http://www.dianping.com/subei',
        cityName: '肃北蒙古族自治县',
        pinyin: 'subei'
    },
    {
        url: 'http://www.dianping.com/akesai',
        cityName: '阿克塞哈萨克族自治县',
        pinyin: 'akesai'
    },
    {
        url: 'http://www.dianping.com/minle',
        cityName: '民乐县',
        pinyin: 'minle'
    },
    {
        url: 'http://www.dianping.com/linze',
        cityName: '临泽县',
        pinyin: 'linze'
    },
    {
        url: 'http://www.dianping.com/gaotai',
        cityName: '高台县',
        pinyin: 'gaotai'
    },
    {
        url: 'http://www.dianping.com/shandan',
        cityName: '山丹县',
        pinyin: 'shandan'
    },
    {
        url: 'http://www.dianping.com/sunan',
        cityName: '肃南裕固族自治县',
        pinyin: 'sunan'
    },
    {
        url: 'http://www.dianping.com/qingcheng',
        cityName: '庆城县',
        pinyin: 'qingcheng'
    },
    {
        url: 'http://www.dianping.com/huanxian',
        cityName: '环县',
        pinyin: 'huanxian'
    },
    {
        url: 'http://www.dianping.com/huachi',
        cityName: '华池县',
        pinyin: 'huachi'
    },
    {
        url: 'http://www.dianping.com/heshui',
        cityName: '合水县',
        pinyin: 'heshui'
    },
    {
        url: 'http://www.dianping.com/zhengning',
        cityName: '正宁县',
        pinyin: 'zhengning'
    },
    {
        url: 'http://www.dianping.com/ningxian',
        cityName: '宁县',
        pinyin: 'ningxian'
    },
    {
        url: 'http://www.dianping.com/zhenyuanxian',
        cityName: '镇原县',
        pinyin: 'zhenyuanxian'
    },
    {
        url: 'http://www.dianping.com/jingchuan',
        cityName: '泾川县',
        pinyin: 'jingchuan'
    },
    {
        url: 'http://www.dianping.com/lingtai',
        cityName: '灵台县',
        pinyin: 'lingtai'
    },
    {
        url: 'http://www.dianping.com/chongxin',
        cityName: '崇信县',
        pinyin: 'chongxin'
    },
    {
        url: 'http://www.dianping.com/huating',
        cityName: '华亭县',
        pinyin: 'huating'
    },
    {
        url: 'http://www.dianping.com/zhuanglang',
        cityName: '庄浪县',
        pinyin: 'zhuanglang'
    },
    {
        url: 'http://www.dianping.com/jingningxian',
        cityName: '静宁县',
        pinyin: 'jingningxian'
    },
    {
        url: 'http://www.dianping.com/tongwei',
        cityName: '通渭县',
        pinyin: 'tongwei'
    },
    {
        url: 'http://www.dianping.com/lintao',
        cityName: '临洮县',
        pinyin: 'lintao'
    },
    {
        url: 'http://www.dianping.com/zhangxian',
        cityName: '漳县',
        pinyin: 'zhangxian'
    },
    {
        url: 'http://www.dianping.com/minxian',
        cityName: '岷县',
        pinyin: 'minxian'
    },
    {
        url: 'http://www.dianping.com/weiyuanxian',
        cityName: '渭源县',
        pinyin: 'weiyuanxian'
    },
    {
        url: 'http://www.dianping.com/longxi',
        cityName: '陇西县',
        pinyin: 'longxi'
    },
    {
        url: 'http://www.dianping.com/chengxian',
        cityName: '成县',
        pinyin: 'chengxian'
    },
    {
        url: 'http://www.dianping.com/dangcang',
        cityName: '宕昌县',
        pinyin: 'dangcang'
    },
    {
        url: 'http://www.dianping.com/kangxian',
        cityName: '康县',
        pinyin: 'kangxian'
    },
    {
        url: 'http://www.dianping.com/wenxianxian',
        cityName: '文县',
        pinyin: 'wenxianxian'
    },
    {
        url: 'http://www.dianping.com/xihe',
        cityName: '西和县',
        pinyin: 'xihe'
    },
    {
        url: 'http://www.dianping.com/lnlixian',
        cityName: '礼县',
        pinyin: 'lnlixian'
    },
    {
        url: 'http://www.dianping.com/liangdang',
        cityName: '两当县',
        pinyin: 'liangdang'
    },
    {
        url: 'http://www.dianping.com/huixianxian',
        cityName: '徽县',
        pinyin: 'huixianxian'
    },
    {
        url: 'http://www.dianping.com/linxia',
        cityName: '临夏市',
        pinyin: 'linxia'
    },
    {
        url: 'http://www.dianping.com/linxiaxian',
        cityName: '临夏县',
        pinyin: 'linxiaxian'
    },
    {
        url: 'http://www.dianping.com/kangle',
        cityName: '康乐县',
        pinyin: 'kangle'
    },
    {
        url: 'http://www.dianping.com/yongjing',
        cityName: '永靖县',
        pinyin: 'yongjing'
    },
    {
        url: 'http://www.dianping.com/guanghe',
        cityName: '广河县',
        pinyin: 'guanghe'
    },
    {
        url: 'http://www.dianping.com/hezheng',
        cityName: '和政县',
        pinyin: 'hezheng'
    },
    {
        url: 'http://www.dianping.com/dongxiangzu',
        cityName: '东乡族自治县',
        pinyin: 'dongxiangzu'
    },
    {
        url: 'http://www.dianping.com/jishishan',
        cityName: '积石山保安族东乡族撒拉族自治县',
        pinyin: 'jishishan'
    },
    {
        url: 'http://www.dianping.com/hezuo',
        cityName: '合作市',
        pinyin: 'hezuo'
    },
    {
        url: 'http://www.dianping.com/lintan',
        cityName: '临潭县',
        pinyin: 'lintan'
    },
    {
        url: 'http://www.dianping.com/zhuoni',
        cityName: '卓尼县',
        pinyin: 'zhuoni'
    },
    {
        url: 'http://www.dianping.com/zhouqu',
        cityName: '舟曲县',
        pinyin: 'zhouqu'
    },
    {
        url: 'http://www.dianping.com/diebu',
        cityName: '迭部县',
        pinyin: 'diebu'
    },
    {
        url: 'http://www.dianping.com/maqu',
        cityName: '玛曲县',
        pinyin: 'maqu'
    },
    {
        url: 'http://www.dianping.com/luqu',
        cityName: '碌曲县',
        pinyin: 'luqu'
    },
    {
        url: 'http://www.dianping.com/xiahe',
        cityName: '夏河县',
        pinyin: 'xiahe'
    },
    {
        url: 'http://www.dianping.com/guangzhou',
        cityName: '广州',
        pinyin: 'guangzhou'
    },
    {
        url: 'http://www.dianping.com/shenzhen',
        cityName: '深圳',
        pinyin: 'shenzhen'
    },
    {
        url: 'http://www.dianping.com/zhuhai',
        cityName: '珠海',
        pinyin: 'zhuhai'
    },
    {
        url: 'http://www.dianping.com/foshan',
        cityName: '佛山',
        pinyin: 'foshan'
    },
    {
        url: 'http://www.dianping.com/dongguan',
        cityName: '东莞',
        pinyin: 'dongguan'
    },
    {
        url: 'http://www.dianping.com/shantou',
        cityName: '汕头',
        pinyin: 'shantou'
    },
    {
        url: 'http://www.dianping.com/jiangmen',
        cityName: '江门',
        pinyin: 'jiangmen'
    },
    {
        url: 'http://www.dianping.com/zhongshan',
        cityName: '中山',
        pinyin: 'zhongshan'
    },
    {
        url: 'http://www.dianping.com/maoming',
        cityName: '茂名',
        pinyin: 'maoming'
    },
    {
        url: 'http://www.dianping.com/yangjiang',
        cityName: '阳江',
        pinyin: 'yangjiang'
    },
    {
        url: 'http://www.dianping.com/zhaoqing',
        cityName: '肇庆',
        pinyin: 'zhaoqing'
    },
    {
        url: 'http://www.dianping.com/huizhou',
        cityName: '惠州',
        pinyin: 'huizhou'
    },
    {
        url: 'http://www.dianping.com/zhanjiang',
        cityName: '湛江',
        pinyin: 'zhanjiang'
    },
    {
        url: 'http://www.dianping.com/shaoguan',
        cityName: '韶关',
        pinyin: 'shaoguan'
    },
    {
        url: 'http://www.dianping.com/qingyuan',
        cityName: '清远',
        pinyin: 'qingyuan'
    },
    {
        url: 'http://www.dianping.com/meizhou',
        cityName: '梅州',
        pinyin: 'meizhou'
    },
    {
        url: 'http://www.dianping.com/heyuan',
        cityName: '河源',
        pinyin: 'heyuan'
    },
    {
        url: 'http://www.dianping.com/jieyang',
        cityName: '揭阳',
        pinyin: 'jieyang'
    },
    {
        url: 'http://www.dianping.com/chaozhou',
        cityName: '潮州',
        pinyin: 'chaozhou'
    },
    {
        url: 'http://www.dianping.com/shanwei',
        cityName: '汕尾',
        pinyin: 'shanwei'
    },
    {
        url: 'http://www.dianping.com/yunfu',
        cityName: '云浮',
        pinyin: 'yunfu'
    },
    {
        url: 'http://www.dianping.com/yingde',
        cityName: '英德市',
        pinyin: 'yingde'
    },
    {
        url: 'http://www.dianping.com/lianzhou',
        cityName: '连州市',
        pinyin: 'lianzhou'
    },
    {
        url: 'http://www.dianping.com/fogang',
        cityName: '佛冈县',
        pinyin: 'fogang'
    },
    {
        url: 'http://www.dianping.com/yangshan',
        cityName: '阳山县',
        pinyin: 'yangshan'
    },
    {
        url: 'http://www.dianping.com/lianshan',
        cityName: '连山壮族瑶族自治县',
        pinyin: 'lianshan'
    },
    {
        url: 'http://www.dianping.com/liannan',
        cityName: '连南瑶族自治县',
        pinyin: 'liannan'
    },
    {
        url: 'http://www.dianping.com/lecang',
        cityName: '乐昌市',
        pinyin: 'lecang'
    },
    {
        url: 'http://www.dianping.com/nanxiong',
        cityName: '南雄市',
        pinyin: 'nanxiong'
    },
    {
        url: 'http://www.dianping.com/shixing',
        cityName: '始兴县',
        pinyin: 'shixing'
    },
    {
        url: 'http://www.dianping.com/renhua',
        cityName: '仁化县',
        pinyin: 'renhua'
    },
    {
        url: 'http://www.dianping.com/wengyuan',
        cityName: '翁源县',
        pinyin: 'wengyuan'
    },
    {
        url: 'http://www.dianping.com/xinfengxian',
        cityName: '新丰县',
        pinyin: 'xinfengxian'
    },
    {
        url: 'http://www.dianping.com/ruyuan',
        cityName: '乳源瑶族自治县',
        pinyin: 'ruyuan'
    },
    {
        url: 'http://www.dianping.com/zijin',
        cityName: '紫金县',
        pinyin: 'zijin'
    },
    {
        url: 'http://www.dianping.com/liuchuan',
        cityName: '龙川县',
        pinyin: 'liuchuan'
    },
    {
        url: 'http://www.dianping.com/lianping',
        cityName: '连平县',
        pinyin: 'lianping'
    },
    {
        url: 'http://www.dianping.com/heping',
        cityName: '和平县',
        pinyin: 'heping'
    },
    {
        url: 'http://www.dianping.com/dongyuan',
        cityName: '东源县',
        pinyin: 'dongyuan'
    },
    {
        url: 'http://www.dianping.com/xingning',
        cityName: '兴宁市',
        pinyin: 'xingning'
    },
    {
        url: 'http://www.dianping.com/meixian',
        cityName: '梅县区',
        pinyin: 'meixian'
    },
    {
        url: 'http://www.dianping.com/dapu',
        cityName: '大埔县',
        pinyin: 'dapu'
    },
    {
        url: 'http://www.dianping.com/fengshun',
        cityName: '丰顺县',
        pinyin: 'fengshun'
    },
    {
        url: 'http://www.dianping.com/wuhua',
        cityName: '五华县',
        pinyin: 'wuhua'
    },
    {
        url: 'http://www.dianping.com/pingyuanxian',
        cityName: '平远县',
        pinyin: 'pingyuanxian'
    },
    {
        url: 'http://www.dianping.com/jiaoling',
        cityName: '蕉岭县',
        pinyin: 'jiaoling'
    },
    {
        url: 'http://www.dianping.com/raoping',
        cityName: '饶平县',
        pinyin: 'raoping'
    },
    {
        url: 'http://www.dianping.com/nanao',
        cityName: '南澳县',
        pinyin: 'nanao'
    },
    {
        url: 'http://www.dianping.com/puning',
        cityName: '普宁市',
        pinyin: 'puning'
    },
    {
        url: 'http://www.dianping.com/jiexi',
        cityName: '揭西县',
        pinyin: 'jiexi'
    },
    {
        url: 'http://www.dianping.com/huilai',
        cityName: '惠来县',
        pinyin: 'huilai'
    },
    {
        url: 'http://www.dianping.com/lufeng',
        cityName: '陆丰市',
        pinyin: 'lufeng'
    },
    {
        url: 'http://www.dianping.com/haifeng',
        cityName: '海丰县',
        pinyin: 'haifeng'
    },
    {
        url: 'http://www.dianping.com/luhe',
        cityName: '陆河县',
        pinyin: 'luhe'
    },
    {
        url: 'http://www.dianping.com/boluo',
        cityName: '博罗县',
        pinyin: 'boluo'
    },
    {
        url: 'http://www.dianping.com/huidong',
        cityName: '惠东县',
        pinyin: 'huidong'
    },
    {
        url: 'http://www.dianping.com/liumen',
        cityName: '龙门县',
        pinyin: 'liumen'
    },
    {
        url: 'http://www.dianping.com/enping',
        cityName: '恩平市',
        pinyin: 'enping'
    },
    {
        url: 'http://www.dianping.com/taishan',
        cityName: '台山市',
        pinyin: 'taishan'
    },
    {
        url: 'http://www.dianping.com/kaiping',
        cityName: '开平市',
        pinyin: 'kaiping'
    },
    {
        url: 'http://www.dianping.com/heshan',
        cityName: '鹤山市',
        pinyin: 'heshan'
    },
    {
        url: 'http://www.dianping.com/gaoyao',
        cityName: '高要区',
        pinyin: 'gaoyao'
    },
    {
        url: 'http://www.dianping.com/sihui',
        cityName: '四会市',
        pinyin: 'sihui'
    },
    {
        url: 'http://www.dianping.com/guangning',
        cityName: '广宁县',
        pinyin: 'guangning'
    },
    {
        url: 'http://www.dianping.com/huaiji',
        cityName: '怀集县',
        pinyin: 'huaiji'
    },
    {
        url: 'http://www.dianping.com/fengkai',
        cityName: '封开县',
        pinyin: 'fengkai'
    },
    {
        url: 'http://www.dianping.com/deqingxian',
        cityName: '德庆县',
        pinyin: 'deqingxian'
    },
    {
        url: 'http://www.dianping.com/luoding',
        cityName: '罗定市',
        pinyin: 'luoding'
    },
    {
        url: 'http://www.dianping.com/yunan',
        cityName: '云安区',
        pinyin: 'yunan'
    },
    {
        url: 'http://www.dianping.com/xinxing',
        cityName: '新兴县',
        pinyin: 'xinxing'
    },
    {
        url: 'http://www.dianping.com/yunanxian',
        cityName: '郁南县',
        pinyin: 'yunanxian'
    },
    {
        url: 'http://www.dianping.com/yangchun',
        cityName: '阳春市',
        pinyin: 'yangchun'
    },
    {
        url: 'http://www.dianping.com/yangxi',
        cityName: '阳西县',
        pinyin: 'yangxi'
    },
    {
        url: 'http://www.dianping.com/yangdong',
        cityName: '阳东区',
        pinyin: 'yangdong'
    },
    {
        url: 'http://www.dianping.com/huazhou',
        cityName: '化州市',
        pinyin: 'huazhou'
    },
    {
        url: 'http://www.dianping.com/xinyishi',
        cityName: '信宜市',
        pinyin: 'xinyishi'
    },
    {
        url: 'http://www.dianping.com/gaozhou',
        cityName: '高州市',
        pinyin: 'gaozhou'
    },
    {
        url: 'http://www.dianping.com/dianbai',
        cityName: '电白县',
        pinyin: 'dianbai'
    },
    {
        url: 'http://www.dianping.com/wuchuan',
        cityName: '吴川市',
        pinyin: 'wuchuan'
    },
    {
        url: 'http://www.dianping.com/lianjian',
        cityName: '廉江市',
        pinyin: 'lianjian'
    },
    {
        url: 'http://www.dianping.com/leizhou',
        cityName: '雷州市',
        pinyin: 'leizhou'
    },
    {
        url: 'http://www.dianping.com/suixixian',
        cityName: '遂溪县',
        pinyin: 'suixixian'
    },
    {
        url: 'http://www.dianping.com/xuwen',
        cityName: '徐闻县',
        pinyin: 'xuwen'
    },
    {
        url: 'http://www.dianping.com/shunde',
        cityName: '顺德区',
        pinyin: 'shunde'
    },
    {
        url: 'http://www.dianping.com/nanning',
        cityName: '南宁',
        pinyin: 'nanning'
    },
    {
        url: 'http://www.dianping.com/guilin',
        cityName: '桂林',
        pinyin: 'guilin'
    },
    {
        url: 'http://www.dianping.com/liuzhou',
        cityName: '柳州',
        pinyin: 'liuzhou'
    },
    {
        url: 'http://www.dianping.com/wuzhou',
        cityName: '梧州',
        pinyin: 'wuzhou'
    },
    {
        url: 'http://www.dianping.com/beihai',
        cityName: '北海',
        pinyin: 'beihai'
    },
    {
        url: 'http://www.dianping.com/hezhou',
        cityName: '贺州',
        pinyin: 'hezhou'
    },
    {
        url: 'http://www.dianping.com/guigang',
        cityName: '贵港',
        pinyin: 'guigang'
    },
    {
        url: 'http://www.dianping.com/qinzhou',
        cityName: '钦州',
        pinyin: 'qinzhou'
    },
    {
        url: 'http://www.dianping.com/guangxiyulin',
        cityName: '玉林',
        pinyin: 'guangxiyulin'
    },
    {
        url: 'http://www.dianping.com/baise',
        cityName: '百色',
        pinyin: 'baise'
    },
    {
        url: 'http://www.dianping.com/hechi',
        cityName: '河池',
        pinyin: 'hechi'
    },
    {
        url: 'http://www.dianping.com/fangchenggang',
        cityName: '防城港',
        pinyin: 'fangchenggang'
    },
    {
        url: 'http://www.dianping.com/chongzuo',
        cityName: '崇左',
        pinyin: 'chongzuo'
    },
    {
        url: 'http://www.dianping.com/laibin',
        cityName: '来宾',
        pinyin: 'laibin'
    },
    {
        url: 'http://www.dianping.com/weizhoudao',
        cityName: '涠洲岛',
        pinyin: 'weizhoudao'
    },
    {
        url: 'http://www.dianping.com/wuming',
        cityName: '武鸣区',
        pinyin: 'wuming'
    },
    {
        url: 'http://www.dianping.com/hengxian',
        cityName: '横县',
        pinyin: 'hengxian'
    },
    {
        url: 'http://www.dianping.com/binyang',
        cityName: '宾阳县',
        pinyin: 'binyang'
    },
    {
        url: 'http://www.dianping.com/shanglin',
        cityName: '上林县',
        pinyin: 'shanglin'
    },
    {
        url: 'http://www.dianping.com/longan',
        cityName: '隆安县',
        pinyin: 'longan'
    },
    {
        url: 'http://www.dianping.com/mashan',
        cityName: '马山县',
        pinyin: 'mashan'
    },
    {
        url: 'http://www.dianping.com/yangsu',
        cityName: '阳朔县',
        pinyin: 'yangsu'
    },
    {
        url: 'http://www.dianping.com/lingchuanxian',
        cityName: '灵川县',
        pinyin: 'lingchuanxian'
    },
    {
        url: 'http://www.dianping.com/quanzhouxian',
        cityName: '全州县',
        pinyin: 'quanzhouxian'
    },
    {
        url: 'http://www.dianping.com/xinganxian',
        cityName: '兴安县',
        pinyin: 'xinganxian'
    },
    {
        url: 'http://www.dianping.com/yongfu',
        cityName: '永福县',
        pinyin: 'yongfu'
    },
    {
        url: 'http://www.dianping.com/guanyang',
        cityName: '灌阳县',
        pinyin: 'guanyang'
    },
    {
        url: 'http://www.dianping.com/ziyuan',
        cityName: '资源县',
        pinyin: 'ziyuan'
    },
    {
        url: 'http://www.dianping.com/pingle',
        cityName: '平乐县',
        pinyin: 'pingle'
    },
    {
        url: 'http://www.dianping.com/lipu',
        cityName: '荔浦县',
        pinyin: 'lipu'
    },
    {
        url: 'http://www.dianping.com/longsheng',
        cityName: '龙胜各族自治县',
        pinyin: 'longsheng'
    },
    {
        url: 'http://www.dianping.com/gongcheng',
        cityName: '恭城瑶族自治县',
        pinyin: 'gongcheng'
    },
    {
        url: 'http://www.dianping.com/liujiang',
        cityName: '柳江县',
        pinyin: 'liujiang'
    },
    {
        url: 'http://www.dianping.com/liucheng',
        cityName: '柳城县',
        pinyin: 'liucheng'
    },
    {
        url: 'http://www.dianping.com/luzhai',
        cityName: '鹿寨县',
        pinyin: 'luzhai'
    },
    {
        url: 'http://www.dianping.com/rongan',
        cityName: '融安县',
        pinyin: 'rongan'
    },
    {
        url: 'http://www.dianping.com/sanjiang',
        cityName: '三江侗族自治县',
        pinyin: 'sanjiang'
    },
    {
        url: 'http://www.dianping.com/rongshui',
        cityName: '融水苗族自治县',
        pinyin: 'rongshui'
    },
    {
        url: 'http://www.dianping.com/cenxi',
        cityName: '岑溪市',
        pinyin: 'cenxi'
    },
    {
        url: 'http://www.dianping.com/cangwu',
        cityName: '苍梧县',
        pinyin: 'cangwu'
    },
    {
        url: 'http://www.dianping.com/tengxian',
        cityName: '藤县',
        pinyin: 'tengxian'
    },
    {
        url: 'http://www.dianping.com/mengshan',
        cityName: '蒙山县',
        pinyin: 'mengshan'
    },
    {
        url: 'http://www.dianping.com/guiping',
        cityName: '桂平市',
        pinyin: 'guiping'
    },
    {
        url: 'http://www.dianping.com/pingnanxian',
        cityName: '平南县',
        pinyin: 'pingnanxian'
    },
    {
        url: 'http://www.dianping.com/beiliu',
        cityName: '北流市',
        pinyin: 'beiliu'
    },
    {
        url: 'http://www.dianping.com/xingye',
        cityName: '兴业县',
        pinyin: 'xingye'
    },
    {
        url: 'http://www.dianping.com/rongxian',
        cityName: '容县',
        pinyin: 'rongxian'
    },
    {
        url: 'http://www.dianping.com/luchuan',
        cityName: '陆川县',
        pinyin: 'luchuan'
    },
    {
        url: 'http://www.dianping.com/bobai',
        cityName: '博白县',
        pinyin: 'bobai'
    },
    {
        url: 'http://www.dianping.com/lingshan',
        cityName: '灵山县',
        pinyin: 'lingshan'
    },
    {
        url: 'http://www.dianping.com/pubei',
        cityName: '浦北县',
        pinyin: 'pubei'
    },
    {
        url: 'http://www.dianping.com/hepu',
        cityName: '合浦县',
        pinyin: 'hepu'
    },
    {
        url: 'http://www.dianping.com/dongxing',
        cityName: '东兴市',
        pinyin: 'dongxing'
    },
    {
        url: 'http://www.dianping.com/shangsi',
        cityName: '上思县',
        pinyin: 'shangsi'
    },
    {
        url: 'http://www.dianping.com/pingxiangshi',
        cityName: '凭祥市',
        pinyin: 'pingxiangshi'
    },
    {
        url: 'http://www.dianping.com/fusui',
        cityName: '扶绥县',
        pinyin: 'fusui'
    },
    {
        url: 'http://www.dianping.com/daxin',
        cityName: '大新县',
        pinyin: 'daxin'
    },
    {
        url: 'http://www.dianping.com/tiandeng',
        cityName: '天等县',
        pinyin: 'tiandeng'
    },
    {
        url: 'http://www.dianping.com/ningming',
        cityName: '宁明县',
        pinyin: 'ningming'
    },
    {
        url: 'http://www.dianping.com/longzhou',
        cityName: '龙州县',
        pinyin: 'longzhou'
    },
    {
        url: 'http://www.dianping.com/tianyang',
        cityName: '田阳县',
        pinyin: 'tianyang'
    },
    {
        url: 'http://www.dianping.com/tiandong',
        cityName: '田东县',
        pinyin: 'tiandong'
    },
    {
        url: 'http://www.dianping.com/pingguo',
        cityName: '平果县',
        pinyin: 'pingguo'
    },
    {
        url: 'http://www.dianping.com/debao',
        cityName: '德保县',
        pinyin: 'debao'
    },
    {
        url: 'http://www.dianping.com/jingxi',
        cityName: '靖西县',
        pinyin: 'jingxi'
    },
    {
        url: 'http://www.dianping.com/napo',
        cityName: '那坡县',
        pinyin: 'napo'
    },
    {
        url: 'http://www.dianping.com/lingyun',
        cityName: '凌云县',
        pinyin: 'lingyun'
    },
    {
        url: 'http://www.dianping.com/leye',
        cityName: '乐业县',
        pinyin: 'leye'
    },
    {
        url: 'http://www.dianping.com/xilin',
        cityName: '西林县',
        pinyin: 'xilin'
    },
    {
        url: 'http://www.dianping.com/tianlin',
        cityName: '田林县',
        pinyin: 'tianlin'
    },
    {
        url: 'http://www.dianping.com/longlin',
        cityName: '隆林各族自治县',
        pinyin: 'longlin'
    },
    {
        url: 'http://www.dianping.com/yizhou',
        cityName: '宜州市',
        pinyin: 'yizhou'
    },
    {
        url: 'http://www.dianping.com/nandan',
        cityName: '南丹县',
        pinyin: 'nandan'
    },
    {
        url: 'http://www.dianping.com/tiane',
        cityName: '天峨县',
        pinyin: 'tiane'
    },
    {
        url: 'http://www.dianping.com/fengshan',
        cityName: '凤山县',
        pinyin: 'fengshan'
    },
    {
        url: 'http://www.dianping.com/donglan',
        cityName: '东兰县',
        pinyin: 'donglan'
    },
    {
        url: 'http://www.dianping.com/bama',
        cityName: '巴马瑶族自治县',
        pinyin: 'bama'
    },
    {
        url: 'http://www.dianping.com/duan',
        cityName: '都安瑶族自治县',
        pinyin: 'duan'
    },
    {
        url: 'http://www.dianping.com/dahua',
        cityName: '大化瑶族自治县',
        pinyin: 'dahua'
    },
    {
        url: 'http://www.dianping.com/luocheng',
        cityName: '罗城仫佬族自治县',
        pinyin: 'luocheng'
    },
    {
        url: 'http://www.dianping.com/huanjiang',
        cityName: '环江毛南族自治县',
        pinyin: 'huanjiang'
    },
    {
        url: 'http://www.dianping.com/heshanshi',
        cityName: '合山市',
        pinyin: 'heshanshi'
    },
    {
        url: 'http://www.dianping.com/xiangzhou',
        cityName: '象州县',
        pinyin: 'xiangzhou'
    },
    {
        url: 'http://www.dianping.com/wuxuan',
        cityName: '武宣县',
        pinyin: 'wuxuan'
    },
    {
        url: 'http://www.dianping.com/xincheng',
        cityName: '忻城县',
        pinyin: 'xincheng'
    },
    {
        url: 'http://www.dianping.com/jinxiu',
        cityName: '金秀瑶族自治县',
        pinyin: 'jinxiu'
    },
    {
        url: 'http://www.dianping.com/zhaoping',
        cityName: '昭平县',
        pinyin: 'zhaoping'
    },
    {
        url: 'http://www.dianping.com/zhongshanxian',
        cityName: '钟山县',
        pinyin: 'zhongshanxian'
    },
    {
        url: 'http://www.dianping.com/fuchuan',
        cityName: '富川瑶族自治县',
        pinyin: 'fuchuan'
    },
    {
        url: 'http://www.dianping.com/sanya',
        cityName: '三亚',
        pinyin: 'sanya'
    },
    {
        url: 'http://www.dianping.com/haikou',
        cityName: '海口',
        pinyin: 'haikou'
    },
    {
        url: 'http://www.dianping.com/boao',
        cityName: '博鳌',
        pinyin: 'boao'
    },
    {
        url: 'http://www.dianping.com/danzhou',
        cityName: '儋州',
        pinyin: 'danzhou'
    },
    {
        url: 'http://www.dianping.com/baisha',
        cityName: '白沙',
        pinyin: 'baisha'
    },
    {
        url: 'http://www.dianping.com/baoting',
        cityName: '保亭',
        pinyin: 'baoting'
    },
    {
        url: 'http://www.dianping.com/changjiang',
        cityName: '昌江',
        pinyin: 'changjiang'
    },
    {
        url: 'http://www.dianping.com/chengmai',
        cityName: '澄迈县',
        pinyin: 'chengmai'
    },
    {
        url: 'http://www.dianping.com/dingan',
        cityName: '定安县',
        pinyin: 'dingan'
    },
    {
        url: 'http://www.dianping.com/dongfang',
        cityName: '东方',
        pinyin: 'dongfang'
    },
    {
        url: 'http://www.dianping.com/ledong',
        cityName: '乐东',
        pinyin: 'ledong'
    },
    {
        url: 'http://www.dianping.com/lingao',
        cityName: '临高县',
        pinyin: 'lingao'
    },
    {
        url: 'http://www.dianping.com/lingshui',
        cityName: '陵水',
        pinyin: 'lingshui'
    },
    {
        url: 'http://www.dianping.com/qionghai',
        cityName: '琼海',
        pinyin: 'qionghai'
    },
    {
        url: 'http://www.dianping.com/qiongzhong',
        cityName: '琼中',
        pinyin: 'qiongzhong'
    },
    {
        url: 'http://www.dianping.com/tunchang',
        cityName: '屯昌县',
        pinyin: 'tunchang'
    },
    {
        url: 'http://www.dianping.com/wanning',
        cityName: '万宁',
        pinyin: 'wanning'
    },
    {
        url: 'http://www.dianping.com/wenchang',
        cityName: '文昌',
        pinyin: 'wenchang'
    },
    {
        url: 'http://www.dianping.com/wuzhishan',
        cityName: '五指山',
        pinyin: 'wuzhishan'
    },
    {
        url: 'http://www.dianping.com/sansha',
        cityName: '三沙',
        pinyin: 'sansha'
    }
];
exports.cities = cities;