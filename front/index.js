const axios = require('axios');
const qs = require('qs');

function localToServer(id, key, str) {
  return axios({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-=urlencoded;charset=UTF-8'
    },
    method: 'post',
    url: 'http://localhost:3000/local',
    data: qs.stringify({
      id: id,
      [key]: str
    })
  })
}

const data = '{"c":1549473758948,"e":253402300799000,"v":"[{\"id\":1,\"fileName\":\"2016_Book_PsychometricFrameworkForModeli\",\"cover\":\"http://192.168.1.102:5070/img/Education/2016_Book_PsychometricFrameworkForModeli.jpeg\",\"title\":\"Psychometric Framework for Modeling Parental Involvement and Reading Literacy\",\"author\":\"Annemiek Punter, Cees A. W. Glas and Martina R. M. Meelissen\",\"publisher\":\"Springer International Publishing, Cham\",\"bookId\":\"2016_Book_PsychometricFrameworkForModeli\",\"category\":4,\"categoryText\":\"Education\",\"language\":\"en\",\"rootFile\":\"OEBPS/content.opf\",\"selected\":false,\"cache\":false,\"haveRead\":0,\"type\":1},{\"type\":4,\"cache\":true,\"selected\":false,\"fileName\":\"2013_Book_ManagingRiskAndInformationSecu\",\"title\":\"2013_Book_ManagingRiskAndInformationSecu\",\"id\":2},{\"id\":3,\"fileName\":\"2016_Book_SecondaryAnalysisOfElectronicH\",\"cover\":\"http://192.168.1.102:5070/img/MedicineAndPublicHealth/2016_Book_SecondaryAnalysisOfElectronicH.jpeg\",\"title\":\"Secondary Analysis of Electronic Health Records\",\"author\":\"MIT Critical Data\",\"publisher\":\"Springer International Publishing, Cham\",\"bookId\":\"2016_Book_SecondaryAnalysisOfElectronicH\",\"category\":17,\"categoryText\":\"MedicineAndPublicHealth\",\"language\":\"en\",\"rootFile\":\"OEBPS/content.opf\",\"selected\":false,\"cache\":false,\"haveRead\":0,\"type\":1},{\"type\":4,\"cache\":true,\"selected\":false,\"fileName\":\"2017_Book_IntelligentHumanComputerIntera\",\"title\":\"2017_Book_IntelligentHumanComputerIntera\",\"id\":4},{\"type\":4,\"cache\":true,\"selected\":false,\"fileName\":\"2018_Book_TheHuaweiAndSnowdenQuestions\",\"title\":\"2018_Book_TheHuaweiAndSnowdenQuestions\",\"id\":5},{\"id\":6,\"itemList\":[{\"id\":1,\"fileName\":\"2018_Book_DiseasesOfTheAbdomenAndPelvis2\",\"cover\":\"http://192.168.1.102:5070/img/MedicineAndPublicHealth/978-3-319-75019-4_CoverFigure.jpg\",\"title\":\"Diseases of the Abdomen and Pelvis 2018–2021\",\"author\":\"Juerg Hodler\",\"publisher\":\"Springer International Publishing\",\"bookId\":\"2018_Book_DiseasesOfTheAbdomenAndPelvis2\",\"category\":17,\"categoryText\":\"MedicineAndPublicHealth\",\"language\":\"en\",\"rootFile\":\"OEBPS/package.opf\",\"selected\":true,\"cache\":false,\"haveRead\":0,\"type\":1},{\"id\":2,\"fileName\":\"2016_Book_AHistoryOfRadionuclideStudiesI\",\"cover\":\"http://192.168.1.102:5070/img/MedicineAndPublicHealth/978-3-319-28624-2_CoverFigure.jpg\",\"title\":\"A History of Radionuclide Studies in the UK\",\"author\":\"Ralph McCready\",\"publisher\":\"Springer International Publishing\",\"bookId\":\"2016_Book_AHistoryOfRadionuclideStudiesI\",\"category\":17,\"categoryText\":\"MedicineAndPublicHealth\",\"language\":\"en\",\"rootFile\":\"OEBPS/package.opf\",\"selected\":true,\"cache\":false,\"haveRead\":0,\"type\":1},{\"id\":3,\"fileName\":\"2016_Book_PublicHealthEthicsCasesSpannin\",\"cover\":\"http://192.168.1.102:5070/img/MedicineAndPublicHealth/2016_Book_PublicHealthEthicsCasesSpannin.jpeg\",\"title\":\"Public Health Ethics: Cases Spanning the Globe\",\"author\":\"Drue H. Barrett, Leonard W. Ortmann, Angus Dawson, Carla Saenz, Andreas Reis and Gail Bolan\",\"publisher\":\"Springer International Publishing, Cham\",\"bookId\":\"2016_Book_PublicHealthEthicsCasesSpannin\",\"category\":17,\"categoryText\":\"MedicineAndPublicHealth\",\"language\":\"en\",\"rootFile\":\"OEBPS/content.opf\",\"selected\":true,\"cache\":false,\"haveRead\":0,\"type\":1}],\"selected\":false,\"title\":\"test\",\"type\":2},{\"id\":7,\"fileName\":\"2018_Book_SecurityInComputerAndInformati\",\"cover\":\"http://192.168.1.102:5070/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg\",\"title\":\"Security in Computer and Information Sciences\",\"author\":\"Erol Gelenbe\",\"publisher\":\"Springer International Publishing\",\"bookId\":\"2018_Book_SecurityInComputerAndInformati\",\"category\":1,\"categoryText\":\"ComputerScience\",\"language\":\"en\",\"rootFile\":\"OEBPS/package.opf\",\"selected\":false,\"cache\":false,\"haveRead\":0,\"type\":1},{\"id\":8,\"fileName\":\"2018_Book_ComplicationsAndQuandariesInTh\",\"cover\":\"http://192.168.1.102:5070/img/Laws/2018_Book_ComplicationsAndQuandariesInTh.jpeg\",\"title\":\"Complications and Quandaries in the ICT Sector\",\"author\":\"Ashish Bharadwaj, Vishwas H. Devaiah and Indranath Gupta\",\"publisher\":\"Springer Singapore, Singapore\",\"bookId\":\"2018_Book_ComplicationsAndQuandariesInTh\",\"category\":9,\"categoryText\":\"Laws\",\"language\":\"en\",\"rootFile\":\"OEBPS/content.opf\",\"selected\":false,\"cache\":false,\"haveRead\":0,\"type\":1},{\"id\":-1,\"type\":3}]"}';

localToServer(250, 'shelf', data)
  .then(res => {
    if (res && res.status === 200) {
      console.log(res.data)
    } else {
      alert('客户端失败')
    }
  })
