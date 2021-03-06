# sources.frag - Generated list of source files for FFmpeg (-*- makefile -*-)
#
# Copyright (C) 2014 Intel Corporation
#   Author: Gwenole Beauchesne <gwenole.beauchesne@intel.com>
#
# This library is free software; you can redistribute it and/or
# modify it under the terms of the GNU Lesser General Public License
# as published by the Free Software Foundation; either version 2.1
# of the License, or (at your option) any later version.
#
# This library is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public
# License along with this library; if not, write to the Free
# Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
# Boston, MA 02110-1301 

ffmpeg_source_dirs = \
	doc \
	doc/examples \
	libavcodec \
	libavcodec/x86 \
	libavformat \
	libavutil \
	libavutil/x86 \
	tests \
	$(NULL)

ffmpeg_source_mak = \
	arch.mak \
	common.mak \
	library.mak \
	tests/fate/aac.mak \
	tests/fate/ac3.mak \
	tests/fate/acodec.mak \
	tests/fate/adpcm.mak \
	tests/fate/alac.mak \
	tests/fate/als.mak \
	tests/fate/amrnb.mak \
	tests/fate/amrwb.mak \
	tests/fate/atrac.mak \
	tests/fate/audio.mak \
	tests/fate/avformat.mak \
	tests/fate/bmp.mak \
	tests/fate/cdxl.mak \
	tests/fate/cover-art.mak \
	tests/fate/demux.mak \
	tests/fate/dfa.mak \
	tests/fate/dpcm.mak \
	tests/fate/ea.mak \
	tests/fate/exif.mak \
	tests/fate/ffmpeg.mak \
	tests/fate/ffprobe.mak \
	tests/fate/fft.mak \
	tests/fate/filter-audio.mak \
	tests/fate/filter-video.mak \
	tests/fate/flac.mak \
	tests/fate/gif.mak \
	tests/fate/h264.mak \
	tests/fate/hevc.mak \
	tests/fate/image.mak \
	tests/fate/indeo.mak \
	tests/fate/libavcodec.mak \
	tests/fate/libavdevice.mak \
	tests/fate/libavformat.mak \
	tests/fate/libavresample.mak \
	tests/fate/libavutil.mak \
	tests/fate/libswresample.mak \
	tests/fate/lossless-audio.mak \
	tests/fate/lossless-video.mak \
	tests/fate/microsoft.mak \
	tests/fate/monkeysaudio.mak \
	tests/fate/mp3.mak \
	tests/fate/mpc.mak \
	tests/fate/pcm.mak \
	tests/fate/probe.mak \
	tests/fate/prores.mak \
	tests/fate/qt.mak \
	tests/fate/qtrle.mak \
	tests/fate/real.mak \
	tests/fate/screen.mak \
	tests/fate/seek.mak \
	tests/fate/subtitles.mak \
	tests/fate/utvideo.mak \
	tests/fate/vcodec.mak \
	tests/fate/video.mak \
	tests/fate/voice.mak \
	tests/fate/vorbis.mak \
	tests/fate/vpx.mak \
	tests/fate/vqf.mak \
	tests/fate/wavpack.mak \
	tests/fate/wma.mak \
	$(NULL)

