import {
  FormControl,
  Box,
  Button,
  VStack,
  Flex,
  IconButton,
  Text,
  Icon,
  Input,
  HStack,
  PinInputField,
  PinInput,
  Container,
  Spacer,
  Stack,
  Checkbox,
  Link,
  Select,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  CheckIcon,
  Spinner,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { BsX, BsPhone } from "react-icons/bs";
import { FaMobileAlt, FaUser } from "react-icons/fa";
import "./Register.css";
export const Register = ({
  loading,
  setloading,
  flow,
  setflow,
  user,
  setuser,
  active,
  setActive,
  HandleClose,
}) => {
  const [pin, setPin] = useState(false);
  const [number, setNumber] = useState(false);
  const [Allo, setAllo] = useState(false);
  const [otp, setotp] = useState(0);
  const [sec, setSec] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [roti, setRoti] = useState(0);
  const [button, setbutton] = useState(false);
  const [colorScale, setcolorScale] = useState(false);

  var Timer;
  useEffect(() => {
    if (roti == 1)
      Timer = setTimeout(() => {
        setSec(sec - 1);
        if (sec == 0) {
          setMinutes(minutes - 1);
          setSec(59);
        }
        if (sec == 11 && minutes < 1) {
          setcolorScale(true);
        }
        if (minutes == 0 && sec == 0) {
          setMinutes(0);
          setSec(0);
          setRoti(0);
          setbutton(false);
          setAllo(false);
          setcolorScale(false);

          return;
        }
      }, 1000);

    return () => clearInterval(Timer);
  });

  return (
    <>
      <FormControl zIndex="1000" className={active ? "jaddo active" : "jaddo"}>
        <Stack
          width="800px"
          height="1200px"
          marginLeft="545px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <VStack
            className="Pravobox"
            marginLeft="100px"
            marginTop="100px"
            width="700px"
            height={Allo?"750px":'850px'}
            p="20px 30px"
            bg="white"
          >
            <Text
              color="black"
              position="absolute"
              mt="-6rem"
              ml="-39rem"
              fontSize="30px"
            >
              Login/Signup
            </Text>

            <Flex marginLeft="-550px">
              <Button onClick={HandleClose} fontSize="26px">
                {<BsX />}
              </Button>
            </Flex>
            <Stack display="flex">
              <Flex
                alignItems="center"
                marginTop="20px"
                ml="-250px"
                height="60px"
                gap="20px"
              >
                <Icon fontSize="35px" as={FaMobileAlt} />
                <Flex>
                  <Text fontSize="25px">Login/</Text>
                  <Text fontSize="25px">SignUp Using Phone</Text>
                </Flex>
              </Flex>
            </Stack>
            <InputGroup>
             <Icon ml="20px" mr="10px" fontSize="20px" textAlign="center" mt="10px" as={FaUser}></Icon>
              <Input
             
                placeholder="Enter Username"
                fontSize="20px"
                value={user}
                onChange={(e) => setuser(e.target.value)}
              />
         
            </InputGroup>
            <Stack mt="30px">
              <Flex>
                <Text fontSize="25px">+91</Text>
                <HStack mt="3px" ml="10px">
                  <PinInput onComplete={() => {
                    
                     setNumber(true)}} type="number">
                    <PinInputField
                      fontSize="18px"
                      fontWeight="600"
                      border="2px solid black"
              
                      _focus="disabled"
                    />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                    <PinInputField fontSize="18px" fontWeight="600" />
                  </PinInput>
                  <Button
                    disabled={user == "" || !number}
                    onClick={() => {
                      let x = Math.ceil(10000 * Math.random());
                      let y = 1000;
                      if (x < y) {
                        x = x * 10;
                      } 
                      else if(x<100){
                        x=x*100
                      }
                      else if(x<10){
                        x=x*1000
                      }
                      
                      else {
                        x = x;
                      }
                      setNumber(false);
                      setAllo(true);
                      setotp(x);
                      setRoti(1);
                      setbutton(true);
                      setMinutes(1);
                     
                    }}
                    size="lg"
                
                    bg="pink.400"
                    color="whiteAlpha.800"
                    _hover={{ bg: "black", color: "white" }}
                  >
                    Submit
                  </Button>
                </HStack>
              </Flex>
            </Stack>

            <Flex>
              <Text marginLeft="-250px" mt="20px">
                Enter your phone no to request otp
              </Text>
            </Flex>

            <Box
              marginTop="50px"
              w="100%"
              height="2px"
              bg="blackAlpha.500"
            ></Box>

            <Flex>
              {Allo ? (
                <Alert status="success">
                  <AlertIcon/>
                  <Box>
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                      Your otp has been received,It is{" "}
                      <p style={{ color: "blue", textDecoration: "underline" }}>
                        {otp}
                      </p>
                      .It will valid for Only 1 minute.
                    </AlertDescription>
                  </Box>
                </Alert>
              ) : (
                <Text>Enter Your OtP</Text>
              )}
            </Flex>
            <Flex>
              <HStack ml="-250px">
                <PinInput onComplete={() => setPin(true)} type="otp">
                  <PinInputField
                    fontSize="20px"
                    fontWeight="600"
                    outline="none"
                    bt="none"
                  />
                  <PinInputField fontSize="20px" fontWeight="600" />
                  <PinInputField fontSize="20px" fontWeight="600" />
                  <PinInputField fontSize="20px" fontWeight="600" />
                </PinInput>
              </HStack>
            </Flex>
            <Stack alignSelf="flex-start">
              <Button
                disabled={!pin}
                size="lg"
                bg="pink.400"
                color="whiteAlpha.800"
                _hover={{ bg: "black", color: "white" }}
                onClick={() => {
                  if (user != "") {
                    setflow(true);
                  }
                  setActive(false);
                  setloading(true);
                  setPin(false);
                  setAllo(false);
                  setMinutes(0);
                  setSec(0);
                  setRoti(0);
                  setbutton(false);
                  setAllo(false);
                }}
              >
                Verify otp
              </Button>
              {button ? (
                <h1
                  className={colorScale ? "scale active" : "scale"}
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    letterSpacing: "1.4px",
                    fontSize: "16px",
                  }}
                >
                  {minutes < 10 ? "0" + minutes : minutes}m:
                  {sec < 10 ? "0" + sec : sec}s
                </h1>
              ) : (
                ""
              )}
            </Stack>
            <Stack spacing={5} direction="row" alignSelf="flex-start">
              <Checkbox ml="20px" colorScheme="green" defaultChecked>
                Get Important Updates on Whatsapp
              </Checkbox>
              <Link textDecoration="underline" to="#">
                Term & Condition
              </Link>
            </Stack>

            <Spacer />
            <Text margin="auto" textAlign="center">
              Registering for this site allows you to access your order status
              and history. Just fill in the fields below, and we'll get a new
              account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier
            </Text>
            <Spacer />
            <Stack direction="row">
              <Text>By Signing up or logging in, you agree to our</Text>
              <Link to="#" textDecoration="underline">
                Term & Condition
              </Link>
            </Stack>
          </VStack>
        </Stack>
      </FormControl>
    </>
  );
};
