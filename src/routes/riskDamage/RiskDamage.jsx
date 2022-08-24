import React from 'react'
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'

import './riskDamage.styles.css'

import riskHero from '../../assets/riskDamage-img/riskHero.png'
import riskSupport from '../../assets/riskDamage-img/riskDamageExpert.png'
import Connect from '../../containers/connect/Connect'

const RiskDamage = () => {
    const keyPoints = [
                        'Floors', 'Support beams', 'Posts', 'Wall studs', 
                        'Floor joists', 'Ceiling joists', 'Roof supports', 
                        'Drywall or sheetrock', 'Attics', 'Foundations'
                    ];
    
    const damageTypes = [
        'buckling ceilings or walls', 'the appearance of water damage', 'maze-like designs in wooden structures', 
        'mud tunnels on home foundations', 'swarms of termites themselves'
    ];

  return (
    <div className='ori__risk'>
        <div className='ori__risk-hero'>
            <div className='ori__risk-hero_content'>
                <h1>Termite Risk & Damage</h1>
                <p>
                    Depending on the location and extent of the damage, 
                    and the building materials required to fix it, repairs 
                    can be complicated and costly. So catching the infestation early is important.
                </p>
                <div className='ori__risk-hero_content-socials'>
                    <a href='https://www.facebook.com/oripestservice' target='_blank' rel="noreferrer"><FaFacebook size={24} /></a>
                    <a href='https://wa.me/message/RE3RCGX3NMFDP1' target='_blank' rel="noreferrer"><FaWhatsapp size={24} /></a>
                    <a href='https://youtube.com/channel/UCDck-_3SmiS36pUmOSV22Gw' target='_blank' rel="noreferrer"><FaYoutube size={24} /></a>
                    <a href='https://www.linkedin.com/in/ori-pest-cop-372175218' target='_blank' rel="noreferrer"><FaLinkedin size={24} /></a>
                    <a href="https://www.instagram.com/oripestcop/" target='_blank' rel="noreferrer"><FaInstagram size={24} /></a>
                </div>
            </div>
            <div className='ori__risk-hero_img'>
                <img src={riskHero} alt="risk-hero" />
            </div>
        </div>
        <div className='ori__risk-threats'>
            <div className='ori__risk-threats_paras'>
                <p>HIDDEN THREATS</p>
                <h1>Structural Damage</h1>
                <p>
                    Termites cause lakhs to crores of rupees in property damage each year. 
                    The majority of this damage is not covered by ordinary homeowner insurance 
                    coverage. Termite infestations frequently go undiscovered until apparent 
                    symptoms of devastation appear.
                </p>
            </div>
            <div className='ori__risk-threats_list'>
                <h2>Key Points to Protect</h2>
                <p>
                    Termites can harm a variety of structural elements of a home, such as the following:
                </p>
                <ul>
                    {
                        keyPoints.map(keyPoint => (
                            <li>{keyPoint}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className='ori__risk-signs'>
            <h1>Common signs of termite infection</h1>
                <p>
                    Sagging flooring and ceilings, dusty trails, clusters of wings that resemble scales, 
                    and regions that appear to have minor water damage are typical indications of termite 
                    infestation. Contrary to common opinion, termites are not just attracted to old wooden 
                    structures; they have been discovered to settle in newly constructed buildings not long 
                    after they are finished.
                </p>
                <p>
                    Although termite damage is a prevalent cause of structural failure, it may be readily avoided 
                    by performing routine inspections and treatments. Reputable termite inspectors will offer two-part 
                    reports that describe both the current damage and the possible sources and sites of future harm. 
                    Areas with a high likelihood of infestation include damp areas, woodpiles and loose wooden paneling. 
                    By addressing these risks, homeowners may be able to avoid termite infestation and save a lot of money 
                    on structural repairs.
                </p>
                <p>
                    During an inspection, if your termite inspector notices just little termite damage, find out how 
                    much damage was done. There might be additional damage hidden beneath the surface, even if you could 
                    only notice a tiny amount of damage. If a hardwood floor is destroyed, for instance, termites are 
                    probably present in the subfloor and floor supports underneath.
                </p>
            </div>
            <div className='ori__risk-support'>
                <div className='ori__risk-support_img'>
                    <img src={riskSupport} alt="risk-support" />
                </div>
                <div className='ori__risk-content'>
                    <p>EXPERT SUPPORT</p>
                    <h1>Treating the Damage</h1>
                    <p>
                        Discovering damage at your home is an unsettling experience, but a trusted pest control professional can help.
                    </p>
                </div>
            </div>
            <div className='ori__risk-damage'>
                <div className='ori__risk-damage_heading'>
                    <p>TERMITE DAMAGE</p>
                    <h1>What to Know About Damage Repair</h1>
                </div>
                <div className='ori__risk-damage_content'>
                    <div className='ori__risk-damage_content-list'>
                        <h2>Types of Damage</h2>
                        <p>Signs of termite damage include the following:</p>
                        <ul>
                            {
                                damageTypes.map(damageType => (
                                    <li>
                                        {damageType}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='ori__risk-damage_content-paras'>
                        <p>
                            Sadly, these symptoms frequently point to an active colony and a termite infestation 
                            that has lasted for some time. The structural integrity of your house may be significantly 
                            impacted by advanced termite damage, which might even result in the collapse of ceilings or 
                            floors.
                        </p>
                        <p>
                            Your family's experience at home may still be harmed by damaged carpets, walls, furniture, or 
                            flooring even if there is no structural damage to your house. Whether your termite infestation 
                            has caused structural or cosmetic damage, you should act quickly before things get worse.
                        </p>
                    </div>
                </div>
                <div className='ori__risk-fix'>
                    <h1>Can Termite Damage be Fixed?</h1>
                    <p>
                        To guarantee that your house and property are shielded from damaging termite infestations, Ori Pest Cop 
                        provides both pre-construction and post-construction anti-termite treatments.
                    </p>
                    <p>
                        Post-construction termite treatment: For already-existing residences and commercial buildings, 
                        our specialist post-construction anti-termite treatment serves as a defence against damages 
                        brought on by subterranean termites. In order to minimise the necessity for exploratory drilling 
                        at your property, Ori Pest Cop conducts a professional examination utilising its proprietary 
                        TermatracTM, a cutting-edge termite detection technique that employs RADAR sensors for detection.
                    </p>
                    <p>
                        Only government-approved termite treatment chemicals are used at Ori Pest Cop. As a result, 
                        both during and after termite treatment, the atmosphere is safe. For isolated structures or 
                        buildings, the treatment is backed by a five-year warranty, and Ori Pest Cop will treat the 
                        area again if an infestation returns over the duration of the contract. After the treatment 
                        is over, we also offer a simple clean-up.
                    </p>
                </div>
            </div>
            <div className='ori__risk-tackle'>
                <div className='ori__risk-tackle_heading'>
                    <p>TACKLING THE DAMAGE</p>
                    <h1>How to Repair Termite Damage</h1>
                </div>
                <div className='ori__risk-tackle_content'>
                    <h2>Two Routes to Consider</h2>
                    <p>Repairing termite damage to wood can be done in two ways:</p>
                    <ul>
                        <li>Replace all of the wood in the damaged areas, or</li>
                        <li>Next to any damaged wood, add a support made of wood.</li>
                    </ul>
                    <p>
                        In most circumstances, adding a wood support to damaged wood will make the restoration easier and 
                        less expensive. Many structural and non-structural repairs may be made using this kind of repair. 
                        The most challenging repairs are swapping out structural supports. The integrity of the house must 
                        be maintained while repairs are being made, thus suitable interim support must be offered.
                    </p>
                    <p>Before fixing termite damage, it may be a good idea to get quotes from a few nearby professionals.</p>
                    <h2>Treat for Termites Before Making Repairs</h2>
                    <p>
                        Homeowners should contact a nearby termite specialist before seeking professional repair for termite damage. 
                        Prior to a registered pest control specialist certifying that there are no longer any termites present 
                        and that the possibility of a subsequent infestation has vanished, repairs should not be done.
                    </p>
                    <p>
                        The termite inspector will be able to provide preventative measures as well as services to deal with active 
                        infestations. Additionally, he or she may make sure that any termite damage has been recorded so you are aware 
                        of exactly what has to be corrected. By doing these actions, future expensive repairs will be avoided. Existing 
                        damage should be rectified after making sure your house is clear of termites and potential future infestations.
                    </p>
                    <h2>Prevent Costly Termite Damage Repairs</h2>
                    <p>
                        Annual termite inspections and treatments can avoid structural failure or make it considerably less likely 
                        to happen. A two-part report from Ori Pest Cop describes the harm that has already occurred while also pointing 
                        out potential termite issue spots. Woodpiles, under-plant detritus, dead or dying shrubs or trees on the land, 
                        crawl spaces, siding, external and interior wall gaps, decks, loose panelling, and regions with elevated moisture 
                        are a few locations that should be inspected. A yearly termite inspection regimen will aid in avoiding infestation 
                        and high repair expenses.
                    </p>
                    <p>
                        Call an Ori Pest Cop termite professional for a free assessment if you suspect that termite damage has been discovered 
                        in your house or if you simply want some piece of mind.
                    </p>
                </div>
            </div>
            <div className='ori__risk-contact'>
                <Connect />
            </div>
    </div>
  )
}

export default RiskDamage