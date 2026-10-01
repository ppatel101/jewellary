import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  {
    name: 'logo.png',
    url: 'https://lh3.googleusercontent.com/aida/AEtjO1VIGbzETiyDGlwnVLeSMvyxI59-Bh7en4atEB7g7jauf-_yU1Fpz1gqUB5f4Mqo6PTBk_jcdlrLKVmcHuYnE8KMwNtOrfMlGmLItokCzzOznT_xWJOPJCSHLs-JrH2CaK2dkWju2DouG_eW04UcX1ChCG_Z4ofccSjrkLFvOwHRVp1Eh0UIFVCAgAtGLwicTi9mP1WB6LfqDDDueJWQtcQqCdrx15ywEbA7WaisVu3pYoSTGfoEqhF6_U7x',
  },
  {
    name: 'hero-muse.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs4623XD2xQzbNuyhUY2Zq9evqJ5NmBti4JiT5mscfdSR8sW5HMR6b18LcgghnFroEcH7-vHCMjeSzE1IZvV1VEaRsTim_3zv-JOCb4MX_baQ4lVyi5kIS3Kbemr38vylylE3ovRK9c4f6GBZ7Fcvb-e79waOHUgkxvu2RC1zaA5b24S6MXQSIx5gXVROcyp5fijPR65A0ZX0LmFG2BWFYgFzzmXIVt-BcD0ulQk43WfO05z-ZbcGSEA',
  },
  {
    name: 'cat-rings.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_H5LdtdjkxceW-s5xAXICruxOkTPtM85WXoWk1Julh1H08qU-94DJrdWarz9Ov54Qpba2JF00vP-MOMO2ZItzs1nXxGzPi2aspA17LtHqy5PW-PbvxxlnDTgNS0DfsmP8bonb-4Xk_dWS_8hb8pHrxbhoDTrIsotnzJnKDS7AF6YVH5ZLiCkd4t6_VxIulHyPw84qK9RzEx744lmCk0Aiu_Cda15zEfj6yvCq7sYi8bddtPw5y-22Fg',
  },
  {
    name: 'cat-necklaces.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn95MLuh8cNByVwE8ylXV5fF6Q5452WaH64NRdxgyfMNtqBW7HzYkJp8nC24jAGhYjVzDjPnv_WTrjk9ahtt4_iui7X6Bd8CD0F_86XIi2Bel7GvcQLEBwFLZmYMA3APHk01AX7oCOKbLrkAXcQw62VI6EF7j6od1bYR8EpZjz0UR6-z-EIb0lBVIeRSkJfJSHkx3ZNjXDNWMRBW1iSpaGY8O0DsZrNRQH7ohC5WdqVb_PnKgqgPlh5Q',
  },
  {
    name: 'cat-earrings.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd2ndYzjcA22vpvit4kn0U5HE_1fJquNggd5zLE0wwdzGVoUqZ4xoMR75cxcgLEoNXMZvKbeAdjixGERSyr9z0rvCknVMtkFajf1tVKRikAhsgYshaSRzwwJRmOlSi4XAo_y8Obh1mtD8KQmE2IPAUvn-l6d97GienqL-hbMB3fU8MQ-aSjfo2LaLGAfy_BLxcLDQ_LPnHAGUBs5kY9A7XZnTPhTPZsYLPxOsjY8lQ_UHXS8caQGjneA',
  },
  {
    name: 'cat-bracelets.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIBIK9FWtoVGhC7rotDIOIzfXPQC6PiHi_CogZSX3UujJgNX7dTpjWvlaVruDK2QBbCmXTcNzscQMoRh4Rsp5SSU8hsDsMy1KKkiO7tdPzRoqLnIMQAhrOIqTpoJtB0heWVjEv31M4zk_tWQ3vUWWtQlimPf43K5MqVsIg2MJy_886Uf5cYHeLTag9n8LLeDl_MFORai3OSwUIFIZpBQEmDSycoBRfLVclTeyD3eBJ3uZI_ZlrA0gNQw',
  },
  {
    name: 'cat-bridal.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqePY4N9I1F3pGkAkohsybaF8pb1Sc8AmRuySzfhQaKhX6-5_V14jYdJaBfpeqyhBNRO90vTkkLZ7dL6JPoNrtpSx-X45XbMy4eiuKt_bs03uBFFh4BDJGy0xfOh8jirLdCwXkIwTwEW4TxQ81_tqagz_Y_Mu3U2aC83Ke_7vRok412_7ZsWsnbCMK0g02yX3KAnoyhhdHtuQGORHtKwcMnj9BG_LtMqaDNhSJXqNQTUAIQuqpebMhOQ',
  },
  {
    name: 'cat-personalized.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp1lYzVoqGedgzbWQuqmYNe4K3jod54ueO1MIoVmzTKlQB38xYr7bj1fvLqa5H65p5yTNw6zXAhOtZpAFwenc1j-PDWinlZzuDyQkJjUuG6neN1l5QLSeYTdhbc2BKhtq1e2IWdvYVOmp8Nss7Wi1vhp25dRE1879tf7CCw_8fzlApl-MRZaznBC0O1M6cCjEIC_pL0CJOKr8RwV8nue0dBGzg-1lX3dAIcEQNVRrmfFsbp9JEOuD6tA',
  },
  {
    name: 'prod-celeste-diamond-ring.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSCBmgNOp2Rjf-d2L69t5YLxbSE2zsFoRuDYcI9HT6mNf9-G58zaY18-uVIczrjRowBHh9p7mXzY4QCHmll-O2tCAIQqUF41P80ylcMKaHlC8xKalpoygzSPsmVLxUA03ugA0k4OXPGJHYFRm7GADrQZPRkH_kuQr7IAry3fhFK-37FXksQ8dr51xNtJcI3fQA8sajnpClObU5gV3bihzeHBNHvvyXSlY6KH5OPRFpScmX3K60pmMm-Q',
  },
  {
    name: 'prod-aurelia-pearl-necklace.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtb5QZ6CsWBI3SJaXBXcPAfM9rLeUA610x2D8rw_ydlQO3rqm9lCtI3iIvP2Uzqn3mNFDSqBQ9LP85KDvQlEb-O1Ig1wMbpiz7W6ORTZwYEb1t3UuTkZAh-2O9FdvmafbXL8YoQGP6-f4q6SiXmPNAaeyuWVFKHKexHL4aX5pAl5JUxIGXf4NuEtARlR8Szp1LzkzFJheCrWU2RxeSbAzLowQj2U2IosfxIMvBEXwgdoIx4x0LtFwsUg',
  },
  {
    name: 'prod-elan-gold-earrings.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSbe6B38Itey2fvx6GzISaQ8ZLCMZ2oEfRggfrOdgp7exopvDpwc6OjVwm52vdh0_V99CKA-UJDfjj3IXucSiHz1-8kxqlqbw6N6spb8SCvnHf7qksec9YxiOmfWZYkwxvR_A_9ERjbSSCNciKk9dNTgJvif6rCKWWDLO894YpT7U34-wIh_ljqFkOFqBgeOOqbiHlFjzG8dXeutCXIAAlpaJPG6KeVoupz1m-Lvvqq0aUAIo2kgFyBw',
  },
  {
    name: 'prod-luna-tennis-bracelet.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR8D4NT82GrE_jqdhzdgkxDWEHwou9-76F4yy1GXjoEsBubvxDVskKo2tpz6HIKs0VF1GOOzMKGRZYL9OokDGy7QivCXP-eNqHyejJ8wJK_xmGlrAToeGxb-jhyO63UjwK0IxK9TUgUNkBPt1IjRvdYfi9_XqE2gKxT6Bm7YzTnBBw9Tai-8dONz8NXqBwh2TETEXtseYLYbR4-QHG0c5D--ntjE7BtB9S4DjcqPge6WT7u0MnTBRCLQ',
  },
  {
    name: 'prod-amara-solitaire-ring.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Bx5pjSLcFjbmAEfY1f-AL6G6GWYsUIXpt6bcFed-yFQjTJNsKx-BzkvnMIF73lyNK22WB_Xg7q8-JLxYh1uVmBD8wbO7HvLhtLsL4bYt9TAbO-LJ9_N0mqrdX4KhgTbd2DIy1AiLkw0MCybMioMUMu6HfH2PlfmQiW2cwizRgaCDvKqOnx0x9NJMT7Z-_D3PXkbxlA2o1YTPhfoXIBvBRwQ0JjLqGh_x0njui5Xw8jwMKAj44I-IlA',
  },
  {
    name: 'prod-serene-pearl-drops.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiHgPU_k20WomWbNkQev7svS9RBLcsPGli_EkpU-IABowuYyJwQW6CPQ2L-q5TBwSNIIa0BHLVK74nDIZ2-musOFdk067dDi41AU7n-swEyibST2_k7B1O_MTax6E8ZjsPxEESJKEHr8FZhdd3MRa9hSt2dPK1kP8wKkTIn-HsVAcCJBn10eZth_xMTJffuYT0hOwHblpidMORjYKARkJGS2VrzEbwjkSPiYJBLouCCQY9E4GVWRHPdw',
  },
  {
    name: 'banner-everyday-luxury.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw12FO4upnHHSmoHRzOHbKaKxr6WNoSHqB6O3h8CK6s5T2PLYk6bIHH53Xjosn0yR5tTUabLF-Ey121geSC1hUppHnhKbjhhA43J8CqAcBj0F7MM3VglMDMR7WTrX38nk-Sb6IZBK_zPKip-_sSZu3y4sgakGRKw-OmqwmxVdgi-KIy11l4v-nCCoE71MjDVHqaU0K8eokEbm9lTBb7h77TArBKy6X_OT6c4Q-mLO77sqBFz0COg8Hpg',
  },
  {
    name: 'arrival-solstice-moonbeam.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_D3d-s5TcfKAJYfLphf0cn6KX-_0Vj8t78PqOuZ15nce72mCxJT33yQ0splkkF5TNcXS9KeiVisZJND74FiYJKARUvtPzTIbYznHae_x3PfSJX4cjGFgHhIKoXUCxRCuoU7ctElfiricMS1UlSV5B9h54x2WzGPbljh_ANTUp_OwnOxH4TbExCYIarGLKF4DGtrKXufQ6ktDjR3UKWvwjciEubB_DVSu8CA4SuA63uyEzkXfpcQOJNg',
  },
  {
    name: 'arrival-kavya-emerald.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfb4aso42DO4BWnE6u2zIolnDMTOK41WGTF9bejahyZt4ZCUsJYqD3-EGCHZkwk0xuKdfIKL1rxBLCtWVcwQVKHZJce8DoGbt_La9zd2bqP6po-p1B8-NUCJRk8F0pFHaBFb2x9iVelrBSgBSHBveORFnCPAz91tNfhcGtA1K3r-R7iT9jKDtcrTfN70MpQ9YHqrEpxnhwf4oXtRtnU0eI-Vv0aGk2F_nzv6IUskmLX5Ry6UXch9y72w',
  },
  {
    name: 'arrival-devi-heritage.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNkKXPjE8_VtwKl0gc5Vh-mpufh6vrH3ausF-ab-vMVk5j5KwIrTJ4dQhEzGMSEpHyep7WETzJ7hvFMzxqzr6JCC0ysa9FBVB982GSur4A0bIKOZ6L04Z3sRKA7AlAKl1eZsUvqJGVo6WTeyniL7EWhalsc9MF4TU_P1PyIoe29CCJybMMoVMHqTqvDRr4n47IfLPfLRNcf0jwmg-yqMRH1Tb0RW18mVj-tJzgsX9zBvrNpL9jEZ2k5w',
  },
  {
    name: 'arrival-vesper-diamond.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Dm20w9Iaq7lBPkbrqDL9r3Ow7tb_EmOLJw4r0pU8l8NDJkCq5NfYC5jZRWhEkEd5zWIlm8zN19HRhQVvifilO4HrTQK3C4aTZyDPNqZdxL6v_Q8myRkX3C_UseR6U3txrVM-v8w2R0yO_0V0ujh1I7_CFmtXURMdCqcSV1lurLyRe9W3cVnZXAgtq5xeWUn3WAYFaFUmeEG32txNPCoG1CJ0RTYflxLGz1HO6RNtlAZeVydlYoyUgg',
  },
  {
    name: 'artisan-story.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIbJZPqs0N6JR95hSKcMeXrppYbnbxCyEF0zRHT5ns2QHrjqOO2w8A825Z_mtkAMu4LrFxqhirEA2d7UfEhzE3xpiy4nJGzjH_WaEbmatTt2lciaWKNpQBBxPGTCML4FoaylekQJ1gDoGVSuTIHUNApjkLvm3TieyYCBmmiOXjjAYgXX71Zvs6EGRYDylve_we7fer0iZ9W6X-8uBzcNUmWZrxQeAACAmZH465FCUGhzin0FDEMDeoJQ',
  },
  {
    name: 'ig-1.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4C-Tbrx3nKXslY5WKucR4ENj5oEP9qlUGYj37qlO476ptIT-zv2CR40Y_kHvrp6sn7L-3ZptFVBy4kW1l0JUNLgz8qQk1CavUO5yt4k5NHt9MPWrOyVbtZQussiSbtZ6cBG05ZcyYKKiCf6kkulBCEVh4uFFPQf9r8A6HC-63_vecLpdK3pvkDla7-50WNv65-sLAR9lSVQBzz5p7b-Gwu_ljIDxPikkOlGSZXzNnK0bBtBajBpERVA',
  },
  {
    name: 'ig-2.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS7Aeio3qhCMJhjR18LS_3M2vbiIrTSVbiPIcVZxaa3QcEQDmI-gJUrrzw39IyN5yzz1InExcXb9uWddHsrxrA49KwZ5ExpicNmForko7_-OeQCshd8Z3Cl7Qln7fx2VL-smBrB_A2EuoI4Nz0KLTGrSDcXzhWGKKKFD8wyOeO98ErC-ypbadmgGgvFzb8_MwfKkE7UuhZJneSOSis_Wi7XaT05pgj9ay08mTdHFG-Sxavjp-2VajcNQ',
  },
  {
    name: 'ig-3.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg3m51yclbD0TztO9ITlYY5Eh51aE-Gj_0MRU3K4lC15j8jaiTdUK_jQV-AFl_sf3DRj6f5njhlSL_LwLPEVAS5G2ftDytdnTMqOxa7Id1m-qWUTdJrinD4hMxKAX3us9gmfzN8Ps9qIkALKMpNCQNecskmXWrqCziXdj4KpELdxaDF4L4dyLOLgp7NV7vUU6ZHfPlH9HXsWSKlZagbBIG0HVi_JA5bFlDOKtEr24CTrFaqrN7Tbqc1Q',
  },
  {
    name: 'ig-4.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK1kTInTQBC0TRBvNU43dm3YCi9IteW0dnHJLlrqag-kCsWypU8a3S3HM7Y9T5SOpjQmXPGrpeM4BQy0kWPpCdsGBhqVzPV6JYFx4PAKiP4C3Ji8GEaiqGt3sofzMDgpvVEsz3OI3J2A2sdZA8cUeO-Vd-em4jw1OTxv4C98BjlbHkVclKr27LurUA-LMRfjdg_6-iy_MiVU6dWll9QIiANlvthzQF25kliQ__WedUHYak9qttDREudw',
  },
  {
    name: 'ig-5.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuZFCVKhbF6a3gxh6hrXFls0muKFdrqzIo0rPlBoxivxcsz14-mJyhv67CKkZ8cPOX21Hph9G9E4V1FR9n8dbgXMXJklKRFm1CC9arT_KX4RgQZEdJlFvHbqiHZUbIKedlEjTIKHMbpuhBTf9nPOhZZxQUpdJscpvoRCQnw5fIVH7RfFRLx6zBPgkPQoGBPO5Ctu8S9fOvczOJrlVuD5iEHHbKhPWRBiJtVoF90FHTqZttANvE6xNqkA',
  },
  {
    name: 'ig-6.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB9YzMFivu3oFnJ6XeixSvHqh4Z4BPkiOIHpjJZQnXP9BvbFqq9PLkZ0GoeBF2bCf-MkMuiU3VxT3emfHav3ldecOgS16Z-R6_o_H5qYe3C-3yUjTnrk1wS8lkjMH_RoHfiUFXbxiyim3S2YYoRP-RWMFpBpwE_L1FH09gK84fpSAZswP2y3A666ekg9vf9LkQ4TjwleknxdVuy9-WJG893p8h1fvu0wImotsM3BbsCQ7_VlKDogGO8w',
  },
  {
    name: 'modal-preview.webp',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCegKR-ubBlla0mTgQwdB2gspPi_0PxJwWluzhgcAUWWH5-knS-kIg9CKqysxlMrv-8Zee2sjQPoCEVRjHtFkq0HTzqaztx27vztCJEgkmgfJkykEEfVqvpSPMri1CGwuE5WAU6MbHKP-plo4ZeCNbWOucd3imxQ9It1NxgwiB3-RSR0wHmAlykNsgJUXcTv_al-qpabVkRZikN2aCTVNSg2w01jm3_cIuIh1oiWYxgiui-wW6LzRQuxg',
  },
];

const targetDir = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(targetDir, { recursive: true });

async function download(item) {
  const filePath = path.join(targetDir, item.name);
  return new Promise((resolve) => {
    https.get(item.url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Saved ${item.name}`);
          resolve(true);
        });
      } else {
        console.error(`Failed ${item.name}: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error ${item.name}: ${err.message}`);
      resolve(false);
    });
  });
}

for (const item of images) {
  await download(item);
}
console.log('Finished downloading all images');
