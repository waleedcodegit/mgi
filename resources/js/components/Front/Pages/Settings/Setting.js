import React, { Component } from 'react';

class Setting extends Component {
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="subscption-head">
                    <div className="container-plan">
                    <div className="row">
                        <div className="customer-info">
                        <div className="subscption-sec2">
                            <div className="content">
                            <div className="container">
                                <div className="row row-offcanvas row-offcanvas-left">
                                <div className="col-md-12 pr-detail">
                                    <h4>Account Settings
                                    </h4>
                                </div>
                                <div className="col-md-12 tab-line">
                                    <ul className="tab-filters2" role="tablist">
                                    <li className="active"><a href="#account" role="tab" data-toggle="tab">Account</a></li>
                                    <li><a href="#connections" role="tab" data-toggle="tab">Connections</a></li>
                                    <li><a href="#privacy" role="tab" data-toggle="tab">Privacy</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="account" role="tabpanel">
                                    <div className="col-md-12 col-sm-12">
                                        <section className="css-g0mr221 css-19m9brh">
                                        <div className="css-g0mr222 css-gx84ul">
                                            <div className="css-g0mr224 css-1ex6nkr">
                                            <p className="css-g0mr223 css-wjd590">Email</p>
                                            <p className="css-g0mr226 css-1o2xxxc">shehrozb946@gmail.com</p>
                                            </div><a className="css-1khann70 css-1khann72 css-1jau80d">
                                            Change email</a></div>
                                        <div className="css-g0mr222 css-gx84ul"><div className="css-g0mr224 css-1ex6nkr">
                                            <p className="css-g0mr223 css-wjd590">Password</p>
                                            <p className="css-g0mr226 css-1o2xxxc">••••••••</p></div>
                                            <a className="css-1khann70 css-1khann72 css-1jau80d">Change password</a>
                                        </div></section>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <section className="css-g0mr221 css-19m9brh">
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <p className="css-g0mr223 css-wjd590">Username</p>
                                            <input name="updatedUserName" className="css-1l4244b0 css-13owws" defaultValue="shehrozb946" />
                                        </div><div className="css-g0mr224 css-1ex6nkr">
                                            <p className="css-g0mr223 css-wjd590">Timezone</p>
                                            <select name="timezone" className="css-11531hf0 css-qchxnk">
                                            <option value>Select your timezone</option>
                                            <option value="Pacific/Midway">(UTC-12:00) Midway Island, American Samoa</option>
                                            <option value="Pacific/Honolulu">(UTC-10:00) Hawaii</option>
                                            <option value="America/Anchorage">(UTC-9:00) Alaska</option>
                                            <option value="America/Los_Angeles">(UTC-08:00) Pacific Time (US and Canada)</option>
                                            <option value="America/Phoenix">(UTC-07:00) Arizona</option>
                                            <option value="America/Chihuahua">(UTC-07:00) Chihuahua, La Paz, Mazatlan</option>
                                            <option value="America/Denver">(UTC-07:00) Mountain Time (US and Canada)</option>
                                            <option value="America/Belize">(UTC-06:00) Central America</option><option value="America/Chicago">(UTC-06:00) Central Time (US and Canada)</option><option value="America/Mexico_City">(UTC-06:00) Guadalajara, Mexico City, Monterrey</option><option value="America/Regina">(UTC-06:00) Saskatchewan</option><option value="America/Bogota">(UTC-05:00) Bogota, Lima, Quito</option><option value="America/Jamaica">(UTC-05:00) Kingston, George Town</option><option value="America/New_York">(UTC-05:00) Eastern Time (US and Canada)</option><option value="America/Indiana/Indianapolis">(UTC-05:00) Indiana (East)</option><option value="America/Caracas">(UTC-04:30) Caracas</option><option value="America/Asuncion">(UTC-04:00) Asuncion</option><option value="America/Halifax">(UTC-04:00) Atlantic Time (Canada)</option><option value="America/Cuiaba">(UTC-04:00) Cuiaba</option><option value="America/Manaus">(UTC-04:00) Georgetown, La Paz, Manaus, San Juan</option><option value="America/St_Johns">(UTC-03:30) Newfoundland and Labrador</option><option value="America/Sao_Paulo">(UTC-03:00) Brasilia</option><option value="America/Buenos_Aires">(UTC-03:00) Buenos Aires</option><option value="America/Cayenne">(UTC-03:00) Cayenne, Fortaleza</option><option value="America/Godthab">(UTC-03:00) Greenland</option><option value="America/Montevideo">(UTC-03:00) Montevideo</option><option value="America/Bahia">(UTC-03:00) Salvador</option><option value="America/Santiago">(UTC-04:00) Santiago</option><option value="America/Noronha">(UTC-02:00) Mid-Atlantic</option><option value="Atlantic/Azores">(UTC-01:00) Azores</option><option value="Atlantic/Cape_Verde">(UTC-01:00) Cape Verde Islands</option><option value="Europe/London">(UTC+00:00) Dublin, Edinburgh, Lisbon, London</option><option value="Africa/Casablanca">(UTC+00:00) Casablanca</option><option value="Africa/Monrovia">(UTC+00:00) Monrovia, Reykjavik</option><option value="Europe/Amsterdam">(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option><option value="Europe/Belgrade">(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option><option value="Europe/Brussels">(UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option><option value="Europe/Warsaw">(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option><option value="Africa/Algiers">(UTC+01:00) West Central Africa</option><option value="Africa/Windhoek">(UTC+02:00) Windhoek</option><option value="Europe/Athens">(UTC+02:00) Athens, Bucharest</option><option value="Asia/Beirut">(UTC+02:00) Beirut</option><option value="Africa/Cairo">(UTC+02:00) Cairo</option><option value="Asia/Damascus">(UTC+02:00) Damascus</option><option value="EET">(UTC+02:00) Eastern Europe</option><option value="Africa/Harare">(UTC+02:00) Harare, Pretoria</option><option value="Europe/Helsinki">(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius</option><option value="Asia/Istanbul">(UTC+02:00) Istanbul</option><option value="Asia/Jerusalem">(UTC+02:00) Jerusalem</option><option value="Europe/Kaliningrad">(UTC+02:00) Kaliningrad</option><option value="Africa/Tripoli">(UTC+02:00) Tripoli</option><option value="Asia/Amman">(UTC+02:00) Amman</option><option value="Asia/Baghdad">(UTC+03:00) Baghdad</option><option value="Asia/Kuwait">(UTC+03:00) Kuwait, Riyadh</option><option value="Europe/Minsk">(UTC+03:00) Minsk</option><option value="Europe/Moscow">(UTC+03:00) Moscow, St. Petersburg, Volgograd</option><option value="Africa/Nairobi">(UTC+03:00) Nairobi</option><option value="Asia/Tehran">(UTC+03:30) Tehran</option><option value="Asia/Muscat">(UTC+04:00) Abu Dhabi, Muscat</option><option value="Asia/Baku">(UTC+04:00) Baku</option><option value="Europe/Samara">(UTC+04:00) Izhevsk, Samara</option><option value="Indian/Mauritius">(UTC+04:00) Port Louis</option><option value="Asia/Tbilisi">(UTC+04:00) Tbilisi</option><option value="Asia/Yerevan">(UTC+04:00) Yerevan</option><option value="Asia/Kabul">(UTC+04:30) Kabul</option><option value="Asia/Tashkent">(UTC+05:00) Tashkent, Ashgabat</option><option value="Asia/Karachi">(UTC+05:00) Islamabad, Karachi</option><option value="Asia/Kolkata">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</option><option value="Asia/Colombo">(UTC+05:30) Sri Jayawardenepura</option><option value="Asia/Katmandu">(UTC+05:45) Kathmandu</option><option value="Asia/Almaty">(UTC+06:00) Astana</option><option value="Asia/Dhaka">(UTC+06:00) Dhaka</option><option value="Asia/Novosibirsk">(UTC+07:00) Novosibirsk</option><option value="Asia/Rangoon">(UTC+06:30) Yangon (Rangoon)</option><option value="Asia/Bangkok">(UTC+07:00) Bangkok, Hanoi, Jakarta</option><option value="Asia/Krasnoyarsk">(UTC+07:00) Krasnoyarsk</option><option value="Asia/Chongqing">(UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi</option><option value="Asia/Irkutsk">(UTC+08:00) Irkutsk</option><option value="Asia/Kuala_Lumpur">(UTC+08:00) Kuala Lumpur, Singapore</option><option value="Australia/Perth">(UTC+08:00) Perth</option><option value="Asia/Taipei">(UTC+08:00) Taipei</option><option value="Asia/Ulaanbaatar">(UTC+08:00) Ulaanbaatar</option><option value="Asia/Tokyo">(UTC+09:00) Osaka, Sapporo, Tokyo</option><option value="Asia/Seoul">(UTC+09:00) Seoul</option><option value="Asia/Yakutsk">(UTC+09:00) Yakutsk</option><option value="Australia/Adelaide">(UTC+10:30) Adelaide</option><option value="Australia/Darwin">(UTC+09:30) Darwin</option><option value="Australia/Brisbane">(UTC+10:00) Brisbane</option><option value="Australia/Canberra">(UTC+11:00) Canberra, Melbourne, Sydney</option><option value="Pacific/Guam">(UTC+10:00) Guam, Port Moresby</option><option value="Australia/Hobart">(UTC+11:00) Hobart</option><option value="Asia/Magadan">(UTC+10:00) Magadan</option><option value="Asia/Vladivostok">(UTC+10:00) Vladivostok, Magadan</option><option value="Asia/Srednekolymsk">(UTC+11:00) Chokirdakh</option><option value="Pacific/Guadalcanal">(UTC+11:00) Solomon Islands, New Caledonia</option><option value="Asia/Anadyr">(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky</option><option value="Pacific/Auckland">(UTC+13:00) Auckland, Wellington</option><option value="Pacific/Fiji">(UTC+12:00) Fiji Islands, Kamchatka, Marshall Islands</option><option value="Pacific/Tongatapu">(UTC+13:00) Nuku'alofa</option>
                                            <option value="Pacific/Apia">(UTC+14:00) Samoa</option>
                                            </select>
                                            <p>Current time: <span className="css-g0mr228 css-1re5wml">11:54 PM PDT</span></p>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <p className="css-g0mr223 css-wjd590">Mailing Preferences</p><label>
                                            <input name="emailConsented" type="checkbox" />
                                            <span className="css-g0mr227 css-ay9r4x">I want to receive news about cool tournaments and promotional emails.</span></label>
                                        </div>
                                        <a className="css-1khann70 css-1khann71 css-g0mr225 css-zj48px">Save Changes</a>
                                        </section>
                                    </div>
                                    </div>
                                    <div className="tab-pane" id="connections" role="tabpanel">
                                    <div className="col-md-12 col-sm-12 matches-over">
                                        <div className="css-17os0hc0 css-1gk9xr">
                                        <p className="css-17os0hc1 css-5sj7t6">Connecting your game and social media accounts to your Battlefy account is easy. Doing so will allow you to register for tournaments in games you love.</p>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/go-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Google</span>
                                                <span className="css-mly58i5 css-w5ncqx">Shehroz Butt</span></div>
                                            <div className="css-mly58i8 css-1q3t6wo"><a className="css-xhcgag0 css-xhcgag2 css-1vxf80s">Disconnect Google</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-17os0hc3 css-11yvxfc" />
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/facebook-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Facebook</span>
                                                <span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div><div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-8l95nn">Connect Facebook</a></div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/twitter-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Twitter</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-y884u">Connect Twitter</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/apple-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku"><span className="css-mly58i4 css-s569wz">Apple</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-1jdpnbn">Connect Apple</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Battle.net</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-e3qwiw">Connect Battle.net</a>
                                            </div>
                                            </div></div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/vk-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">VK</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-9t5cfw">Connect VK</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/discord-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Discord</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-gjgw3o">Connect Discord</a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane" id="privacy" role="tabpanel">
                                    <div className="col-md-12 col-sm-12 matches-over">
                                        <div className="css-1ndc6090 css-1gk9xr">
                                        <p className="css-1ndc6092 css-5sj7t6">Battlefy follows data privacy best practices, like data minimization, meaning we only collect personal data that's necessary to provide you with the best esports experience.</p>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Access your personal data</h4>
                                            <p>You can request a copy of your personal data at any time. To make this request, please send an email to <a href="mailto:support@battlefy.com" target="_top" className="css-lixh870 css-1jsji4n">support@battlefy.com</a>. Please note it can take up to
                                            30 days to process your request.</p>
                                            <p>Secret: 2ca10aa461e998ae32f46806</p>
                                        </section>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Keep your personal data up-to-date</h4>
                                            <p>If there are any errors with your personal data, you can request to change it. To make this request, please send an email to <a href="mailto:support@battlefy.com" target="_top" className="css-lixh870 css-1jsji4n">support@battlefy.com</a>. Please note
                                            it can take up to 30 days to process your request.</p>
                                        </section>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Remove your personal data</h4>
                                            <p>To remove your personal data, you can deactivate your account. After 14 days, your account and all personal data will be removed from our systems and no recovery is possible.</p>
                                            <p>If you change your mind during the 14 day grace period, please email <a href="mailto:support@battlefy.com" target="_top" className="css-lixh870 css-1jsji4n">support@battlefy.com</a> to reactivate your account.</p><a className="css-1khann70 css-1ndc6093 css-kzimlr">Deactivate Account</a></section>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Do not sell my personal information</h4>
                                            <p>Battlefy primarily collects personal information for the purposes of providing the best esports experiences. As we are a platform that facilitates user generated content, this means any user can be an organizer of a competition and ask for information
                                            to ensure a fair and quality competition. If personal information will be disclosed to third parties for other reasons, it will be opt-in and mentioned in the relevant competition pages.</p>
                                            <p>If you wish to remove your personal data, please follow the instructions in section “Remove your personal data” above.</p>
                                        </section>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Setting;
