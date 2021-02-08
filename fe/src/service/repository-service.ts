import { ITestInterface } from "./service-interface";

const BASE_URL = "http://localhost:5000";

export default class RepositoryService {
  static async getVideo(testId: number): Promise<any> {
    const result: ITestInterface = await fetch(`${BASE_URL}/test/${testId}`)
      .then(response => {
        return response.json();
      })
      .then(jsonData => jsonData)
      .catch(err => {
        console.error(err);
      });

    return result;

    // return new Promise(resolve => {
    //   const test = {
    //     success: true,
    //     result: {
    //       thumbnail: "https://thumbs-east.streamable.com/image/f1vfsq.jpg",
    //       files: [
    //         {
    //           type: "mp4",
    //           width: 1280,
    //           height: 720,
    //           url:
    //             "https://cdn-cf-east.streamable.com/video/mp4/f1vfsq.mp4?Expires=1596040200&Signature=V~w9KLDF7WEYksNSyHvgdFV3azpIQRRQvLqRuCbW-VnGG6ckRvFaLqjSkHen7TE-qDARg9hWA0pbYWl5a~VVUdX4U2tHdTgNAEOrQDfVTZWcW95vcDXBmyH0-lAn-sAmrtNYFRw7hBynEN1XNVvZVthH099sQsz~K-tKt5DkBrbzXIJnvwTRFDWmT55fBOGUFD1A3nCPGuwAS92zLbPnBFN-CPF8y2pW6O79Vhr02G~Gl6OVvyTbetqbcXGivENl6gHFHhjSdAadhwnwJAEk0rVlqnv4U9H-Fm4zmlHwcsE-xY912oLoMNPJZwYA5uYjoNTYj~Uwmw6tDsFe~JQaJw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
    //         },
    //         {
    //           type: "mp4-mobile",
    //           width: 640,
    //           height: 360,
    //           url:
    //             "https://cdn-cf-east.streamable.com/video/mp4-mobile/f1vfsq.mp4?Expires=1596040200&Signature=FdwPek7ZHDJbJ3AVCCnaLSsaeBf~smebExKdn-aq95aK3IcJlvoJ6KagD9hV4dOB87N6DFil2oDhCXllTHb3Rr9BY713XRWJxBAEQ1Nzo9H3HTUSgu~Qn~0QXxpix62v8-mKIeQH02KqYQvYspazz1n~zjLLYITThA0OX64RW3RT55ge3iQhcrzygZFQBC3KruHII3GsqiR4bpIQpNAIGpAKKX-U-rR4pOF4rAMrcBUx-GwZl47tSRiVj6IAIx3wNqBJUB4WY8ipOyhQC6zy9EnnSiws5h7IL-hb773FSd0NtZXgeesNjHt8WkXhzwjNvclqKTh34GqUdupOspNxdg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
    //         },
    //       ],
    //     },
    //   };
    //   resolve(test);
    // });
  }
}