ffmpeg_source_c = \
	libavcodec/ac3tab.c \
	libavcodec/allcodecs.c \
	libavcodec/audioconvert.c \
	libavcodec/avpacket.c \
	libavcodec/avpicture.c \
	libavcodec/bit_depth_template.c \
	libavcodec/bitstream.c \
	libavcodec/bitstream_filter.c \
	libavcodec/cabac.c \
	libavcodec/codec_desc.c \
	libavcodec/dsputil.c \
	libavcodec/dsputil_template.c \
	libavcodec/error_resilience.c \
	libavcodec/faanidct.c \
	libavcodec/flvdec.c \
	libavcodec/fmtconvert.c \
	libavcodec/golomb.c \
	libavcodec/h263.c \
	libavcodec/h263_parser.c \
	libavcodec/h263dec.c \
	libavcodec/h264.c \
	libavcodec/h264_cabac.c \
	libavcodec/h264_cavlc.c \
	libavcodec/h264_direct.c \
	libavcodec/h264_loopfilter.c \
	libavcodec/h264_mb_template.c \
	libavcodec/h264_mc_template.c \
	libavcodec/h264_mp4toannexb_bsf.c \
	libavcodec/h264_parser.c \
	libavcodec/h264_ps.c \
	libavcodec/h264_refs.c \
	libavcodec/h264_sei.c \
	libavcodec/h264addpx_template.c \
	libavcodec/h264chroma.c \
	libavcodec/h264chroma_template.c \
	libavcodec/h264dsp.c \
	libavcodec/h264dsp_template.c \
	libavcodec/h264idct.c \
	libavcodec/h264idct_template.c \
	libavcodec/h264pred.c \
	libavcodec/h264pred_template.c \
	libavcodec/h264qpel.c \
	libavcodec/h264qpel_template.c \
	libavcodec/hevc.c \
	libavcodec/hevc_cabac.c \
	libavcodec/hevc_filter.c \
	libavcodec/hevc_mvs.c \
	libavcodec/hevc_parser.c \
	libavcodec/hevc_ps.c \
	libavcodec/hevc_refs.c \
	libavcodec/hevc_sei.c \
	libavcodec/hevcdsp.c \
	libavcodec/hevcdsp_template.c \
	libavcodec/hevcpred.c \
	libavcodec/hevcpred_template.c \
	libavcodec/hpel_template.c \
	libavcodec/hpeldsp.c \
	libavcodec/hpeldsp_template.c \
	libavcodec/imgconvert.c \
	libavcodec/intelh263dec.c \
	libavcodec/intrax8.c \
	libavcodec/intrax8dsp.c \
	libavcodec/ituh263dec.c \
	libavcodec/jrevdct.c \
	libavcodec/mathtables.c \
	libavcodec/mpeg12.c \
	libavcodec/mpeg12data.c \
	libavcodec/mpeg12dec.c \
	libavcodec/mpeg4audio.c \
	libavcodec/mpeg4video.c \
	libavcodec/mpeg4video_parser.c \
	libavcodec/mpeg4videodec.c \
	libavcodec/mpegaudiodata.c \
	libavcodec/mpegvideo.c \
	libavcodec/mpegvideo_motion.c \
	libavcodec/mpegvideo_parser.c \
	libavcodec/msmpeg4.c \
	libavcodec/msmpeg4data.c \
	libavcodec/msmpeg4dec.c \
	libavcodec/options.c \
	libavcodec/parser.c \
	libavcodec/pthread.c \
	libavcodec/raw.c \
	libavcodec/rawdec.c \
	libavcodec/resample.c \
	libavcodec/resample2.c \
	libavcodec/simple_idct.c \
	libavcodec/simple_idct_template.c \
	libavcodec/timecode.c \
	libavcodec/utils.c \
	libavcodec/vaapi.c \
	libavcodec/vaapi_h264.c \
	libavcodec/vaapi_mpeg.c \
	libavcodec/vaapi_mpeg2.c \
	libavcodec/vaapi_mpeg4.c \
	libavcodec/vaapi_vc1.c \
	libavcodec/vc1.c \
	libavcodec/vc1_parser.c \
	libavcodec/vc1data.c \
	libavcodec/vc1dec.c \
	libavcodec/vc1dsp.c \
	libavcodec/videodsp.c \
	libavcodec/videodsp_template.c \
	libavcodec/vp56rac.c \
	libavcodec/vp8.c \
	libavcodec/vp8_parser.c \
	libavcodec/vp8dsp.c \
	libavcodec/vp9.c \
	libavcodec/vp9dsp.c \
	libavcodec/wmv2dsp.c \
	libavcodec/x86/constants.c \
	libavcodec/x86/dsputil_init.c \
	libavcodec/x86/dsputil_mmx.c \
	libavcodec/x86/dsputil_x86.c \
	libavcodec/x86/fmtconvert_init.c \
	libavcodec/x86/fpel_mmx.c \
	libavcodec/x86/h264_intrapred_init.c \
	libavcodec/x86/h264_qpel.c \
	libavcodec/x86/h264chroma_init.c \
	libavcodec/x86/h264dsp_init.c \
	libavcodec/x86/hpeldsp_init.c \
	libavcodec/x86/hpeldsp_mmx.c \
	libavcodec/x86/hpeldsp_rnd_template.c \
	libavcodec/x86/idct_mmx_xvid.c \
	libavcodec/x86/idct_sse2_xvid.c \
	libavcodec/x86/mpegvideo.c \
	libavcodec/x86/rnd_mmx.c \
	libavcodec/x86/rnd_template.c \
	libavcodec/x86/simple_idct.c \
	libavcodec/x86/vc1dsp_init.c \
	libavcodec/x86/vc1dsp_mmx.c \
	libavcodec/x86/videodsp_init.c \
	libavcodec/x86/vp8dsp_init.c \
	libavcodec/x86/vp9dsp_init.c \
	libavdevice/alldevices.c \
	libavfilter/allfilters.c \
	libavformat/allformats.c \
	libavformat/asf.c \
	libavformat/asfcrypt.c \
	libavformat/asfdec.c \
	libavformat/avidec.c \
	libavformat/avio.c \
	libavformat/aviobuf.c \
	libavformat/avlanguage.c \
	libavformat/cutils.c \
	libavformat/file.c \
	libavformat/flvdec.c \
	libavformat/format.c \
	libavformat/h263dec.c \
	libavformat/h264dec.c \
	libavformat/hevcdec.c \
	libavformat/id3v1.c \
	libavformat/id3v2.c \
	libavformat/isom.c \
	libavformat/ivfdec.c \
	libavformat/m4vdec.c \
	libavformat/matroska.c \
	libavformat/matroskadec.c \
	libavformat/metadata.c \
	libavformat/mov.c \
	libavformat/mov_chan.c \
	libavformat/mpeg.c \
	libavformat/mpegts.c \
	libavformat/mpegvideodec.c \
	libavformat/mux.c \
	libavformat/options.c \
	libavformat/os_support.c \
	libavformat/rawdec.c \
	libavformat/rawvideodec.c \
	libavformat/riff.c \
	libavformat/riffdec.c \
	libavformat/rmsipr.c \
	libavformat/sdp.c \
	libavformat/seek.c \
	libavformat/url.c \
	libavformat/utils.c \
	libavformat/yuv4mpeg.c \
	libavutil/adler32.c \
	libavutil/aes.c \
	libavutil/atomic.c \
	libavutil/audio_fifo.c \
	libavutil/avstring.c \
	libavutil/base64.c \
	libavutil/blowfish.c \
	libavutil/bprint.c \
	libavutil/buffer.c \
	libavutil/channel_layout.c \
	libavutil/cpu.c \
	libavutil/crc.c \
	libavutil/des.c \
	libavutil/dict.c \
	libavutil/error.c \
	libavutil/eval.c \
	libavutil/fifo.c \
	libavutil/file.c \
	libavutil/file_open.c \
	libavutil/float_dsp.c \
	libavutil/frame.c \
	libavutil/hash.c \
	libavutil/hmac.c \
	libavutil/imgutils.c \
	libavutil/intfloat_readwrite.c \
	libavutil/intmath.c \
	libavutil/lfg.c \
	libavutil/lls1.c \
	libavutil/lls2.c \
	libavutil/log.c \
	libavutil/log2_tab.c \
	libavutil/lzo.c \
	libavutil/mathematics.c \
	libavutil/md5.c \
	libavutil/mem.c \
	libavutil/murmur3.c \
	libavutil/opt.c \
	libavutil/parseutils.c \
	libavutil/pixdesc.c \
	libavutil/random_seed.c \
	libavutil/rational.c \
	libavutil/rc4.c \
	libavutil/ripemd.c \
	libavutil/samplefmt.c \
	libavutil/sha.c \
	libavutil/sha512.c \
	libavutil/time.c \
	libavutil/timecode.c \
	libavutil/tree.c \
	libavutil/utils.c \
	libavutil/x86/cpu.c \
	libavutil/x86/float_dsp_init.c \
	libavutil/x86/lls_init.c \
	libavutil/xga_font_data.c \
	libavutil/xtea.c \
	$(NULL)

