import SadImage from "../../public/sad.png";
import Image from "next/image";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);

const SelfImprovement = () => {
	const mainContainer = useRef();
	const headContainer = useRef();
	const subContainer = useRef();
	const verticalBox = useRef();
	const box1 = useRef();
	const box2 = useRef();
	const box3 = useRef();
	const box4 = useRef();
	const box5 = useRef();
	const sadImage = useRef();
	const path = useRef();

	useGSAP(() => {
		gsap.to(sadImage.current, {
			width: "5em",
			opacity: 1,
			motionPath: {
				path: path.current,
				align: path.current,
				alignOrigin: [0.5, 0.5],
				autoRotate: true,
			},
			scrollTrigger: {
				trigger: headContainer.current,
				start: "start center",
				end: "bottom top",
				scrub: true,
			},
		});

		gsap.to(subContainer.current, {
			scrollTrigger: {
				trigger: mainContainer.current,
				start: "start top",
				end: "bottom+=1100 top",
				// markers: true,
				pin: true,
			},
		});

		let verticalBoxHeight =
			verticalBox.current.getBoundingClientRect().height;
		let TotalBoxesHeight = 0;
		[box1, box2, box3, box4, box5].map((box) => {
			TotalBoxesHeight += box.current.getBoundingClientRect().height;
		});

		gsap.to(verticalBox.current, {
			y: verticalBoxHeight - TotalBoxesHeight,
			scrollTrigger: {
				trigger: verticalBox.current,
				start: "top 0",
				end: "bottom+=900 center",
				// markers: true,
				scrub: true,
			},
		});

		let difference =
			((verticalBoxHeight - TotalBoxesHeight) * -1 + 900) / 5;
		let start = 0;

		let boxes = [box1, box2, box3, box4, box5];

		boxes.forEach((box, index) => {
			const text1 = box.current.querySelector(".text1");
			const text2 = box.current.querySelector(".text2");
			const round = box.current.querySelector(".round");

			ScrollTrigger.create({
				trigger: box.current,
				start: `${start} 210`,
				end: `${start} 210`,
				// markers: true,
				// scrub: true,
				onEnter: () => {
					if (index !== 0) {
						gsap.set(boxes[index - 1].current, {
							opacity: 0.3,
						});
						gsap.set(
							boxes[index - 1].current.querySelector(".round"),
							{
								scale: 1,
								border: "0px",
								duration: 5,
							}
						);
						gsap.set(
							boxes[index - 1].current.querySelector(".text1"),
							{
								fontSize: "2em",
								duration: 3,
							}
						);
						gsap.set(
							boxes[index - 1].current.querySelector(".text2"),
							{
								fontSize: "1.5em",
								duration: 3,
							}
						);
					}
					gsap.set(box.current, {
						opacity: 1,
					});
					gsap.set(round, {
						scale: 2.3,
						border: "3px solid #D2C8FE",
						duration: 1,
					});
					gsap.set(text2, {
						fontSize: "1.6em",
						duration: 3,
					});
					gsap.set(text1, {
						fontSize: "2.2em",
						duration: 3,
					});
				},
				onLeaveBack: () => {
					if (index !== 0) {
						gsap.set(boxes[index - 1].current, {
							opacity: 1,
						});
						gsap.set(
							boxes[index - 1].current.querySelector(".round"),
							{
								scale: 2.3,
								border: "3px solid #D2C8FE",
								duration: 1,
							}
						);
						gsap.set(
							boxes[index - 1].current.querySelector(".text1"),
							{
								fontSize: "2.2em",
								duration: 3,
							}
						);
						gsap.set(
							boxes[index - 1].current.querySelector(".text2"),
							{
								fontSize: "1.6em",
								duration: 3,
							}
						);
					}
					gsap.set(box.current, {
						opacity: 0.3,
					});
					gsap.set(round, {
						scale: 1,
						border: "0px",
						duration: 1,
					});
					gsap.set(text2, {
						fontSize: "1.5em",
						duration: 3,
					});
					gsap.set(text1, {
						fontSize: "2em",
						duration: 3,
					});
				},
			});

			start += difference;
		});
	});

	return (
		<Box
			ref={mainContainer}
			borderRadius={"10px"}
			overflow={"hidden"}
			height={"100vh"}
			fontSize={"10px"}
			p={{ base: "1em", md: "4em" }}
		>
			<Flex ref={subContainer} flexDirection="column" alignItems="center">
				{/* Heading */}
				<Box ref={headContainer} width="100%" position={"relative"}>
					<Text
						fontSize={{ base: "1.5em", md: "1.75em", xl: "2em" }}
						fontWeight={500}
					>
						Wrong with self-improvment how we are fixing it.
					</Text>
					<Text
						fontSize={{ base: "2em", md: "3.5em", xl: "5em" }}
						fontWeight={600}
					>
						Self-improvement. ugh.
					</Text>
					<Box position={"absolute"} top={"3em"} right={"2em"}>
						<Icon
							width="53em"
							height="30em"
							viewBox="0 0 241 105"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								ref={path}
								d="M209.5 145.5C215.5 -3.49995 -0.999899 0.500053 1.0001 1.49993"
							/>
						</Icon>
						<Box w={"2em"} opacity="0.5" ref={sadImage}>
							<Image
								src={SadImage}
								alt="sad-image"
								width={"100%"}
							/>
						</Box>
					</Box>
				</Box>

				{/* Vertical scroll section*/}
				<Flex
					justifyContent={"center"}
					width="100%"
					h={"40em"}
					mt={{ base: "2em", md: "2em", xl: "5em" }}
					pt={"1em"}
					overflow={"hidden"}
				>
					<Flex
						ref={verticalBox}
						flexDirection={"column"}
						w={{ base: "90%", md: "70%", xl: "50%" }}
					>
						{/* Box-1 */}

						<Box
							position={"relative"}
							id="box1"
							ref={box1}
							opacity={0.3}
							paddingLeft={{ base: "2em", md: "3em", xl: "5em" }}
							paddingBottom={{
								base: "2em",
								md: "3em",
								xl: "5em",
							}}
							borderLeft={"3px solid"}
							style={{
								borderImage:
									"linear-gradient(to bottom, #6343F0,#6343F050) 1",
							}}
						>
							<Text
								className="text1"
								fontSize={{
									base: "1.7em",
									md: "2em",
								}}
								fontWeight={500}
							>
								It&apos;s not as easy as 1-2-3
							</Text>
							<Text
								className="text2"
								fontSize={{
									base: "1.25em",
									md: "1.5em",
								}}
								fontWeight={500}
							>
								The jounery of change may be long, but our
								sessions are quick. We get to the point and tell
								you what you want to know (and nothing else).{" "}
							</Text>
							<Box
								className="round"
								position={"absolute"}
								height={"11px"}
								width={"11px"}
								left={"-0.7em"}
								top={"0%"}
								bg={"#6343F0"}
								borderRadius={"50%"}
							></Box>
						</Box>
						{/* Box-2 */}
						<Box
							position={"relative"}
							id="box2"
							ref={box2}
							opacity={0.3}
							paddingLeft={{ base: "2em", md: "3em", xl: "5em" }}
							paddingBottom={{
								base: "2em",
								md: "2em",
								xl: "5em",
							}}
							borderLeft={"3px solid"}
							style={{
								borderImage:
									"linear-gradient(to bottom, #6343F0,#6343F050) 1",
							}}
						>
							<Text
								className="text1"
								fontSize={{
									base: "1.7em",
									md: "2em",
								}}
								fontWeight={500}
							>
								Old habits are hard to break.
							</Text>
							<Text
								className="text2"
								fontSize={{
									base: "1.25em",
									md: "1.5em",
								}}
								fontWeight={500}
							>
								And bad behaviours die hard. Fortunately, we
								give you great, science- backend techniques to
								use.
							</Text>
							<Box
								className="round"
								position={"absolute"}
								height={"11px"}
								width={"11px"}
								left={"-0.7em"}
								top={"0%"}
								bg={"#6343F0"}
								borderRadius={"50%"}
							></Box>
						</Box>
						{/* Box-3 */}
						<Box
							position={"relative"}
							id="box3"
							ref={box3}
							opacity={0.3}
							paddingLeft={{ base: "2em", md: "3em", xl: "5em" }}
							paddingBottom={{
								base: "2em",
								md: "2em",
								xl: "5em",
							}}
							borderLeft={"3px solid"}
							style={{
								borderImage:
									"linear-gradient(to bottom, #6343F0,#6343F050) 1",
							}}
						>
							<Text
								className="text1"
								fontSize={{
									base: "1.7em",
									md: "2em",
								}}
								fontWeight={500}
							>
								you and your motivation don&apos;t have a
								long-term relationship
							</Text>
							<Text
								className="text2"
								fontSize={{
									base: "1.25em",
									md: "1.5em",
								}}
								fontWeight={500}
							>
								Luckily, we can proactively prepare you for the
								marathon, not just the race. Effective,
								memorable exercises will help tou stick to your
								goals.
							</Text>
							<Box
								className="round"
								position={"absolute"}
								height={"11px"}
								width={"11px"}
								left={"-0.7em"}
								top={"0%"}
								bg={"#6343F0"}
								borderRadius={"50%"}
							></Box>
						</Box>
						{/* Box-4 */}
						<Box
							position={"relative"}
							id="box4"
							ref={box4}
							opacity={0.3}
							paddingLeft={{ base: "2em", md: "3em", xl: "5em" }}
							paddingBottom={{
								base: "2em",
								md: "2em",
								xl: "5em",
							}}
							borderLeft={"3px solid"}
							style={{
								borderImage:
									"linear-gradient(to bottom, #6343F0,#6343F050) 1",
							}}
						>
							<Text
								className="text1"
								fontSize={{
									base: "1.7em",
									md: "2em",
								}}
								fontWeight={500}
							>
								Books just don&apos;t offer practical
							</Text>
							<Text
								className="text2"
								fontSize={{
									base: "1.25em",
									md: "1.5em",
								}}
								fontWeight={500}
							>
								Remember when you learned to ride a bike just by
								reading? yeah, we don&apos;t either. We help you
								take concrete small steps towards your goals.
								learning just a bit, then immediately springing
								into action.
							</Text>
							<Box
								className="round"
								position={"absolute"}
								height={"11px"}
								width={"11px"}
								left={"-0.7em"}
								top={"0%"}
								bg={"#6343F0"}
								borderRadius={"50%"}
							></Box>
						</Box>
						{/* Box-5 */}
						<Box
							position={"relative"}
							id="box5"
							ref={box5}
							opacity={0.3}
							paddingLeft={{ base: "2em", md: "3em", xl: "5em" }}
							paddingBottom={{
								base: "2em",
								md: "2em",
								xl: "5em",
							}}
						>
							<Text
								className="text1"
								fontSize={{
									base: "1.7em",
									md: "2em",
								}}
								fontWeight={500}
							>
								Insipiration is great, but then what.
							</Text>
							<Text
								className="text2"
								fontSize={{
									base: "1.25em",
									md: "1.5em",
								}}
								fontWeight={500}
							>
								We make sure your energy from all the content
								you consume does not fizzle out.
							</Text>
							<Box
								className="round"
								position={"absolute"}
								height={"11px"}
								width={"11px"}
								left={"-0.4em"}
								top={"0%"}
								bg={"#6343F0"}
								borderRadius={"50%"}
							></Box>
						</Box>
					</Flex>
				</Flex>

				{/* Box */}
			</Flex>
		</Box>
	);
};

export default SelfImprovement;
