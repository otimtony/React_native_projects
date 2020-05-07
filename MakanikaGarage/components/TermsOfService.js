import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	ScrollView
} from 'react-native';

class TermsOfService extends Component {
	render(){
		return(
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.view}>
						<View style={{flexDirection: 'row'}}>
							<Image 
					            style={styles.image}
					            source={require('../assets/TermsOfService.png')} />
							<Text style={styles.termsOfService}>Terms Of Service</Text>
						</View>
						<View>
							<Text style={{ marginTop: 10, fontSize: 13, fontWeight: "bold" }}>1 - ACCEPTANCE</Text>
							<Text style={{ marginTop: 5 }}>
								By downloading, browsing, accessing or using this Makanika Dot Com web and mobile application (“Application”), you agree to be bound by these Terms and Conditions of Use. We reserve the right to amend these terms and conditions at any time. If you disagree with any of these Terms and Conditions of Use, you must immediately discontinue your access to the Application and your use of the services offered on the Application.
		Upon downloading the Application, users agree to submit their names and telephone to create their unique account that will be used to access the services offered through our Application.
							</Text>
							<Text style={{ marginTop: 5 }}>
								You are solely responsible for maintaining the confidentiality of any credentials, including login codes provided at account creation. You may only access your Account with the Credentials provided and you will be fully responsible and liable for all activities that occur through the use of your Credentials. You agree to notify Makanika Dot Com immediately if you discover or suspect any unauthorized use of your Credentials, or any other breach of security with respect to your account on the Service. Makanika Dot Com will not be liable for any losses, damages or claims arising from unauthorized use of your Credentials.
		All information collected by Makanika Dot Com during your use of our services will be used in accordance with our Privacy Policy.
							</Text>
						</View>
						<View>
							<Text style={{ marginTop: 10, fontSize: 13, fontWeight: "bold" }}>2 - THE SERVICES</Text>
							<Text style={{ marginTop: 5 }}>
								2.1 The Services comprise web and mobile applications enable users to arrange, schedule, use vehicle repair and maintenance services and/or to purchase vehicle related goods, including fuel, accessories as well as services like vehicle insurance. YOU ACKNOWLEDGE THAT YOUR ABILITY TO OBTAIN VEHICLE REPAIR AND MAINTENANCE SERVICES DOES NOT ESTABLISH MAKANIKA DOT COM AS A PROVIDER OF SUCH SERVICES OR A VEHICLE COMPANY.
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.2 DISCLAIMER. We do not repair and/or maintain cars but we rather provide a link between vehicle owners and providers of such services through our Application. Therefore every user of the Application agrees with the respective provider of the service sought on rates and other specific details of their transaction except where specified in the Application.
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.3 PAYMENTS. Users are obliged to pay for their respective services used either through the cash-less payment service on the Application where they purchase credit and/or through cash or other means to the respective provider of a service offered. 
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.4 REQUESTING MECHANICS. We have built a solid network of garages, accessed through our application. We train and urge garages to offer a fast, reliable and secure service to Application users whenever needed, making them a better alternative to others in the market. We are not liable if mechanics default on these values although we try from time to time to enforce them through ratings and responding to customer feedback. The partner garages are only available in the areas where one can access them on the Application. Vehicle owners are obliged to pay for any spare parts and fluids like oils and labour that are necessary for the repair. We do not determine the rates of spare parts and labour where applicable, unless otherwise communicated through our platforms.
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.5 SHOP. We provide an online accessories shop where users can order car accessories. Goods are offered on the shop by third parties who are known to us. Goods are sold as they are at the rates displayed on the shop, unless otherwise discounted. Where rates are not displayed, users should agree with the assigned provider. The user is at liberty to verify the quality of the item, accept and pay for it. While we try to regulate the relationship between providers of the goods and services including arbitrating, any conflicts between providers and users, we do not promise to enter into any additional obligations like reimbursing any money that’s lost through transactions, complementing the quality of products etc. unless otherwise arranged through a separate agreement between us, the user and/or the provider.
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.6 CASH-LESS/CREDIT SERVICE. The Application provides users with the option of moving money from their mobile money accounts to the mobile application. Using this service is dependent on the availability of mobile money transfer services in the country. We have, through a third-party, integrated this service from telecom companies. The telecom companies charge a fee for moving money from the customers’ mobile accounts to the credit account in the Application and we are not in charge of these fees and therefore not responsible for any surges in pricing and availability of the service. Spending credit through this payment option to a service provider is solely dependent on the interest of the such providers as petrol stations, insurance agents etc. therefore users shall be responsible for locating providers that have accepted this option even as we continue to expand the coverage.
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.7 INSURANCE. We are brokering relationships with vehicle insurance agents and companies to enable the users of the Application to order insurance services as well as introduce a car repair insurance scheme. This service is only available with vehicle insurance providers who are in some form of partnership with us. We collect data from users who are interested in purchasing vehicle insurance stickers (for third-party), comprehensive and other vehicle insurance services. We are not liable for any pricing and the quality of service provided by the insurance providers. Also, rates of insurance are often affected by government policies and regulations including taxation, we therefore do not guarantee the availability, rates etc. of insurance services procured through the Application. 
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.8 SCHEDULE SERVICE. Application users have a provision for sending us details of their vehicles and specific time service providers on our network can pick up the vehicles for servicing. This is a convenient way for users to get their regular vehicle servicing. Rates for servicing are determined after the assessment of the vehicle and are communicated to the user. Vehicle owners are obliged to pay for any spare parts and fluids like oils, and labour that are necessary for the service. 
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.9 CORPORATE PACKAGE. Corporations may sign up for a dedicated service under which we may offer special benefits including the following; Up to two free breakdown (towing) services per month per fleet; Up to two free checkups per fleet; Monthly service reminders; Access to all our partner garages; Car stickers for premium client; Mobile app and website at the same time; Pre-paid services; Servicing at a corporation’s location for their entire fleet; Manage garage service for them hence relieving their staff; Environment Education; Spare part dealers and dedicated relations or client manager.
The benefit under this clause are for users who sign up as organizations and individuals with large fleets. Additional agreement will be reached by us and such users, including guidance on special fees payable by such users to us for the privileges listed above. We may withhold such benefits without prior notice to such users without notice.
							</Text>
							<Text style={{ marginTop: 5 }}>
								2.10 PAYMENT COLLECTION. We may collect payments for and on behalf of providers of services offered on the Application. You are obliged to abide by our guidance on the payment processes. We are under no obligation to consult you of any changes in payment arrangements, although we will attempt to ensure all processes are as convenient as possible.
							</Text>
						</View>
						<View>
							<Text style={{ marginTop: 10, fontSize: 13, fontWeight: "bold" }}>3 - GENERAL TERMS</Text>
							<Text style={{ marginTop: 5 }}>
								3.1 We do not warrant that your use of the Services or the Application will be uninterrupted and we do not warrant that any information (or messages) transmitted via the Services or the Mobile Application will be transmitted accurately, reliably, in a timely manner or at all. Notwithstanding that we will try to allow uninterrupted access to the Services and the Mobile Application, access to the Services and the Application may be suspended, restricted or terminated at any time.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.2 We reserve the right to change, modify, substitute, suspend or remove any information or Services on the Mobile Application from time to time, without any notice. Your access to the Mobile Application and/or the Services may also occasionally be restricted to allow for repairs, maintenance or the introduction of new facilities or services. We will attempt to restore such access as soon as we reasonably can. For the avoidance of doubt, we reserve the right to withdraw any information or Services from the Application at any time.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.3 The Application, the Services, the information on the Application and use of all related facilities are provided on an "as is, as available" basis without any warranties whether express or implied.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.4 To the fullest extent permitted by applicable law, we disclaim all representations and warranties relating to the Application and its contents, including in relation to any inaccuracies or omissions in the Application, warranties of merchantability, quality, fitness for a particular purpose, accuracy, availability, non-infringement or implied warranties from course of dealing or usage of trade.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.5 All editorial content, information, photographs, illustrations, artwork and other graphic materials, and names, logos and trade marks on the Application are protected by copyright laws and/or other laws and/or international treaties, and belong to us and/or our suppliers, as the case may be. These works, logos, graphics, sounds or images may not be copied, reproduced, retransmitted, distributed, disseminated, sold, published, broadcasted or circulated whether in whole or in part, unless expressly permitted by us and/or our suppliers, as the case may be.
We reserve the right to amend these Terms of Use from time to time without notice. The revised Terms of Use will be posted on the Application and shall take effect from the date of such posting. You are advised to review these terms periodically as they are binding upon you.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.6 You agree that Makanika Dot Com may contact you by telephone or text messages (including by an automatic telephone dialing system) at any of the phone numbers provided by you or on your behalf in connection with your Makanika Dot Com account, including for marketing purposes. We may also channel notifications to your device on which the Application is installed with no charges on us and prior notice to you. You understand that you are not required to provide this consent as a condition of purchasing any property, goods or services. You also understand that you may opt out of receiving text messages from us at any time by calling or messaging us on +256757400200, emailing info@makanikadt.com, or any of our other known official social media platforms.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.7 THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." MAKANIKA DOT COM DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN ADDITION, MAKANIKA DOT COM MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY, OR AVAILABILITY OF THE SERVICES OR ANY SERVICES OR GOODS REQUESTED THROUGH THE USE OF THE SERVICES, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. MAKANIKA DOT COM DOES NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF THIRD PARTY PROVIDERS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, AND ANY SERVICE OR GOOD REQUESTED IN CONNECTION THEREWITH, REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.8 MAKANIKA DOT COM SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE SERVICES, REGARDLESS OF THE NEGLIGENCE (EITHER ACTIVE, AFFIRMATIVE, SOLE, OR CONCURRENT) OF MAKANIKA DOT COM, EVEN IF MAKANIKA DOT COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
MAKANIKA DOT COM SHALL NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR LOSSES ARISING OUT OF: (i) YOUR USE OF OR RELIANCE ON THE SERVICES OR YOUR INABILITY TO ACCESS OR USE THE SERVICES; OR (ii) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY THIRD PARTY PROVIDER, EVEN IF MAKANIKA DOT COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. MAKANIKA DOT COM SHALL NOT BE LIABLE FOR DELAY OR FAILURE IN PERFORMANCE RESULTING FROM CAUSES BEYOND MAKANIKA DOT COM'S REASONABLE CONTROL. YOU ACKNOWLEDGE THAT THIRD PARTY PROVIDERS PROVIDING VEHICLE REPAIR AND MAINTENANCE SERVICES REQUESTED THROUGH OUR APPLICATION MAY NOT BE PROFESSIONALLY LICENSED OR PERMITTED.
THE SERVICES MAY BE USED BY YOU TO REQUEST AND SCHEDULE VEHICLE REPAIR AND MAINTENANCE SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU AGREE THAT MAKANIKA DOT COM HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO VEHICLE REPAIR AND MAINTENANCE SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN THESE TERMS.
THE LIMITATIONS AND DISCLAIMER IN THIS SECTION DO NOT PURPORT TO LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW. 
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.9 You agree to indemnify and hold Makanika Dot Com and its affiliates and their officers, directors, employees, and agents harmless from any and all claims, demands, losses, liabilities, and expenses (including attorneys' fees), arising out of or in connection with: (i) your use of the Services or services or goods obtained through your use of the Services; (ii) your breach or violation of any of these Terms; (iii) Makanika Dot Com's use of your User Content; or (iv) your violation of the rights of any third party, including Third Party Providers.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.10 These Terms are governed by and construed in accordance with the laws of the Republic of Uganda. You agree to comply with all applicable national and international laws.
							</Text>
							<Text style={{ marginTop: 5 }}>
								3.11 For any special communication with us, including filing of complaints, our designated channels are: +256757400200 and info@makanikadt.com. We also provide a feedback tab found within the Application. We may change these channels without prior communication to you.
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		flex: 1
	},
	view: {
		marginLeft: 20,
		marginBottom: 20
	},
	image: {
		width: 40,
		height: 40,
		marginTop: 10,
	},
	termsOfService: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		marginTop: 20,
		color: "#FF0000"
	}
})
export default TermsOfService;