ffmpeg_source_h = \
	compat/va_copy.h \
	libavcodec/ac3.h \
	libavcodec/ac3tab.h \
	libavcodec/audioconvert.h \
	libavcodec/avcodec.h \
	libavcodec/avfft.h \
	libavcodec/bytestream.h \
	libavcodec/cabac.h \
	libavcodec/cabac_functions.h \
	libavcodec/copy_block.h \
	libavcodec/dct.h \
	libavcodec/diracdsp.h \
	libavcodec/dsputil.h \
	libavcodec/error_resilience.h \
	libavcodec/faandct.h \
	libavcodec/faanidct.h \
	libavcodec/fft.h \
	libavcodec/flv.h \
	libavcodec/fmtconvert.h \
	libavcodec/frame_thread_encoder.h \
	libavcodec/get_bits.h \
	libavcodec/golomb.h \
	libavcodec/h261.h \
	libavcodec/h263.h \
	libavcodec/h263_parser.h \
	libavcodec/h263data.h \
	libavcodec/h264.h \
	libavcodec/h264_mvpred.h \
	libavcodec/h264chroma.h \
	libavcodec/h264data.h \
	libavcodec/h264dsp.h \
	libavcodec/h264idct.h \
	libavcodec/h264pred.h \
	libavcodec/h264qpel.h \
	libavcodec/hevc.h \
	libavcodec/hevcdsp.h \
	libavcodec/hevcpred.h \
	libavcodec/hpeldsp.h \
	libavcodec/imgconvert.h \
	libavcodec/internal.h \
	libavcodec/intrax8.h \
	libavcodec/intrax8dsp.h \
	libavcodec/intrax8huf.h \
	libavcodec/mathops.h \
	libavcodec/mjpegenc.h \
	libavcodec/mpeg12.h \
	libavcodec/mpeg12data.h \
	libavcodec/mpeg4audio.h \
	libavcodec/mpeg4data.h \
	libavcodec/mpeg4video.h \
	libavcodec/mpeg4video_parser.h \
	libavcodec/mpegaudiodata.h \
	libavcodec/mpegvideo.h \
	libavcodec/msmpeg4.h \
	libavcodec/msmpeg4data.h \
	libavcodec/old_codec_ids.h \
	libavcodec/options_table.h \
	libavcodec/parser.h \
	libavcodec/put_bits.h \
	libavcodec/ratecontrol.h \
	libavcodec/raw.h \
	libavcodec/rdft.h \
	libavcodec/rectangle.h \
	libavcodec/rl.h \
	libavcodec/rnd_avg.h \
	libavcodec/simple_idct.h \
	libavcodec/svq3.h \
	libavcodec/thread.h \
	libavcodec/unary.h \
	libavcodec/vaapi.h \
	libavcodec/vaapi_internal.h \
	libavcodec/vc1.h \
	libavcodec/vc1acdata.h \
	libavcodec/vc1data.h \
	libavcodec/vc1dsp.h \
	libavcodec/vdpau_internal.h \
	libavcodec/version.h \
	libavcodec/videodsp.h \
	libavcodec/vp3dsp.h \
	libavcodec/vp56.h \
	libavcodec/vp56dsp.h \
	libavcodec/vp8.h \
	libavcodec/vp8data.h \
	libavcodec/vp8dsp.h \
	libavcodec/vp9.h \
	libavcodec/vp9data.h \
	libavcodec/vp9dsp.h \
	libavcodec/wmv2dsp.h \
	libavcodec/x86/cabac.h \
	libavcodec/x86/constants.h \
	libavcodec/x86/diracdsp_mmx.h \
	libavcodec/x86/dsputil_x86.h \
	libavcodec/x86/h264_i386.h \
	libavcodec/x86/idct_xvid.h \
	libavcodec/x86/mathops.h \
	libavcodec/x86/vc1dsp.h \
	libavcodec/x86/vp56_arith.h \
	libavcodec/xiph.h \
	libavcodec/xvmc_internal.h \
	libavdevice/version.h \
	libavfilter/version.h \
	libavformat/asf.h \
	libavformat/asfcrypt.h \
	libavformat/audiointerleave.h \
	libavformat/avc.h \
	libavformat/avformat.h \
	libavformat/avi.h \
	libavformat/avio.h \
	libavformat/avio_internal.h \
	libavformat/avlanguage.h \
	libavformat/dv.h \
	libavformat/flv.h \
	libavformat/id3v1.h \
	libavformat/id3v2.h \
	libavformat/internal.h \
	libavformat/isom.h \
	libavformat/matroska.h \
	libavformat/metadata.h \
	libavformat/mov_chan.h \
	libavformat/mpeg.h \
	libavformat/mpegts.h \
	libavformat/options_table.h \
	libavformat/os_support.h \
	libavformat/qtpalette.h \
	libavformat/rawdec.h \
	libavformat/rdt.h \
	libavformat/riff.h \
	libavformat/rmsipr.h \
	libavformat/rtp.h \
	libavformat/rtpdec.h \
	libavformat/seek.h \
	libavformat/srtp.h \
	libavformat/url.h \
	libavformat/version.h \
	libavresample/version.h \
	libavutil/adler32.h \
	libavutil/aes.h \
	libavutil/atomic.h \
	libavutil/atomic_gcc.h \
	libavutil/attributes.h \
	libavutil/audio_fifo.h \
	libavutil/avassert.h \
	libavutil/avstring.h \
	libavutil/avutil.h \
	libavutil/base64.h \
	libavutil/blowfish.h \
	libavutil/bprint.h \
	libavutil/bswap.h \
	libavutil/buffer.h \
	libavutil/buffer_internal.h \
	libavutil/channel_layout.h \
	libavutil/colorspace.h \
	libavutil/common.h \
	libavutil/cpu.h \
	libavutil/cpu_internal.h \
	libavutil/crc.h \
	libavutil/des.h \
	libavutil/dict.h \
	libavutil/error.h \
	libavutil/eval.h \
	libavutil/fifo.h \
	libavutil/file.h \
	libavutil/float_dsp.h \
	libavutil/frame.h \
	libavutil/hash.h \
	libavutil/hmac.h \
	libavutil/imgutils.h \
	libavutil/internal.h \
	libavutil/intfloat.h \
	libavutil/intfloat_readwrite.h \
	libavutil/intmath.h \
	libavutil/intreadwrite.h \
	libavutil/lfg.h \
	libavutil/libm.h \
	libavutil/lls1.h \
	libavutil/lls2.h \
	libavutil/log.h \
	libavutil/lzo.h \
	libavutil/mathematics.h \
	libavutil/md5.h \
	libavutil/mem.h \
	libavutil/murmur3.h \
	libavutil/old_pix_fmts.h \
	libavutil/opt.h \
	libavutil/parseutils.h \
	libavutil/pixdesc.h \
	libavutil/pixfmt.h \
	libavutil/random_seed.h \
	libavutil/rational.h \
	libavutil/rc4.h \
	libavutil/ripemd.h \
	libavutil/samplefmt.h \
	libavutil/sha.h \
	libavutil/sha512.h \
	libavutil/time.h \
	libavutil/timecode.h \
	libavutil/timer.h \
	libavutil/timestamp.h \
	libavutil/tree.h \
	libavutil/version.h \
	libavutil/x86/asm.h \
	libavutil/x86/bswap.h \
	libavutil/x86/cpu.h \
	libavutil/x86/emms.h \
	libavutil/x86/intreadwrite.h \
	libavutil/x86/timer.h \
	libavutil/xga_font_data.h \
	libavutil/xtea.h \
	libpostproc/version.h \
	libswresample/version.h \
	libswscale/version.h \
	$(NULL)

