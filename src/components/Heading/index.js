import styles from  './Heading.module.css'
import officialsite_background from '../../img/Heading/heading_officialsite.png'
import officialsite_text from '../../img/Heading/heading_textofficialsite.png'
import genshinimpact_logo from '../../img/Heading/genshinimpact_logo.png'
import titleOfVersion from '../../img/Heading/title_version.png'
import pcdownload_background from '../../img/Heading/downloadbtn.png'
import pcdownload_text from '../../img/Heading/downloadtextbtn.png'
import ortherdownload_text from '../../img/Heading/ortherdownloadtext.png'
import videoVersion from '../../img/Heading/video_versionytb.png'
import nextpage from '../../img/Heading/pagedown.png'
import clsx from 'clsx'
function Heading(){
    return <div className={clsx(styles.heading_header)}>
        <img className={clsx(styles.heading_officialsite)} src= {officialsite_background} alt = 'officialsite_background'/>
        <img className={clsx(styles.heading_officialsite)} src={officialsite_text} alt='officicalsite_text'/>
        <img className={clsx(styles.heading_logo)} src={genshinimpact_logo}  alt='genshinimpact_logo'/>
        <div className={clsx(styles.heading_main)}>
            <img className={clsx(styles.heading_title)} src={titleOfVersion} alt='title_version' />
            <img className={clsx(styles.heading_video)} src={videoVersion} alt='video-version-youtube'/>
            <img className={clsx(styles.heading_pcdownload)} src={pcdownload_background} alt='pcdownloadbackground'/>
            <img className={clsx(styles.heading_pcdownload)} src={pcdownload_text} alt='pcdownloadtext'/>
            <img className={clsx(styles.heading_ortherdownload)} src={pcdownload_background} alt='pcdownloadbackground'/>
            <img className={clsx(styles.heading_ortherdownload)} src={ortherdownload_text} alt='ortherdownloadText'/>
            <img className={clsx(styles.heading_pagedown)} src={nextpage} alt='nextPage'/>

        </div>
    </div>
}
export default Heading