ffmpeg_source_asm = \
	libavcodec/x86/deinterlace.asm \
	libavcodec/x86/dsputil.asm \
	libavcodec/x86/fmtconvert.asm \
	libavcodec/x86/fpel.asm \
	libavcodec/x86/h263_loopfilter.asm \
	libavcodec/x86/h264_chromamc.asm \
	libavcodec/x86/h264_chromamc_10bit.asm \
	libavcodec/x86/h264_deblock.asm \
	libavcodec/x86/h264_deblock_10bit.asm \
	libavcodec/x86/h264_idct.asm \
	libavcodec/x86/h264_idct_10bit.asm \
	libavcodec/x86/h264_intrapred.asm \
	libavcodec/x86/h264_intrapred_10bit.asm \
	libavcodec/x86/h264_qpel_10bit.asm \
	libavcodec/x86/h264_qpel_8bit.asm \
	libavcodec/x86/h264_weight.asm \
	libavcodec/x86/h264_weight_10bit.asm \
	libavcodec/x86/hpeldsp.asm \
	libavcodec/x86/mpeg4qpel.asm \
	libavcodec/x86/qpel.asm \
	libavcodec/x86/vc1dsp.asm \
	libavcodec/x86/videodsp.asm \
	libavcodec/x86/vp8dsp.asm \
	libavcodec/x86/vp9dsp.asm \
	libavutil/x86/cpuid.asm \
	libavutil/x86/emms.asm \
	libavutil/x86/float_dsp.asm \
	libavutil/x86/lls.asm \
	libavutil/x86/x86inc.asm \
	libavutil/x86/x86util.asm \
	$(NULL)
